# GWar Noti Moved to Sidebar

## Summary
Moved the Guild War Notification (GWar Noti) from being a tab within the My Team page to a separate sidebar link in the Team section.

## Changes Made

### 1. Created Separate GWar Noti Page (`public/js/pages.js`)
- Added new `renderGWarNotiPage()` function
- Displays Guild War target assignment on its own page
- Uses existing `loadGWarNoti()` function to fetch and display data

### 2. Removed Tabs from My Team Page (`public/js/pages.js`)
- Removed tab buttons (My Team / GWar Noti)
- Removed `switchMyTeamTab()` function (no longer needed)
- Simplified My Team page to only show hero collection management
- Removed the GWar Noti content section from My Team

### 3. Sidebar Already Configured (`public/js/layoutManager.js`)
- GWar Noti link already exists in Team section sidebar
- Fixed duplicate sidebar link entries
- Navigation structure: Team → My Team / GWar Noti

### 4. Route Already Configured (`public/js/app.js`)
- Route `/team/gwar-noti` already set up
- Calls `renderGWarNotiPage()` and `loadGWarNoti()`

## User Experience
- Users now access GWar Noti through the sidebar instead of a tab
- Cleaner separation between hero management and Guild War notifications
- More intuitive navigation structure
- Each feature has its own dedicated page

## Testing
Navigate to:
- `/team/my-team` - Should show only hero collection tools
- `/team/gwar-noti` - Should show Guild War target notification

Both pages should be accessible via the Team section sidebar.
