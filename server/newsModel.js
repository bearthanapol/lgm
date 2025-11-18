const { getDatabase } = require('./database');
const { ObjectId } = require('mongodb');

const COLLECTION_NAME = 'news_db';

/**
 * Create a news/update post
 */
async function createNews(newsData) {
  const db = getDatabase();
  
  const news = {
    title: newsData.title,
    content: newsData.content,
    category: newsData.category || 'general', // general, update, event, maintenance
    author: newsData.author || 'Admin',
    published: newsData.published !== false, // Default to published
    createdAt: new Date(),
    updatedAt: new Date()
  };
  
  const result = await db.collection(COLLECTION_NAME).insertOne(news);
  return { ...news, _id: result.insertedId };
}

/**
 * Get all news posts
 */
async function getAllNews(publishedOnly = false) {
  const db = getDatabase();
  const filter = publishedOnly ? { published: true } : {};
  const news = await db.collection(COLLECTION_NAME)
    .find(filter)
    .sort({ createdAt: -1 })
    .toArray();
  return news;
}

/**
 * Get news by ID
 */
async function getNewsById(newsId) {
  const db = getDatabase();
  const news = await db.collection(COLLECTION_NAME).findOne({ _id: new ObjectId(newsId) });
  return news;
}

/**
 * Update news post
 */
async function updateNews(newsId, updateData) {
  const db = getDatabase();
  
  const updateFields = {
    ...updateData,
    updatedAt: new Date()
  };
  
  const result = await db.collection(COLLECTION_NAME).updateOne(
    { _id: new ObjectId(newsId) },
    { $set: updateFields }
  );
  
  return result.modifiedCount > 0;
}

/**
 * Delete news post
 */
async function deleteNews(newsId) {
  const db = getDatabase();
  const result = await db.collection(COLLECTION_NAME).deleteOne({ _id: new ObjectId(newsId) });
  return result.deletedCount > 0;
}

/**
 * Get news by category
 */
async function getNewsByCategory(category, publishedOnly = false) {
  const db = getDatabase();
  const filter = { category };
  if (publishedOnly) {
    filter.published = true;
  }
  const news = await db.collection(COLLECTION_NAME)
    .find(filter)
    .sort({ createdAt: -1 })
    .toArray();
  return news;
}

module.exports = {
  createNews,
  getAllNews,
  getNewsById,
  updateNews,
  deleteNews,
  getNewsByCategory
};
