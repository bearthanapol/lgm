const sharp = require('sharp');
const { PNG } = require('pngjs');
const pixelmatch = require('pixelmatch').default || require('pixelmatch');
const fetch = require('node-fetch');

/**
 * Split screenshot into 4x10 grid (40 hero cells)
 * @param {Buffer} imageBuffer - Screenshot buffer
 * @returns {Promise<Array>} - Array of 40 hero image buffers
 */
async function splitScreenshotIntoGrid(imageBuffer) {
  try {
    const image = sharp(imageBuffer);
    const metadata = await image.metadata();
    
    const { width, height } = metadata;
    console.log(`Image dimensions: ${width}x${height}`);
    
    const cellWidth = Math.floor(width / 10);
    const cellHeight = Math.floor(height / 4);
    
    console.log(`Cell dimensions: ${cellWidth}x${cellHeight}`);
    
    const heroCells = [];
    
    // Extract each cell from the grid (4 rows x 10 columns)
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 10; col++) {
        const left = col * cellWidth;
        const top = row * cellHeight;
        
        // Ensure we don't exceed image boundaries
        const extractWidth = Math.min(cellWidth, width - left);
        const extractHeight = Math.min(cellHeight, height - top);
        
        // Skip if dimensions are invalid
        if (extractWidth <= 0 || extractHeight <= 0) {
          console.warn(`Skipping cell at row ${row + 1}, col ${col + 1} - invalid dimensions`);
          continue;
        }
        
        // Extract original size cell
        const cellBuffer = await sharp(imageBuffer)
          .extract({
            left: Math.floor(left),
            top: Math.floor(top),
            width: Math.floor(extractWidth),
            height: Math.floor(extractHeight)
          })
          .png()
          .toBuffer();
        
        heroCells.push({
          buffer: cellBuffer,
          originalWidth: extractWidth,
          originalHeight: extractHeight,
          position: row * 10 + col + 1,
          row: row + 1,
          col: col + 1
        });
      }
    }
    
    console.log(`Successfully extracted ${heroCells.length} cells`);
    return heroCells;
  } catch (error) {
    console.error('Error splitting screenshot:', error);
    console.error('Error details:', error.message);
    throw new Error('Failed to split screenshot into grid: ' + error.message);
  }
}

/**
 * Download image from URL and convert to buffer
 * @param {string} imageUrl - URL of the image
 * @returns {Promise<Buffer>} - Image buffer
 */
async function downloadImage(imageUrl) {
  try {
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to download image: ${response.statusText}`);
    }
    const arrayBuffer = await response.arrayBuffer();
    return Buffer.from(arrayBuffer);
  } catch (error) {
    console.error('Error downloading image:', error);
    return null;
  }
}

/**
 * Compare two images using pixelmatch
 * @param {Buffer} img1Buffer - First image buffer
 * @param {Buffer} img2Buffer - Second image buffer
 * @returns {Promise<number>} - Similarity score (0-1, higher is more similar)
 */
async function compareImages(img1Buffer, img2Buffer, compareSize = 100) {
  try {
    // Resize both images to same size for comparison
    // Using smaller size makes comparison faster
    const img1 = await sharp(img1Buffer)
      .resize(compareSize, compareSize, { fit: 'fill' })
      .raw()
      .toBuffer({ resolveWithObject: true });
    
    const img2 = await sharp(img2Buffer)
      .resize(compareSize, compareSize, { fit: 'fill' })
      .raw()
      .toBuffer({ resolveWithObject: true });
    
    // Calculate difference
    const diff = pixelmatch(
      img1.data,
      img2.data,
      null,
      compareSize,
      compareSize,
      { threshold: 0.1 }
    );
    
    // Convert to similarity score (0-1)
    const totalPixels = compareSize * compareSize;
    const similarity = 1 - (diff / totalPixels);
    
    return similarity;
  } catch (error) {
    console.error('Error comparing images:', error);
    return 0;
  }
}

/**
 * Match a hero cell against all heroes in database
 * @param {Buffer} cellBuffer - Hero cell image buffer
 * @param {Array} heroDatabase - Array of hero objects with images
 * @returns {Promise<Object>} - Best match result
 */
async function matchHeroCell(cellBuffer, heroDatabase) {
  let bestMatch = {
    heroName: 'Unknown',
    heroId: null,
    similarity: 0,
    matchedImageUrl: null
  };
  
  for (const hero of heroDatabase) {
    const heroImageUrl = hero.imageUrl || hero.heroPicture;
    if (!heroImageUrl) continue;
    
    try {
      const heroImageBuffer = await downloadImage(heroImageUrl);
      if (!heroImageBuffer) continue;
      
      const similarity = await compareImages(cellBuffer, heroImageBuffer);
      
      if (similarity > bestMatch.similarity) {
        bestMatch = {
          heroName: hero.name || hero.heroname,
          heroId: hero._id,
          rarity: hero.rarity,
          similarity: similarity,
          matchedImageUrl: heroImageUrl
        };
      }
    } catch (error) {
      console.error(`Error matching hero ${hero.name}:`, error);
    }
  }
  
  return bestMatch;
}

/**
 * Process screenshot and match all heroes
 * @param {Buffer} screenshotBuffer - Screenshot buffer
 * @param {Array} heroDatabase - Array of hero objects
 * @param {number} minSimilarity - Minimum similarity threshold (default 0.6)
 * @returns {Promise<Array>} - Array of matched heroes
 */
async function processScreenshotAndMatch(screenshotBuffer, heroDatabase, minSimilarity = 0.6) {
  try {
    console.log('Splitting screenshot into grid...');
    const heroCells = await splitScreenshotIntoGrid(screenshotBuffer);
    console.log(`Extracted ${heroCells.length} hero cells`);
    
    console.log('Matching heroes against database...');
    const matchedHeroes = [];
    
    for (let i = 0; i < heroCells.length; i++) {
      const cell = heroCells[i];
      console.log(`Matching cell ${i + 1}/${heroCells.length}...`);
      
      const match = await matchHeroCell(cell.buffer, heroDatabase);
      
      // Only include matches above threshold
      if (match.similarity >= minSimilarity) {
        matchedHeroes.push({
          position: cell.position,
          row: cell.row,
          col: cell.col,
          heroName: match.heroName,
          heroId: match.heroId,
          rarity: match.rarity,
          similarity: match.similarity,
          matchedImageUrl: match.matchedImageUrl
        });
      } else {
        matchedHeroes.push({
          position: cell.position,
          row: cell.row,
          col: cell.col,
          heroName: 'Unknown',
          heroId: null,
          rarity: null,
          similarity: match.similarity,
          matchedImageUrl: null
        });
      }
    }
    
    console.log(`Matching complete. Found ${matchedHeroes.filter(h => h.heroName !== 'Unknown').length} heroes`);
    
    return matchedHeroes;
  } catch (error) {
    console.error('Error processing screenshot:', error);
    throw error;
  }
}

module.exports = {
  splitScreenshotIntoGrid,
  compareImages,
  matchHeroCell,
  processScreenshotAndMatch,
  downloadImage
};
