const express = require('express');
const router = express.Router();
const newsModel = require('./newsModel');

/**
 * GET /api/news - Get all news posts
 */
router.get('/', async (req, res) => {
  try {
    const publishedOnly = req.query.published === 'true';
    const news = await newsModel.getAllNews(publishedOnly);
    res.json({
      success: true,
      data: news
    });
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch news'
    });
  }
});

/**
 * GET /api/news/:id - Get news by ID
 */
router.get('/:id', async (req, res) => {
  try {
    const news = await newsModel.getNewsById(req.params.id);
    
    if (!news) {
      return res.status(404).json({
        success: false,
        error: 'News not found'
      });
    }
    
    res.json({
      success: true,
      data: news
    });
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch news'
    });
  }
});

/**
 * POST /api/news - Create a new news post
 */
router.post('/', async (req, res) => {
  try {
    console.log('Received news creation request:', req.body);
    
    const { title, content, category, author, published } = req.body;
    
    if (!title || !content) {
      console.log('Missing required fields');
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: title, content'
      });
    }
    
    const newsData = {
      title,
      content,
      category: category || 'general',
      author: author || 'Admin',
      published: published !== false
    };
    
    console.log('Creating news with data:', newsData);
    const newNews = await newsModel.createNews(newsData);
    console.log('News created successfully:', newNews._id);
    
    res.status(201).json({
      success: true,
      data: newNews,
      message: 'News created successfully'
    });
  } catch (error) {
    console.error('Error creating news:', error);
    console.error('Error stack:', error.stack);
    res.status(500).json({
      success: false,
      error: 'Failed to create news: ' + error.message
    });
  }
});

/**
 * PUT /api/news/:id - Update news post
 */
router.put('/:id', async (req, res) => {
  try {
    const { title, content, category, published } = req.body;
    
    const updateData = {};
    if (title !== undefined) updateData.title = title;
    if (content !== undefined) updateData.content = content;
    if (category !== undefined) updateData.category = category;
    if (published !== undefined) updateData.published = published;
    
    const updated = await newsModel.updateNews(req.params.id, updateData);
    
    if (!updated) {
      return res.status(404).json({
        success: false,
        error: 'News not found'
      });
    }
    
    res.json({
      success: true,
      message: 'News updated successfully'
    });
  } catch (error) {
    console.error('Error updating news:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to update news'
    });
  }
});

/**
 * DELETE /api/news/:id - Delete news post
 */
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await newsModel.deleteNews(req.params.id);
    
    if (!deleted) {
      return res.status(404).json({
        success: false,
        error: 'News not found'
      });
    }
    
    res.json({
      success: true,
      message: 'News deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting news:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to delete news'
    });
  }
});

/**
 * GET /api/news/category/:category - Get news by category
 */
router.get('/category/:category', async (req, res) => {
  try {
    const publishedOnly = req.query.published === 'true';
    const news = await newsModel.getNewsByCategory(req.params.category, publishedOnly);
    res.json({
      success: true,
      data: news
    });
  } catch (error) {
    console.error('Error fetching news by category:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch news'
    });
  }
});

module.exports = router;
