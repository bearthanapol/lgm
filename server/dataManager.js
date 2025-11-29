const fs = require('fs').promises;
const path = require('path');

const USERS_FILE = path.join(__dirname, 'users.json');

/**
 * Initialize users file if it doesn't exist
 */
async function initializeUsersFile() {
  try {
    await fs.access(USERS_FILE);
  } catch (error) {
    // File doesn't exist, create it with empty array
    await fs.writeFile(USERS_FILE, JSON.stringify([], null, 2), 'utf8');
  }
}

/**
 * Get all users from the JSON file
 * @returns {Promise<Array>} Array of user objects
 */
async function getUsers() {
  try {
    await initializeUsersFile();
    const data = await fs.readFile(USERS_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading users file:', error);
    throw new Error('Failed to read users data');
  }
}

/**
 * Save users array to the JSON file
 * @param {Array} users - Array of user objects to save
 * @returns {Promise<void>}
 */
async function saveUsers(users) {
  try {
    await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2), 'utf8');
  } catch (error) {
    console.error('Error writing users file:', error);
    throw new Error('Failed to save users data');
  }
}

/**
 * Find a user by username
 * @param {string} username - Username to search for
 * @returns {Promise<Object|null>} User object or null if not found
 */
async function findUserByUsername(username) {
  try {
    const users = await getUsers();
    return users.find(user => user.username === username) || null;
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
    const users = await getUsers();
    return users.find(user => user.email === email) || null;
  } catch (error) {
    console.error('Error finding user by email:', error);
    throw new Error('Failed to find user');
  }
}

/**
 * Find a user by IGN (In-Game Name)
 * @param {string} ign - IGN to search for
 * @returns {Promise<Object|null>} User object or null if not found
 */
async function findUserByIGN(ign) {
  try {
    const users = await getUsers();
    return users.find(user => user.ign && user.ign.toLowerCase() === ign.toLowerCase()) || null;
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
    const users = await getUsers();
    users.push(userData);
    await saveUsers(users);
    return userData;
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
