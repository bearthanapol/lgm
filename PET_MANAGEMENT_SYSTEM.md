# Pet Management System

## Overview
Complete Pet Management system for admins. Admins add pets (name + image), users select star levels (4-6) on their team page.

## Features

### Backend (Complete)
1. **Pet Model** (`server/petModel.js`)
   - CRUD operations for pets
   - Fields: name, petPicture, displayOrder
   - `updatePetOrder()` - Bulk update display order

2. **Pet Routes** (`server/petRoutes.js`)
   - GET `/api/pets` - Get all pets
   - GET `/api/pets/:id` - Get single pet
   - POST `/api/pets` - Create pet
   - PUT `/api/pets/:id` - Update pet
   - POST `/api/pets/reorder` - Update display order (drag-and-drop)
   - DELETE `/api/pets/:id` - Delete pet

3. **Server Registration** (`server.js`)
   - Pet routes registered at `/api/pets`

### Frontend (Complete)
1. **Admin Pet Page** (`public/js/pages.js`)
   - New `renderAdminPetPage()` function
   - Simplified add pet form:
     - Pet Name (required)
     - Pet Image Upload (with preview)
   - Drag-and-drop grid layout (like heroes)
   - Edit/delete buttons on each card
   - Image upload via `/api/upload/image` endpoint

2. **Pet Management Functions** (`public/js/pages.js`)
   - `loadPets()` - Load all pets
   - `renderPetList()` - Display pets in draggable grid
   - `attachPetFormHandler()` - Handle add pet form with image upload
   - `editPet()` - Load pet for editing
   - `showEditPetModal()` - Show edit modal
   - `saveEditPet()` - Save pet changes
   - `deletePet()` - Delete pet with confirmation
   - `initializePetDragAndDrop()` - Enable drag-and-drop reordering
   - `savePetOrder()` - Save new order to server

3. **Routing** (`public/js/app.js`)
   - New route: `/admin/pets`
   - Admin role check
   - Auto-loads pets on page load

4. **Navigation** (`public/js/layoutManager.js`)
   - Added "Pet Management" link in admin sidebar
   - Positioned between "Manage Heroes" and "News & Updates"

## Pet Data Structure
```javascript
{
  name: String,           // Pet name (required)
  petPicture: String,     // Image URL (optional)
  displayOrder: Number,   // Sort order (default: 999)
  createdAt: Date,
  updatedAt: Date
}
```

## Admin Workflow
1. Navigate to Admin → Pet Management
2. Add new pet:
   - Enter pet name
   - Upload pet image (optional, with preview)
   - Click "Add Pet"
3. Reorder pets:
   - Drag and drop pet cards to change order
   - Order saves automatically after 500ms
4. Edit pet:
   - Click "Edit" button
   - Update name or upload new image
   - Click "Update Pet"
5. Delete pet:
   - Click "Del" button
   - Confirm deletion

## Drag-and-Drop Features
- Visual feedback (opacity, border color, scale)
- Debounced save (500ms after last drop)
- Order numbers displayed on cards
- Toast notifications on save
- Auto-reload after save to show updated order

## User Workflow (Coming Next)
- Users will select pets on their team page
- Users will choose star level (4-6) for their pet
- Pet star level stored per user/team
- Pet system integrated with team composition
