# Battle History - Speed & Defeat Marking Update

## New Features Added

### 1. ⚡ Speed Input Field
Track the speed of the team you fought against.

**Location**: In each battle history entry in "📜 Previous Battles"

**Features**:
- Input box to enter speed value (e.g., 245.5)
- Auto-saves when you click outside the box (onblur)
- Persists in database
- Shows previously saved speed when reopening

**Use Case**:
- Record enemy team speed for reference
- Compare speeds across different battles
- Help decide which team to use based on speed requirements

### 2. ✅ Auto-Defeat Marking
When you mark a battle as "Victory", automatically prompt to mark the enemy team as defeated.

**Flow**:
1. User clicks **✅ Win** radio button
2. Battle result saves as "Victory"
3. Popup appears asking:
   ```
   🎉 Victory recorded!
   
   Do you want to mark Enemy Team 25 as DEFEATED?
   
   This will show a checkmark on the team box in Guild War page.
   ```
4. If user clicks **OK**:
   - Enemy team marked as defeated in database
   - Checkmark appears on team box in Guild War page
   - Guild War page reloads to show the checkmark
5. If user clicks **Cancel**:
   - Only battle result is saved
   - Enemy team remains unmarked

**Benefits**:
- Quick way to mark defeated enemies
- Visual indicator on Guild War page
- Track progress through all 115 teams
- No need to manually toggle defeat status

## UI Updates

### Battle History Entry (Before)
```
┌─────────────────────────────────────┐
│ PlayerName123        Jan 15, 2025   │
│ [✅ Win] [❌ Loss]                   │
│ Hero1, Hero2, Hero3                 │
└─────────────────────────────────────┘
```

### Battle History Entry (After)
```
┌─────────────────────────────────────┐
│ PlayerName123        Jan 15, 2025   │
│ [✅ Win] [❌ Loss]                   │
│ ⚡ Speed: [245.5________]           │
│ Hero1, Hero2, Hero3                 │
└─────────────────────────────────────┘
```

## Database Schema Update

### Collection: `guildWar_battleHistory`

**New Field Added**:
```javascript
{
  // ... existing fields ...
  speed: String,              // Speed value (e.g., "245.5")
  updatedAt: Date
}
```

## API Endpoints

### Update Battle Speed
```
PUT /api/guildwar/battle-history/:battleId/speed
Body: { speed: String }
Response: { success: true, message: 'Battle speed updated' }
```

### Existing Endpoints (Used)
```
PUT /api/guildwar/:teamId
Body: { isDefeated: true }
- Marks enemy team as defeated
```

## User Workflows

### Workflow 1: Record Speed After Battle
1. Fight enemy team
2. Note their speed (e.g., 245.5)
3. Open **Find Team** modal for that enemy
4. Find your battle in **📜 Previous Battles**
5. Click in **⚡ Speed** input box
6. Type the speed value
7. Click outside the box → Auto-saves

### Workflow 2: Mark Victory & Defeat Enemy
1. Win a battle against enemy team
2. Open **Find Team** modal
3. Click **✅ Win** radio button
4. Popup appears asking to mark enemy as defeated
5. Click **OK**
6. Enemy team marked with checkmark ✅
7. Guild War page shows defeated status

### Workflow 3: Just Record Victory (No Defeat Mark)
1. Win a battle
2. Click **✅ Win** radio button
3. Popup appears
4. Click **Cancel**
5. Only battle result saved
6. Enemy team remains unmarked

## Visual Indicators

### In Battle History
- **Speed Input**: Light text on dark background
- **Placeholder**: "e.g., 245.5"
- **Auto-save**: No save button needed

### In Guild War Page
- **Defeated Team**: Shows checkmark ✅ on team box
- **Active Team**: No checkmark
- **Visual**: Green checkmark indicates completion

## Technical Details

### Frontend Functions

**updateBattleSpeed(battleId, speed)**
- Called when user leaves speed input (onblur)
- Sends PUT request to save speed
- No user feedback (silent save)

**updateBattleResult(battleId, result, enemyTeamNumber)**
- Updated to accept enemyTeamNumber parameter
- Shows confirm dialog if result is 'victory'
- Calls markEnemyTeamAsDefeated() if user confirms

**markEnemyTeamAsDefeated(teamNumber)**
- Finds team by number from window.allGuildWarTeams
- Sends PUT request to mark isDefeated: true
- Reloads Guild War page to show checkmark
- Shows success/error alerts

### Backend Functions

**updateBattleSpeed(battleId, speed)**
- Updates speed field in battle history
- Sets updatedAt timestamp
- No validation on speed format (flexible input)

## Benefits

### For Players
✅ **Track Speed**: Remember enemy speeds for strategy
✅ **Quick Marking**: One-click to mark defeated enemies
✅ **Visual Progress**: See which teams are completed
✅ **Better Planning**: Use speed data to choose teams

### For Guild
✅ **Shared Knowledge**: Speed data helps all members
✅ **Progress Tracking**: See guild's overall completion
✅ **Strategy Sharing**: Compare speeds across attempts

## Examples

### Example 1: Speed Tracking
```
Battle 1: Speed 245.5 → Lost
Battle 2: Speed 248.2 → Won
Battle 3: Speed 243.0 → Won

Analysis: Need speed > 243 to win
```

### Example 2: Defeat Marking Flow
```
User: Clicks ✅ Win
System: Shows popup
User: Clicks OK
System: Marks Team 25 as defeated
Result: Team 25 shows ✅ in Guild War page
```

## Testing

### Test Speed Input
1. Open Find Team modal
2. Enter speed in any battle entry
3. Click outside the input box
4. Refresh page and reopen modal
5. Speed should still be there

### Test Defeat Marking
1. Mark a battle as Victory
2. Confirm popup to mark as defeated
3. Go to Guild War page
4. Find that team number
5. Should see checkmark on team box

### Test Cancel Defeat Marking
1. Mark a battle as Victory
2. Click Cancel on popup
3. Go to Guild War page
4. Team should NOT have checkmark

## Notes

- Speed input accepts any text (flexible for different formats)
- Defeat marking only triggers on Victory, not Defeat
- Popup uses browser's native confirm() dialog
- Guild War page auto-reloads after marking defeated
- Speed saves silently (no confirmation needed)
- Each battle has its own speed field (can compare attempts)

## Future Enhancements

### Possible Additions
1. **Speed Validation**: Ensure numeric input
2. **Speed Statistics**: Average, min, max speeds
3. **Speed Comparison**: Compare your speed vs enemy
4. **Bulk Defeat Marking**: Mark multiple teams at once
5. **Defeat History**: Track when team was defeated
6. **Undo Defeat**: Option to unmark defeated teams

## Files Modified

### Backend
- `server/guildWarModel.js`
  - Added `updateBattleSpeed()` function

- `server/guildWarRoutes.js`
  - Added `PUT /api/guildwar/battle-history/:battleId/speed`

### Frontend
- `public/js/pages.js`
  - Updated battle history HTML to include speed input
  - Updated `updateBattleResult()` to show defeat marking popup
  - Added `updateBattleSpeed()` function
  - Added `markEnemyTeamAsDefeated()` function
  - Updated radio button onchange to pass enemyTeamNumber

---

**Ready to track speeds and mark victories!** ⚡✅
