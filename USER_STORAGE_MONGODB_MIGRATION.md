# User Storage Migration to MongoDB

## Problem
New users could not login after server restart/redeploy because user data was stored in a local JSON file (`server/users.json`). On platforms like Render, the filesystem is ephemeral - files are lost on restart.

## Solution
Migrated user storage from local JSON file to MongoDB, which persists data across restarts.

## Changes Made

### 1. Updated `server/dataManager.js`
- Changed from file-based storage to MongoDB
- All user operations now use MongoDB collections
- Collection name: `users`

### 2. Created Migration Script
- `server/migrateUsersToMongo.js` - Migrates existing users from JSON to MongoDB
- Creates a backup of the original JSON file

## How to Migrate Existing Users

If you have existing users in `server/users.json`, run the migration script:

```bash
node server/migrateUsersToMongo.js
```

This will:
1. Read all users from `users.json`
2. Save them to MongoDB
3. Create a backup file `users.json.backup`

## After Migration

- Users will persist across server restarts
- New user registrations will be saved to MongoDB
- Login will work after server restart/redeploy
- You can safely delete `users.json` after successful migration

## Testing

1. Register a new user
2. Restart the server
3. Try to login with the new user - should work!

## Database Collection

- **Collection**: `users`
- **Fields**:
  - `id`: UUID
  - `username`: String (unique)
  - `ign`: String (In-Game Name, unique)
  - `passwordHash`: String (bcrypt hash)
  - `role`: String (admin/member)
  - `createdAt`: Date
  - `updatedAt`: Date

## Notes

- The migration is backward compatible
- If `users.json` doesn't exist, the system works normally with MongoDB
- All existing authentication logic remains unchanged
