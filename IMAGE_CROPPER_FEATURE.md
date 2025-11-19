# Image Cropper Feature Documentation

## Overview
The image cropper feature allows admins to crop hero images before uploading or edit existing hero images. It provides an intuitive interface for selecting, moving, and resizing crop areas.

## Features

### 1. Upload with Crop
- When uploading a new hero image, the cropper opens automatically
- Allows you to crop the image before it's uploaded to GitHub
- Generates unique filenames to prevent conflicts

### 2. Select from Database
- Blue "Select from Database" button in the hero form
- Opens a modal showing all existing hero images
- Click any image to select it for cropping
- Perfect for creating skin variants from existing images

### 3. Edit Existing Hero Images
- Each hero has a blue "Edit" button next to the Delete button
- Opens the cropper with the hero's current image
- Cropped image overwrites the original file on GitHub
- Shows instant preview while GitHub CDN updates

## Cropper Controls

### Mouse Interactions
- **Create new crop area**: Click and drag outside the current crop box
- **Move crop area**: Click inside the orange box and drag
- **Resize from edges**: Click and drag any edge (cursor changes to resize arrows)
- **Resize from corners**: Click and drag any corner for proportional resize

### Buttons
- **Reset**: Resets crop area to full image
- **Square Crop**: Creates a centered square crop area
- **Cancel**: Closes the cropper without saving
- **Apply Crop**: Saves the cropped image and uploads it

## Technical Implementation

### Files Involved
1. **public/js/imageCropper.js** - Main cropper class with canvas-based UI
2. **public/js/app.js** - Integration functions (attachImagePreviewHandler, editHeroImage, showDatabaseImageSelector)
3. **public/js/pages.js** - Admin form UI with "Select from Database" button
4. **server/uploadRoutes.js** - Handles image uploads
5. **server/githubUpload.js** - Uploads images to GitHub repository

### Key Functions

#### imageCropper.open(imageSource, callback)
Opens the cropper modal with an image (File object or URL)
```javascript
imageCropper.open(imageFile, (croppedFile) => {
  // Handle cropped file
});
```

#### editHeroImage(heroId, imageUrl, heroName, rarity)
Global function to edit a hero's image
- Extracts original filename from URL
- Opens cropper with current image
- Shows instant local preview
- Uploads to GitHub with same filename (overwrites)
- Updates hero record in database

#### showDatabaseImageSelector(callback)
Shows modal with all hero images from database
- Fetches all heroes via `/api/heroes`
- Displays images in a grid
- Returns selected image URL to callback

### Image Upload Flow

#### New Hero Upload
1. User selects file → Cropper opens
2. User adjusts crop → Clicks "Apply Crop"
3. Cropped file gets unique name: `cropped-{timestamp}-{randomId}.png`
4. Uploads to GitHub: `/images/heroes/cropped-*.png`
5. Returns GitHub raw URL
6. Hero created with imageUrl

#### Edit Existing Hero
1. User clicks "Edit" → Cropper opens with current image
2. User adjusts crop → Clicks "Apply Crop"
3. Cropped file uses original filename (to overwrite)
4. Shows instant local preview (green border)
5. Uploads to GitHub (overwrites old file)
6. Updates hero record with same URL
7. GitHub CDN updates in 1-5 minutes

### Cache Handling

**Problem**: GitHub's raw.githubusercontent.com CDN caches images aggressively

**Solution**: 
- Immediate local preview using `URL.createObjectURL()`
- Green border indicates updated image
- Cache-buster timestamp added when loading hero list: `?t={timestamp}`
- After page refresh, loads updated image from GitHub

## API Endpoints Used

### POST /api/upload/hero-image
Uploads hero image to GitHub
- Accepts: multipart/form-data with 'image' field
- Returns: `{ success: true, imageUrl: "https://raw.githubusercontent.com/..." }`

### GET /api/heroes
Fetches all heroes
- Returns: `{ success: true, data: [...heroes] }`

### PUT /api/heroes/:id
Updates hero record
- Accepts: `{ imageUrl: "..." }` (and other fields)
- Returns: `{ success: true, message: "..." }`

## User Guide

### Adding a New Hero with Crop
1. Go to Admin Panel → Manage Heroes
2. Fill in Hero Name and Rarity
3. Click "Choose File" and select an image
4. Cropper opens automatically
5. Adjust crop area:
   - Click and drag to create selection
   - Click inside to move
   - Click edges/corners to resize
6. Click "Apply Crop"
7. Preview shows in form
8. Click "Add Hero"

### Creating Skin Variant from Database
1. Go to Admin Panel → Manage Heroes
2. Click blue "Select from Database" button
3. Modal shows all existing hero images
4. Click the image you want to use
5. Cropper opens with selected image
6. Adjust crop for the variant
7. Click "Apply Crop"
8. Fill in name (e.g., "Elysai Skin 2") and rarity
9. Click "Add Hero"

### Editing Existing Hero Image
1. Go to Admin Panel → Manage Heroes
2. Find the hero in the list
3. Click blue "Edit" button under the image
4. Cropper opens with current image
5. Adjust crop as needed
6. Click "Apply Crop"
7. Image updates instantly (green border)
8. GitHub file updates in background
9. After page refresh, shows updated image

## Troubleshooting

### Image doesn't update after edit
- **Cause**: GitHub CDN cache (can take 1-5 minutes)
- **Solution**: The local preview shows immediately. Refresh page after a few minutes to see GitHub version
- **Workaround**: Hard refresh (Ctrl+F5 or Cmd+Shift+R)

### Cropper is hard to use
- **Old behavior**: Had to reset after each mistake
- **New behavior**: Can move and resize freely
- **Tips**: 
  - Click inside box to move
  - Click edges to resize
  - Click outside to start new selection
  - Use "Square Crop" for perfect squares

### Wrong image shows after adding hero
- **Cause**: Duplicate filenames (fixed)
- **Solution**: Each cropped image now gets unique timestamp-based name
- **For edits**: Uses original filename to overwrite

### Can't find image in database selector
- **Check**: Hero must have an imageUrl or heroPicture field
- **Solution**: Add the hero first, then create variants

## Configuration

### GitHub Settings (server/githubUpload.js)
```javascript
const GITHUB_TOKEN = process.env.GITHUB_TOKEN; // Set in .env
const GITHUB_OWNER = 'bearthanapol';
const GITHUB_REPO = 'lgm';
const GITHUB_BRANCH = 'main';
```

### Upload Limits (server/uploadRoutes.js)
```javascript
limits: {
  fileSize: 5 * 1024 * 1024 // 5MB limit
}
```

## Future Enhancements

Possible improvements:
- Aspect ratio lock option
- Zoom in/out on image
- Rotate image before crop
- Multiple crop presets (1:1, 16:9, etc.)
- Batch crop multiple images
- Undo/redo crop adjustments
- Save crop settings for reuse

## Dependencies

- **Octokit** (@octokit/rest): GitHub API client
- **Multer**: File upload handling
- **Canvas API**: Browser-native for cropping
- **File API**: Creating File objects from blobs

## Notes

- All images stored in GitHub repository: `bearthanapol/lgm`
- Path: `/images/heroes/`
- Format: PNG (converted from any input format)
- Quality: 95% for PNG compression
- Cropped images are client-side processed (no server-side image manipulation)
