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

module.exports = {
  createGuild,
  getAllGuilds,
  getGuildById,
  getGuildByName,
  verifyGuildPassword,
  addMemberToGuild,
  removeMemberFromGuild,
  updateGuild,
  deleteGuild
};
