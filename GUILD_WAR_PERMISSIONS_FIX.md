# Guild War Permissions Fix

## Issue
Guild members (gmember role) could edit Guild War teams despite being supposed to have read-only access. Only the "Reset Guild War" button showed the permission warning.

## Solution
Added `canEditGuildWar()` permission check to all Guild War editing functions.

## Protected Functions

### Hero Management
- ✅ `openHeroSelector()` - Add/change heroes in team slots
- ✅ `addHeroToTeam()` - Add hero to team
- ✅ `editGuildWarHero()` - Edit hero details
- ✅ `removeHeroFromTeam()` - Remove hero from team

### Hero Properties
- ✅ `cycleGuildWarStarLevel()` - Update star levels (0-12)
- ✅ `setHeroPosition()` - Set hero position (Front/Back)
- ✅ `cycleSkillNumber()` - Update skill levels
- ✅ `openRingSelector()` - Change hero ring

### Team Properties
- ✅ `toggleTeamDefeat()` - Mark team as defeated
- ✅ `updateTeamSpeed()` - Update team speed value
- ✅ `toggleTeamSpeedType()` - Toggle speed type (Lower/Higher)
- ✅ `updateEnemyName()` - Update enemy player name

### Team Actions
- ✅ `openFindTeamModal()` - Open Find Team modal
- ✅ `resetGuildWar()` - Reset all Guild War data

## Permission Logic

```javascript
function canEditGuildWar() {
  const userInfo = localStorage.getItem('lgm_user_info');
  if (!userInfo) return false;
  
  try {
    const user = JSON.parse(userInfo);
    const role = user.role || 'gmember';
    return role === 'gmaster' || role === 'gassist' || role === 'admin';
  } catch (e) {
    return false;
  }
}
```

## User Experience by Role

### Guild Master (gmaster)
- ✅ Full edit access to all Guild War features
- ✅ Can add/edit/remove heroes
- ✅ Can update all team properties
- ✅ Can mark teams as defeated
- ✅ Can reset Guild War

### Guild Assistant (gassist)
- ✅ Full edit access to all Guild War features
- ✅ Same permissions as Guild Master
- ✅ Can help manage Guild War teams

### Guild Member (gmember)
- ❌ Read-only access
- ❌ Cannot click on hero slots
- ❌ Cannot edit team properties
- ❌ Cannot mark teams as defeated
- ❌ Cannot reset Guild War
- ℹ️ Shows error toast when attempting to edit

### Admin
- ✅ Full access (overrides guild role)
- ✅ Can edit even if not in guild

## Error Messages

When a gmember tries to edit, they see:
```
⚠️ Only Guild Master and Assistants can edit Guild War teams
```

## Testing

### Test Read-Only Access (gmember)
1. Log in as a guild member (not master or assistant)
2. Navigate to Guild War page
3. Try to:
   - Click on empty hero slot → Shows error
   - Click on existing hero → Shows error
   - Click star rating → Shows error
   - Change position (F/B) → Shows error
   - Update skills → Shows error
   - Change ring → Shows error
   - Check defeat checkbox → Shows error, reloads to reset
   - Edit speed → Shows error
   - Edit enemy name → Shows error
   - Click "Find Team" → Shows error
   - Click "Reset Guild War" → Shows error

### Test Edit Access (gmaster/gassist)
1. Log in as guild master or assistant
2. Navigate to Guild War page
3. Verify all edit functions work:
   - Can add/change heroes
   - Can update star levels
   - Can change positions
   - Can update skills
   - Can change rings
   - Can mark defeated
   - Can edit speed
   - Can edit enemy name
   - Can use Find Team
   - Can reset Guild War

## Implementation Notes

- All protected functions check `canEditGuildWar()` at the start
- Error toast shown using `toastManager.error()`
- Some functions reload data to reset UI state (e.g., checkboxes)
- Permission check happens before any API calls
- No server-side changes needed (client-side protection)

## Future Enhancements

### Server-Side Protection
Consider adding role checks on the backend:
- Verify user's guild role before allowing updates
- Return 403 Forbidden for unauthorized edits
- Add middleware to Guild War routes

### UI Improvements
- Disable/hide edit controls for gmember
- Show lock icon on read-only elements
- Add visual indicator of current permissions
- Show role badge in header

### Permission Granularity
- Allow gmaster to grant specific permissions
- Create custom roles with different access levels
- Allow read-only access to specific zones
