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
    order: hero.order || null // 1, 2, 3, or null (not set)
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
    order: heroData.order || null
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
  getTeamsByOrder
};
