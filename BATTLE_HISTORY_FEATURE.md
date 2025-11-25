# Guild War Battle History Feature

## Overview
Track your guild war battles with victory/defeat records. See previous picks for each enemy team and mark results.

## Features

### 1. Battle History Tracking
- Automatically saves every team you pick to fight
- Shows history for each specific enemy team
- Track results: Victory ✅, Defeat ❌, or Pending ⏳

### 2. Previous Battles Display
- Located in "Find Team to Fight" modal
- Shows at the top before member search
- Displays:
  - Target player username
  - Battle date
  - Heroes they had
  - Result checkboxes (Win/Loss)

### 3. Result Recording
- Radio buttons to mark Victory or Defeat
- Updates instantly when clicked
- Persists in database

## User Flow

### Picking a Team
1. Go to **Guild War** page
2. Click **Find Team** on any enemy team
3. See **📜 Previous Battles** section at top
4. Select your heroes and search for members
5. Click **Pick This Team** on a member
6. Battle is saved to history with "Pending" status

### Recording Results
1. Open **Find Team** modal for the enemy you fought
2. See your previous battles in **📜 Previous Battles**
3. Click radio button:
   - **✅ Win** - Mark as victory
   - **❌ Loss** - Mark as defeat
4. Result saves automatically

## Database Schema

### Collection: `guildWar_battleHistory`

```javascript
{
  _id: ObjectId,
  username: String,           // Your username
  enemyTeamNumber: Number,    // Enemy team (1-115)
  enemyZone: String,          // e.g., "Outer Bailey 3"
  targetUsername: String,     // Guild member you picked
  targetHeroes: [String],     // Hero names
  heroDetails: [              // Full hero info
    {
      heroName: String,
      starLevel: Number,
      ring: String
    }
  ],
  result: String,             // 'pending', 'victory', 'defeat'
  battleDate: Date,           // When you picked this team
  updatedAt: Date             // When result was last updated
}
```

## API Endpoints

### Save Battle History
```
POST /api/guildwar/battle-history
Body: {
  username: String,
  enemyTeamNumber: Number,
  enemyZone: String,
  targetUsername: String,
  targetHeroes: [String],
  heroDetails: [Object]
}
```

### Get Battle History for Enemy Team
```
GET /api/guildwar/battle-history/:username/:enemyTeamNumber
Returns: Array of battles for that specific enemy
```

### Update Battle Result
```
PUT /api/guildwar/battle-history/:battleId/result
Body: { result: 'victory' | 'defeat' | 'pending' }
```

### Get All Battle History
```
GET /api/guildwar/battle-history/:username
Returns: All battles across all enemies
```

## UI Components

### Previous Battles Section
```
📜 Previous Battles
┌─────────────────────────────────────┐
│ PlayerName123        Jan 15, 2025   │
│ ✅ Win  ❌ Loss                      │
│ Hero1, Hero2, Hero3                 │
├─────────────────────────────────────┤
│ AnotherPlayer        Jan 14, 2025   │
│ ✅ Win  ❌ Loss                      │
│ Hero4, Hero5, Hero6                 │
└─────────────────────────────────────┘
```

### Color Coding
- **Green border** (✅): Victory
- **Red border** (❌): Defeat
- **Gray border** (⏳): Pending

## Benefits

### For Players
- Track which strategies worked
- Remember who you fought before
- See win/loss record per enemy team
- Make better decisions based on history

### For Guild Masters
- Can extend to show guild-wide statistics
- Identify which members are good against specific enemies
- Track overall guild performance

## Future Enhancements

### Possible Additions
1. **Statistics Dashboard**
   - Win rate per enemy zone
   - Best performing members
   - Most difficult enemy teams

2. **Notes Field**
   - Add notes about strategy
   - Record what worked/didn't work

3. **Guild-Wide View**
   - See all guild members' battles
   - Aggregate win rates
   - Recommend best matchups

4. **Battle Replay**
   - Save team composition used
   - Compare different attempts

5. **Notifications**
   - Remind to record results
   - Alert when someone defeats a tough enemy

## Testing

### Test Scenario 1: First Battle
1. Go to Guild War > Team 25
2. Click Find Team
3. Should see: "No previous battles for this enemy team"
4. Pick a team
5. Reopen Find Team
6. Should see 1 battle with Pending status

### Test Scenario 2: Record Victory
1. Open Find Team for an enemy you fought
2. See previous battle
3. Click ✅ Win radio button
4. Border should turn green
5. Refresh page and reopen
6. Victory should still be selected

### Test Scenario 3: Multiple Battles
1. Pick 3 different teams for same enemy
2. Open Find Team
3. Should see 3 battles listed
4. Most recent should be at top
5. Mark each with different results
6. All should save independently

## Files Modified

### Backend
- `server/guildWarModel.js`
  - Added `saveBattleHistory()`
  - Added `getBattleHistory()`
  - Added `updateBattleResult()`
  - Added `getAllBattleHistory()`

- `server/guildWarRoutes.js`
  - Added `POST /api/guildwar/battle-history`
  - Added `GET /api/guildwar/battle-history/:username/:enemyTeamNumber`
  - Added `PUT /api/guildwar/battle-history/:battleId/result`
  - Added `GET /api/guildwar/battle-history/:username`

### Frontend
- `public/js/pages.js`
  - Updated Find Team modal HTML with battle history section
  - Updated `pickGuildWarTeam()` to save to history
  - Added `loadBattleHistory()` function
  - Added `updateBattleResult()` function
  - Updated `openFindTeamModal()` to load history

## Notes

- Battle history is separate from current selection
- Current selection (in GWar Noti) shows your active target
- Battle history shows all past attempts
- Each pick creates a new history entry
- Results can be updated anytime
- History is per-user, per-enemy team
