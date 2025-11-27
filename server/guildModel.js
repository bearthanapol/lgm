const { getDatabase } = require('./database');
const { ObjectId } = require('mongodb');
const bcrypt = require('bcrypt');

const COLLECTION_NAME = 'guild_db';

/**
 * Create a new guild
 */
async function createGuild(guildData) {
  const db = getDatabase();
  
  // Check if guild name already exists
  const existingGuild = await db.collection(COLLECTION_NAME).findOne({ 
    guildName: guildData.guildName 
  });
  
  if (existingGuild) {
    throw new Error('Guild name already exists');
  }
  
  // Hash guild password
  const hashedPassword = await bcrypt.hash(guildData.guildPassword, 10);
  
  const guild = {
    guildName: guildData.guildName,
    guildMasterName: guildData.guildMasterName,
    guildMemberNames: guildData.guildMemberNames || [], // Array of member usernames
    guildAssistants: guildData.guildAssistants || [], // Array of assistant usernames
    guildPassword: hashedPassword,
    createdAt: new Date(),
    updatedAt: new Date()
  };
  
  const result = await db.collection(COLLECTION_NAME).insertOne(guild);
  return { ...guild, _id: result.insertedId, guildPassword: undefined };
}

/**
 * Get all guilds
 */
async function getAllGuilds() {
  const db = getDatabase();
  const guilds = await db.collection(COLLECTION_NAME).find({}, {
    projection: { guildPassword: 0 }
  }).toArray();
  return guilds;
}

/**
 * Get guild by ID
 */
async function getGuildById(guildId) {
  const db = getDatabase();
  const guild = await db.collection(COLLECTION_NAME).findOne(
    { _id: new ObjectId(guildId) },
    { projection: { guildPassword: 0 } }
  );
  return guild;
}

/**
 * Get guild by name
 */
async function getGuildByName(guildName) {
  const db = getDatabase();
  const guild = await db.collection(COLLECTION_NAME).findOne({ guildName });
  return guild;
}

/**
 * Verify guild password
 */
async function verifyGuildPassword(guildName, password) {
  const guild = await getGuildByName(guildName);
  if (!guild) {
    return null;
  }
  
  const isValid = await bcrypt.compare(password, guild.guildPassword);
  if (!isValid) {
    return null;
  }
  
  return { ...guild, guildPassword: undefined };
}

/**
 * Add member to guild
 */
async function addMemberToGuild(guildId, memberName) {
  const db = getDatabase();
  
  const result = await db.collection(COLLECTION_NAME).updateOne(
    { _id: new ObjectId(guildId) },
    { 
      $addToSet: { guildMemberNames: memberName },
      $set: { updatedAt: new Date() }
    }
  );
  
  return result.modifiedCount > 0;
}

/**
 * Remove member from guild
 */
async function removeMemberFromGuild(guildId, memberName) {
  const db = getDatabase();
  
  const result = await db.collection(COLLECTION_NAME).updateOne(
    { _id: new ObjectId(guildId) },
    { 
      $pull: { guildMemberNames: memberName },
      $set: { updatedAt: new Date() }
    }
  );
  
  return result.modifiedCount > 0;
}

/**
 * Update guild
 */
async function updateGuild(guildId, updateData) {
  const db = getDatabase();
  
  const updateFields = {
    ...updateData,
    updatedAt: new Date()
  };
  
  // Don't allow direct password updates through this method
  delete updateFields.guildPassword;
  
  const result = await db.collection(COLLECTION_NAME).updateOne(
    { _id: new ObjectId(guildId) },
    { $set: updateFields }
  );
  
  return result.modifiedCount > 0;
}

/**
 * Delete guild
 */
async function deleteGuild(guildId) {
  const db = getDatabase();
  const result = await db.collection(COLLECTION_NAME).deleteOne({ _id: new ObjectId(guildId) });
  return result.deletedCount > 0;
}

/**
 * Add assistant to guild
 */
async function addAssistantToGuild(guildId, assistantName) {
  const db = getDatabase();
  
  const result = await db.collection(COLLECTION_NAME).updateOne(
    { _id: new ObjectId(guildId) },
    { 
      $addToSet: { guildAssistants: assistantName },
      $set: { updatedAt: new Date() }
    }
  );
  
  return result.modifiedCount > 0;
}

/**
 * Remove assistant from guild
 */
async function removeAssistantFromGuild(guildId, assistantName) {
  const db = getDatabase();
  
  const result = await db.collection(COLLECTION_NAME).updateOne(
    { _id: new ObjectId(guildId) },
    { 
      $pull: { guildAssistants: assistantName },
      $set: { updatedAt: new Date() }
    }
  );
  
  return result.modifiedCount > 0;
}

/**
 * Get guild by member username
 * @param {string} username - Username to search for
 * @returns {Promise<Object|null>} - Guild object or null if not found
 */
async function getGuildByMember(username) {
  const db = getDatabase();
  
  // Check if user is guild master, assistant, or member
  const guild = await db.collection(COLLECTION_NAME).findOne({
    $or: [
      { guildMasterName: username },
      { guildAssistants: username },
      { guildMemberNames: username }
    ]
  });
  
  return guild;
}

/**
 * Get user's role in guild
 * @param {string} username - Username to check
 * @returns {Promise<string|null>} - 'gmaster', 'gassist', 'gmember', or null if not in guild
 */
async function getUserGuildRole(username) {
  const db = getDatabase();
  
  // Check if user is guild master
  const guildAsMaster = await db.collection(COLLECTION_NAME).findOne({ 
    guildMasterName: username 
  });
  if (guildAsMaster) {
    return 'gmaster';
  }
  
  // Check if user is assistant
  const guildAsAssistant = await db.collection(COLLECTION_NAME).findOne({ 
    guildAssistants: username 
  });
  if (guildAsAssistant) {
    return 'gassist';
  }
  
  // Check if user is member
  const guildAsMember = await db.collection(COLLECTION_NAME).findOne({ 
    guildMemberNames: username 
  });
  if (guildAsMember) {
    return 'gmember';
  }
  
  return null;
}

module.exports = {
  createGuild,
  getAllGuilds,
  getGuildById,
  getGuildByName,
  getGuildByMember,
  verifyGuildPassword,
  addMemberToGuild,
  removeMemberFromGuild,
  updateGuild,
  deleteGuild,
  addAssistantToGuild,
  removeAssistantFromGuild,
  getUserGuildRole
};
