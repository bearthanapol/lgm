/**
 * User Role Manager - Handles updating user roles based on guild membership
 */

const { findUserByUsername } = require('./dataManager');
const { getUserGuildRole } = require('./guildModel');

/**
 * Update user's role based on their guild membership
 * @param {string} username - Username to update
 * @returns {Promise<string>} - Updated role
 */
async function updateUserRole(username) {
  // Special case: 'bear' is always admin
  if (username === 'bear') {
    return 'admin';
  }

  // Get user's guild role
  const guildRole = await getUserGuildRole(username);
  
  // Return guild role or default to gmember
  return guildRole || 'gmember';
}

/**
 * Get user's current role (checks guild membership)
 * @param {string} username - Username to check
 * @returns {Promise<string>} - User's role
 */
async function getUserRole(username) {
  return await updateUserRole(username);
}

module.exports = {
  updateUserRole,
  getUserRole
};
