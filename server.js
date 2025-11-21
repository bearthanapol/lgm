require('dotenv').config();

const express = require('express');
const path = require('path');
const cors = require('cors');
const authRoutes = require('./server/authRoutes');
const userRoutes = require('./server/userRoutes');
const heroRoutes = require('./server/heroRoutes');
const guildRoutes = require('./server/guildRoutes');
const guildWarRoutes = require('./server/guildWarRoutes');
const newsRoutes = require('./server/newsRoutes');
const uploadRoutes = require('./server/uploadRoutes');
const teamRoutes = require('./server/teamRoutes');
const debugImageRoutes = require('./server/debugImageRoutes');
const { connectToDatabase, closeDatabaseConnection } = require('./server/database');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
// Configure CORS for development
app.use(cors({
  origin: process.env.NODE_ENV === 'production' ? false : '*',
  credentials: true
}));

// JSON body parser
app.use(express.json());

// Static file serving from /public directory
app.use(express.static(path.join(__dirname, 'public')));

// Mount routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/heroes', heroRoutes);
app.use('/api/guilds', guildRoutes);
app.use('/api/guildwar', guildWarRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/team', teamRoutes);
app.use('/api/debug', debugImageRoutes);

// Basic health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'LGM Gaming Website API is running' });
});

// SPA catch-all route - serve index.html for all non-API routes
// This must come after API routes and static file serving
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    success: false,
    error: 'Internal server error'
  });
});

// Start server and connect to database
async function startServer() {
  try {
    // Try to connect to MongoDB
    try {
      await connectToDatabase();
    } catch (dbError) {
      console.error('✗ MongoDB connection error:', dbError.message);
      console.warn('⚠ Warning: MongoDB connection failed.');
      console.warn('⚠ Retrying in 5 seconds...');
      // Retry logic could be added here, or just fail if strict
      // For now, we'll let it run but warn heavily
    }

    // Start Express server
    app.listen(PORT, () => {
      console.log(`LGM Gaming Website server is running on http://localhost:${PORT}`);
      console.log(`Open your browser to: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

// Handle graceful shutdown
process.on('SIGINT', async () => {
  console.log('\nShutting down gracefully...');
  await closeDatabaseConnection();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('\nShutting down gracefully...');
  await closeDatabaseConnection();
  process.exit(0);
});

startServer();
