# Guild War "Pick This Team" Fix

## Problem
When clicking "Pick This Team" button in Guild War > Find Team, nothing happened and the selection didn't appear in My Team > GWar Noti tab.

## Root Causes

### 1. Backend Not Saving Hero Details
The backend route `/api/guildwar/selection` was only saving `targetUsername` and `targetHeroes`, but NOT the `heroDetails` (which includes star levels and ring information).

**File**: `server/guildWarRoutes.js`

**Before**:
```javascript
const { username, targetUsername, targetHeroes } = req.body;
await guildWarModel.saveGuildWarSelection(username, {
  targetUsername,
  targetHeroes
});
```

**After**:
```javascript
const { username, targetUsername, targetHeroes, heroDetails } = req.body;
await guildWarModel.saveGuildWarSelection(username, {
  targetUsername,
  targetHeroes,
  heroDetails: heroDetails || []
});
```

### 2. Frontend Button Using JSON.stringify in onclick
The button was using `JSON.stringify()` directly in the onclick attribute, which can cause issues with quotes and special characters, potentially breaking the JavaScript execution.

**File**: `public/js/pages.js`

**Before**:
```javascript
<button onclick="pickGuildWarTeam('${team.username}', '${heroNames.join(',')}', ${JSON.stringify(team.heroes.filter(h => heroNames.includes(h.heroName)))})" 
```

**After**:
```javascript
// Store data in global variable
if (!window.guildWarTeamData) window.guildWarTeamData = {};
window.guildWarTeamData[`team_${index}`] = matchedHeroes;

// Pass key instead of JSON
<button onclick="pickGuildWarTeam('${team.username}', '${heroNames.join(',')}', 'team_${index}')" 
```

### 3. Better Error Handling
Added proper error messages and response checking in the `pickGuildWarTeam` function.

**Before**:
```javascript
if (response.ok) {
  alert(`Picked ${targetUsername} for Guild War!`);
} else {
  alert('Failed to pick team');
}
```

**After**:
```javascript
const data = await response.json();
if (response.ok && data.success) {
  alert(`Picked ${targetUsername} for Guild War! Check 'GWar Noti' in My Team.`);
} else {
  console.error('Failed to pick team:', data);
  alert('Failed to pick team: ' + (data.error || 'Unknown error'));
}
```

## Testing

### How to Test
1. Login to the application
2. Navigate to **Guild War** > **Find Team**
3. Select heroes and click **Search**
4. Click **Pick This Team** on any result
5. You should see: "Picked [username] for Guild War! Check 'GWar Noti' in My Team."
6. Navigate to **My Team** > **GWar Noti** tab
7. You should see the selected target with hero details (names, star levels, rings)

### Expected Result
- Alert message appears confirming selection with enemy zone and team number
- GWar Noti tab shows:
  - **Enemy Team**: Zone name and team number (e.g., "Outer Bailey 3, Team 25")
  - **Target Player**: Username
  - Selection timestamp
  - List of heroes with star levels and ring information

## Files Modified
1. `server/guildWarRoutes.js` - Added heroDetails to backend save
2. `public/js/pages.js` - Fixed button implementation and error handling

## Database
The selection is saved in MongoDB collection: `guildWar_selections`

**Schema**:
```javascript
{
  username: String,           // Current user
  targetUsername: String,     // Selected target
  targetHeroes: [String],     // Array of hero names
  heroDetails: [              // Full hero information
    {
      heroName: String,
      starLevel: Number,
      ring: String
    }
  ],
  enemyZone: String,          // Enemy zone (e.g., "Outer Bailey 3", "Main Castle")
  enemyTeamNumber: Number,    // Enemy team number (1-115)
  updatedAt: Date
}
```

## Additional Enhancement: Enemy Team Information

### Feature Added
Users can now see which enemy team they picked their target for. The display shows:
- **Enemy Zone**: e.g., "Outer Bailey 3", "Inner Citadel 2", "Main Castle"
- **Enemy Team Number**: 1-115

### Implementation
1. Added `getZoneFromTeamNumber()` helper function that maps team numbers to zones:
   - Teams 1-10: Outer Bailey 1
   - Teams 11-20: Outer Bailey 2
   - Teams 21-30: Outer Bailey 3
   - Teams 31-40: Outer Bailey 4
   - Teams 41-50: Outer Bailey 5
   - Teams 51-65: Inner Citadel 1
   - Teams 66-80: Inner Citadel 2
   - Teams 81-95: Inner Citadel 3
   - Teams 96-115: Main Castle

2. Updated `findTeamState` to store `zoneName`
3. Updated `pickGuildWarTeam()` to send `enemyZone` and `enemyTeamNumber`
4. Updated backend to save these fields
5. Updated GWar Noti display to show enemy team info prominently at the top

### User Experience
When picking a team, the alert now shows:
```
Picked [username] to fight Outer Bailey 3, Team 25!
Check 'GWar Noti' in My Team.
```

In the GWar Noti tab, users see:
```
🎯 Enemy Team
Outer Bailey 3, Team 25

👤 Target Player
[username]
```

## Notes
- The fix maintains backward compatibility
- If heroDetails is not provided, it defaults to an empty array
- If enemyZone/enemyTeamNumber are not provided, they default to "Unknown Zone" and 0
- The GWar Noti display will show basic hero names if heroDetails is empty
- The global `window.guildWarTeamData` is cleared on each new search
