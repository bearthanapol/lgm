# Role-Based Access Control (RBAC) Implementation

## Overview
Implemented a role-based permission system with 4 user roles to control access to different features and pages.

## User Roles

### 1. gmember (Guild Member)
- Default role for all new users
- Access to all standard features
- Cannot access admin pages

### 2. gmaster (Guild Master)
- Guild leadership role
- Access to all standard features
- Cannot access admin pages (reserved for admin only)

### 3. gassist (Guild Assistant)
- Guild leadership role
- Access to all standard features
- Cannot access admin pages (reserved for admin only)

### 4. admin (Administrator)
- Special role assigned only to user "bear"
- Full access to all features including admin pages
- Can manage heroes, news, and other administrative functions

## Implementation Details

### Backend Changes

#### 1. User Model (`server/userModel.js`)
- Added `role` field to user data structure
- Added `VALID_ROLES` constant: ['gmember', 'gmaster', 'gassist', 'admin']
- Added `DEFAULT_ROLE` constant: 'gmember'
- Added `determineUserRole()` function:
  - Returns 'admin' for username 'bear'
  - Returns 'gmember' for all other users
- Updated `createUserObject()` to include role field

#### 2. Authentication Routes (`server/authRoutes.js`)
- Updated signup endpoint to include role in JWT token and response
- Updated login endpoint to include role in JWT token and response
- Role is automatically determined during signup based on username

#### 3. Role Middleware (`server/roleMiddleware.js`) - NEW FILE
- `requireRole(allowedRoles)` - Check if user has one of the allowed roles
- `requireAdmin()` - Shortcut to check for admin role
- `requireGuildLeadership()` - Check for gmaster, gassist, or admin roles
- Returns 403 Forbidden if user doesn't have required role

#### 4. Hero Routes (`server/heroRoutes.js`)
- Protected POST /api/heroes (create hero) - Admin only
- Protected PUT /api/heroes/:id (update hero) - Admin only
- Protected DELETE /api/heroes/:id (delete hero) - Admin only
- GET routes remain public for all authenticated users

### Frontend Changes

#### 1. Layout Manager (`public/js/layoutManager.js`)
- Updated `renderHeader()` to accept `userRole` parameter
- Admin link in header is conditionally rendered:
  - Shown only when `userRole === 'admin'`
  - Hidden for all other roles

#### 2. App.js (`public/js/app.js`)
- Updated `renderMainLayout()` to extract user role from localStorage
- Passes user role to `renderHeader()` function
- Added route guard for `/admin/manage`:
  - Checks user role before rendering admin page
  - Redirects non-admin users to /home with error toast
  - Shows "Access denied" message

#### 3. Auth Manager (`public/js/authManager.js`)
- Already stores user info (including role) in localStorage
- `getUserInfo()` returns user object with role field

## User Experience

### For Regular Users (gmember, gmaster, gassist)
- Admin link is not visible in the header navigation
- Attempting to access `/admin/manage` directly redirects to home
- Error toast message: "Access denied. Admin privileges required."

### For Admin User (bear)
- Admin link is visible in the header navigation
- Full access to admin pages
- Can create, update, and delete heroes
- Can manage news posts

## Security Features

1. **Backend Protection**: All admin routes are protected with middleware
2. **Frontend Protection**: Admin UI elements hidden from non-admin users
3. **Route Guards**: Direct URL access to admin pages is blocked
4. **JWT Integration**: Role is embedded in JWT token for verification
5. **Automatic Role Assignment**: User "bear" automatically gets admin role

## Testing

### Test Admin Access
1. Create/login as user "bear"
2. Verify Admin link appears in header
3. Navigate to Admin page
4. Verify hero management functions work

### Test Non-Admin Access
1. Create/login as any other user
2. Verify Admin link does NOT appear in header
3. Try to access `/admin/manage` directly
4. Verify redirect to home with error message
5. Verify API calls to admin endpoints return 403 Forbidden

## Future Enhancements

### Potential Role-Based Features
- **gmaster/gassist**: Could have special permissions for:
  - Assigning Guild War targets to members
  - Managing guild information
  - Viewing guild-wide statistics
  
- **Role Management UI**: Admin could change user roles through UI
  
- **Permission Granularity**: More fine-grained permissions within roles

## Migration Notes

### Existing Users
- Existing users without a role field will default to 'gmember'
- The login endpoint handles missing role gracefully with fallback
- User "bear" will automatically get admin role on next login

### Database
- No migration needed - role field is added on-the-fly
- Existing user records remain valid
- New signups automatically include role field

## API Endpoints

### Protected Endpoints (Admin Only)
- POST /api/heroes - Create hero
- PUT /api/heroes/:id - Update hero
- DELETE /api/heroes/:id - Delete hero

### Public Endpoints (All Authenticated Users)
- GET /api/heroes - List all heroes
- GET /api/heroes/:id - Get hero details
- GET /api/heroes/search/:query - Search heroes

## Configuration

### Changing Admin User
To change which user has admin privileges, modify `server/userModel.js`:

```javascript
function determineUserRole(username) {
  // Change 'bear' to your desired admin username
  if (username === 'your_admin_username') {
    return 'admin';
  }
  return DEFAULT_ROLE;
}
```

### Adding Multiple Admins
```javascript
function determineUserRole(username) {
  const adminUsers = ['bear', 'admin1', 'admin2'];
  if (adminUsers.includes(username)) {
    return 'admin';
  }
  return DEFAULT_ROLE;
}
```
