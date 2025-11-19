# Hero Team Save Feature - TODO

## What We've Built Today
✅ Hero Recognition Tool (`public/test-grid-detection.html`)
- OCR recognition for 40 heroes
- Manual entry and editing
- Star level system (0-12 with color coding)
- Save button that displays JSON (test mode)

✅ My Team Page Integration
- Button to open Hero Recognition Tool
- Opens in same window

## What's Needed Next

### 1. Backend API Endpoint
**File**: `server/teamRoutes.js`

Add endpoint to save user's hero team:
```javascript
// POST /api/team/:username
// Body: { heroes: [{ name: string, starLevel: number }] }
```

### 2. Update Save Function in Hero Recognition Tool
**File**: `public/test-grid-detection.html`

Update `saveToDatabase()` function to:
- Get current user from localStorage
- Send POST request to `/api/team/:username`
- On success, redirect to My Team page with success message
- Pass team data via URL params or localStorage

### 3. Update My Team Page to Display Saved Team
**File**: `public/js/pages.js` - `renderMyTeamPage()`

Add section to display saved heroes:
- Grid layout (10 columns like OCR results)
- Show hero name and star rating
- Title: "My Team (X heroes)"
- Load data from API on page load

### 4. Database Schema
**Collection**: `user_teams` or add to existing user collection

```javascript
{
  username: string,
  heroes: [
    {
      name: string,
      starLevel: number
    }
  ],
  lastUpdated: Date
}
```

## Implementation Steps
1. Create/update database model for user teams
2. Add POST endpoint in `server/teamRoutes.js`
3. Add GET endpoint in `server/teamRoutes.js` 
4. Update `saveToDatabase()` in test-grid-detection.html
5. Update `renderMyTeamPage()` to display saved team
6. Test the full flow

## Notes
- The hero recognition tool is standalone and working
- Just need to connect it to the database and display on My Team page
- Consider adding edit/delete functionality later
