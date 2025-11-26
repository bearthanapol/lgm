const express = require('express');
const router = express.Router();
const guildWarModel = require('./guildWarModel');

/**
 * GET /api/guildwar - Get all enemy teams
 */
router.get('/', async (req, res) => {
  try {
    const teams = await guildWarModel.getAllEnemyTeams();
    res.json({
      success: true,
      data: teams
    });
  } catch (error) {
    console.error('Error fetching enemy teams:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch enemy teams'
    });
  }
});

/**
 * GET /api/guildwar/number/:teamNumber - Get enemy team by team number
 */
router.get('/number/:teamNumber', async (req, res) => {
  try {
    const team = await guildWarModel.getEnemyTeamByNumber(req.params.teamNumber);

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
 * GET /api/guildwar/:id - Get enemy team by ID
 */
router.get('/:id', async (req, res) => {
  try {
    const team = await guildWarModel.getEnemyTeamById(req.params.id);

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
 * POST /api/guildwar - Create a new enemy team
 */
router.post('/', async (req, res) => {
  try {
    const { teamNumber } = req.body;

    if (!teamNumber) {
      return res.status(400).json({
        success: false,
        error: 'Missing required field: teamNumber'
      });
    }

    const newTeam = await guildWarModel.createEnemyTeam(req.body);

    res.status(201).json({
      success: true,
      data: newTeam,
      message: 'Enemy team created successfully'
    });
  } catch (error) {
    console.error('Error creating enemy team:', error);
    res.status(400).json({
      success: false,
      error: error.message || 'Failed to create enemy team'
    });
  }
});

/**
 * PUT /api/guildwar/:id - Update enemy team
 */
router.put('/:id', async (req, res) => {
  try {
    const updated = await guildWarModel.updateEnemyTeam(req.params.id, req.body);

    if (!updated) {
      return res.status(404).json({
        success: false,
        error: 'Team not found'
      });
    }

    res.json({
      success: true,
      message: 'Enemy team updated successfully'
    });
  } catch (error) {
    console.error('Error updating enemy team:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to update enemy team'
    });
  }
});

/**
 * POST /api/guildwar/:id/heroes - Add hero to enemy team
 */
router.post('/:id/heroes', async (req, res) => {
  try {
    const { heroname, heroPicture } = req.body;

    if (!heroname || !heroPicture) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: heroname, heroPicture'
      });
    }

    const updated = await guildWarModel.addHeroToEnemyTeam(req.params.id, req.body);

    if (!updated) {
      return res.status(404).json({
        success: false,
        error: 'Team not found'
      });
    }

    res.json({
      success: true,
      message: 'Hero added to team successfully'
    });
  } catch (error) {
    console.error('Error adding hero to team:', error);
    res.status(400).json({
      success: false,
      error: error.message || 'Failed to add hero to team'
    });
  }
});

/**
 * DELETE /api/guildwar/:id/heroes/:heroname - Remove hero from enemy team
 */
router.delete('/:id/heroes/:heroname', async (req, res) => {
  try {
    const updated = await guildWarModel.removeHeroFromEnemyTeam(req.params.id, req.params.heroname);

    if (!updated) {
      return res.status(404).json({
        success: false,
        error: 'Team not found'
      });
    }

    res.json({
      success: true,
      message: 'Hero removed from team successfully'
    });
  } catch (error) {
    console.error('Error removing hero from team:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to remove hero from team'
    });
  }
});

/**
 * PUT /api/guildwar/:id/heroes/:heroname - Update hero in enemy team
 */
router.put('/:id/heroes/:heroname', async (req, res) => {
  try {
    const updated = await guildWarModel.updateHeroInEnemyTeam(req.params.id, req.params.heroname, req.body);

    if (!updated) {
      return res.status(404).json({
        success: false,
        error: 'Team or hero not found'
      });
    }

    res.json({
      success: true,
      message: 'Hero updated successfully'
    });
  } catch (error) {
    console.error('Error updating hero:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to update hero'
    });
  }
});

/**
 * DELETE /api/guildwar/:id - Delete enemy team
 */
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await guildWarModel.deleteEnemyTeam(req.params.id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        error: 'Team not found'
      });
    }

    res.json({
      success: true,
      message: 'Enemy team deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting enemy team:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to delete enemy team'
    });
  }
});

/**
 * GET /api/guildwar/order/:order - Get teams by order
 */
