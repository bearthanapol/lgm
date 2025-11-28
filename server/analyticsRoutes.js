const express = require('express');
const router = express.Router();
const analyticsModel = require('./analyticsModel');

/**
 * GET /api/analytics/stats - Get website statistics
 * Query params: period (week|month)
 */
router.get('/stats', async (req, res) => {
  try {
    const { period = 'week' } = req.query;
    
    const now = new Date();
    let startDate;
    
    if (period === 'week') {
      startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    } else if (period === 'month') {
      startDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    } else {
      return res.status(400).json({
        success: false,
        error: 'Invalid period. Use "week" or "month"'
      });
    }
    
    // Get all statistics
    const [
      totalUsers,
      pageAccessStats,
      dailyAccessCounts,
      newUsers
    ] = await Promise.all([
      analyticsModel.getTotalUserCount(),
      analyticsModel.getPageAccessStats(startDate, now),
      analyticsModel.getDailyAccessCounts(startDate, now),
      analyticsModel.getNewUsersCount(startDate, now)
    ]);
    
    // Calculate total page views
    const totalPageViews = pageAccessStats.reduce((sum, stat) => sum + stat.count, 0);
    
    res.json({
      success: true,
      data: {
        period,
        startDate,
        endDate: now,
        totalUsers,
        newUsers,
        totalPageViews,
        pageAccessStats,
        dailyAccessCounts
      }
    });
  } catch (error) {
    console.error('Error fetching analytics:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch analytics'
    });
  }
});

/**
 * POST /api/analytics/log - Log page access
 */
router.post('/log', async (req, res) => {
  try {
    const { pageUrl, username } = req.body;
    
    if (!pageUrl) {
      return res.status(400).json({
        success: false,
        error: 'Page URL is required'
      });
    }
    
    await analyticsModel.logPageAccess(pageUrl, username);
    
    res.json({
      success: true,
      message: 'Page access logged'
    });
  } catch (error) {
    console.error('Error logging page access:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to log page access'
    });
  }
});

module.exports = router;
