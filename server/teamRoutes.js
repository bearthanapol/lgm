const express = require('express');
const multer = require('multer');
const router = express.Router();
const { processScreenshotAndMatch } = require('./imageMatching');
const { processScreenshotWithOCR } = require('./heroRecognitionOCR');
const { getAllHeroes } = require('./heroModel');
const { saveUserTeam, getUserTeam, getHeroStatistics, searchTeamsByHeroes } = require('./userTeamModel');



// Configure multer for memory storage
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.startsWith('image/')) {
      return cb(new Error('Only image files are allowed'), false);
    }
    cb(null, true);
  }
});

/**
 * POST /api/team/recognize - Recognize heroes from uploaded image
 */
router.post('/recognize', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        error: 'No image provided'
      });
    }

    console.log('Processing image for hero recognition...');

    // Get all heroes from database
    const heroDatabase = await getAllHeroes();
    console.log(`Loaded ${heroDatabase.length} heroes from database`);

    if (heroDatabase.length === 0) {
      return res.json({
        success: true,
        heroes: [],
        message: 'No heroes in database. Please add heroes first.'
      });
    }

    // Check if user wants to use OCR method
    const useOCR = req.body.useOCR !== 'false';

    let matchedHeroes;

    if (useOCR) {
      console.log('Using OCR-based recognition...');
      matchedHeroes = await processScreenshotWithOCR(
        req.file.buffer,
        heroDatabase
      );
    } else {
      console.log('Using pixel-matching recognition...');
      matchedHeroes = await processScreenshotAndMatch(
        req.file.buffer,
        heroDatabase,
        0.90
      );
    }

    // Format heroes for frontend
    const heroes = matchedHeroes.map((hero, index) => ({
      name: hero.heroName || 'Unknown',
      starLevel: hero.starLevel || 0,
      rarity: hero.rarity || '',
      imageUrl: hero.imageUrl || `/images/heroes/${encodeURIComponent(hero.heroName || 'default')}.jpg`,
      position: index + 1
    }));

    res.json({
      success: true,
      heroes: heroes,
      message: `Recognized ${heroes.filter(h => h.name !== 'Unknown').length} heroes`
    });

  } catch (error) {
    console.error('Error recognizing heroes:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to recognize heroes'
    });
  }
});

/**
 * POST /api/team/upload - Upload screenshot and match heroes
 */
router.post('/upload', upload.single('screenshot'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        error: 'No screenshot provided'
      });
    }

    const { username } = req.body;
    if (!username) {
      return res.status(400).json({
        success: false,
        error: 'Username is required'
      });
    }

    console.log(`Processing screenshot for user: ${username}`);

    // Get all heroes from database
    const heroDatabase = await getAllHeroes();
    console.log(`Loaded ${heroDatabase.length} heroes from database`);

    if (heroDatabase.length === 0) {
      return res.status(400).json({
        success: false,
        error: 'No heroes in database. Please add heroes first.'
      });
    }

    // Check if user wants to use OCR method (default: true)
    const useOCR = req.body.useOCR !== 'false'; // Default to OCR method

    let matchedHeroes;

    if (useOCR) {
      console.log('Using OCR-based recognition...');
      // Process screenshot with OCR (new method)
      matchedHeroes = await processScreenshotWithOCR(
        req.file.buffer,
        heroDatabase
      );
    } else {
      console.log('Using pixel-matching recognition...');
      // Process screenshot with pixel matching (old method)
      matchedHeroes = await processScreenshotAndMatch(
        req.file.buffer,
        heroDatabase,
        0.90 // Minimum similarity threshold (90%)
      );
    }

    // Save to user's team
    const savedTeam = await saveUserTeam(username, matchedHeroes);

    res.json({
      success: true,
      data: {
        totalHeroes: matchedHeroes.filter(h => h.heroName !== 'Unknown').length,
        unknownHeroes: matchedHeroes.filter(h => h.heroName === 'Unknown').length,
        heroes: matchedHeroes,
        team: savedTeam
      },
      message: 'Screenshot processed successfully'
    });

  } catch (error) {
    console.error('Error processing screenshot:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to process screenshot'
    });
  }
});

/**
 * POST /api/team/save - Save hero team data directly (without file upload)
 */
router.post('/save', async (req, res) => {
  try {
    const { heroes, username } = req.body;

    if (!heroes || !Array.isArray(heroes)) {
      return res.status(400).json({
        success: false,
        error: 'Heroes array is required'
      });
    }

    if (!username) {
      return res.status(400).json({
        success: false,
        error: 'Username is required'
      });
    }

    console.log(`Saving ${heroes.length} heroes for user: ${username}`);

    // Transform the hero data to match the expected format
    const formattedHeroes = heroes.map((hero, index) => ({
      position: index + 1,
      heroName: hero.heroName || hero.name || 'Unknown',
      starLevel: hero.starLevel || 0,
      rarity: hero.rarity || 'Unknown',
      ring: hero.ring || ''
    }));

    // Save to user's team
    const savedTeam = await saveUserTeam(username, formattedHeroes);

    res.json({
      success: true,
      data: {
        totalHeroes: formattedHeroes.length,
        team: savedTeam
      },
      message: `Successfully saved ${formattedHeroes.length} heroes`
    });

  } catch (error) {
    console.error('Error saving team:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to save team'
    });
  }
});

/**
 * GET /api/team/stats/heroes - Get hero statistics
 * Must be defined BEFORE /:username to avoid conflict
 */
router.get('/stats/heroes', async (req, res) => {
  try {
    const stats = await getHeroStatistics();

    res.json({
      success: true,
      data: stats
    });
  } catch (error) {
    console.error('Error fetching hero statistics:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch statistics'
    });
  }
});

/**
 * GET /api/team/:username - Get user's team
 */
router.get('/:username', async (req, res) => {
  try {
    const team = await getUserTeam(req.params.username);

    if (!team) {
      return res.status(404).json({
        success: false,
        error: 'Team not found'
      });
    }

    res.json({
      success: true,
      data: team
    });
  } catch (error) {
    console.error('Error fetching team:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch team'
    });
  }
});

/**
 * POST /api/team/search - Search for users with specific heroes
 */
router.post('/search', async (req, res) => {
  try {
    const { heroes } = req.body;

    if (!heroes || !Array.isArray(heroes) || heroes.length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Heroes array is required'
      });
    }

    const { searchTeamsByHeroes } = require('./userTeamModel');
    const teams = await searchTeamsByHeroes(heroes);

    res.json({
      success: true,
      data: teams
    });
  } catch (error) {
    console.error('Error searching teams:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to search teams'
    });
  }
});

/**
 * POST /api/teams/bulk-add - Add multiple heroes to user's team at once
 */
router.post('/bulk-add', async (req, res) => {
  try {
    const { username, heroes } = req.body;
    
    if (!username || !heroes || !Array.isArray(heroes)) {
      return res.status(400).json({
        success: false,
        error: 'Username and heroes array are required'
      });
    }
    
    const { saveUserTeam } = require('./userTeamModel');
    
    // Save the team with all heroes
    await saveUserTeam(username, heroes);
    
    res.json({
      success: true,
      message: `Added ${heroes.length} heroes to team`
    });
  } catch (error) {
    console.error('Error bulk adding heroes:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to add heroes'
    });
  }
});

module.exports = router;
