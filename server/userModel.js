const { v4: uuidv4 } = require('uuid');

/**
 * User data structure
 * @typedef {Object} User
 * @property {string} id - UUID v4
 * @property {string} username - Unique username (3-20 characters)
 * @property {string} ign - In Game Name
 * @property {string} passwordHash - bcrypt hashed password
 * @property {string} createdAt - ISO 8601 timestamp
 */

/**
 * Validate username
 * @param {string} username - Username to validate
 * @returns {Object} { valid: boolean, error: string|null }
 */
function validateUsername(username) {
  if (!username) {
    return { valid: false, error: 'Username is required' };
  }
  
  if (typeof username !== 'string') {
    return { valid: false, error: 'Username must be a string' };
  }
  
  if (username.length < 3 || username.length > 20) {
    return { valid: false, error: 'Username must be between 3 and 20 characters' };
  }
  
  return { valid: true, error: null };
}

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {Object} { valid: boolean, error: string|null }
 */
function validateEmail(email) {
  if (!email) {
    return { valid: false, error: 'Email is required' };
  }
  
  if (typeof email !== 'string') {
    return { valid: false, error: 'Email must be a string' };
  }
  
  // Basic email regex pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailRegex.test(email)) {
    return { valid: false, error: 'Invalid email format' };
  }
  
  return { valid: true, error: null };
}

/**
 * Validate password
 * @param {string} password - Password to validate
 * @returns {Object} { valid: boolean, error: string|null }
 */
function validatePassword(password) {
  if (!password) {
    return { valid: false, error: 'Password is required' };
  }
  
  if (typeof password !== 'string') {
    return { valid: false, error: 'Password must be a string' };
  }
  
  if (password.length < 8) {
    return { valid: false, error: 'Password must be at least 8 characters' };
  }
  
  return { valid: true, error: null };
}

/**
 * Create a new user object
 * @param {string} username - Username
 * @param {string} ign - In Game Name
 * @param {string} passwordHash - Hashed password
 * @returns {User} User object
 */
function createUserObject(username, ign, passwordHash) {
  return {
    id: uuidv4(),
    username,
    ign,
    passwordHash,
    createdAt: new Date().toISOString()
  };
}

module.exports = {
  validateUsername,
  validateEmail,
  validatePassword,
  createUserObject
};
