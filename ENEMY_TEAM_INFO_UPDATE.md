# Enemy Team Information Update

## Summary
Added enemy team zone and number display to Guild War target selection, so users know which enemy team they're preparing to fight.

## What Changed

### Frontend (`public/js/pages.js`)
1. **New Helper Function**: `getZoneFromTeamNumber(teamNumber)`
   - Maps team numbers (1-115) to zone names
   - Returns: "Outer Bailey 1-5", "Inner Citadel 1-3", or "Main Castle"

2. **Updated State**: `findTeamState` now includes `zoneName`

3. **Updated Function**: `pickGuildWarTeam()`
   - Now sends `enemyZone` and `enemyTeamNumber` to backend
   - Alert message shows: "Picked [user] to fight [zone], Team [number]!"

4. **Updated Display**: `loadGWarNoti()`
   - Shows enemy team info at the top with 🎯 icon
   - Format: "Outer Bailey 3, Team 25"
   - Styled with orange highlight

### Backend (`server/guildWarRoutes.js`)
1. **Updated Route**: `POST /api/guildwar/selection`
   - Now accepts and saves `enemyZone` and `enemyTeamNumber`
   - Defaults: "Unknown Zone" and 0 if not provided

### Database Schema
Added two new fields to `guildWar_selections` collection:
```javascript
{
  // ... existing fields ...
  enemyZone: String,          // e.g., "Outer Bailey 3"
  enemyTeamNumber: Number,    // 1-115
}
```

## Zone Mapping

| Team Numbers | Zone Name |
|--------------|-----------|
| 1-10 | Outer Bailey 1 |
| 11-20 | Outer Bailey 2 |
| 21-30 | Outer Bailey 3 |
| 31-40 | Outer Bailey 4 |
| 41-50 | Outer Bailey 5 |
| 51-65 | Inner Citadel 1 |
| 66-80 | Inner Citadel 2 |
| 81-95 | Inner Citadel 3 |
| 96-115 | Main Castle |

## User Flow

1. User goes to **Guild War** page
2. Clicks **Find Team** on an enemy team (e.g., Team 25 in Outer Bailey 3)
3. Selects their heroes and searches for guild members
4. Clicks **Pick This Team** on a member
5. Alert shows: "Picked [member] to fight Outer Bailey 3, Team 25!"
6. User goes to **My Team** > **GWar Noti** tab
7. Sees:
   ```
   🎯 Enemy Team
   Outer Bailey 3, Team 25
   
   👤 Target Player
   [member name]
   
   ⚔️ Target Heroes:
   [hero list with stars and rings]
   ```

## Benefits
- Users know exactly which enemy team they're targeting
- No confusion about which battle they're preparing for
- Better coordination for guild war strategy
- Clear context when viewing saved targets

## Backward Compatibility
- Existing selections without enemy info will show "Unknown Zone, Team 0"
- All new selections will include proper enemy team information
- No breaking changes to existing functionality
