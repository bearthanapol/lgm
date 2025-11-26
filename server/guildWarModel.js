const { getDatabase } = require('./database');
const { ObjectId } = require('mongodb');

const COLLECTION_NAME = 'guildWar_db';

/**
 * Create enemy team (total 115 teams)
 */
async function createEnemyTeam(teamData) {
  const db = getDatabase();

  // Validate team number (1-115)
  if (teamData.teamNumber < 1 || teamData.teamNumber > 115) {
    throw new Error('Team number must be between 1 and 115');
  }

  // Check if team number already exists
  const existingTeam = await db.collection(COLLECTION_NAME).findOne({
    teamNumber: teamData.teamNumber
  });

  if (existingTeam) {
    throw new Error(`Team ${teamData.teamNumber} already exists`);
  }

  const team = {
    teamNumber: teamData.teamNumber, // 1-115
    heroes: teamData.heroes || [], // Array of 3 hero objects
    isDefeated: false, // Team defeat status
    speed: teamData.speed || '', // Team speed
    speedType: teamData.speedType || 'lower', // 'lower' or 'higher'
    enemyName: teamData.enemyName || '', // Enemy player name
    createdAt: new Date(),
    updatedAt: new Date()
  };

  // Validate heroes array
  if (team.heroes.length > 3) {
    throw new Error('Maximum 3 heroes per team');
  }

  // Validate each hero structure
  team.heroes = team.heroes.map(hero => ({
    heroname: hero.heroname,
    heroPicture: hero.heroPicture, // GitHub URL
    skills: hero.skills || [], // Array of 2 skills with order [1,2,3] or not set
    ring: hero.ring || '', // Ring image from GitHub
    order: hero.order || null, // 1, 2, 3, or null (not set)
    starLevel: hero.starLevel || 0 // Star level 0-12
  }));

  const result = await db.collection(COLLECTION_NAME).insertOne(team);
  return { ...team, _id: result.insertedId };
}

/**
 * Get all enemy teams
 */
async function getAllEnemyTeams() {
  const db = getDatabase();
  const teams = await db.collection(COLLECTION_NAME).find({}).sort({ teamNumber: 1 }).toArray();
  return teams;
}

/**
 * Get enemy team by team number
 */
async function getEnemyTeamByNumber(teamNumber) {
  const db = getDatabase();
  const team = await db.collection(COLLECTION_NAME).findOne({ teamNumber: parseInt(teamNumber) });
  return team;
}

/**
 * Get enemy team by ID
 */
async function getEnemyTeamById(teamId) {
  const db = getDatabase();
  const team = await db.collection(COLLECTION_NAME).findOne({ _id: new ObjectId(teamId) });
  return team;
}

/**
 * Update enemy team
 */
async function updateEnemyTeam(teamId, updateData) {
  const db = getDatabase();

  const updateFields = {
    ...updateData,
    updatedAt: new Date()
  };

  // Ensure isDefeated is boolean if present
  if (typeof updateFields.isDefeated !== 'undefined') {
    updateFields.isDefeated = !!updateFields.isDefeated;
  }

  // Validate heroes if provided
  if (updateFields.heroes) {
    if (updateFields.heroes.length > 3) {
      throw new Error('Maximum 3 heroes per team');
    }

    updateFields.heroes = updateFields.heroes.map(hero => ({
      heroname: hero.heroname,
      heroPicture: hero.heroPicture,
      skills: hero.skills || [],
      ring: hero.ring || '',
      order: hero.order || null
    }));
  }

  const result = await db.collection(COLLECTION_NAME).updateOne(
    { _id: new ObjectId(teamId) },
    { $set: updateFields }
  );

  return result.modifiedCount > 0;
}

/**
 * Add hero to enemy team
 */
async function addHeroToEnemyTeam(teamId, heroData) {
  const db = getDatabase();

  // Check current hero count
  const team = await getEnemyTeamById(teamId);
  if (!team) {
    throw new Error('Team not found');
  }

  if (team.heroes.length >= 3) {
    throw new Error('Team already has 3 heroes (maximum)');
  }

  const hero = {
    heroname: heroData.heroname,
    heroPicture: heroData.heroPicture,
    skills: heroData.skills || [],
    ring: heroData.ring || '',
    order: heroData.order || null,
    starLevel: heroData.starLevel || 0
  };

  const result = await db.collection(COLLECTION_NAME).updateOne(
    { _id: new ObjectId(teamId) },
    {
      $push: { heroes: hero },
      $set: { updatedAt: new Date() }
    }
  );

  return result.modifiedCount > 0;
}

/**
 * Remove hero from enemy team
 */
async function removeHeroFromEnemyTeam(teamId, heroname) {
  const db = getDatabase();

  const result = await db.collection(COLLECTION_NAME).updateOne(
    { _id: new ObjectId(teamId) },
    {
      $pull: { heroes: { heroname } },
      $set: { updatedAt: new Date() }
    }
  );

  return result.modifiedCount > 0;
}

/**
 * Update hero in enemy team
 */
