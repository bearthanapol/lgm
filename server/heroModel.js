const { getDatabase } = require('./database');
const { ObjectId } = require('mongodb');

const COLLECTION_NAME = 'Hero_db';

/**
 * Get all heroes sorted by displayOrder
 */
async function getAllHeroes() {
  const db = getDatabase();
  const heroes = await db.collection(COLLECTION_NAME)
    .find({})
    .sort({ displayOrder: 1, _id: 1 }) // Sort by displayOrder first, then by _id for heroes without displayOrder
    .toArray();
  return heroes;
}

/**
 * Get hero by ID
 */
async function getHeroById(heroId) {
  const db = getDatabase();
  const hero = await db.collection(COLLECTION_NAME).findOne({ _id: new ObjectId(heroId) });
  return hero;
}

/**
 * Create a new hero
 */
async function createHero(heroData) {
  const db = getDatabase();
  
  const hero = {
    heroname: heroData.name, // Main identifier
    heroPicture: heroData.imageUrl || '', // GitHub URL
    type: heroData.type,
    attack: heroData.attack,
    defense: heroData.defense,
    hp: heroData.hp,
    rarity: heroData.rarity,
    description: heroData.description || '',
    createdAt: new Date(),
    updatedAt: new Date()
  };
  
  const result = await db.collection(COLLECTION_NAME).insertOne(hero);
  return { ...hero, _id: result.insertedId };
}

/**
 * Update hero
 */
async function updateHero(heroId, updateData) {
  const db = getDatabase();
  
  const updateFields = {
    ...updateData,
    updatedAt: new Date()
  };
  
  const result = await db.collection(COLLECTION_NAME).updateOne(
    { _id: new ObjectId(heroId) },
    { $set: updateFields }
  );
  
  return result.modifiedCount > 0;
}

/**
 * Delete hero
 */
async function deleteHero(heroId) {
  const db = getDatabase();
  const result = await db.collection(COLLECTION_NAME).deleteOne({ _id: new ObjectId(heroId) });
  return result.deletedCount > 0;
}

/**
 * Search heroes by name or type
 */
async function searchHeroes(query) {
  const db = getDatabase();
  const heroes = await db.collection(COLLECTION_NAME).find({
    $or: [
      { name: { $regex: query, $options: 'i' } },
      { type: { $regex: query, $options: 'i' } }
    ]
  }).toArray();
  return heroes;
}

module.exports = {
  getAllHeroes,
  getHeroById,
  createHero,
  updateHero,
  deleteHero,
  searchHeroes,
  updateHeroOrder
};


/**
 * Update hero display order
 */
async function updateHeroOrder(heroId, displayOrder) {
  const db = getDatabase();
  const result = await db.collection(COLLECTION_NAME).updateOne(
    { _id: new ObjectId(heroId) },
    { $set: { displayOrder: displayOrder } }
  );
  return result.modifiedCount > 0;
}




/**
 * Create index on displayOrder for better performance with large datasets
 */
async function createDisplayOrderIndex() {
  try {
    const db = getDatabase();
    await db.collection(COLLECTION_NAME).createIndex({ displayOrder: 1 });
    console.log('✓ Created index on displayOrder field');
  } catch (error) {
    console.error('Error creating displayOrder index:', error);
  }
}

// Create index on startup
createDisplayOrderIndex();
