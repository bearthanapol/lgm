/**
 * Role-based access control middleware
 */

/**
 * Middleware to check if user has required role
 * @param {string|Array<string>} allowedRoles - Single role or array of allowed roles
 * @returns {Function} Express middleware function
 */
function requireRole(allowedRoles) {
  // Convert single role to array for consistent handling
  const roles = Array.isArray(allowedRoles) ? allowedRoles : [allowedRoles];

  return (req, res, next) => {
    // Check if user is authenticated (should be set by authMiddleware)
    if (!req.user) {
      return res.status(401).json({
        success: false,
        error: 'Authentication required'
      });
    }

    // Get user role from request (set by authMiddleware from JWT)
    const userRole = req.user.role || 'gmember';

    // Check if user's role is in the allowed roles
    if (!roles.includes(userRole)) {
      return res.status(403).json({
        success: false,
        error: 'Insufficient permissions'
      });
    }

    // User has required role, proceed
    next();
  };
}

/**
 * Middleware to check if user is admin
 */
function requireAdmin(req, res, next) {
  return requireRole('admin')(req, res, next);
}

/**
 * Middleware to check if user is gmaster or gassist (guild leadership)
 */
function requireGuildLeadership(req, res, next) {
  return requireRole(['gmaster', 'gassist', 'admin'])(req, res, next);
}

module.exports = {
  requireRole,
  requireAdmin,
  requireGuildLeadership
};
