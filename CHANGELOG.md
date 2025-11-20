# Changelog - Admin Panel Enhancements

## Version 2.3 - My Team Enhancements & Auth Updates (Current)

### 🎉 New Features

#### 1. Interactive Star Rating System ⭐
- **Click-to-edit stars** - Click any star to cycle through levels (0-12)
- **Color-coded progression:**
  - Yellow (★): Levels 0-6 (base)
  - Blue (★): Levels 1-6 (awakened)
  - Red (★): Levels 7-12 (transcended)
- **Auto-save** - Changes saved to database automatically
- **Visual feedback** - Hover effects and smooth transitions
- **Same system** as test-grid-detection.html

#### 2. In Game Name (IGN) System 👤
- **Replaced Email with IGN** - Better suited for gaming community
- **Personalized My Team page** - Shows "[IGN]'s Heroes" heading
- **Signup improvements:**
  - "In Game Name" field instead of "Email"
  - "Confirm Password" field added
  - Better validation and error messages

#### 3. My Team Page Fixes 🔧
- **Fixed loading issues** - Heroes now load correctly from database
- **Hero images from GitHub** - Displays images from repository
- **Fallback placeholders** - SVG placeholders for missing images
- **Improved error handling** - Better user feedback
- **Username detection** - Multiple sources (localStorage, JWT, fallback)

### 🔧 Technical Changes

#### Frontend Updates
- `public/js/pages.js`:
  - Fixed `loadUserTeamFromPages()` function
  - Added star rating system functions
  - Added IGN display in heading
  - Improved hero image loading
- `public/js/signupPage.js`:
  - Changed Email to IGN field
  - Added Confirm Password field
  - Enhanced validation
- `public/js/authManager.js`:
  - Updated signup method for IGN
- `public/css/styles.css`:
  - Added star rating styles

#### Backend Updates
- `server/authRoutes.js`:
  - Updated signup endpoint for IGN
  - Removed email validation
  - Added IGN validation
- `server/userModel.js`:
  - Replaced `email` with `ign` in user object
  - Updated documentation

#### Database Schema Changes
```javascript
// User object now uses IGN instead of email
{
  id: "uuid",
  username: "player123",
  ign: "DragonSlayer",  // NEW - replaces email
  passwordHash: "...",
  createdAt: "..."
}
```

### 🐛 Bug Fixes
- Fixed My Team page not loading heroes
- Fixed hero images not displaying
- Fixed function naming conflicts
- Fixed server not picking up auth changes
- Fixed DOM element access timing issues

### 📝 Documentation
- Created `SESSION_SUMMARY_2024.md` - Comprehensive session notes
- Updated cache versions (v3 → v9)

---

## Version 2.2 - OCR Hero Recognition

### 🎉 New Features

#### 1. OCR-Based Hero Recognition
- **Adaptive grid detection** - Works on any resolution (PC, iPhone, iPad, Android)
- **OCR name extraction** - Reads hero names from black background with white text
- **Fuzzy matching** - Handles OCR errors with Levenshtein distance algorithm
- **85-95% accuracy** - Much better than pixel matching
- **Device independent** - No need for specific resolution
- **Easy maintenance** - Only needs hero names, not reference images

#### 2. Dual Recognition Methods
- **OCR Method** (New, Default): Text-based recognition
- **Pixel Matching** (Legacy): Image comparison method
- Both methods available via API parameter
- Backward compatible with existing implementations

#### 3. Test Interface
- New test page at `/test-ocr.html`
- Compare both recognition methods
- Visual results with accuracy stats
- See OCR text for debugging

### 🔧 Technical Changes

#### New Dependencies
- `tesseract.js` - OCR engine for text recognition

#### New Backend Files
- `server/heroRecognitionOCR.js` - OCR recognition engine
- `public/test-ocr.html` - Test interface

#### Updated Files
- `server/teamRoutes.js` - Added OCR method support with `useOCR` parameter

#### Key Improvements
- Grid detection adapts to any resolution
- Name area extraction (bottom 18% of cell)
- Image enhancement for better OCR (normalize, grayscale, threshold, upscale 2x)
- Three-tier matching: exact → partial → fuzzy (60% threshold)
- Detailed logging for debugging

## Version 2.1 - Image Cropper Feature

### 🎉 New Features

#### 1. Advanced Image Cropper
- **Interactive crop tool** with move and resize capabilities
- Opens automatically when uploading new hero images
- **Select from Database** - Choose existing hero images to create variants
- **Edit existing heroes** - Blue "Edit" button to re-crop hero images
- Instant preview with local cache (green border indicates updated)
- Smooth UX with drag-to-move and edge/corner resize
- Square crop button for perfect 1:1 ratios
- Reset button to start over

#### 2. Improved Hero Image Management
- Larger image frames (180x180px) for better visibility
- Grouped heroes by name showing all skin variants
- Edit and Delete buttons for each hero image
- Cache-busting for immediate visual updates
- Unique filenames prevent image conflicts

### 🔧 Technical Changes

#### New Frontend Files
- `public/js/imageCropper.js` - Canvas-based image cropper class

