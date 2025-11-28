const { getDatabase } = require('./database');

const ANALYTICS_COLLECTION = 'analytics_db';

/**
 * Log page access
 */
async function logPageAccess(pageUrl, username = null) {
  const db = getDatabase();
  
  const accessLog = {
    pageUrl,
    username,
    timestamp: new Date(),
    date: new Date().toISOString().split('T')[0] // YYYY-MM-DD format
  };
  
  await db.collection(ANALYTICS_COLLECTION).insertOne(accessLog);
}

/**
 * Get total user count
 */
async function getTotalUserCount() {
  const db = getDatabase();
  const count = await db.collection('users_db').countDocuments();
  return count;
}

/**
 * Get page access statistics for a date range
 */
async function getPageAccessStats(startDate, endDate) {
  const db = getDatabase();
  
  const stats = await db.collection(ANALYTICS_COLLECTION).aggregate([
    {
      $match: {
        timestamp: {
          $gte: startDate,
          $lte: endDate
        }
      }
    },
    {
      $group: {
        _id: '$pageUrl',
        count: { $sum: 1 },
        uniqueUsers: { $addToSet: '$username' }
      }
    },
    {
      $project: {
        pageUrl: '$_id',
        count: 1,
        uniqueUsers: { $size: '$uniqueUsers' },
        _id: 0
      }
    },
    {
      $sort: { count: -1 }
    }
  ]).toArray();
  
  return stats;
}

/**
 * Get daily access counts for a date range
 */
async function getDailyAccessCounts(startDate, endDate) {
  const db = getDatabase();
  
  const dailyCounts = await db.collection(ANALYTICS_COLLECTION).aggregate([
    {
      $match: {
        timestamp: {
          $gte: startDate,
          $lte: endDate
        }
      }
    },
    {
      $group: {
        _id: '$date',
        count: { $sum: 1 }
      }
    },
    {
      $sort: { _id: 1 }
    }
  ]).toArray();
  
  return dailyCounts.map(item => ({
    date: item._id,
    count: item.count
  }));
}

/**
 * Get new users count for a date range
 */
async function getNewUsersCount(startDate, endDate) {
  const db = getDatabase();
  
  const count = await db.collection('users_db').countDocuments({
    createdAt: {
      $gte: startDate,
      $lte: endDate
    }
  });
  
  return count;
}

module.exports = {
  logPageAccess,
  getTotalUserCount,
  getPageAccessStats,
  getDailyAccessCounts,
  getNewUsersCount
};