router.get('/order/:order', async (req, res) => {
  try {
    const teams = await guildWarModel.getTeamsByOrder(parseInt(req.params.order));
    res.json({
      success: true,
      data: teams
    });
  } catch (error) {
    console.error('Error fetching teams by order:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch teams'
    });
  }
});



/**
 * POST /api/guildwar/search - Search for users with specific heroes
 * (Moved here from teamRoutes due to routing issues)
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

    // Import from userTeamModel
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
 * POST /api/guildwar/selection - Save selected target
 */
router.post('/selection', async (req, res) => {
  try {
    const { username, targetUsername, targetHeroes, heroDetails, enemyZone, enemyTeamNumber } = req.body;

    if (!username || !targetUsername) {
      return res.status(400).json({
        success: false,
        error: 'Username and target username are required'
      });
    }

    await guildWarModel.saveGuildWarSelection(username, {
      targetUsername,
      targetHeroes,
      heroDetails: heroDetails || [],
      enemyZone: enemyZone || 'Unknown Zone',
      enemyTeamNumber: enemyTeamNumber || 0
    });

    res.json({ success: true });
  } catch (error) {
    console.error('Error saving selection:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to save selection'
    });
  }
});

/**
 * GET /api/guildwar/selection/:username - Get saved selection
 */
router.get('/selection/:username', async (req, res) => {
  try {
    const { username } = req.params;
    const selection = await guildWarModel.getGuildWarSelection(username);

    res.json({
      success: true,
      data: selection
    });
  } catch (error) {
    console.error('Error fetching selection:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch selection'
    });
  }
});

/**
 * POST /api/guildwar/battle-history - Save battle history
 */
router.post('/battle-history', async (req, res) => {
  try {
    const battleData = req.body;
    
    if (!battleData.username || !battleData.enemyTeamNumber) {
      return res.status(400).json({
        success: false,
        error: 'Username and enemy team number are required'
      });
    }
    
    const result = await guildWarModel.saveBattleHistory(battleData);
    
    res.json({
      success: true,
      data: { battleId: result.insertedId }
    });
  } catch (error) {
    console.error('Error saving battle history:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to save battle history'
    });
  }
});

/**
 * GET /api/guildwar/battle-history/:username/:enemyTeamNumber - Get battle history for specific enemy
 */
router.get('/battle-history/:username/:enemyTeamNumber', async (req, res) => {
  try {
    const { username, enemyTeamNumber } = req.params;
    const history = await guildWarModel.getBattleHistory(username, parseInt(enemyTeamNumber));
    
    res.json({
      success: true,
      data: history
    });
  } catch (error) {
    console.error('Error fetching battle history:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch battle history'
    });
  }
});

/**
 * PUT /api/guildwar/battle-history/:battleId/result - Update battle result
 */
router.put('/battle-history/:battleId/result', async (req, res) => {
  try {
    const { battleId } = req.params;
    const { result } = req.body;
    
    if (!result) {
      return res.status(400).json({
        success: false,
        error: 'Result is required (pending, victory, or defeat)'
      });
    }
    
    await guildWarModel.updateBattleResult(battleId, result);
    
    res.json({
      success: true,
      message: 'Battle result updated'
    });
  } catch (error) {
    console.error('Error updating battle result:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to update battle result'
    });
  }
});

/**
 * PUT /api/guildwar/battle-history/:battleId/speed - Update battle speed
 */
router.put('/battle-history/:battleId/speed', async (req, res) => {
  try {
    const { battleId } = req.params;
    const { speed } = req.body;
    
    await guildWarModel.updateBattleSpeed(battleId, speed);
    
    res.json({
      success: true,
      message: 'Battle speed updated'
    });
  } catch (error) {
    console.error('Error updating battle speed:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to update battle speed'
    });
  }
});

/**
 * GET /api/guildwar/battle-history/:username - Get all battle history for user
 */
router.get('/battle-history/:username', async (req, res) => {
  try {
    const { username } = req.params;
    const history = await guildWarModel.getAllBattleHistory(username);
    
    res.json({
      success: true,
      data: history
    });
  } catch (error) {
    console.error('Error fetching all battle history:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch battle history'
    });
  }
});

/**
 * POST /api/guildwar/reset - Reset all Guild War teams
 */
router.post('/reset', async (req, res) => {
  try {
    const result = await guildWarModel.resetAllGuildWarTeams();
    
    res.json({
      success: true,
      message: `Reset ${result.modifiedCount} teams successfully`,
      data: result
    });
  } catch (error) {
    console.error('Error resetting Guild War:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to reset Guild War'
    });
  }
});

module.exports = router;
