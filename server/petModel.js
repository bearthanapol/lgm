const { getDatabase } = require('./database');

const COLLECTION_NAME = 'pets';

/**
 * Get all pets
 */
async function getAllPets() {
  const db = getDatabase();
  return await db.collection(COLLECTION_NAME)
    .find({})
    .sort({ displayOrder: 1, name: 1 })
    .toArray();
}

/**
 * Get pet by ID
 */
async function getPetById(id) {
  const { ObjectId } = require('mongodb');
  const db = getDatabase();
  return await db.collection(COLLECTION_NAME).findOne({ _id: new ObjectId(id) });
}

/**
 * Create new pet
 */
async function createPet(petData) {
  const db = getDatabase();
  
  const pet = {
    name: petData.name,
    petPicture: petData.petPicture || '',
    displayOrder: petData.displayOrder || 999,
    createdAt: new Date(),
    updatedAt: new Date()
  };
  
  const result = await db.collection(COLLECTION_NAME).insertOne(pet);
  return { ...pet, _id: result.insertedId };
}

/**
 * Update pet
 */
async function updatePet(id, petData) {
  const { ObjectId } = require('mongodb');
  const db = getDatabase();
  
  const updateData = {
    ...petData,
    updatedAt: new Date()
  };
  
  const result = await db.collection(COLLECTION_NAME).updateOne(
    { _id: new ObjectId(id) },
    { $set: updateData }
  );
  
  return result.modifiedCount > 0;
}

/**
 * Update pet display order
 */
async function updatePetOrder(orderData) {
  const { ObjectId } = require('mongodb');
  const db = getDatabase();
  
  const bulkOps = orderData.map(item => ({
    updateOne: {
      filter: { _id: new ObjectId(item.petId) },
      update: { $set: { displayOrder: item.displayOrder, updatedAt: new Date() } }
    }
  }));
  
  const result = await db.collection(COLLECTION_NAME).bulkWrite(bulkOps);
  return result.modifiedCount > 0;
}

/**
 * Delete pet
 */
async function deletePet(id) {
  const { ObjectId } = require('mongodb');
  const db = getDatabase();
  
  const result = await db.collection(COLLECTION_NAME).deleteOne({ _id: new ObjectId(id) });
  return result.deletedCount > 0;
}

module.exports = {
  getAllPets,
  getPetById,
  createPet,
  updatePet,
  updatePetOrder,
  deletePet
};