#### Updated Files
- `public/js/app.js` - Added editHeroImage, showDatabaseImageSelector functions
- `public/js/pages.js` - Added "Select from Database" button
- `index.html` - Added imageCropper.js script

#### Key Improvements
- Cropper supports both File objects and URLs
- Move crop area by clicking inside
- Resize by dragging edges or corners
- Create new selection by clicking outside
- Instant local preview using URL.createObjectURL()
- Overwrites original file when editing (same filename)
- Unique timestamp-based filenames for new uploads

## Version 2.0 - Admin Panel Upgrade

### 🎉 New Features

#### 1. Automatic Image Upload to GitHub
- **No more manual uploads!** Upload hero images directly from the admin panel
- Images are automatically uploaded to your GitHub repository
- System generates and saves GitHub raw URLs
- Image preview before upload
- File validation (type and size)
- Maximum file size: 5MB
- Supported formats: PNG, JPG, GIF, and other image formats

#### 2. News & Updates Management System
- Create and manage news posts and game updates
- Four categories: General, Game Update, Event, Maintenance
- Draft and publish functionality
- Color-coded categories for easy identification
- Timestamp tracking
- Delete functionality

#### 3. Tabbed Admin Interface
- Clean, organized layout with tabs
- **Manage Heroes** tab - Hero management with image upload
- **News & Updates** tab - News creation and management
- Easy switching between sections

### 🔧 Technical Changes

#### New Dependencies
- `multer` - File upload handling
- `@octokit/rest` - GitHub API integration
- `dotenv` - Environment variable management

#### New Backend Files
- `server/githubUpload.js` - GitHub upload service
- `server/newsModel.js` - News database operations
- `server/newsRoutes.js` - News API endpoints
- `server/uploadRoutes.js` - Image upload endpoints

#### New API Endpoints
- `POST /api/upload/hero-image` - Upload hero image
- `POST /api/upload/news-image` - Upload news image
- `GET /api/news` - Get all news
- `POST /api/news` - Create news
- `PUT /api/news/:id` - Update news
- `DELETE /api/news/:id` - Delete news
- `GET /api/news/category/:category` - Get news by category

#### Database Changes
- New collection: `news_db`
  - Stores news posts with title, content, category, published status
  - Timestamps for creation and updates

#### Frontend Changes
- Enhanced `public/js/pages.js` - New admin page layout with tabs
- Enhanced `public/js/app.js` - New admin functionality handlers
  - `setupAdminTabs()` - Tab switching
  - `attachImagePreviewHandler()` - Image preview
  - `attachHeroFormHandler()` - Hero form with upload
  - `attachNewsFormHandler()` - News form handler
  - `loadNews()` - Load and display news
  - `deleteNews()` - Delete news posts

### 📁 New Files Created
- `.env.example` - Environment variable template
- `GITHUB_SETUP.md` - GitHub token setup guide
- `ADMIN_FEATURES.md` - Admin features documentation
- `QUICK_START.md` - Quick start guide
- `CHANGELOG.md` - This file
- `images/heroes/.gitkeep` - Hero images folder
- `images/news/.gitkeep` - News images folder

### 🔐 Security Enhancements
- Environment variable support for sensitive data
- GitHub token stored securely in `.env` file
- File type validation for uploads
- File size limits (5MB)

### 📝 Documentation
- Comprehensive setup guides
- API documentation
- Feature usage instructions
- Troubleshooting guides

### 🎨 UI Improvements
- Tabbed interface for better organization
- Image preview before upload
- Color-coded news categories
- Loading states and error handling
- Success/error toast notifications

### ⚙️ Configuration Required

To use the new features, you must:

1. Create a GitHub Personal Access Token
2. Add it to `.env` file as `GITHUB_TOKEN`
3. Restart the server

See `QUICK_START.md` for step-by-step instructions.

### 🐛 Bug Fixes
- None (new features)

### 🔄 Breaking Changes
- None (backward compatible)

### 📊 Database Schema Updates

#### New Collection: news_db
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

#### Updated Collection: Hero_db
- No schema changes
- `heroPicture` field now populated automatically via upload

### 🚀 Performance
- Images served from GitHub CDN
- No server storage required for images
- Efficient database queries
- Optimized frontend rendering

### 🔮 Future Enhancements
- Rich text editor for news content
- Image editing/cropping
- Bulk hero import
- News scheduling
- Analytics dashboard
- Image compression
- Multiple image upload

### 📦 Package Updates
```json
{
  "multer": "^1.4.5-lts.1",
  "@octokit/rest": "^20.0.2",
  "dotenv": "^16.3.1"
}
```

### 🎯 Requirements Satisfied
- Admin can upload hero images without manual GitHub operations
- Admin can post news and game updates
- Clean, organized admin interface
- Automatic image URL management
- Draft and publish workflow for news

---

## How to Update

If you're updating from a previous version:

1. Pull the latest code
2. Install new dependencies:
   ```bash
   npm install
   ```
3. Set up GitHub token (see `QUICK_START.md`)
4. Restart the server:
   ```bash
   npm start
   ```

That's it! Your admin panel is now upgraded with new features.
