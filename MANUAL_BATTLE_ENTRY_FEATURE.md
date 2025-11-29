# Manual Battle Entry Feature ✅

## Overview
Guild Master and Assistants can now manually record battles for members who didn't update the website themselves. This marks those heroes as unavailable.

## How It Works

### 1. Access the Feature
- Go to Guild War page
- Click "Find Team" on any enemy team
- **New button appears:** "➕ Manual Battle Entry" (only visible to Guild Master and Assistants)

### 2. Record a Manual Battle
1. Click "Manual Battle Entry" button
2. Select the guild member from dropdown
3. Select 3 heroes that the member used
4. Click "Save Manual Battle"

### 3. What Happens
- The heroes are marked as USED for that member
- Those heroes become unavailable in search results
- The battle is recorded with comment: "Manual entry by [your username]"
- The member's heroes show as "USED" with red background

## Use Case
**Scenario:** A guild member fought in Guild War but didn't update the website.

**Solution:** Guild Master checks the game logs, sees which heroes the member used, and manually records it in the website.

**Result:** Those heroes are now marked as unavailable, preventing double-assignment.

## Features
- ✅ Only Guild Master and Assistants can access
- ✅ Dropdown shows all guild members
- ✅ Hero selector with search functionality
- ✅ Marks heroes as used (same as regular team picking)
- ✅ Records who made the manual entry
- ✅ Updates battle history automatically

## Technical Details

### Frontend Changes
**File: `public/js/pages.js`**
- Added "Manual Battle Entry" button in Find Team modal
- Added manual battle entry modal with member selector and hero slots
- Added functions:
  - `openManualBattleEntry()` - Opens the modal
  - `closeManualBattleModal()` - Closes the modal
  - `selectManualHero()` - Selects hero slot
  - `selectManualHeroFromGrid()` - Picks hero from grid
  - `saveManualBattle()` - Saves the manual entry

### Backend
Uses existing `/api/guildwar/selection` endpoint - no changes needed!

### Database
Stores in `guildWar_selections` collection with:
- `username`: The member who used the heroes
- `targetHeroes`: Array of hero names
- `comment`: "Manual entry by [admin username]"
- `enemyTeamNumber`: Which enemy team was fought

## UI Flow
```
Find Team Modal
    ↓
[Manual Battle Entry] button (gmaster/gassist only)
    ↓
Manual Entry Modal
    ├─ Select Member (dropdown)
    ├─ Select Hero 1 (click to open hero selector)
    ├─ Select Hero 2 (click to open hero selector)
    └─ Select Hero 3 (click to open hero selector)
    ↓
[Save Manual Battle]
    ↓
Heroes marked as USED ✅
```

## Status
✅ **IMPLEMENTED** - Manual battle entry is now available for Guild Master and Assistants!

## Testing
1. Login as Guild Master or Assistant
2. Go to Guild War → Click "Find Team" on any enemy
3. Click "Manual Battle Entry"
4. Select a member and 3 heroes
5. Save
6. Search for those heroes → Member should show with "USED" badges
