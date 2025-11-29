#!/bin/bash

# Restart Server Script for LGM Gaming Website
# Usage: ./restart-server.sh

echo "🔄 Restarting LGM Server..."

# Find and kill any existing node server.js processes
echo "📍 Stopping existing server..."
pkill -f "node server.js" 2>/dev/null

# Wait a moment for the process to fully stop
sleep 1

# Check if port 3000 is still in use and kill it
if lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null 2>&1 ; then
    echo "⚠️  Port 3000 still in use, forcing kill..."
    lsof -ti:3000 | xargs kill -9 2>/dev/null
    sleep 1
fi

# Start the server
echo "🚀 Starting server..."
node server.js &

# Wait a moment for server to start
sleep 2

# Check if server is running
if lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null 2>&1 ; then
    echo "✅ Server restarted successfully!"
    echo "🌐 Server running at: http://localhost:3000"
else
    echo "❌ Failed to start server. Check for errors above."
    exit 1
fi
