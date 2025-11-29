/**
 * Migration script to move users from users.json to MongoDB
 * Run this once to migrate existing users
 */

// Load environment variables
require('dotenv').config();

const fs = require('fs').promises;
const path = require('path');
const { connectToDatabase, closeDatabaseConnection } = require('./database');
const { saveUsers } = require('./dataManager');

const USERS_FILE = path.join(__dirname, 'users.json');

async function migrateUsers() {
  try {
    console.log('Starting user migration to MongoDB...');
    
    // Connect to database
    await connectToDatabase();
    console.log('✓ Connected to MongoDB');
    
    // Check if users.json exists
    try {
      await fs.access(USERS_FILE);
    } catch (error) {
      console.log('No users.json file found. Nothing to migrate.');
      await closeDatabaseConnection();
      return;
    }
    
    // Read users from JSON file
    const data = await fs.readFile(USERS_FILE, 'utf8');
    const users = JSON.parse(data);
    
    if (users.length === 0) {
      console.log('users.json is empty. Nothing to migrate.');
      await closeDatabaseConnection();
      return;
    }
    
    console.log(`Found ${users.length} users in users.json`);
    
    // Save to MongoDB
    await saveUsers(users);
    console.log(`✓ Successfully migrated ${users.length} users to MongoDB`);
    
    // Optionally backup the JSON file
    const backupFile = path.join(__dirname, 'users.json.backup');
    await fs.copyFile(USERS_FILE, backupFile);
    console.log(`✓ Created backup at ${backupFile}`);
    
    console.log('\nMigration complete! Users are now stored in MongoDB.');
    console.log('You can safely delete users.json if you want.');
    
    await closeDatabaseConnection();
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
}

// Run migration if this script is executed directly
if (require.main === module) {
  migrateUsers().then(() => {
    console.log('Migration script finished');
    process.exit(0);
  }).catch(error => {
    console.error('Migration script error:', error);
    process.exit(1);
  });
}

module.exports = { migrateUsers };
