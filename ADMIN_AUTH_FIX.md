# Admin Hero Management Authentication Fix

## Issue
When trying to add, edit, or delete heroes in the Admin page, users were getting:
```
401 (Unauthorized)
```

## Root Cause
The hero management API endpoints require authentication (JWT token), but the frontend requests were not including the Authorization header.

## Solution
Added JWT token to all hero management requests.

## Changes Made

### 1. Add Hero Function (`attachHeroFormHandler`)
**Before:**
```javascript
const response = await fetch('/api/heroes', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(heroData)
});
```

**After:**
```javascript
const token = localStorage.getItem('lgm_auth_token');
const response = await fetch('/api/heroes', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify(heroData)
});
```

### 2. Delete Hero Function (`deleteHero`)
**Before:**
```javascript
const response = await fetch(`/api/heroes/${heroId}`, {
  method: 'DELETE'
});
```

**After:**
```javascript
const token = localStorage.getItem('lgm_auth_token');
const response = await fetch(`/api/heroes/${heroId}`, {
  method: 'DELETE',
  headers: {
    'Authorization': `Bearer ${token}`
  }
});
```

### 3. Edit Hero Image Function (`editHeroImage`)
**Before:**
```javascript
const updateResponse = await fetch(`/api/heroes/${heroId}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    imageUrl: updatedImageUrl
  })
});
```

**After:**
```javascript
const token = localStorage.getItem('lgm_auth_token');
const updateResponse = await fetch(`/api/heroes/${heroId}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    imageUrl: updatedImageUrl
  })
});
```

## How It Works

1. **User logs in** → JWT token stored in `localStorage` as `lgm_auth_token`
2. **User performs admin action** → Token retrieved from localStorage
3. **Request sent to server** → Token included in Authorization header
4. **Server validates token** → Checks if user has admin role
5. **Action performed** → Hero created/updated/deleted

## Security Flow

```
Client                          Server
  |                               |
  |-- POST /api/heroes ---------->|
  |   Authorization: Bearer token |
  |                               |
  |                          [authMiddleware]
  |                          - Verify JWT
  |                          - Extract user info
  |                               |
  |                          [requireAdmin]
  |                          - Check role === 'admin'
  |                               |
  |                          [heroRoutes]
  |                          - Create hero
  |                               |
  |<-- 201 Created ---------------|
```

## Testing

### Test Add Hero
1. Log in as admin user ("bear")
2. Go to Admin page
3. Fill in hero name and rarity
4. Upload an image
5. Click "Add Hero"
6. ✅ Should succeed with success toast

### Test Edit Hero
1. Click "Edit" on any hero
2. Crop/adjust the image
3. Confirm
4. ✅ Should update with success toast

### Test Delete Hero
1. Click "Delete" on any hero
2. Confirm deletion
3. ✅ Should delete with success toast

### Test Non-Admin Access
1. Log in as non-admin user
2. Try to access `/admin/manage`
3. ✅ Should redirect to home with error

## Related Files

- `public/js/app.js` - Frontend hero management functions
- `server/heroRoutes.js` - Backend hero API endpoints
- `server/authMiddleware.js` - JWT authentication middleware
- `server/roleMiddleware.js` - Role-based access control

## Notes

- All admin endpoints now require authentication
- Only users with `admin` role can manage heroes
- Token is automatically included in all requests
- Token expires after 24 hours (user must re-login)

## Future Improvements

- Add token refresh mechanism
- Add loading states during API calls
- Add better error messages for different auth failures
- Consider using axios or fetch wrapper for consistent auth headers
