# User Pets Page

## Overview
Added a new "Pets" page in the Team section where users can select their pets and set star levels (4-6 stars).

## Changes Made

### 1. Sidebar Update (`public/js/layoutManager.js`)
- Renamed "My Team" to "Heroes"
- Added new "Pets" link in Team section
- Order: Heroes → Pets → Guild War Target

### 2. New Page (`public/js/pages.js`)
- Created `renderUserPetsPage()` function
- Grid layout showing all available pets
- Each pet card has:
  - Pet image
  - Pet name
  - Star level dropdown (Not Owned, 4, 5, or 6 stars)
  - Status indicator

### 3. User Pet Functions (`public/js/pages.js`)
- `loadUserPets()` - Load all pets and user's collection
- `renderUserPetsGrid()` - Display pets in grid with star selection
- `savePetStar()` - Save user's pet star level selection

### 4. Routing (`public/js/app.js`)
- Added `/team/pets` route
- Auto-loads user pets on page load

## Current Implementation

### Data Storage
Currently using **localStorage** for user pet collection:
- Key: `lgm_user_pets_{username}`
- Format: `{ petId: { petId, petName, starLevel } }`

### User Workflow
1. Navigate to Team → Pets
2. See all available pets in grid
3. Select star level for each pet:
   - "Not Owned" - Remove from collection
   - 4, 5, or 6 stars - Add/update in collection
4. Changes save automatically
5. Status shows confirmation

## Next Steps (Backend Integration)

### Create User Pet Collection API
Need to create backend endpoints for persistent storage:

1. **GET `/api/user-pets/:username`** - Get user's pet collection
2. **POST `/api/user-pets`** - Save user's pet
3. **PUT `/api/user-pets/:petId`** - Update pet star level
4. **DELETE `/api/user-pets/:petId`** - Remove pet from collection

### User Pet Data Structure
```javascript
{
  username: String,
  petId: ObjectId,
  petName: String,
  starLevel: Number, // 4, 5, or 6
  createdAt: Date,
  updatedAt: Date
}
```

### Migration Plan
1. Create `userPetModel.js` with CRUD operations
2. Create `userPetRoutes.js` with API endpoints
3. Update `loadUserPets()` to fetch from API
4. Update `savePetStar()` to save to API
5. Migrate localStorage data to database (optional)

## Features
- ✅ Grid layout with pet cards
- ✅ Star level selection (4-6)
- ✅ "Not Owned" option to remove pets
- ✅ Auto-save on selection change
- ✅ Visual feedback (status messages)
- ✅ Responsive design
- ⏳ Backend API (coming next)
- ⏳ Team composition integration (coming next)

## Usage
1. Admin adds pets in Admin → Pet Management
2. Users go to Team → Pets
3. Users select star levels for their pets
4. Pet data saved to localStorage (will be database later)
5. Pet selection will be used in team composition
