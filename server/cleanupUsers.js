/**
 * Utility script to manage user data
 * Options:
 * - migrate: Migrate users from JSON to MongoDB
 * - list: List all users in MongoDB
 * - clear: Clear all users from MongoDB (use with caution!)
 */

// Load environment variables
require('dotenv').config();

const { connectToDatabase, closeDatabaseConnection, getDatabase } = require('./database');
const fs = require('fs').promises;
const path = require('path');

const USERS_FILE = path.join(__dirname, 'users.json');
const COLLECTION_NAME = 'users';

async function listUsers() {
  try {
    await connectToDatabase();
    const db = getDatabase();
    const users = await db.collection(COLLECTION_NAME).find({}).toArray();
    
    console.log(`\n📋 Users in MongoDB: ${users.length}`);
    users.forEach((user, index) => {
      console.log(`${index + 1}. ${user.username} (${user.ign}) - Role: ${user.role}`);
    });
    
    await closeDatabaseConnection();
  } catch (error) {
    console.error('Error listing users:', error);
    process.exit(1);
  }
}

async function migrateUsers() {
  try {
    await connectToDatabase();
    const db = getDatabase();
    
    // Check if users.json exists
    try {
      await fs.access(USERS_FILE);
    } catch (error) {
      console.log('❌ No users.json file found.');
      await closeDatabaseConnection();
      return;
    }
    
    // Read users from JSON
    const data = await fs.readFile(USERS_FILE, 'utf8');
    const jsonUsers = JSON.parse(data);
    
    if (jsonUsers.length === 0) {
      console.log('❌ users.json is empty.');
      await closeDatabaseConnection();
      return;
    }
    
    console.log(`📦 Found ${jsonUsers.length} users in users.json`);
    
    // Check existing users in MongoDB
    const existingUsers = await db.collection(COLLECTION_NAME).find({}).toArray();
    console.log(`📊 Current users in MongoDB: ${existingUsers.length}`);
    
    // Insert users that don't exist
    let migrated = 0;
    for (const user of jsonUsers) {
      const exists = await db.collection(COLLECTION_NAME).findOne({ username: user.username });
      if (!exists) {
        await db.collection(COLLECTION_NAME).insertOne(user);
        migrated++;
        console.log(`  ✓ Migrated: ${user.username}`);
      } else {
        console.log(`  ⊘ Skipped (exists): ${user.username}`);
      }
    }
    
    console.log(`\n✅ Migration complete! Migrated ${migrated} new users.`);
    
    // Create backup
    const backupFile = path.join(__dirname, 'users.json.backup');
    await fs.copyFile(USERS_FILE, backupFile);
    console.log(`💾 Backup created: ${backupFile}`);
    
    await closeDatabaseConnection();
  } catch (error) {
    console.error('Error migrating users:', error);
    process.exit(1);
  }
}

async function clearUsers() {
  try {
    await connectToDatabase();
    const db = getDatabase();
    
    const result = await db.collection(COLLECTION_NAME).deleteMany({});
    console.log(`🗑️  Cleared ${result.deletedCount} users from MongoDB`);
    
    await closeDatabaseConnection();
  } catch (error) {
    console.error('Error clearing users:', error);
    process.exit(1);
  }
}

// Parse command line arguments
const command = process.argv[2];

switch (command) {
  case 'list':
    listUsers().then(() => process.exit(0));
    break;
  case 'migrate':
    migrateUsers().then(() => process.exit(0));
    break;
  case 'clear':
    console.log('⚠️  WARNING: This will delete ALL users from MongoDB!');
    console.log('Press Ctrl+C to cancel, or wait 5 seconds to continue...');
    setTimeout(() => {
      clearUsers().then(() => process.exit(0));
    }, 5000);
    break;
  default:
    console.log('Usage: node cleanupUsers.js [command]');
    console.log('Commands:');
    console.log('  list    - List all users in MongoDB');
    console.log('  migrate - Migrate users from users.json to MongoDB');
    console.log('  clear   - Clear all users from MongoDB (WARNING!)');
    process.exit(0);
}
