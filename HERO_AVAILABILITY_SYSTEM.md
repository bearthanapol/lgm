# Hero Availability System for Guild War

## Overview
Implemented a system to prevent hero reuse in Guild War, matching the game's mechanics where each hero can only be used once per Guild War.

## Implementation Complete ✅

### 1. Database Changes ✅
- Modified `saveGuildWarSelection` to track guild name with selections
- Selections now include guild context for tracking used heroes across the guild

### 2. Backend Changes ✅

#### New Functions in `guildWarModel.js`:
- `getUsedHeroesForGuild(guildName)` - Returns a map of all used heroes by username
- `unassignTeam(username)` - Removes a team assignment and frees up heroes

#### New API Endpoints in `guildWarRoutes.js`:
- `GET /api/guildwar/used-heroes?username=X` - Get all used heroes for the guild
- `DELETE /api/guildwar/unassign/:username` - Unassign a team and free up heroes

#### Enhanced Search Endpoint:
- `POST /api/guildwar/search` now accepts `username` parameter
- Filters results to show which heroes are already used
- Returns additional fields:
  - `usedHeroes` - Array of hero names already assigned
  - `assignedTo` - Enemy team number where heroes are assigned
  - `availableHeroes` - Heroes that are still available
  - `hasAllHeroesAvailable` - Boolean flag

### 3. Frontend Changes ✅

#### Search Results Display (`pages.js`):
- Used heroes shown with red background and strikethrough
- "USED" badge displayed on unavailable heroes
- Orange border on cards with used heroes
- "ASSIGNED TO #X" badge showing which team has the heroes
- Warning message when heroes are already assigned
- "Pick This Team" button disabled for teams with used heroes
- Button text changes to "Heroes Already Used" when unavailable

#### GWar Noti Page:
- Added "Unassign" button to free up heroes
- Confirmation dialog before unassigning
- Auto-refresh after unassignment

### 4. Features ✅
- ✅ Guild members can see which heroes are already assigned
- ✅ Prevents accidental double-assignment
- ✅ Clear visual feedback on hero availability
- ✅ Can unassign a team to free up heroes
- ✅ Shows which enemy team the heroes are assigned to
- ✅ Real-time availability checking during search

## How It Works

1. **When a team is picked:**
   - Heroes are saved in the selection with guild context
   - System tracks which user has which heroes assigned

2. **When searching for teams:**
   - System checks all selections for the guild
   - Marks heroes that are already in use
   - Disables selection of teams with used heroes

3. **When unassigning:**
   - Removes the selection record
   - Frees up all heroes for reassignment
   - Updates UI immediately

## Visual Indicators

- **Available Heroes**: Green/orange border, normal appearance
- **Used Heroes**: Red border, strikethrough text, "USED" badge, grayed out
- **Assigned Teams**: Orange border, "ASSIGNED TO #X" badge
- **Disabled Button**: Gray background, "Heroes Already Used" text

## Status
✅ **FULLY IMPLEMENTED** - Hero availability system is now active and preventing hero reuse in Guild War!
