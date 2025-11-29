// Script to delete test_user and bear from the database
require('dotenv').config();
const { connectToDatabase, closeDatabaseConnection, getDatabase } = require('./server/database');

async function deleteTestUsers() {
  try {
    await connectToDatabase();
    const db = getDatabase();
    
    console.log('Deleting test_user and bear from user_teams collection...');
    
    // Delete from user_teams collection
    const result = await db.collection('user_teams').deleteMany({
      username: { $in: ['test_user', 'bear'] }
    });
    
    console.log(`✓ Deleted ${result.deletedCount} team records`);
    
    // Also check and remove from any guilds
    console.log('Removing from guilds...');
    const guildResult = await db.collection('guild_db').updateMany(
      {},
      {
        $pull: {
          guildMemberNames: { $in: ['test_user', 'bear'] },
          guildAssistants: { $in: ['test_user', 'bear'] }
        }
      }
    );
    
    console.log(`✓ Updated ${guildResult.modifiedCount} guilds`);
    
    console.log('\n✅ Cleanup complete!');
    console.log('test_user and bear have been removed from:');
    console.log('- user_teams collection');
    console.log('- guild memberships');
    
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await closeDatabaseConnection();
    process.exit(0);
  }
}

deleteTestUsers();
