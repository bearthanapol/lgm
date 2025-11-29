const { getDatabase } = require('./database');
const fs = require('fs').promises;
const path = require('path');

const COLLECTION_NAME = 'users';
const USERS_FILE = path.join(__dirname, 'users.json');

/**
 * Get all users from MongoDB (with fallback to JSON file)
 * @returns {Promise<Array>} Array of user objects
 */
async function getUsers() {
  try {
    const db = getDatabase();
    const users = await db.collection(COLLECTION_NAME).find({}).toArray();
    
    // If MongoDB is empty, try to load from JSON file
    if (users.length === 0) {
      try {
        await fs.access(USERS_FILE);
        const data = await fs.readFile(USERS_FILE, 'utf8');
        const jsonUsers = JSON.parse(data);
        if (jsonUsers.length > 0) {
          console.log(`⚠ Found ${jsonUsers.length} users in JSON file. Auto-migrating to MongoDB...`);
          await saveUsers(jsonUsers);
          return jsonUsers;
        }
      } catch (fileError) {
        // JSON file doesn't exist or is empty, that's okay
      }
    }
    
    return users;
  } catch (error) {
    console.error('Error reading users from database:', error);
    throw new Error('Failed to read users data');
  }
}

/**
 * Save users array to MongoDB (for migration purposes)
 * @param {Array} users - Array of user objects to save
 * @returns {Promise<void>}
 */
async function saveUsers(users) {
  try {
    const db = getDatabase();
    // Clear existing users and insert new ones
    await db.collection(COLLECTION_NAME).deleteMany({});
    if (users.length > 0) {
      await db.collection(COLLECTION_NAME).insertMany(users);
    }
  } catch (error) {
    console.error('Error writing users to database:', error);
    throw new Error('Failed to save users data');
  }
}

/**
 * Find a user by username (checks MongoDB first, then JSON file as fallback)
 * @param {string} username - Username to search for
 * @returns {Promise<Object|null>} User object or null if not found
 */
async function findUserByUsername(username) {
  try {
    const db = getDatabase();
    let user = await db.collection(COLLECTION_NAME).findOne({ username });
    
    // If not found in MongoDB, check JSON file and auto-migrate
    if (!user) {
      try {
        await fs.access(USERS_FILE);
        const data = await fs.readFile(USERS_FILE, 'utf8');
        const jsonUsers = JSON.parse(data);
        user = jsonUsers.find(u => u.username === username);
        
        if (user) {
          console.log(`⚠ User '${username}' found in JSON file. Auto-migrating all users to MongoDB...`);
          await saveUsers(jsonUsers);
        }
      } catch (fileError) {
        // JSON file doesn't exist, that's okay
      }
    }
    
    return user;
  } catch (error) {
    console.error('Error finding user by username:', error);
    throw new Error('Failed to find user');
  }
}

/**
 * Find a user by email
 * @param {string} email - Email to search for
 * @returns {Promise<Object|null>} User object or null if not found
 */
async function findUserByEmail(email) {
  try {
    const db = getDatabase();
    const user = await db.collection(COLLECTION_NAME).findOne({ email });
    return user;
  } catch (error) {
    console.error('Error finding user by email:', error);
    throw new Error('Failed to find user');
  }
}

/**
 * Find a user by IGN (In-Game Name) (checks MongoDB first, then JSON file as fallback)
 * @param {string} ign - IGN to search for
 * @returns {Promise<Object|null>} User object or null if not found
 */
async function findUserByIGN(ign) {
  try {
    const db = getDatabase();
    // Case-insensitive search using regex
    let user = await db.collection(COLLECTION_NAME).findOne({ 
      ign: { $regex: new RegExp(`^${ign}$`, 'i') }
    });
    
    // If not found in MongoDB, check JSON file and auto-migrate
    if (!user) {
      try {
        await fs.access(USERS_FILE);
        const data = await fs.readFile(USERS_FILE, 'utf8');
        const jsonUsers = JSON.parse(data);
        user = jsonUsers.find(u => u.ign && u.ign.toLowerCase() === ign.toLowerCase());
        
        if (user) {
          console.log(`⚠ User with IGN '${ign}' found in JSON file. Auto-migrating all users to MongoDB...`);
          await saveUsers(jsonUsers);
        }
      } catch (fileError) {
        // JSON file doesn't exist, that's okay
      }
    }
    
    return user;
  } catch (error) {
    console.error('Error finding user by IGN:', error);
    throw new Error('Failed to find user');
  }
}

/**
 * Create a new user
 * @param {Object} userData - User data object
 * @returns {Promise<Object>} Created user object
 */
async function createUser(userData) {
  try {
    const db = getDatabase();
    const result = await db.collection(COLLECTION_NAME).insertOne(userData);
    return { ...userData, _id: result.insertedId };
  } catch (error) {
    console.error('Error creating user:', error);
    throw new Error('Failed to create user');
  }
}

module.exports = {
  getUsers,
  saveUsers,
  findUserByUsername,
  findUserByEmail,
  findUserByIGN,
  createUser
};
