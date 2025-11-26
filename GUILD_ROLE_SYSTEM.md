# Guild-Based Role Assignment System

## Overview
Implemented automatic role assignment based on guild membership. User roles are dynamically determined by their position in the guild hierarchy.

## Role Hierarchy

### 1. Guild Master (gmaster)
- **How to become**: Create a guild
- **Permissions**:
  - Full edit access to Guild War page
  - Can assign/remove guild assistants via checkboxes
  - Can manage guild members
  - Can reset Guild War data
- **Auto-assigned**: When user creates a guild

### 2. Guild Assistant (gassist)
- **How to become**: Assigned by Guild Master via checkbox in Guild Info page
- **Permissions**:
  - Full edit access to Guild War page
  - Can add/edit/remove heroes from enemy teams
  - Can update star levels and rings
  - Can reset Guild War data
- **Cannot**: Assign other assistants (only Guild Master can)

### 3. Guild Member (gmember)
- **How to become**: Join a guild or default role
- **Permissions**:
  - Read-only access to Guild War page
  - Can view all guild information
  - Can view enemy teams and their details
- **Cannot**: Edit Guild War teams or data

### 4. Admin (admin)
- **How to become**: Username "bear" only
- **Permissions**:
  - All permissions from other roles
  - Access to Admin page
  - Can manage heroes and news
- **Special**: Overrides guild roles

## Implementation Details

### Backend Changes

#### 1. Guild Model (`server/guildModel.js`)
- Added `guildAssistants` array field to store assistant usernames
- Added `addAssistantToGuild(guildId, assistantName)` function
- Added `removeAssistantFromGuild(guildId, assistantName)` function
- Added `getUserGuildRole(username)` function:
  - Returns 'gmaster' if user is guild master
  - Returns 'gassist' if user is in assistants array
  - Returns 'gmember' if user is in members array
  - Returns null if user is not in any guild

#### 2. Guild Routes (`server/guildRoutes.js`)
- POST `/api/guilds/:id/assistants` - Add assistant to guild
- DELETE `/api/guilds/:id/assistants/:assistantName` - Remove assistant
- GET `/api/guilds/role/:username` - Get user's guild role

#### 3. User Role Manager (`server/userRoleManager.js`) - NEW FILE
- `updateUserRole(username)` - Get updated role based on guild membership
- `getUserRole(username)` - Get current role (checks guild first)
- Special handling for 'bear' username (always admin)

#### 4. Auth Routes (`server/authRoutes.js`)
- GET `/api/auth/refresh-role` - Refresh user's role based on current guild status
- Returns new JWT token with updated role
- Updates user info in response

### Frontend Changes

#### 1. Guild Info Page (`public/js/pages.js`)
**For Guild Master:**
- Shows checkboxes next to each member's name
- Can check/uncheck to assign/remove assistant role
- Shows visual indicators: (Master), (Assistant)
- Displays helper text: "✓ Check members to assign as assistants"

**For All Members:**
- Shows member list with role indicators
- Guild Master shown with (Master) tag
- Assistants shown with (Assistant) tag in blue

**Functions Added:**
- `toggleAssistant(guildId, memberName, isAssistant)` - Toggle assistant status
- `refreshUserRole()` - Fetch updated role from server and reload page
- `canEditGuildWar()` - Check if user can edit Guild War

#### 2. Guild War Page Protection
**Protected Functions:**
- `addHeroToTeam()` - Add hero to enemy team
- `editGuildWarHero()` - Edit hero details
- `removeHeroFromTeam()` - Remove hero from team
- `cycleGuildWarStarLevel()` - Update star levels
- `resetGuildWar()` - Reset all Guild War data

**Protection Logic:**
- Checks `canEditGuildWar()` before allowing edits
- Shows error toast: "Only Guild Master and Assistants can edit Guild War teams"
- Prevents gmember from making any changes

#### 3. Role Refresh Triggers
Roles are automatically refreshed when:
- User creates a guild (becomes gmaster)
- User joins a guild (becomes gmember)
- User leaves a guild (reverts to gmember)
- Guild Master assigns/removes assistant status
- User manually refreshes via API call

## User Experience

### Creating a Guild
1. User clicks "Create Guild" on Guild Info page
2. Enters guild name and password
3. **Automatically becomes Guild Master (gmaster)**
4. Role refreshes and page reloads
5. Can now edit Guild War and assign assistants

