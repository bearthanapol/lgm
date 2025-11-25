# Guild War - Star Level Display Feature

## Overview
Display and edit star levels (0-12) for heroes in enemy team boxes on the Guild War page.

## Feature Details

### Visual Display
- **Location**: Under hero picture in enemy team box
- **Style**: Gold star icon (★) with number
- **Format**: `★ 8` (example for 8-star hero)
- **Color**: Gold (#ffd700) on dark background
- **Border**: Gold border around the star display

### Editing Star Level
- **Click** on the star display to edit
- **Prompt** appears asking for star level (0-12)
- **Validation**: Only accepts numbers 0-12
- **Auto-save**: Updates immediately after entering valid number
- **Reload**: Page reloads to show updated star level

## UI Layout

### Enemy Team Box (Before)
```
┌─────────────────┐
│   [Hero Pic]    │
│   Hero Name     │
│   [F] [B]       │
│   Skills/Ring   │
└─────────────────┘
```

### Enemy Team Box (After)
```
┌─────────────────┐
│   [Hero Pic]    │
│    ★ 8          │  ← NEW: Star Level
│   Hero Name     │
│   [F] [B]       │
│   Skills/Ring   │
└─────────────────┘
```

## Database Schema

### Collection: `guildWar_db`

**Hero Object Updated**:
```javascript
{
  heroname: String,
  heroPicture: String,
  skills: Array,
  ring: String,
  order: Number,
  starLevel: Number  // NEW: 0-12 (default: 0)
}
```

## User Workflow

### View Star Level
1. Go to **Guild War** page
2. Look at any enemy team box
3. See star level displayed under hero picture
4. Gold star (★) with number indicates level

### Edit Star Level
1. **Click** on the star display (★ 8)
2. Prompt appears: "Enter star level for [HeroName] (0-12):"
3. Current value is pre-filled
4. **Type** new star level (e.g., 10)
5. **Press Enter** or click OK
6. Page reloads with updated star level

### Validation
- **Valid**: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
- **Invalid**: Negative numbers, > 12, non-numbers
- **Error**: Shows alert "Invalid star level. Please enter a number between 0 and 12."

## Technical Implementation

### Frontend

**Display Component** (in `renderGuildWarHeroSlot`):
```javascript
<div 
  onclick="openStarSelector(teamNumber, teamId, heroname, starLevel)"
  style="text-align: center; cursor: pointer; background: #2a2a2a; 
         border: 1px solid #ffd700; border-radius: 3px; padding: 1px 3px;"
  title="Click to change star level"
>
  <span style="color: #ffd700; font-size: 10px; font-weight: bold;">
    ★ ${hero.starLevel || 0}
  </span>
</div>
```

**Edit Function** (`openStarSelector`):
```javascript
async function openStarSelector(teamNumber, teamId, heroname, currentStar) {
  // Prompt for star level
  const starLevel = prompt(`Enter star level for ${heroname} (0-12):`, currentStar || 0);
  
  // Validate input
  const star = parseInt(starLevel);
  if (isNaN(star) || star < 0 || star > 12) {
    alert('Invalid star level...');
    return;
  }
  
  // Update hero with new star level
  await fetch(`/api/guildwar/${teamId}/heroes/${heroname}`, {
    method: 'PUT',
    body: JSON.stringify({ ...hero, starLevel: star })
  });
  
  // Reload page
  loadGuildWarTeams();
}
```

### Backend

**Model Update** (`server/guildWarModel.js`):
```javascript
// In createEnemyTeam and addHeroToEnemyTeam
const hero = {
  heroname: heroData.heroname,
  heroPicture: heroData.heroPicture,
  skills: heroData.skills || [],
  ring: heroData.ring || '',
  order: heroData.order || null,
  starLevel: heroData.starLevel || 0  // NEW
};
```

**Route** (existing `PUT /api/guildwar/:teamId/heroes/:heroname`):
- Already handles hero updates
- Now includes starLevel in update data
- No new route needed

## Use Cases

### Use Case 1: Track Enemy Strength
- See star levels to gauge difficulty
- Plan team composition based on enemy stars
- Prioritize lower-star enemies first

### Use Case 2: Record Enemy Data
- After scouting, record exact star levels
- Share information with guild members
- Build strategy based on accurate data

### Use Case 3: Progress Tracking
- Update star levels as enemies get stronger
- Track changes over time
- Adjust strategies accordingly

## Benefits

### For Players
✅ **Visual Clarity**: Instantly see enemy strength
✅ **Easy Editing**: One-click to update
✅ **Accurate Data**: Track exact star levels
✅ **Better Planning**: Choose appropriate teams

### For Guild
✅ **Shared Knowledge**: Everyone sees same data
✅ **Coordination**: Plan attacks based on stars
✅ **Strategy**: Match team strength to enemy
✅ **Efficiency**: Avoid wasting strong teams on weak enemies

## Examples

### Example 1: Low Star Enemy
```
┌─────────────────┐
│   [Hero Pic]    │
│    ★ 3          │  ← Easy target
│   Shadow Knight │
│   [F] [B]       │
└─────────────────┘
```

### Example 2: High Star Enemy
```
┌─────────────────┐
│   [Hero Pic]    │
│    ★ 12         │  ← Tough enemy
│   Dragon Lord   │
│   [F] [B]       │
└─────────────────┘
```

### Example 3: Editing Flow
```
User: Clicks on "★ 8"
Prompt: "Enter star level for Shadow Knight (0-12): 8"
User: Types "10"
System: Updates to ★ 10
Result: Page reloads showing ★ 10
```

## Styling Details

### Star Display
- **Background**: Dark gray (#2a2a2a)
- **Border**: 1px solid gold (#ffd700)
- **Border Radius**: 3px (rounded corners)
- **Padding**: 1px 3px (compact)
- **Font Size**: 10px
- **Font Weight**: Bold
- **Color**: Gold (#ffd700)
- **Cursor**: Pointer (indicates clickable)

### Hover Effect
- Cursor changes to pointer
- Indicates interactivity
- No color change (keeps gold)

## Testing

### Test 1: Display Default
1. Add new hero to enemy team
2. Should show ★ 0 by default
3. Gold star with zero

### Test 2: Edit Star Level
1. Click on ★ 0
2. Enter 8
3. Should update to ★ 8
4. Page reloads automatically

### Test 3: Validation
1. Click on star display
2. Enter 15 (invalid)
3. Should show error alert
4. Star level unchanged

### Test 4: Cancel Edit
1. Click on star display
2. Click Cancel on prompt
3. Star level unchanged
4. No page reload

### Test 5: Persistence
1. Set star level to 10
2. Refresh page
3. Should still show ★ 10
4. Data persisted in database

## Integration with Battle History

The star level feature complements the battle history system:
- **Battle History**: Records star levels of guild members' heroes
- **Enemy Teams**: Records star levels of enemy heroes
- **Comparison**: Can compare your team's stars vs enemy stars
- **Strategy**: Use star data to pick appropriate teams

## Future Enhancements

### Possible Additions
1. **Color Coding**: Different colors for star ranges
   - 0-4: Gray (weak)
   - 5-8: Blue (medium)
   - 9-12: Gold (strong)

2. **Star Icons**: Visual star icons instead of numbers
   - ★★★★★★★★☆☆☆☆ (8 stars)

3. **Quick Increment**: +/- buttons to adjust stars
   - [−] ★ 8 [+]

4. **Bulk Edit**: Set stars for all heroes at once

5. **Star Statistics**: Average star level per zone

6. **Star Requirements**: Suggest minimum stars needed

## Notes

- Star level is optional (defaults to 0)
- Existing heroes without stars will show ★ 0
- Star level is independent of hero rarity
- Can be updated anytime
- No limit on how many times you can edit
- Changes are immediate and persistent

## Files Modified

### Backend
- `server/guildWarModel.js`
  - Added `starLevel` field to hero structure
  - Updated `createEnemyTeam()` to include starLevel
  - Updated `addHeroToEnemyTeam()` to include starLevel

### Frontend
- `public/js/pages.js`
  - Updated `renderGuildWarHeroSlot()` to display star level
  - Added `openStarSelector()` function for editing
  - Updated `openRingSelector()` to preserve starLevel

---

**Ready to track enemy star levels!** ★✨
