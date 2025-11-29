# How to Remove Unwanted Members from Guild

## Problem
Users "test_user" and "bear" are showing in the tempo guild but they don't belong there.

## Solution

### Option 1: Using the API (Recommended)

You can use the cleanup endpoint to remove specific members:

```bash
# First, get the guild ID
curl http://localhost:3000/api/guilds

# Then use the cleanup endpoint
curl -X POST http://localhost:3000/api/guilds/GUILD_ID_HERE/cleanup \
  -H "Content-Type: application/json" \
  -d '{"membersToRemove": ["test_user", "bear"]}'
```

### Option 2: Using MongoDB Directly

If you have access to MongoDB:

```javascript
// Connect to your database
use lgm_db

// Remove specific members from a guild
db.guild_db.updateOne(
  { guildName: "tempo" },
  { $pull: { guildMemberNames: { $in: ["test_user", "bear"] } } }
)

// Verify the update
db.guild_db.findOne({ guildName: "tempo" })
```

### Option 3: Using the Guild Master UI

As the guild master:
1. Go to Guild Info page
2. You should see the member list
3. (Future feature: Add a remove button next to each member)

## Prevention

The system now:
- ✅ Only shows guild members in team search
- ✅ Automatically adds guild master to members when creating guild
- ✅ Uses `$addToSet` to prevent duplicate members
- ✅ Filters search results by guild membership

## After Cleanup

Once you remove the unwanted members:
1. Refresh the Guild Info page
2. Search for heroes in Guild War
3. You should only see actual guild members

## Notes

- The guild master is stored separately in `guildMasterName`
- Members are stored in `guildMemberNames` array
- Assistants are stored in `guildAssistants` array
- All three fields are checked when determining guild membership
