const sharp = require('sharp');
const Tesseract = require('tesseract.js');

/**
 * Detect grid lines in the screenshot using edge detection
 * This helps handle different resolutions from various devices
 * @param {Buffer} imageBuffer - Screenshot buffer
 * @returns {Promise<Object>} - Grid information {rows, cols, cellWidth, cellHeight}
 */
async function detectGrid(imageBuffer) {
  try {
    const image = sharp(imageBuffer);
    const metadata = await image.metadata();
    const { width, height } = metadata;
    
    console.log(`Image dimensions: ${width}x${height}`);
    
    // For now, we'll use a simple approach: assume 4x10 grid
    // But calculate based on aspect ratio to handle different resolutions
    const cellWidth = Math.floor(width / 10);
    const cellHeight = Math.floor(height / 4);
    
    return {
      width,
      height,
      rows: 4,
      cols: 10,
      cellWidth,
      cellHeight
    };
  } catch (error) {
    console.error('Error detecting grid:', error);
    throw new Error('Failed to detect grid: ' + error.message);
  }
}

/**
 * Extract hero name area from a cell
 * The name is typically at the bottom of the cell with black background and white text
 * @param {Buffer} cellBuffer - Single hero cell buffer
 * @param {number} cellWidth - Width of the cell
 * @param {number} cellHeight - Height of the cell
 * @returns {Promise<Buffer>} - Name area buffer
 */
async function extractNameArea(cellBuffer, cellWidth, cellHeight) {
  try {
    // Hero name is typically in the bottom 15-20% of the cell
    // with black background and white text
    const nameHeight = Math.floor(cellHeight * 0.18); // 18% of cell height
    const nameTop = cellHeight - nameHeight;
    
    // Extract the name area
    const nameBuffer = await sharp(cellBuffer)
      .extract({
        left: 0,
        top: Math.floor(nameTop),
        width: Math.floor(cellWidth),
        height: Math.floor(nameHeight)
      })
      // Increase contrast to help OCR
      .normalize()
      // Convert to grayscale
      .grayscale()
      // Increase size for better OCR
      .resize({
        width: Math.floor(cellWidth * 2),
        height: Math.floor(nameHeight * 2),
        kernel: sharp.kernel.lanczos3
      })
      // Threshold to get pure black and white
      .threshold(128)
      .png()
      .toBuffer();
    
    return nameBuffer;
  } catch (error) {
    console.error('Error extracting name area:', error);
    throw new Error('Failed to extract name area: ' + error.message);
  }
}

/**
 * Perform OCR on the name area to extract hero name
 * @param {Buffer} nameBuffer - Name area buffer
 * @returns {Promise<string>} - Extracted hero name
 */
async function performOCR(nameBuffer) {
  try {
    const { data: { text } } = await Tesseract.recognize(
      nameBuffer,
      'eng',
      {
        logger: m => {
          if (m.status === 'recognizing text') {
            console.log(`OCR Progress: ${Math.round(m.progress * 100)}%`);
          }
        },
        tessedit_char_whitelist: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ',
        tessedit_pageseg_mode: Tesseract.PSM.SINGLE_LINE
      }
    );
    
    // Clean up the text
    const cleanedText = text
      .trim()
      .replace(/[^a-zA-Z\s]/g, '') // Remove non-letter characters
      .replace(/\s+/g, ' '); // Normalize spaces
    
    console.log(`OCR Result: "${cleanedText}"`);
    return cleanedText;
  } catch (error) {
    console.error('Error performing OCR:', error);
    return '';
  }
}

/**
 * Match OCR result with database heroes
 * Uses fuzzy matching to handle OCR errors
 * @param {string} ocrText - Text from OCR
 * @param {Array} heroDatabase - Array of hero objects from database
 * @returns {Object} - Matched hero or null
 */
function matchHeroByName(ocrText, heroDatabase) {
  if (!ocrText || ocrText.length < 2) {
    return null;
  }
  
  const ocrLower = ocrText.toLowerCase();
  
  // Try exact match first
  for (const hero of heroDatabase) {
    const heroName = (hero.name || hero.heroname || '').toLowerCase();
    if (heroName === ocrLower) {
      console.log(`✓ Exact match: "${ocrText}" → "${hero.name || hero.heroname}"`);
      return hero;
    }
  }
  
  // Try partial match (OCR text contains hero name or vice versa)
  for (const hero of heroDatabase) {
    const heroName = (hero.name || hero.heroname || '').toLowerCase();
    if (heroName.includes(ocrLower) || ocrLower.includes(heroName)) {
      console.log(`✓ Partial match: "${ocrText}" → "${hero.name || hero.heroname}"`);
      return hero;
    }
  }
  
  // Try fuzzy match using Levenshtein distance
  let bestMatch = null;
  let bestScore = 0;
  
  for (const hero of heroDatabase) {
    const heroName = (hero.name || hero.heroname || '').toLowerCase();
    const similarity = calculateSimilarity(ocrLower, heroName);
    
    if (similarity > bestScore && similarity > 0.6) { // 60% similarity threshold
      bestScore = similarity;
      bestMatch = hero;
    }
  }
  
  if (bestMatch) {
    console.log(`✓ Fuzzy match: "${ocrText}" → "${bestMatch.name || bestMatch.heroname}" (${Math.round(bestScore * 100)}%)`);
    return bestMatch;
  }
  
  console.log(`✗ No match found for: "${ocrText}"`);
  return null;
}