async function updateHeroInEnemyTeam(teamId, heroname, updateData) {
  const db = getDatabase();

  const result = await db.collection(COLLECTION_NAME).updateOne(
    { _id: new ObjectId(teamId), 'heroes.heroname': heroname },
    {
      $set: {
        'heroes.$.skills': updateData.skills,
        'heroes.$.ring': updateData.ring,
        'heroes.$.order': updateData.order,
        'heroes.$.starLevel': updateData.starLevel !== undefined ? updateData.starLevel : 0,
        updatedAt: new Date()
      }
    }
  );

  return result.modifiedCount > 0;
}

/**
 * Delete enemy team
 */
async function deleteEnemyTeam(teamId) {
  const db = getDatabase();
  const result = await db.collection(COLLECTION_NAME).deleteOne({ _id: new ObjectId(teamId) });
  return result.deletedCount > 0;
}

/**
 * Get teams by order (for filtering)
 */
async function getTeamsByOrder(order) {
  const db = getDatabase();
  const teams = await db.collection(COLLECTION_NAME).find({
    'heroes.order': order
  }).sort({ teamNumber: 1 }).toArray();
  return teams;
}

module.exports = {
  createEnemyTeam,
  getAllEnemyTeams,
  getEnemyTeamByNumber,
  getEnemyTeamById,
  updateEnemyTeam,
  addHeroToEnemyTeam,
  removeHeroFromEnemyTeam,
  updateHeroInEnemyTeam,
  deleteEnemyTeam,
  getTeamsByOrder,
  saveGuildWarSelection,
  getGuildWarSelection,
  saveBattleHistory,
  getBattleHistory,
  updateBattleResult,
  updateBattleSpeed,
  getAllBattleHistory,
  resetAllGuildWarTeams
};

const SELECTION_COLLECTION = 'guildWar_selections';
const BATTLE_HISTORY_COLLECTION = 'guildWar_battleHistory';

/**
 * Save Guild War selection for a user
 */
async function saveGuildWarSelection(username, selectionData) {
  const db = getDatabase();
  // Upsert selection for the user
  const result = await db.collection(SELECTION_COLLECTION).updateOne(
    { username },
    { $set: { ...selectionData, updatedAt: new Date() } },
    { upsert: true }
  );
  return result;
}

/**
 * Get Guild War selection for a user
 */
async function getGuildWarSelection(username) {
  const db = getDatabase();
  return await db.collection(SELECTION_COLLECTION).findOne({ username });
}

/**
 * Save battle history (when user picks a team to fight)
 */
async function saveBattleHistory(battleData) {
  const db = getDatabase();
  const battle = {
    username: battleData.username,
    enemyTeamNumber: battleData.enemyTeamNumber,
    enemyZone: battleData.enemyZone,
    targetUsername: battleData.targetUsername,
    targetHeroes: battleData.targetHeroes || [],
    heroDetails: battleData.heroDetails || [],
    comment: battleData.comment || '', // User's comment about the battle
    result: 'pending', // 'pending', 'victory', 'defeat'
    battleDate: new Date()
  };
  
  const result = await db.collection(BATTLE_HISTORY_COLLECTION).insertOne(battle);
  return result;
}

/**
 * Get battle history for a user and specific enemy team
 */
async function getBattleHistory(username, enemyTeamNumber) {
  const db = getDatabase();
  return await db.collection(BATTLE_HISTORY_COLLECTION)
    .find({ username, enemyTeamNumber })
    .sort({ battleDate: -1 }) // Most recent first
    .toArray();
}

/**
 * Update battle result (victory or defeat)
 */
async function updateBattleResult(battleId, result) {
  const db = getDatabase();
  const validResults = ['pending', 'victory', 'defeat'];
  
  if (!validResults.includes(result)) {
    throw new Error('Invalid result. Must be: pending, victory, or defeat');
  }
  
  const resultUpdate = await db.collection(BATTLE_HISTORY_COLLECTION).updateOne(
    { _id: new ObjectId(battleId) },
    { $set: { result, updatedAt: new Date() } }
  );
  
  return resultUpdate;
}

/**
 * Update battle speed
 */
async function updateBattleSpeed(battleId, speed) {
  const db = getDatabase();
  
  const speedUpdate = await db.collection(BATTLE_HISTORY_COLLECTION).updateOne(
    { _id: new ObjectId(battleId) },
    { $set: { speed, updatedAt: new Date() } }
  );
  
  return speedUpdate;
}

/**
 * Get all battle history for a user (across all enemy teams)
 */
async function getAllBattleHistory(username) {
  const db = getDatabase();
  return await db.collection(BATTLE_HISTORY_COLLECTION)
    .find({ username })
    .sort({ battleDate: -1 })
    .toArray();
}

/**
 * Reset all Guild War teams (clear all data for new cycle)
 */
async function resetAllGuildWarTeams() {
  const db = getDatabase();
  
  // Reset all teams: clear heroes, defeated status, and speed
  const result = await db.collection(COLLECTION_NAME).updateMany(
    {},
    {
      $set: {
        heroes: [],           // Clear all heroes
        isDefeated: false,    // Clear defeated status
        speed: '',            // Clear speed
        speedType: 'lower',   // Reset to default
        updatedAt: new Date()
      }
    }
  );
  
  // Also clear all battle history
  await db.collection(BATTLE_HISTORY_COLLECTION).deleteMany({});
  
  return result;
}
