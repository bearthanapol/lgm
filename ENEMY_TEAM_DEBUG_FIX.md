# Enemy Team Information Debug Fix

## Issue
Enemy team information was showing as "Unknown Zone, Team ?" in the GWar Noti tab.

## Root Cause
The `teamNumber` parameter was being passed as a string from the HTML onclick attribute, but the comparison logic in `getZoneFromTeamNumber()` was using numeric comparisons (`>=`, `<=`), which can fail with string values.

## Fix Applied

### 1. Type Conversion in `getZoneFromTeamNumber()`
Added `parseInt()` to ensure the team number is treated as a number:

```javascript
function getZoneFromTeamNumber(teamNumber) {
  // Convert to number in case it's a string
  const num = parseInt(teamNumber);
  
  if (isNaN(num)) {
    console.error('Invalid team number:', teamNumber);
    return 'Unknown Zone';
  }
  
  // ... rest of logic
}
```

### 2. Type Conversion in `openFindTeamModal()`
Ensure teamNumber is stored as a number in the state:

```javascript
function openFindTeamModal(teamNumber, teamId) {
  // Ensure teamNumber is a number
  const numTeamNumber = parseInt(teamNumber);
  
  findTeamState = {
    teamNumber: numTeamNumber,
    teamId,
    zoneName: getZoneFromTeamNumber(numTeamNumber),
    selectedHeroes: [null, null, null]
  };
}
```

### 3. Added Debug Logging
Added console.log statements to help debug the flow:
- Log when Find Team modal opens with teamNumber and its type
- Log the findTeamState after it's set
- Log the enemy info before sending to backend

## Testing

### Steps to Test
1. Go to **Guild War** page
2. Click **Find Team** on any enemy team (e.g., Team 25)
3. Open browser console (F12)
4. Check console logs:
   - Should see: `Opening Find Team Modal: { teamNumber: 25, teamId: '...', type: 'number' }`
   - Should see: `Find Team State set to: { teamNumber: 25, zoneName: 'Outer Bailey 3', ... }`
5. Select heroes and search for members
6. Click **Pick This Team**
7. Check console logs:
   - Should see: `Current findTeamState: { teamNumber: 25, zoneName: 'Outer Bailey 3', ... }`
   - Should see: `Enemy info: { enemyZone: 'Outer Bailey 3', enemyTeamNumber: 25 }`
8. Alert should show: "Picked [user] to fight Outer Bailey 3, Team 25!"
9. Go to **My Team** > **GWar Noti**
10. Should see:
    ```
    🎯 Enemy Team
    Outer Bailey 3, Team 25
    ```

### Expected Console Output
```
Opening Find Team Modal: { teamNumber: 25, teamId: '507f1f77bcf86cd799439011', type: 'number' }
Find Team State set to: { teamNumber: 25, teamId: '507f1f77bcf86cd799439011', zoneName: 'Outer Bailey 3', selectedHeroes: [null, null, null] }
Current findTeamState: { teamNumber: 25, teamId: '507f1f77bcf86cd799439011', zoneName: 'Outer Bailey 3', selectedHeroes: [...] }
Enemy info: { enemyZone: 'Outer Bailey 3', enemyTeamNumber: 25 }
```

## Why This Happened
In JavaScript, when values are passed through HTML onclick attributes, they are treated as strings. The comparison operators (`>=`, `<=`) can work with strings, but they perform lexicographic (alphabetical) comparison rather than numeric comparison:

```javascript
// String comparison (wrong)
'9' >= '10'  // true (because '9' > '1')
'25' >= '21' // true (correct by luck)

// Numeric comparison (correct)
9 >= 10      // false
25 >= 21     // true
```

This is why some team numbers might have worked while others didn't.

## Files Modified
- `public/js/pages.js`
  - `getZoneFromTeamNumber()` - Added parseInt and validation
  - `openFindTeamModal()` - Added parseInt for teamNumber
  - Added debug console.log statements

## Cleanup
Once confirmed working, the console.log statements can be removed or commented out for production.
