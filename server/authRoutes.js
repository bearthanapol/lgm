const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validateUsername, validateEmail, validatePassword, createUserObject } = require('./userModel');
const { findUserByUsername, findUserByEmail, createUser } = require('./dataManager');
const { JWT_SECRET } = require('./authMiddleware');

const router = express.Router();

// Salt rounds for bcrypt
const SALT_ROUNDS = 10;

/**
 * POST /api/auth/signup
 * Register a new user
 */
router.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Validate input data
    const usernameValidation = validateUsername(username);
    if (!usernameValidation.valid) {
      return res.status(400).json({ 
        success: false, 
        error: usernameValidation.error 
      });
    }

    const emailValidation = validateEmail(email);
    if (!emailValidation.valid) {
      return res.status(400).json({ 
        success: false, 
        error: emailValidation.error 
      });
    }

    const passwordValidation = validatePassword(password);
    if (!passwordValidation.valid) {
      return res.status(400).json({ 
        success: false, 
        error: passwordValidation.error 
      });
    }

    // Check for duplicate username
    const existingUserByUsername = await findUserByUsername(username);
    if (existingUserByUsername) {
      return res.status(409).json({ 
        success: false, 
        error: 'Username already exists' 
      });
    }

    // Check for duplicate email
    const existingUserByEmail = await findUserByEmail(email);
    if (existingUserByEmail) {
      return res.status(409).json({ 
        success: false, 
        error: 'Email already registered' 
      });
    }

    // Hash password with bcrypt
    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

    // Create user object
    const newUser = createUserObject(username, email, passwordHash);

    // Save user to database
    await createUser(newUser);

    // Generate JWT token with 24-hour expiration
    const token = jwt.sign(
      { 
        userId: newUser.id, 
        username: newUser.username 
      },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    // Return success response with token and user data (without password hash)
    res.status(201).json({
      success: true,
      token,
      user: {
        username: newUser.username,
        email: newUser.email
      }
    });

  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Internal server error during signup' 
    });
  }
});

/**
 * POST /api/auth/login
 * Authenticate a user and return JWT token
 */
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validate input
    if (!username || !password) {
      return res.status(400).json({ 
        success: false, 
        error: 'Username and password are required' 
      });
    }

    // Find user by username
    const user = await findUserByUsername(username);
    if (!user) {
      return res.status(401).json({ 
        success: false, 
        error: 'Invalid credentials' 
      });
    }

    // Compare password with stored hash
    const passwordMatch = await bcrypt.compare(password, user.passwordHash);
    if (!passwordMatch) {
      return res.status(401).json({ 
        success: false, 
        error: 'Invalid credentials' 
      });
    }

    // Generate JWT token with 24-hour expiration
    const token = jwt.sign(
      { 
        userId: user.id, 
        username: user.username 
      },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    // Return success response with token and user data
    res.status(200).json({
      success: true,
      token,
      user: {
        username: user.username,
        email: user.email
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Internal server error during login' 
    });
  }
});

/**
 * POST /api/auth/logout
 * Logout endpoint (token removal handled client-side)
 */
router.post('/logout', (req, res) => {
  // In a JWT-based system, logout is primarily handled client-side
  // by removing the token from localStorage
  // This endpoint exists for consistency and potential future server-side token blacklisting
  res.status(200).json({
    success: true,
    message: 'Logout successful'
  });
});

module.exports = router;
