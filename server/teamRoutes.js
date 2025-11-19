const express = require('express');
const multer = require('multer');
const router = express.Router();
const { processScreenshotAndMatch } = require('./imageMatching');
const { getAllHeroes } = require('./heroModel');
const { saveUserTeam, getUserTeam, getHeroStatistics } = require('./userTeamModel');

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

    // Process screenshot and match heroes
    const matchedHeroes = await processScreenshotAndMatch(
      req.file.buffer,
      heroDatabase,
      0.90 // Minimum similarity threshold (90%)
    );

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
 * GET /api/team/stats/heroes - Get hero statistics
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

module.exports = router;
