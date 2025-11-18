const express = require('express');
const { authenticateToken } = require('./authMiddleware');
const { findUserByUsername } = require('./dataManager');

const router = express.Router();

/**
 * GET /api/user/profile
 * Get authenticated user profile information
 * Requires JWT authentication
 */
router.get('/profile', authenticateToken, async (req, res) => {
  try {
    // User data is attached to req.user by authenticateToken middleware
    const { username } = req.user;

    // Fetch full user data from database
    const user = await findUserByUsername(username);

    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }

    // Return user information (without password hash)
    res.status(200).json({
      success: true,
      user: {
        username: user.username,
        email: user.email,
        createdAt: user.createdAt
      }
    });

  } catch (error) {
    console.error('Profile fetch error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error while fetching profile'
    });
  }
});

module.exports = router;