### Joining a Guild
1. User clicks "Join Guild" on Guild Info page
2. Enters guild name and password
3. **Automatically becomes Guild Member (gmember)**
4. Role refreshes and page reloads
5. Has read-only access to Guild War

### Assigning Assistants (Guild Master Only)
1. Navigate to Guild Info page
2. See list of members with checkboxes
3. Check box next to member's name
4. Member is promoted to Assistant (gassist)
5. Assistant can now edit Guild War
6. Uncheck to demote back to member

### Leaving a Guild
1. Click "Leave Guild" button
2. Confirm action
3. **Role reverts to gmember (default)**
4. Loses any special permissions
5. Page reloads with updated role

## Security Features

1. **Frontend Protection**: Edit buttons/functions check role before executing
2. **Visual Feedback**: Error toasts inform users of insufficient permissions
3. **Role Verification**: Server validates guild membership for role assignment
4. **Automatic Updates**: Roles refresh on guild membership changes
5. **JWT Integration**: Role embedded in token for server-side verification

## API Endpoints

### Guild Assistant Management
- POST `/api/guilds/:id/assistants` - Add assistant
  - Body: `{ assistantName: "username" }`
  - Returns: Success message

- DELETE `/api/guilds/:id/assistants/:assistantName` - Remove assistant
  - Returns: Success message

### Role Management
- GET `/api/guilds/role/:username` - Get user's guild role
  - Returns: `{ role: "gmaster" | "gassist" | "gmember" | null }`

- GET `/api/auth/refresh-role` - Refresh user's role
  - Requires: Authorization header with JWT
  - Returns: New token and updated user info

## Testing Scenarios

### Test Guild Master Role
1. Create a new guild as user A
2. Verify user A has gmaster role
3. Navigate to Guild War page
4. Verify user A can edit teams
5. Navigate to Guild Info page
6. Verify checkboxes appear next to members

### Test Assistant Role
1. User A (gmaster) assigns user B as assistant
2. User B logs in
3. Verify user B has gassist role
4. Navigate to Guild War page
5. Verify user B can edit teams
6. Verify user B cannot assign other assistants

### Test Member Role
1. User C joins the guild
2. Verify user C has gmember role
3. Navigate to Guild War page
4. Try to edit a team
5. Verify error message appears
6. Verify no changes are saved

### Test Role Transitions
1. User B (assistant) is demoted by gmaster
2. Verify user B role changes to gmember
3. Verify user B loses edit permissions
4. User B leaves guild
5. Verify user B role remains gmember

## Database Schema

### Guild Document
```javascript
{
  _id: ObjectId,
  guildName: String,
  guildMasterName: String,
  guildMemberNames: [String],  // Array of member usernames
  guildAssistants: [String],   // Array of assistant usernames (NEW)
  guildPassword: String (hashed),
  createdAt: Date,
  updatedAt: Date
}
```

## Migration Notes

### Existing Guilds
- Existing guilds without `guildAssistants` field will default to empty array
- Guild Masters retain their role automatically
- Existing members remain as gmember
- No data migration required

### Existing Users
- Users not in any guild default to gmember role
- User "bear" always has admin role regardless of guild
- Roles update automatically on next login or guild action

## Future Enhancements

### Potential Features
1. **Multiple Guild Masters**: Allow co-leadership
2. **Custom Permissions**: Fine-grained permission settings
3. **Role History**: Track role changes over time
4. **Bulk Assistant Assignment**: Select multiple members at once
5. **Role Notifications**: Notify users when their role changes
6. **Guild Hierarchy UI**: Visual representation of guild structure

### Permission Expansion
- Guild War assignment permissions (who can assign targets)
- Guild info edit permissions (who can update guild details)
- Member management permissions (who can invite/remove members)
- News posting permissions (guild announcements)

## Troubleshooting

### Role Not Updating
- Check if user is logged in
- Verify guild membership in database
- Try manual role refresh via `/api/auth/refresh-role`
- Clear localStorage and re-login

### Checkboxes Not Appearing
- Verify user is the Guild Master
- Check if `guildMasterName` matches current username
- Ensure guild data loaded correctly

### Edit Permissions Not Working
- Verify role in localStorage: `lgm_user_info`
- Check if JWT token includes role field
- Ensure `canEditGuildWar()` returns true
- Try refreshing the page

### Assistant Assignment Fails
- Verify member is in guild
- Check if member is already assistant
- Ensure Guild Master is making the request
- Check server logs for errors