/**
 * Calculate similarity between two strings using Levenshtein distance
 * @param {string} str1 - First string
 * @param {string} str2 - Second string
 * @returns {number} - Similarity score (0-1)
 */
function calculateSimilarity(str1, str2) {
  const longer = str1.length > str2.length ? str1 : str2;
  const shorter = str1.length > str2.length ? str2 : str1;
  
  if (longer.length === 0) {
    return 1.0;
  }
  
  const editDistance = levenshteinDistance(longer, shorter);
  return (longer.length - editDistance) / longer.length;
}

/**
 * Calculate Levenshtein distance between two strings
 * @param {string} str1 - First string
 * @param {string} str2 - Second string
 * @returns {number} - Edit distance
 */
function levenshteinDistance(str1, str2) {
  const matrix = [];
  
  for (let i = 0; i <= str2.length; i++) {
    matrix[i] = [i];
  }
  
  for (let j = 0; j <= str1.length; j++) {
    matrix[0][j] = j;
  }
  
  for (let i = 1; i <= str2.length; i++) {
    for (let j = 1; j <= str1.length; j++) {
      if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1,     // insertion
          matrix[i - 1][j] + 1      // deletion
        );
      }
    }
  }
  
  return matrix[str2.length][str1.length];
}

/**
 * Process screenshot using OCR-based hero recognition
 * @param {Buffer} screenshotBuffer - Screenshot buffer
 * @param {Array} heroDatabase - Array of hero objects from database
 * @returns {Promise<Array>} - Array of recognized heroes
 */
async function processScreenshotWithOCR(screenshotBuffer, heroDatabase) {
  try {
    console.log('\n=== Starting OCR-based Hero Recognition ===\n');
    
    // Step 1: Detect grid
    console.log('Step 1: Detecting grid...');
    const grid = await detectGrid(screenshotBuffer);
    console.log(`Grid detected: ${grid.rows}x${grid.cols}, Cell size: ${grid.cellWidth}x${grid.cellHeight}\n`);
    
    // Step 2: Extract all cells
    console.log('Step 2: Extracting hero cells...');
    const heroCells = [];
    
    for (let row = 0; row < grid.rows; row++) {
      for (let col = 0; col < grid.cols; col++) {
        const left = col * grid.cellWidth;
        const top = row * grid.cellHeight;
        
        const cellBuffer = await sharp(screenshotBuffer)
          .extract({
            left: Math.floor(left),
            top: Math.floor(top),
            width: Math.floor(grid.cellWidth),
            height: Math.floor(grid.cellHeight)
          })
          .png()
          .toBuffer();
        
        heroCells.push({
          buffer: cellBuffer,
          position: row * grid.cols + col + 1,
          row: row + 1,
          col: col + 1
        });
      }
    }
    
    console.log(`Extracted ${heroCells.length} cells\n`);
    
    // Step 3: Process each cell with OCR
    console.log('Step 3: Performing OCR on each cell...\n');
    const recognizedHeroes = [];
    
    for (let i = 0; i < heroCells.length; i++) {
      const cell = heroCells[i];
      console.log(`--- Processing Cell ${cell.position} (R${cell.row}C${cell.col}) ---`);
      
      try {
        // Extract name area
        const nameBuffer = await extractNameArea(
          cell.buffer,
          grid.cellWidth,
          grid.cellHeight
        );
        
        // Perform OCR
        const heroName = await performOCR(nameBuffer);
        
        // Match with database
        const matchedHero = matchHeroByName(heroName, heroDatabase);
        
        if (matchedHero) {
          recognizedHeroes.push({
            position: cell.position,
            row: cell.row,
            col: cell.col,
            heroName: matchedHero.name || matchedHero.heroname,
            rarity: matchedHero.rarity,
            ocrText: heroName,
            confidence: 'high'
          });
        } else {
          recognizedHeroes.push({
            position: cell.position,
            row: cell.row,
            col: cell.col,
            heroName: 'Unknown',
            rarity: 'Unknown',
            ocrText: heroName,
            confidence: 'none'
          });
        }
      } catch (error) {
        console.error(`Error processing cell ${cell.position}:`, error.message);
        recognizedHeroes.push({
          position: cell.position,
          row: cell.row,
          col: cell.col,
          heroName: 'Error',
          rarity: 'Unknown',
          ocrText: '',
          confidence: 'none'
        });
      }
      
      console.log('');
    }
    
    const successCount = recognizedHeroes.filter(h => h.heroName !== 'Unknown' && h.heroName !== 'Error').length;
    console.log(`\n=== Recognition Complete: ${successCount}/${heroCells.length} heroes recognized ===\n`);
    
    return recognizedHeroes;
  } catch (error) {
    console.error('Error in OCR processing:', error);
    throw error;
  }
}

module.exports = {
  processScreenshotWithOCR,
  detectGrid,
  extractNameArea,
  performOCR,
  matchHeroByName
};
