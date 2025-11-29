# Guild Member Filter for Team Search

## Issue
When searching for team members in Guild War, the search was showing ALL users who have the selected heroes (like "test_user" and "bear"), not just members from your guild.

## Solution Implemented ✅

### Forced Guild-Only Search
- **REMOVED** the checkbox option
- Search now **ONLY** shows guild members
- No option to search outside your guild
- This ensures proper Guild War team selection

### Features
1. **Guild Members Only**: Always shows only your guild members
2. **No External Users**: Cannot see or select users from other guilds
3. **Clear Messaging**: Shows "Guild Members:" as the header
4. **Error Handling**: Shows error if user is not in a guild

### Technical Changes

**Frontend (`public/js/pages.js`):**
- Removed "Guild Members Only" checkbox
- Modified `searchForTeam()` to ALWAYS filter by guild membership
- Fetches user's guild and filters teams by `guildMemberNames`
- Shows error if user is not in a guild

**Backend (`server/guildRoutes.js`):**
- Added `POST /api/guilds/:id/cleanup` endpoint to remove unwanted members

### How It Works

1. **When searching for heroes:**
   - Automatically fetches your guild information
   - Filters search results to ONLY show guild members
   - Shows error if you're not in a guild

2. **User Experience:**
   - Header shows "Guild Members:" (not "Available Members")
   - Clear message: "No guild members found with these heroes."
   - Cannot see users outside your guild

### Cleanup Endpoint

To remove unwanted members (like test_user and bear) from a guild:

```bash
POST /api/guilds/:guildId/cleanup
{
  "membersToRemove": ["test_user", "bear"]
}
```

### Why This Matters

- **Prevents Confusion**: Only see your actual guild members
- **Proper Guild War**: Can only assign teams to guild members
- **Clean Data**: No test users or external users shown
- **Security**: Cannot see other guilds' members

## Status
✅ **IMPLEMENTED** - Guild member filter is now FORCED and cannot be disabled!
