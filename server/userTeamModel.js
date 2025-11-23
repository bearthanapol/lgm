const { getDatabase } = require('./database');
const { ObjectId } = require('mongodb');

const COLLECTION_NAME = 'user_teams';

/**
 * Save or update user's hero team
 * @param {string} username - Username
 * @param {Array} heroes - Array of hero objects
 * @returns {Promise<Object>} - Saved team
 */
async function saveUserTeam(username, heroes) {
  const db = getDatabase();

  const team = {
    username: username,
    heroes: heroes,
    totalHeroes: heroes.filter(h => h.heroName !== 'Unknown').length,
    lastUpdated: new Date()
  };

  // Upsert: update if exists, insert if not
  const result = await db.collection(COLLECTION_NAME).findOneAndUpdate(
    { username: username },
    { $set: team },
    { upsert: true, returnDocument: 'after' }
  );

  return result.value || result;
}

/**
 * Get user's hero team
 * @param {string} username - Username
 * @returns {Promise<Object>} - User's team
 */
async function getUserTeam(username) {
  const db = getDatabase();
  const team = await db.collection(COLLECTION_NAME).findOne({ username: username });
  return team;
}

/**
 * Get all user teams
 * @returns {Promise<Array>} - Array of all teams
 */
async function getAllUserTeams() {
  const db = getDatabase();
  const teams = await db.collection(COLLECTION_NAME).find({}).toArray();
  return teams;
}

/**
 * Delete user's team
 * @param {string} username - Username
 * @returns {Promise<boolean>} - Success status
 */
async function deleteUserTeam(username) {
  const db = getDatabase();
  const result = await db.collection(COLLECTION_NAME).deleteOne({ username: username });
  return result.deletedCount > 0;
}

/**
 * Get hero statistics across all users
 * @returns {Promise<Array>} - Hero usage statistics
 */
async function getHeroStatistics() {
  const db = getDatabase();

  const stats = await db.collection(COLLECTION_NAME).aggregate([
    { $unwind: '$heroes' },
    { $match: { 'heroes.heroName': { $ne: 'Unknown' } } },
    {
      $group: {
        _id: '$heroes.heroName',
        count: { $sum: 1 },
        rarity: { $first: '$heroes.rarity' }
      }
    },
    { $sort: { count: -1 } },
    {
      $project: {
        _id: 0,
        heroName: '$_id',
        count: 1,
        rarity: 1
      }
    }
  ]).toArray();

  return stats;
}

module.exports = {
  saveUserTeam,
  getUserTeam,
  getAllUserTeams,
  deleteUserTeam,
  getHeroStatistics,
  searchTeamsByHeroes
};

/**
 * Search for teams that contain specific heroes
 * @param {Array<string>} heroNames - List of hero names to search for
 * @returns {Promise<Array>} - List of matching teams/users
 */
async function searchTeamsByHeroes(heroNames) {
  const db = getDatabase();

  if (!heroNames || heroNames.length === 0) {
    return [];
  }

  // Find teams that have ALL of the specified heroes
  // We use $all operator on the heroes.heroName field
  const teams = await db.collection(COLLECTION_NAME).find({
    'heroes.heroName': { $all: heroNames }
  }).toArray();

  return teams;
}
