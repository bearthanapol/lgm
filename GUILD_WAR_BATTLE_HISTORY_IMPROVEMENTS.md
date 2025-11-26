# Guild War Battle History Improvements

## Changes Made

### 1. Reset Battle History with "Reset Guild War"

**Problem:** When clicking "Reset Guild War", the battle history was not cleared, causing old battles to still appear.

**Solution:** Updated the `resetAllGuildWarTeams()` function to also delete all battle history records.

**Code Changes:**
```javascript
// server/guildWarModel.js
async function resetAllGuildWarTeams() {
  // ... existing reset code ...
  
  // Also clear all battle history
  await db.collection(BATTLE_HISTORY_COLLECTION).deleteMany({});
  
  return result;
}
```

**Result:**
- ✅ Clicking "Reset Guild War" now clears all battle history
- ✅ Previous Battles section will be empty after reset
- ✅ Fresh start for new Guild War cycle

### 2. Add Comment Box After Picking Team

**Problem:** Users couldn't add notes or comments when picking a team to fight.

**Solution:** Added a comment prompt that appears after clicking "Pick this team" button.

**Frontend Changes:**
```javascript
// public/js/pages.js - pickGuildWarTeam()
// Ask for comment
const comment = prompt(
  `Add a comment for this battle (optional):\n\n` +
  `Target: ${targetUsername}\n` +
  `Enemy: ${enemyZone}, Team ${enemyTeamNumber}`,
  ''
);

// User can cancel
if (comment === null) {
  return;
}
```

**Backend Changes:**
```javascript
// server/guildWarModel.js - saveBattleHistory()
const battle = {
  username: battleData.username,
  enemyTeamNumber: battleData.enemyTeamNumber,
  enemyZone: battleData.enemyZone,
  targetUsername: battleData.targetUsername,
  targetHeroes: battleData.targetHeroes || [],
  heroDetails: battleData.heroDetails || [],
  comment: battleData.comment || '', // NEW: User's comment
  result: 'pending',
  battleDate: new Date()
};
```

**Display Changes:**
```javascript
// Battle history now shows comments
${battle.comment ? 
  `<div style="...">💬 ${battle.comment}</div>` 
  : ''
}
```

**Result:**
- ✅ Comment prompt appears when picking a team
- ✅ User can add notes (e.g., "Try speed team", "Need healer")
- ✅ User can skip by leaving empty or clicking Cancel
- ✅ Comments are saved with battle history
- ✅ Comments display in Previous Battles section

## User Experience

### Picking a Team with Comment

1. User clicks "Find Team" on enemy team
2. User selects their 3 heroes
3. User clicks "Pick this team"
4. **NEW:** Comment prompt appears:
   ```
   Add a comment for this battle (optional):
   
   Target: PlayerName
   Enemy: Outer Bailey 1, Team 5
   
   [                                    ]
   ```
5. User can:
   - Type a comment (e.g., "Speed team strategy")
   - Leave empty and click OK
   - Click Cancel to abort picking

### Viewing Battle History

**Before:**
```
✅ PlayerName        2024-01-15
⚡ Speed: 245.5
Hero1, Hero2, Hero3
```

**After:**
```
✅ PlayerName        2024-01-15
⚡ Speed: 245.5
Hero1, Hero2, Hero3
💬 Speed team strategy - focus on CC
```

### Resetting Guild War

**Before:**
- Teams cleared
- Battle history remained

**After:**
- Teams cleared
- Battle history cleared
- Fresh start

## Use Cases for Comments

### Strategy Notes
```
💬 Try speed team with CC focus
💬 Need healer for this one
💬 Counter their tank with DPS
```

### Team Composition Notes
```
💬 Using magic team
💬 Physical damage setup
💬 Hybrid team test
```

### Reminders
```
💬 Check their speed before battle
💬 Remember to use buffs
💬 Watch out for their healer
```

### Results Notes
```
💬 Won easily - team too weak
💬 Lost - need better gear
💬 Close match - retry with different heroes
```

## Technical Details

### Database Schema

**Battle History Document:**
```javascript
{
  _id: ObjectId,
  username: String,
  enemyTeamNumber: Number,
  enemyZone: String,
  targetUsername: String,
  targetHeroes: [String],
  heroDetails: [Object],
  comment: String,        // NEW FIELD
  result: String,         // 'pending', 'victory', 'defeat'
  speed: String,
  battleDate: Date
}
```

### API Endpoints

**POST /api/guildwar/battle-history**
- Accepts `comment` field in request body
- Saves comment with battle record

**POST /api/guildwar/selection**
- Accepts `comment` field in request body
- Saves comment with current selection

**POST /api/guildwar/reset**
- Clears all teams
- Clears all battle history (NEW)

### Frontend Flow

```
User picks team
    ↓
Comment prompt appears
    ↓
User enters comment (optional)
    ↓
Save to selection (with comment)
    ↓
Save to battle history (with comment)
    ↓
Display in Previous Battles
```

## Testing

### Test Comment Feature
1. Go to Guild War page
2. Click "Find Team" on any enemy team
3. Select 3 heroes
4. Click "Pick this team"
5. ✅ Comment prompt should appear
6. Enter a comment: "Test comment"
7. Click OK
8. ✅ Success message should appear
9. Open "Find Team" again for same enemy
10. ✅ Comment should appear in Previous Battles

### Test Comment Display
1. Pick multiple teams with different comments
2. Check Previous Battles section
3. ✅ Each battle should show its comment
4. ✅ Battles without comments should not show comment box

### Test Reset with Battle History
1. Pick several teams (with comments)
2. Click "Reset Guild War"
3. Confirm reset
4. ✅ All teams should be cleared
5. Open "Find Team" modal
6. ✅ Previous Battles should be empty

### Test Cancel Comment
1. Click "Pick this team"
2. Comment prompt appears
3. Click "Cancel"
4. ✅ Team should NOT be picked
5. ✅ Modal should remain open

## Future Enhancements

### Possible Improvements
- Edit comment after picking team
- Delete individual battle history entries
- Filter battles by comment keywords
- Export battle history with comments
- Share battle strategies with guild members
- Add emoji picker for comments
- Character limit for comments (e.g., 200 chars)
- Multi-line comment support (textarea instead of prompt)

### Better Comment UI
Instead of browser prompt, create a custom modal:
- Larger text area
- Character counter
- Emoji picker
- Save/Cancel buttons
- Preview of selected team

### Comment Templates
Pre-defined comment templates:
- "Speed team"
- "Tank team"
- "DPS focus"
- "Healer required"
- Custom templates saved by user
