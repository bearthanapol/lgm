const express = require('express');
const multer = require('multer');
const router = express.Router();
const sharp = require('sharp');
const path = require('path');
const fs = require('fs').promises;
const { getAllHeroes } = require('./heroModel');
const { compareImages, downloadImage } = require('./imageMatching');

// Configure multer
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }
});

/**
 * POST /api/debug/split-grid - Debug endpoint to visualize grid splitting
 */
router.post('/split-grid', upload.single('screenshot'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, error: 'No file provided' });
    }

    const image = sharp(req.file.buffer);
    const metadata = await image.metadata();
    const { width, height } = metadata;

    console.log(`Image: ${width}x${height}`);

    // Calculate cell dimensions
    const cellWidth = Math.floor(width / 10);
    const cellHeight = Math.floor(height / 4);

    console.log(`Cell: ${cellWidth}x${cellHeight}`);

    // Draw grid lines on the image
    const svgOverlay = `
      <svg width="${width}" height="${height}">
        ${Array.from({ length: 11 }, (_, i) => `<line x1="${i * cellWidth}" y1="0" x2="${i * cellWidth}" y2="${height}" stroke="lime" stroke-width="2"/>`).join('')}
        ${Array.from({ length: 5 }, (_, i) => `<line x1="0" y1="${i * cellHeight}" x2="${width}" y2="${i * cellHeight}" stroke="lime" stroke-width="2"/>`).join('')}
      </svg>
    `;

    // Create output with grid overlay
    const outputBuffer = await image
      .composite([{
        input: Buffer.from(svgOverlay),
        top: 0,
        left: 0
      }])
      .png()
      .toBuffer();

    // Get heroes from database for matching
    const heroDatabase = await getAllHeroes();
    console.log(`\n========================================`);
    console.log(`Loaded ${heroDatabase.length} heroes for matching:`);
    heroDatabase.forEach((hero, index) => {
      console.log(`  ${index + 1}. ${hero.name || hero.heroname} (${hero.rarity}) - ${hero.imageUrl || hero.heroPicture || 'NO IMAGE'}`);
    });
    console.log(`========================================\n`);

    // Extract all cells and match with heroes
    const cells = [];
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 10; col++) {
        const left = col * cellWidth;
        const top = row * cellHeight;
        const extractWidth = Math.min(cellWidth, width - left);
        const extractHeight = Math.min(cellHeight, height - top);

        if (extractWidth > 0 && extractHeight > 0) {
          const cellBuffer = await sharp(req.file.buffer)
            .extract({
              left: Math.floor(left),
              top: Math.floor(top),
              width: Math.floor(extractWidth),
              height: Math.floor(extractHeight)
            })
            .png()
            .toBuffer();

          // Match this cell against heroes
          let bestMatch = {
            heroName: 'Unknown',
            similarity: 0,
            heroImageUrl: null
          };

          const MATCH_THRESHOLD = 0.90; // 90% similarity required

          console.log(`\n--- Matching Cell ${row * 10 + col + 1} (R${row + 1}C${col + 1}) ---`);

          if (heroDatabase.length > 0) {
            for (const hero of heroDatabase) {
              const heroImageUrl = hero.imageUrl || hero.heroPicture;
              if (!heroImageUrl) {
                console.log(`  ⚠️  ${hero.name || hero.heroname}: No image URL`);
                continue;
              }

              try {
                const heroImageBuffer = await downloadImage(heroImageUrl);
                if (!heroImageBuffer) {
                  console.log(`  ❌ ${hero.name || hero.heroname}: Failed to download image`);
                  continue;
                }

                const similarity = await compareImages(cellBuffer, heroImageBuffer, 100);
                const similarityPercent = (similarity * 100).toFixed(2);
                
                console.log(`  ${similarity >= MATCH_THRESHOLD ? '✅' : '  '} ${hero.name || hero.heroname}: ${similarityPercent}%`);

                if (similarity > bestMatch.similarity) {
                  bestMatch = {
                    heroName: hero.name || hero.heroname,
                    rarity: hero.rarity,
                    similarity: similarity,
                    heroImageUrl: heroImageUrl
                  };
                }
              } catch (error) {
                console.error(`  ❌ ${hero.name || hero.heroname}: Error - ${error.message}`);
              }
            }
            
            // Only accept match if above threshold
            if (bestMatch.similarity < MATCH_THRESHOLD) {
              console.log(`  ⚠️  Best match: ${bestMatch.heroName} (${(bestMatch.similarity * 100).toFixed(2)}%) - BELOW THRESHOLD`);
              bestMatch.heroName = 'Unknown';
              bestMatch.heroImageUrl = null;
            } else {
              console.log(`  🎯 MATCHED: ${bestMatch.heroName} (${(bestMatch.similarity * 100).toFixed(2)}%)`);
            }
          } else {
            console.log(`  ⚠️  No heroes in database`);
          }

          cells.push({
            position: row * 10 + col + 1,
            row: row + 1,
            col: col + 1,
            dimensions: { width: extractWidth, height: extractHeight },
            base64: cellBuffer.toString('base64'),
            match: bestMatch
          });
        }
      }
    }
    
    console.log(`Matched ${cells.filter(c => c.match.heroName !== 'Unknown').length} heroes`);

    res.json({
      success: true,
      data: {
        originalDimensions: { width, height },
        cellDimensions: { width: cellWidth, height: cellHeight },
        gridOverlay: outputBuffer.toString('base64'),
        extractedCells: cells.slice(0, 10), // First 10 cells as examples
        totalCells: cells.length,
        heroDatabase: heroDatabase.map(h => ({
          name: h.name || h.heroname,
          rarity: h.rarity,
          imageUrl: h.imageUrl || h.heroPicture
        }))
      }
    });

  } catch (error) {
    console.error('Debug error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
