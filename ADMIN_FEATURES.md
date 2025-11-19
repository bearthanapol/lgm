# Admin Panel Features Guide

## Overview

The Admin Panel now includes two main sections:
1. **Manage Heroes** - Add, view, and delete heroes with automatic GitHub image upload
2. **News & Updates** - Create, view, and delete news posts and game updates

## Features

### 1. Hero Management with Image Upload & Cropping

#### Adding a Hero

1. Navigate to **Admin Panel** → **Manage Heroes** tab
2. Fill in the hero details:
   - **Hero Name**: Name of the hero (required)
   - **Rarity**: L2, L1, L0, or R (required)
   - **Hero Image**: Two options:
     - **Upload New**: Click "Choose File" to upload an image
     - **Select from Database**: Click blue button to choose from existing hero images
     - Maximum file size: 5MB
     - **Image Cropper** opens automatically after selection
     - Adjust crop area (move, resize, or create new selection)
     - Click "Apply Crop" to confirm
     - Preview will appear after cropping

3. Click **Add Hero**
4. The system will:
   - Upload the cropped image to `images/heroes/` in your GitHub repository
   - Save the hero with the GitHub image URL
   - Display success notification
   - Refresh the hero list

#### Image Cropper Features

**Controls:**
- **Move**: Click inside the orange box and drag to reposition
- **Resize**: Click and drag edges or corners to resize
- **New Selection**: Click outside the box to create a new crop area
- **Square Crop**: Button to create a centered square crop
- **Reset**: Button to reset to full image

**Tips:**
- Cursor changes to show available actions (move, resize, crosshair)
- No need to reset - just adjust the crop area as needed
- Use Square Crop for consistent hero portraits

#### Viewing Heroes

- All heroes are displayed in the "Hero List" section
- Heroes are grouped by name (showing all skin variants together)
- Each hero card shows:
  - Hero name and rarity
  - Number of skins
  - All skin images (180x180px)
  - **Edit** button (blue) - Opens cropper to edit the image
  - **Delete** button (red) - Removes the hero

#### Editing a Hero Image

1. Find the hero in the Hero List
2. Click the blue **Edit** button under the image
3. Image Cropper opens with the current image
4. Adjust the crop area as needed
5. Click **Apply Crop**
6. Image updates instantly (shows local preview with green border)
7. Background upload to GitHub (overwrites original file)
8. After page refresh, shows updated image from GitHub

**Note**: GitHub CDN may take 1-5 minutes to update. The local preview shows immediately.

#### Deleting a Hero

1. Find the hero in the Hero List
2. Click the red **Delete** button
3. Confirm the deletion
4. Hero will be removed from the database

**Note**: Deleting a hero does NOT automatically delete the image from GitHub. You may want to manually clean up unused images periodically.

### 2. News & Updates Management

#### Creating News/Updates

1. Navigate to **Admin Panel** → **News & Updates** tab
2. Fill in the news details:
   - **Title**: Headline of the news
   - **Category**: 
     - General - Regular announcements
     - Game Update - Version updates, new features
     - Event - Special events, promotions
     - Maintenance - Server maintenance notices
   - **Content**: Main content of the news
     - Supports multiple paragraphs
     - Line breaks are preserved
   - **Publish immediately**: Check to publish, uncheck to save as draft

3. Click **Create News**
4. The news will be saved and displayed in the news list

#### Viewing News

- All news posts are displayed in the "News List" section
- Each news card shows:
  - Title
  - Category (color-coded)
  - Publication date
  - Status (Published or Draft)
  - Full content
  - Delete button

#### Category Colors

- **General**: Gray
- **Game Update**: Blue
- **Event**: Orange
- **Maintenance**: Red

#### Deleting News

1. Find the news post in the News List
2. Click the **Delete** button
3. Confirm the deletion
4. News will be removed from the database

## Technical Details

### Image Upload Process

1. User selects an image file
2. File is validated (type and size)
3. Image is uploaded to GitHub via API
4. GitHub returns a raw URL
5. URL is saved in the database with hero data

### Image Storage

- **Location**: `https://github.com/bearthanapol/lgm/tree/main/images/heroes`
- **Access URL**: `https://raw.githubusercontent.com/bearthanapol/lgm/main/images/heroes/filename.png`
- **Naming**: Files are sanitized (special characters replaced with underscores)

### Database Collections

#### Hero_db
```javascript
{
  _id: ObjectId,
  heroname: String,
  heroPicture: String,  // GitHub raw URL
  type: String,
  attack: Number,
  defense: Number,
  hp: Number,
  rarity: String,
  description: String,
  createdAt: Date,
  updatedAt: Date
}
```

#### news_db
```javascript
{
  _id: ObjectId,
  title: String,
  content: String,
  category: String,  // general, update, event, maintenance
  author: String,
  published: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

## API Endpoints

### Hero Management
- `GET /api/heroes` - Get all heroes
- `POST /api/heroes` - Create hero
- `DELETE /api/heroes/:id` - Delete hero

### News Management
- `GET /api/news` - Get all news
- `POST /api/news` - Create news
- `DELETE /api/news/:id` - Delete news

### Image Upload
- `POST /api/upload/hero-image` - Upload hero image to GitHub
- `POST /api/upload/news-image` - Upload news image to GitHub

## Setup Requirements

Before using the image upload feature, you must:

1. Create a GitHub Personal Access Token
2. Add it to your `.env` file
3. Restart the server

See `GITHUB_SETUP.md` for detailed instructions.

## Tips

### Hero Images
- Use square images for best results (e.g., 512x512px)
- PNG format with transparency works well
- Keep file sizes under 1MB for faster loading
- Use descriptive filenames (e.g., `shadow-knight.png`)

### News Content
- Keep titles concise (under 100 characters)
- Use line breaks to separate paragraphs
- Choose appropriate categories for better organization
- Use drafts to prepare content before publishing

### Performance
- Images are served directly from GitHub CDN
- No additional server load for image hosting
- Images are cached by browsers

## Image Cropper Details

For complete documentation on the image cropper feature, see `IMAGE_CROPPER_FEATURE.md`.

**Key Features:**
- Interactive crop area with move and resize
- Select images from database for creating variants
- Edit existing hero images with instant preview
- Automatic GitHub upload with unique filenames
- Cache handling for immediate visual feedback

## Future Enhancements

Potential features to add:
- Rich text editor for news content
- ~~Image editing/cropping before upload~~ ✅ **IMPLEMENTED**
- Aspect ratio lock for cropper
- Zoom in/out on images
- Rotate images before crop
- Bulk hero import from CSV
- News scheduling (publish at specific time)
- News categories filtering
- Hero image gallery view
- Image compression before upload
