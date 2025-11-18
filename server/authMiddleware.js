const jwt = require('jsonwebtoken');

// JWT secret key - in production, this should be in environment variables
const JWT_SECRET = process.env.JWT_SECRET || 'lgm-gaming-secret-key-change-in-production';

/**
 * JWT Authentication Middleware
 * Verifies JWT token from Authorization header and attaches user data to request
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
function authenticateToken(req, res, next) {
  // Get token from Authorization header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Format: "Bearer TOKEN"

  // Check if token exists
  if (!token) {
    return res.status(401).json({ 
      success: false, 
      error: 'Unauthorized - No token provided' 
    });
  }

  // Verify token
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      // Token is invalid or expired
      return res.status(401).json({ 
        success: false, 
        error: 'Unauthorized - Invalid or expired token' 
      });
    }

    // Attach user data to request object
    req.user = {
      userId: decoded.userId,
      username: decoded.username
    };

    // Continue to next middleware/route handler
    next();
  });
}

module.exports = {
  authenticateToken,
  JWT_SECRET
};
