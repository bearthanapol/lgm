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

  // Require guildName
  if (!teamData.guildName) {
    throw new Error('Guild name is required');
  }

  // Check if team number already exists for this guild
  const existingTeam = await db.collection(COLLECTION_NAME).findOne({
    guildName: teamData.guildName,
    teamNumber: teamData.teamNumber
  });

  if (existingTeam) {
    throw new Error(`Team ${teamData.teamNumber} already exists for this guild`);
  }

  const team = {
    guildName: teamData.guildName, // Guild that owns this team data
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
 * Get all enemy teams for a specific guild
 */
async function getAllEnemyTeams(guildName) {
  const db = getDatabase();
  if (!guildName) {
    return [];
  }
  const teams = await db.collection(COLLECTION_NAME).find({ guildName }).sort({ teamNumber: 1 }).toArray();
  return teams;
}

/**
 * Get enemy team by team number for a specific guild
 */
async function getEnemyTeamByNumber(guildName, teamNumber) {
  const db = getDatabase();
  if (!guildName) {
    return null;
  }
  const team = await db.collection(COLLECTION_NAME).findOne({ 
    guildName,
    teamNumber: parseInt(teamNumber) 
  });
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
  getAllGuildWarSelections,
  saveBattleHistory,
  getBattleHistory,
  getBattleHistoryForTeam,
  updateBattleResult,
  updateBattleSpeed,
  getAllBattleHistory,
  deleteBattleHistory,
  resetAllGuildWarTeams,
  getUsedHeroesForGuild,
  unassignTeam
};

const SELECTION_COLLECTION = 'guildWar_selections';
const BATTLE_HISTORY_COLLECTION = 'guildWar_battleHistory';

/**
 * Save Guild War selection for a user
 */
async function saveGuildWarSelection(username, selectionData) {
  const db = getDatabase();
  
  // Get user's guild to track used heroes at guild level
  const guildModel = require('./guildModel');
  const guild = await guildModel.getGuildByMember(username);
  
  if (!guild) {
    throw new Error('User is not in a guild');
  }
  
  // Check if user already has 5 selections
  const existingSelections = await db.collection(SELECTION_COLLECTION)
    .find({ username })
    .toArray();
  
  // Check if user has reached the limit of 5 selections
  if (existingSelections.length >= 5) {
    throw new Error('You can only have up to 5 battle assignments. Please complete or delete an existing assignment first.');
  }
  
  // Always insert new selection (users can attack same team multiple times)
  const selectionDoc = {
    ...selectionData,
    username: username,
    guildName: guild.guildName,
    battleId: null, // Will be updated when battle is created
    createdAt: new Date(),
    updatedAt: new Date()
  };
  
  const result = await db.collection(SELECTION_COLLECTION).insertOne(selectionDoc);
  
  console.log(`[Save Selection] Created new selection for user: ${username}, target: ${selectionData.targetUsername}, enemy team: ${selectionData.enemyTeamNumber}, total selections: ${existingSelections.length + 1}/5, selectionId: ${result.insertedId}`);
  
  return result;
}

/**
 * Get Guild War selection for a user (returns single selection for backward compatibility)
 */
async function getGuildWarSelection(username) {
  const db = getDatabase();
  return await db.collection(SELECTION_COLLECTION).findOne({ username });
}

/**
 * Get ALL Guild War selections for a user (all enemy teams they're assigned to)
 */
async function getAllGuildWarSelections(username) {
  const db = getDatabase();
  return await db.collection(SELECTION_COLLECTION)
    .find({ username })
    .sort({ enemyTeamNumber: 1 })
    .toArray();
}

/**
 * Save battle history (when user picks a team to fight)
 */
async function saveBattleHistory(battleData) {
  const db = getDatabase();
  
  // Find the corresponding selection to link them
  const selection = await db.collection(SELECTION_COLLECTION).findOne({
    username: battleData.username,
    targetUsername: battleData.targetUsername,
    enemyTeamNumber: battleData.enemyTeamNumber,
    battleId: null // Find selection without a battle yet
  });
  
  const battle = {
    username: battleData.username,
    enemyTeamNumber: battleData.enemyTeamNumber,
    enemyZone: battleData.enemyZone,
    targetUsername: battleData.targetUsername,
    targetHeroes: battleData.targetHeroes || [],
    heroDetails: battleData.heroDetails || [],
    pet: battleData.pet || null, // Pet data: { petId, petName, starLevel }
    comment: battleData.comment || '', // User's comment about the battle
    result: 'pending', // 'pending', 'victory', 'defeat'
    selectionId: selection ? selection._id : null, // Link to selection
    battleDate: new Date()
  };
  
  const result = await db.collection(BATTLE_HISTORY_COLLECTION).insertOne(battle);
  
  // Update selection with battleId
  if (selection) {
    await db.collection(SELECTION_COLLECTION).updateOne(
      { _id: selection._id },
      { $set: { battleId: result.insertedId } }
    );
    console.log(`[Save Battle] Linked battle ${result.insertedId} to selection ${selection._id}`);
  }
  
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
 * Get battle history for ALL guild members for a specific enemy team
 */
async function getBattleHistoryForTeam(usernames, enemyTeamNumber) {
  const db = getDatabase();
  return await db.collection(BATTLE_HISTORY_COLLECTION)
    .find({ 
      username: { $in: usernames },
      enemyTeamNumber 
    })
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
 * Delete battle history entry and corresponding selection
 */
async function deleteBattleHistory(battleId) {
  const db = getDatabase();
  
  // First, get the battle to know which selection to delete
  const battle = await db.collection(BATTLE_HISTORY_COLLECTION).findOne({ 
    _id: new ObjectId(battleId) 
  });
  
  if (!battle) {
    return false;
  }
  
  console.log(`[Delete Battle] Deleting battle for user: ${battle.username}, enemy team: ${battle.enemyTeamNumber}`);
  
  // Delete the selection that corresponds to this battle
  if (battle.selectionId) {
    const selectionResult = await db.collection(SELECTION_COLLECTION).deleteOne({ 
      _id: battle.selectionId 
    });
    console.log(`[Delete Battle] Deleted selection ${battle.selectionId}, result: ${selectionResult.deletedCount}`);
  }
  
  // Delete the battle
  const battleResult = await db.collection(BATTLE_HISTORY_COLLECTION).deleteOne({ 
    _id: new ObjectId(battleId) 
  });
  
  console.log(`[Delete Battle] Deleted battle, heroes and pets are now available again`);
  
  return battleResult.deletedCount > 0;
}

/**
 * Reset all Guild War teams for a specific guild (clear all data for new cycle)
 */
async function resetAllGuildWarTeams(guildName) {
  const db = getDatabase();
  
  if (!guildName) {
    throw new Error('Guild name is required');
  }
  
  // Get all guild members to delete their battle history
  const guildModel = require('./guildModel');
  const guild = await guildModel.getGuildByName(guildName);
  
  if (guild) {
    const guildMembers = guild.guildMemberNames || [];
    const guildMaster = guild.guildMasterName;
    const guildAssistants = guild.guildAssistants || [];
    const allMembers = [...new Set([guildMaster, ...guildAssistants, ...guildMembers])];
    
    // Clear all battle history for all guild members
    if (allMembers.length > 0) {
      await db.collection(BATTLE_HISTORY_COLLECTION).deleteMany({ 
        username: { $in: allMembers } 
      });
    }
  }
  
  // Delete all teams for this guild completely
  const result = await db.collection(COLLECTION_NAME).deleteMany({ guildName });
  
  // Clear all selections for this guild (free up all heroes)
  await db.collection(SELECTION_COLLECTION).deleteMany({ guildName });
  
  return result;
}

/**
 * Get all used heroes for a guild (heroes that have been assigned to teams)
 * Returns a map of username -> array of ALL hero names used across all battles
 * Battle count is based on battle history (actual battles), not selections
 */
async function getUsedHeroesForGuild(guildName) {
  const db = getDatabase();
  
  if (!guildName) {
    throw new Error('Guild name is required');
  }
  
  // Get guild members
  const guildModel = require('./guildModel');
  const guild = await guildModel.getGuildByName(guildName);
  
  if (!guild) {
    return {};
  }
  
  const guildMembers = guild.guildMemberNames || [];
  const guildMaster = guild.guildMasterName;
  const guildAssistants = guild.guildAssistants || [];
  const allMembers = [...new Set([guildMaster, ...guildAssistants, ...guildMembers])];
  
  // Get all battle history for guild members
  const battleHistory = await db.collection(BATTLE_HISTORY_COLLECTION)
    .find({ username: { $in: allMembers } })
    .toArray();
  
  // Build a map of ALL used heroes by username (across all their battles)
  const usedHeroesMap = {};
  
  battleHistory.forEach(battle => {
    const username = battle.username;
    const heroDetails = battle.heroDetails || [];
    const targetHeroes = battle.targetHeroes || [];
    
    // Initialize if first time seeing this user
    if (!usedHeroesMap[username]) {
      usedHeroesMap[username] = {
        heroes: [],
        pets: [],
        battles: []
      };
    }
    
    // Add all heroes from this battle (avoiding duplicates)
    // Try heroDetails first (has more info), fallback to targetHeroes
    const heroNames = heroDetails.length > 0 
      ? heroDetails.map(h => h.heroName || h.heroname).filter(Boolean)
      : targetHeroes;
    
    heroNames.forEach(hero => {
      if (!usedHeroesMap[username].heroes.includes(hero)) {
        usedHeroesMap[username].heroes.push(hero);
      }
    });
    
    // Add pet from this battle (if any)
    if (battle.pet && battle.pet.petId) {
      if (!usedHeroesMap[username].pets.includes(battle.pet.petId)) {
        usedHeroesMap[username].pets.push(battle.pet.petId);
      }
    }
    
    // Track each battle
    usedHeroesMap[username].battles.push({
      battleId: battle._id,
      enemyTeamNumber: battle.enemyTeamNumber,
      targetUsername: battle.targetUsername,
      heroes: heroNames,
      pet: battle.pet,
      result: battle.result,
      battleDate: battle.battleDate
    });
  });
  
  return usedHeroesMap;
}

/**
 * Unassign a team (remove ALL selections and free up heroes)
 */
async function unassignTeam(username) {
  const db = getDatabase();
  
  if (!username) {
    throw new Error('Username is required');
  }
  
  // Delete ALL selections for this user (they may have multiple enemy team assignments)
  const result = await db.collection(SELECTION_COLLECTION).deleteMany({ username });
  
  console.log(`[Unassign] Deleted ${result.deletedCount} selection(s) for user: ${username}`);
  
  return result.deletedCount > 0;
}
