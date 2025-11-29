const express = require('express');
const router = express.Router();
const petModel = require('./petModel');

/**
 * GET /api/pets - Get all pets
 */
router.get('/', async (req, res) => {
  try {
    const pets = await petModel.getAllPets();
    res.json({
      success: true,
      data: pets
    });
  } catch (error) {
    console.error('Error fetching pets:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch pets'
    });
  }
});

/**
 * GET /api/pets/:id - Get pet by ID
 */
router.get('/:id', async (req, res) => {
  try {
    const pet = await petModel.getPetById(req.params.id);
    
    if (!pet) {
      return res.status(404).json({
        success: false,
        error: 'Pet not found'
      });
    }
    
    res.json({
      success: true,
      data: pet
    });
  } catch (error) {
    console.error('Error fetching pet:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch pet'
    });
  }
});

/**
 * POST /api/pets - Create new pet
 */
router.post('/', async (req, res) => {
  try {
    const newPet = await petModel.createPet(req.body);
    res.status(201).json({
      success: true,
      data: newPet,
      message: 'Pet created successfully'
    });
  } catch (error) {
    console.error('Error creating pet:', error);
    res.status(400).json({
      success: false,
      error: error.message || 'Failed to create pet'
    });
  }
});

/**
 * PUT /api/pets/:id - Update pet
 */
router.put('/:id', async (req, res) => {
  try {
    const updated = await petModel.updatePet(req.params.id, req.body);
    
    if (!updated) {
      return res.status(404).json({
        success: false,
        error: 'Pet not found'
      });
    }
    
    res.json({
      success: true,
      message: 'Pet updated successfully'
    });
  } catch (error) {
    console.error('Error updating pet:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to update pet'
    });
  }
});

/**
 * POST /api/pets/reorder - Update pet display order
 */
router.post('/reorder', async (req, res) => {
  try {
    const { order } = req.body;
    
    if (!order || !Array.isArray(order)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid order data'
      });
    }
    
    await petModel.updatePetOrder(order);
    
    res.json({
      success: true,
      message: 'Pet order updated successfully'
    });
  } catch (error) {
    console.error('Error updating pet order:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to update pet order'
    });
  }
});

/**
 * DELETE /api/pets/:id - Delete pet
 */
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await petModel.deletePet(req.params.id);
    
    if (!deleted) {
      return res.status(404).json({
        success: false,
        error: 'Pet not found'
      });
    }
    
    res.json({
      success: true,
      message: 'Pet deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting pet:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to delete pet'
    });
  }
});

module.exports = router;
