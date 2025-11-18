const express = require('express');
const multer = require('multer');
const router = express.Router();
const { uploadImageToGitHub } = require('./githubUpload');

// Configure multer for memory storage
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    // Accept images only
    if (!file.mimetype.startsWith('image/')) {
      return cb(new Error('Only image files are allowed'), false);
    }
    cb(null, true);
  }
});

/**
 * POST /api/upload/hero-image - Upload hero image to GitHub
 */
router.post('/hero-image', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        error: 'No image file provided'
      });
    }

    const { originalname, buffer } = req.file;
    
    // Upload to GitHub
    const imageUrl = await uploadImageToGitHub(buffer, originalname, 'images/heroes');
    
    res.json({
      success: true,
      imageUrl: imageUrl,
      message: 'Image uploaded successfully'
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to upload image'
    });
  }
});

/**
 * POST /api/upload/news-image - Upload news/update image to GitHub
 */
router.post('/news-image', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        error: 'No image file provided'
      });
    }

    const { originalname, buffer } = req.file;
    
    // Upload to GitHub
    const imageUrl = await uploadImageToGitHub(buffer, originalname, 'images/news');
    
    res.json({
      success: true,
      imageUrl: imageUrl,
      message: 'Image uploaded successfully'
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to upload image'
    });
  }
});

module.exports = router;
