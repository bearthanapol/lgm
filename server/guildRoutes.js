const express = require('express');
const router = express.Router();
const guildModel = require('./guildModel');

/**
 * GET /api/guilds - Get all guilds
 */
router.get('/', async (req, res) => {
  try {
    const guilds = await guildModel.getAllGuilds();
    res.json({
      success: true,
      data: guilds
    });
  } catch (error) {
    console.error('Error fetching guilds:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch guilds'
    });
  }
});

/**
 * GET /api/guilds/:id - Get guild by ID
 */
router.get('/:id', async (req, res) => {
  try {
    const guild = await guildModel.getGuildById(req.params.id);

    if (!guild) {
      return res.status(404).json({
        success: false,
        error: 'Guild not found'
      });
    }

    res.json({
      success: true,
      data: guild
    });
  } catch (error) {
    console.error('Error fetching guild:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch guild'
    });
  }
});

/**
 * GET /api/guilds/member/:username - Get guild by member username
 */
router.get('/member/:username', async (req, res) => {
  try {
    const guild = await guildModel.getGuildByName(req.params.username);

    if (!guild) {
      return res.status(404).json({
        success: false,
        error: 'Guild not found'
      });
    }

    res.json({
      success: true,
      data: guild
    });
  } catch (error) {
    console.error('Error fetching guild by member:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch guild'
    });
  }
});

/**
 * POST /api/guilds - Create a new guild
 */
router.post('/', async (req, res) => {
  try {
    const { guildName, guildMasterName, guildPassword } = req.body;

    if (!guildName || !guildMasterName || !guildPassword) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: guildName, guildMasterName, guildPassword'
      });
    }

    const newGuild = await guildModel.createGuild(req.body);

    res.status(201).json({
      success: true,
      data: newGuild,
      message: 'Guild created successfully'
    });
  } catch (error) {
    console.error('Error creating guild:', error);
    res.status(400).json({
      success: false,
      error: error.message || 'Failed to create guild'
    });
  }
});

/**
 * POST /api/guilds/verify - Verify guild password
 */
router.post('/verify', async (req, res) => {
  try {
    const { guildName, guildPassword } = req.body;

    if (!guildName || !guildPassword) {
      return res.status(400).json({
        success: false,
        error: 'Missing guildName or guildPassword'
      });
    }

    const guild = await guildModel.verifyGuildPassword(guildName, guildPassword);

    if (!guild) {
      return res.status(401).json({
        success: false,
        error: 'Invalid guild name or password'
      });
    }

    res.json({
      success: true,
      data: guild
    });
  } catch (error) {
    console.error('Error verifying guild:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to verify guild'
    });
  }
});

/**
 * POST /api/guilds/:id/members - Add member to guild
 */
router.post('/:id/members', async (req, res) => {
  try {
    const { memberName } = req.body;

    if (!memberName) {
      return res.status(400).json({
        success: false,
        error: 'Missing memberName'
      });
    }

    const updated = await guildModel.addMemberToGuild(req.params.id, memberName);

    if (!updated) {
      return res.status(404).json({
        success: false,
        error: 'Guild not found'
      });
    }

    res.json({
      success: true,
      message: 'Member added successfully'
    });
  } catch (error) {
    console.error('Error adding member:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to add member'
    });
  }
});

/**
 * DELETE /api/guilds/:id/members/:memberName - Remove member from guild
 */
router.delete('/:id/members/:memberName', async (req, res) => {
  try {
    const updated = await guildModel.removeMemberFromGuild(req.params.id, req.params.memberName);

    if (!updated) {
      return res.status(404).json({
        success: false,
        error: 'Guild not found'
      });
    }

    res.json({
      success: true,
      message: 'Member removed successfully'
    });
  } catch (error) {
    console.error('Error removing member:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to remove member'
    });
  }
});

/**
 * PUT /api/guilds/:id - Update guild
 */
router.put('/:id', async (req, res) => {
  try {
    const updated = await guildModel.updateGuild(req.params.id, req.body);

    if (!updated) {
      return res.status(404).json({
        success: false,
        error: 'Guild not found'
      });
    }

    res.json({
      success: true,
      message: 'Guild updated successfully'
    });
  } catch (error) {
    console.error('Error updating guild:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to update guild'
    });
  }
});

/**
 * DELETE /api/guilds/:id - Delete guild
 */
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await guildModel.deleteGuild(req.params.id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        error: 'Guild not found'
      });
    }

    res.json({
      success: true,
      message: 'Guild deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting guild:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to delete guild'
    });
  }
});

module.exports = router;
