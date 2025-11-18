const { getDatabase } = require('./database');
const { ObjectId } = require('mongodb');
const bcrypt = require('bcrypt');

const COLLECTION_NAME = 'user_db';

/**
 * Create a new user
 */
async function createUser(userData) {
  const db = getDatabase();
  
  // Check if username already exists
  const existingUser = await db.collection(COLLECTION_NAME).findOne({ 
    username: userData.username 
  });
  
  if (existingUser) {
    throw new Error('Username already exists');
  }
  
  // Hash password
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  
  const user = {
    username: userData.username,
    password: hashedPassword,
    inGameName: userData.inGameName || userData.username,
    heroList: [], // Array of hero objects: { heroname, heroPicture, itemSet, ring, star }
    role: userData.role || 'Guild Member', // Admin, Guild Master, Guild Member
    createdAt: new Date(),
    updatedAt: new Date()
  };
  
  const result = await db.collection(COLLECTION_NAME).insertOne(user);
  return { ...user, _id: result.insertedId, password: undefined };
}

/**
 * Find user by username
 */
async function findUserByUsername(username) {
  const db = getDatabase();
  const user = await db.collection(COLLECTION_NAME).findOne({ username });
  return user;
}

/**
 * Find user by ID
 */
async function findUserById(userId) {
  const db = getDatabase();
  const user = await db.collection(COLLECTION_NAME).findOne({ _id: new ObjectId(userId) });
  return user;
}

/**
 * Verify user password
 */
async function verifyPassword(username, password) {
  const user = await findUserByUsername(username);
  if (!user) {
    return null;
  }
  
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return null;
  }
  
  return { ...user, password: undefined };
}

/**
 * Update user profile
 */
async function updateUser(userId, updateData) {
  const db = getDatabase();
  
  const updateFields = {
    ...updateData,
    updatedAt: new Date()
  };
  
  // Don't allow direct password updates through this method
  delete updateFields.password;
  
  const result = await db.collection(COLLECTION_NAME).updateOne(
    { _id: new ObjectId(userId) },
    { $set: updateFields }
  );
  
  return result.modifiedCount > 0;
}

/**
 * Add hero to user's hero list
 */
async function addHeroToUser(userId, heroData) {
  const db = getDatabase();
  
  const hero = {
    heroname: heroData.heroname,
    heroPicture: heroData.heroPicture,
    itemSet: heroData.itemSet || '',
    ring: heroData.ring || '',
    star: heroData.star || 0
  };
  
  const result = await db.collection(COLLECTION_NAME).updateOne(
    { _id: new ObjectId(userId) },
    { 
      $push: { heroList: hero },
      $set: { updatedAt: new Date() }
    }
  );
  
  return result.modifiedCount > 0;
}

/**
 * Remove hero from user's hero list
 */
async function removeHeroFromUser(userId, heroname) {
  const db = getDatabase();
  
  const result = await db.collection(COLLECTION_NAME).updateOne(
    { _id: new ObjectId(userId) },
    { 
      $pull: { heroList: { heroname } },
      $set: { updatedAt: new Date() }
    }
  );
  
  return result.modifiedCount > 0;
}

/**
 * Update user's hero
 */
async function updateUserHero(userId, heroname, updateData) {
  const db = getDatabase();
  
  const result = await db.collection(COLLECTION_NAME).updateOne(
    { _id: new ObjectId(userId), 'heroList.heroname': heroname },
    { 
      $set: { 
        'heroList.$.itemSet': updateData.itemSet,
        'heroList.$.ring': updateData.ring,
        'heroList.$.star': updateData.star,
        updatedAt: new Date()
      }
    }
  );
  
  return result.modifiedCount > 0;
}

/**
 * Get all users (admin only)
 */
async function getAllUsers() {
  const db = getDatabase();
  const users = await db.collection(COLLECTION_NAME).find({}, { 
    projection: { password: 0 } 
  }).toArray();
  return users;
}

module.exports = {
  createUser,
  findUserByUsername,
  findUserById,
  verifyPassword,
  updateUser,
  addHeroToUser,
  removeHeroFromUser,
  updateUserHero,
  getAllUsers
};
