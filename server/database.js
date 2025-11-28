const { MongoClient } = require('mongodb');

// MongoDB connection string - supports both MONGODB_URI (Render) and MONGO_URI (local)
const MONGO_URI = process.env.MONGODB_URI || process.env.MONGO_URI;
const DB_NAME = process.env.DB_NAME || 'lgm_gaming';

if (!MONGO_URI) {
  console.warn('⚠ Warning: MONGODB_URI or MONGO_URI environment variable is not set.');
  console.warn('⚠ Database connection will fail. Please check your environment variables.');
}

let client = null;
let db = null;

/**
 * Connect to MongoDB
 */
async function connectToDatabase(retries = 5, delay = 5000) {
  if (db) {
    return db;
  }

  for (let i = 0; i < retries; i++) {
    try {
      console.log(`Attempting to connect to MongoDB (Attempt ${i + 1}/${retries})...`);
      client = new MongoClient(MONGO_URI, {
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
        tls: true,
        tlsAllowInvalidCertificates: true
      });

      await client.connect();
      console.log('✓ Connected to MongoDB successfully');

      db = client.db(DB_NAME);

      // Test the connection
      await db.command({ ping: 1 });
      console.log('✓ MongoDB ping successful');

      return db;
    } catch (error) {
      console.error(`✗ MongoDB connection error (Attempt ${i + 1}/${retries}):`, error.message);
      if (i < retries - 1) {
        console.log(`Retrying in ${delay / 1000} seconds...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      } else {
        console.error('✗ Failed to connect to MongoDB after multiple attempts.');
        throw error;
      }
    }
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
