const { v4: uuidv4 } = require('uuid');

/**
 * User data structure
 * @typedef {Object} User
 * @property {string} id - UUID v4
 * @property {string} username - Unique username (3-20 characters)
 * @property {string} ign - In Game Name
 * @property {string} passwordHash - bcrypt hashed password
 * @property {string} role - User role: 'gmember', 'gmaster', 'gassist', or 'admin'
 * @property {string} createdAt - ISO 8601 timestamp
 */

/**
 * Valid user roles
 */
const VALID_ROLES = ['gmember', 'gmaster', 'gassist', 'admin'];
const DEFAULT_ROLE = 'gmember';

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
 * Determine user role based on username
 * @param {string} username - Username
 * @returns {string} User role
 */
function determineUserRole(username) {
  // Special case: 'bear' is always admin
  if (username === 'bear') {
    return 'admin';
  }
  return DEFAULT_ROLE;
}

/**
 * Create a new user object
 * @param {string} username - Username
 * @param {string} ign - In Game Name
 * @param {string} passwordHash - Hashed password
 * @param {string} role - User role (optional, will be determined if not provided)
 * @returns {User} User object
 */
function createUserObject(username, ign, passwordHash, role = null) {
  return {
    id: uuidv4(),
    username,
    ign,
    passwordHash,
    role: role || determineUserRole(username),
    createdAt: new Date().toISOString()
  };
}

module.exports = {
  validateUsername,
  validateEmail,
  validatePassword,
  createUserObject,
  determineUserRole,
  VALID_ROLES,
  DEFAULT_ROLE
};
