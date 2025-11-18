const express = require('express');
const router = express.Router();
const heroModel = require('./heroModel');

/**
 * GET /api/heroes - Get all heroes
 */
router.get('/', async (req, res) => {
  try {
    const heroes = await heroModel.getAllHeroes();
    res.json({
      success: true,
      data: heroes
    });
  } catch (error) {
    console.error('Error fetching heroes:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch heroes'
    });
  }
});

/**
 * GET /api/heroes/:id - Get hero by ID
 */
router.get('/:id', async (req, res) => {
  try {
    const hero = await heroModel.getHeroById(req.params.id);
    
    if (!hero) {
      return res.status(404).json({
        success: false,
        error: 'Hero not found'
      });
    }
    
    res.json({
      success: true,
      data: hero
    });
  } catch (error) {
    console.error('Error fetching hero:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch hero'
    });
  }
});

/**
 * POST /api/heroes - Create a new hero
 */
router.post('/', async (req, res) => {
  try {
    const { name, type, attack, defense, hp, rarity, description, imageUrl } = req.body;
    
    // Validation
    if (!name || !type || attack === undefined || defense === undefined || hp === undefined || !rarity) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: name, type, attack, defense, hp, rarity'
      });
    }
    
    const heroData = {
      name,
      type,
      attack: parseInt(attack),
      defense: parseInt(defense),
      hp: parseInt(hp),
      rarity,
      description: description || '',
      imageUrl: imageUrl || ''
    };
    
    const newHero = await heroModel.createHero(heroData);
    
    res.status(201).json({
      success: true,
      data: newHero,
      message: 'Hero created successfully'
    });
  } catch (error) {
    console.error('Error creating hero:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to create hero'
    });
  }
});

/**
 * PUT /api/heroes/:id - Update hero
 */
router.put('/:id', async (req, res) => {
  try {
    const { name, type, attack, defense, hp, rarity, description, imageUrl } = req.body;
    
    const updateData = {};
    if (name !== undefined) updateData.name = name;
    if (type !== undefined) updateData.type = type;
    if (attack !== undefined) updateData.attack = parseInt(attack);
    if (defense !== undefined) updateData.defense = parseInt(defense);
    if (hp !== undefined) updateData.hp = parseInt(hp);
    if (rarity !== undefined) updateData.rarity = rarity;
    if (description !== undefined) updateData.description = description;
    if (imageUrl !== undefined) updateData.imageUrl = imageUrl;
    
    const updated = await heroModel.updateHero(req.params.id, updateData);
    
    if (!updated) {
      return res.status(404).json({
        success: false,
        error: 'Hero not found'
      });
    }
    
    res.json({
      success: true,
      message: 'Hero updated successfully'
    });
  } catch (error) {
    console.error('Error updating hero:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to update hero'
    });
  }
});

/**
 * DELETE /api/heroes/:id - Delete hero
 */
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await heroModel.deleteHero(req.params.id);
    
    if (!deleted) {
      return res.status(404).json({
        success: false,
        error: 'Hero not found'
      });
    }
    
    res.json({
      success: true,
      message: 'Hero deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting hero:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to delete hero'
    });
  }
});

/**
 * GET /api/heroes/search/:query - Search heroes
 */
router.get('/search/:query', async (req, res) => {
  try {
    const heroes = await heroModel.searchHeroes(req.params.query);
    res.json({
      success: true,
      data: heroes
    });
  } catch (error) {
    console.error('Error searching heroes:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to search heroes'
    });
  }
});

module.exports = router;
