const { MongoClient } = require('mongodb');

// MongoDB connection string
const MONGO_URI = 'mongodb+srv://bearthanapol_db_user:WOdCunHGxm5MGZG9@b7k.cj6f4tm.mongodb.net/?appName=b7k';
const DB_NAME = 'lgm_gaming';

let client = null;
let db = null;

/**
 * Connect to MongoDB
 */
async function connectToDatabase() {
  if (db) {
    return db;
  }

  try {
    client = new MongoClient(MONGO_URI);

    await client.connect();
    console.log('✓ Connected to MongoDB successfully');
    
    db = client.db(DB_NAME);
    return db;
  } catch (error) {
    console.error('✗ MongoDB connection error:', error);
    throw error;
  }
}

/**
 * Get database instance
 */
function getDatabase() {
  if (!db) {
    throw new Error('Database not connected. Call connectToDatabase() first.');
  }
  return db;
}

/**
 * Close database connection
 */
async function closeDatabaseConnection() {
  if (client) {
    await client.close();
    client = null;
    db = null;
    console.log('✓ MongoDB connection closed');
  }
}

module.exports = {
  connectToDatabase,
  getDatabase,
  closeDatabaseConnection
};
