# Quick Reference Guide - LGM Gaming Website

## Project Overview
LazyGuildMasters (LGM) gaming website with hero management, news system, team recognition, and guild features.

## Quick Start

### Running the Server
```bash
node server.js
```
Server runs on: http://localhost:3000

### Environment Variables (.env)
```
MONGODB_URI=mongodb://localhost:27017/lgm_db
JWT_SECRET=your-secret-key-here
GITHUB_TOKEN=your-github-token-here
```

## Key Features

### 1. Admin Panel (Admin Only)
**Access**: Login → Navigate to Admin Panel

#### Hero Management
- **Add Hero**: Name + Rarity + Image (with cropper)
- **Edit Image**: Click blue "Edit" button → Crop → Apply
- **Select from DB**: Use existing images to create variants
- **Delete**: Click red "Delete" button

#### News Management
- **Create News**: Title + Category + Content + Publish checkbox
- **Categories**: General, Game Update, Event, Maintenance
- **Delete**: Click "Delete" button on news card

### 2. Image Cropper
**Opens automatically when:**
- Uploading new hero image
- Selecting image from database
- Clicking "Edit" on existing hero

**Controls:**
- **Move**: Click inside orange box, drag
- **Resize**: Click edge/corner, drag
- **New Selection**: Click outside box
- **Square Crop**: Button for 1:1 ratio
- **Reset**: Button to reset to full image

### 3. Team Recognition (NEW: OCR-Based)
**Upload screenshot** → Adaptive grid detection → OCR name extraction → Match with database → Shows results

**Two Methods Available:**
- **OCR Method** (New, Recommended): Reads hero names using OCR - works on any resolution
- **Pixel Matching** (Old): Compares images pixel-by-pixel - resolution dependent

**Test Page**: http://localhost:3000/test-ocr.html

### 4. Home Page
Displays published news and updates

## File Structure

### Frontend
```
public/
├── js/
│   ├── app.js              # Main app logic
│   ├── imageCropper.js     # Cropper feature
│   ├── pages.js            # Page renderers
│   ├── layoutManager.js    # UI layouts
│   ├── router.js           # SPA routing
│   ├── authManager.js      # Authentication
│   ├── toastManager.js     # Notifications
│   ├── loginPage.js        # Login UI
│   └── signupPage.js       # Signup UI
├── css/
│   └── styles.css          # Main styles
├── debug-grid.html         # Debug tool
└── hero-extractor.html     # Hero extraction tool
```

### Backend
```
server/
├── server.js               # Main server
├── heroRoutes.js           # Hero API
├── newsRoutes.js           # News API
├── teamRoutes.js           # Team API
├── uploadRoutes.js         # Image upload API
├── githubUpload.js         # GitHub integration
├── imageMatching.js        # Hero recognition
├── authRoutes.js           # Authentication
├── heroModel.js            # Hero DB operations
├── newsModel.js            # News DB operations
├── userTeamModel.js        # Team DB operations
└── dataManager.js          # Data utilities
```

## API Endpoints

### Heroes
- `GET /api/heroes` - Get all heroes
- `POST /api/heroes` - Create hero
- `PUT /api/heroes/:id` - Update hero
- `DELETE /api/heroes/:id` - Delete hero

### News
- `GET /api/news` - Get all news (or ?published=true)
- `POST /api/news` - Create news
- `DELETE /api/news/:id` - Delete news

### Upload
- `POST /api/upload/hero-image` - Upload hero image to GitHub

### Team
- `POST /api/team/upload` - Upload screenshot for recognition
- `GET /api/team/:username` - Get user's team

### Auth
- `POST /api/auth/signup` - Register user
- `POST /api/auth/login` - Login user

## Database Collections

### Hero_db
```javascript
{
  name: String,           // Hero name
  rarity: String,         // L2, L1, L0, R
  imageUrl: String,       // GitHub raw URL
  type: String,           // Optional
  attack: Number,         // Optional
  defense: Number,        // Optional
  hp: Number,             // Optional
  description: String     // Optional
}
```

### news_db
```javascript
{
  title: String,
  content: String,
  category: String,       // general, update, event, maintenance
  published: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### userteams_db
```javascript
{
  username: String,
  heroes: Array,          // Recognized heroes
  totalHeroes: Number,
  unknownHeroes: Number,
  uploadDate: Date
}
```

### users_db
```javascript
{
  username: String,
  email: String,
  password: String,       // Hashed
  role: String,           // 'user' or 'admin'
  createdAt: Date
}
```

## Common Tasks

### Add New Hero with Crop
1. Admin Panel → Manage Heroes
2. Fill Name + Rarity
3. Choose File → Cropper opens
4. Adjust crop → Apply Crop
5. Add Hero

### Create Skin Variant
1. Admin Panel → Manage Heroes
2. Click "Select from Database"
3. Choose base hero image
4. Crop for variant → Apply
5. Enter variant name + rarity
6. Add Hero

### Edit Hero Image
1. Admin Panel → Manage Heroes
2. Find hero → Click "Edit"
3. Adjust crop → Apply Crop
4. Image updates instantly (green border)
5. GitHub updates in background

### Publish News
1. Admin Panel → News & Updates
2. Fill Title + Category + Content
3. Check "Publish immediately"
4. Create News

## Troubleshooting

### Image doesn't update after edit
- **Cause**: GitHub CDN cache (1-5 minutes)
- **Solution**: Local preview shows immediately, refresh page after a few minutes
- **Workaround**: Hard refresh (Ctrl+F5)

### Cropper is hard to use
- Click inside to move
- Click edges/corners to resize
- Click outside to create new selection
- Use Square Crop button

### Login issues
- Check MongoDB is running
- Verify JWT_SECRET in .env
- Check user exists in database

### Image upload fails
- Check GITHUB_TOKEN in .env
- Verify token has repo write permissions
- Check file size < 5MB

## GitHub Configuration

### Repository
- Owner: `bearthanapol`
- Repo: `lgm`
- Branch: `main`
- Path: `/images/heroes/`

### Token Permissions Required
- `repo` (Full control of private repositories)

### Image URLs
Format: `https://raw.githubusercontent.com/bearthanapol/lgm/main/images/heroes/filename.png`

## Development Tips

### Testing Cropper
1. Use debug tools: `debug-grid.html`, `hero-extractor.html`
2. Test with various image sizes
3. Check cache busting works

### Adding New Features
1. Update requirements.md
2. Update design.md
3. Implement feature
4. Update documentation
5. Test thoroughly

### Debugging
- Check browser console (F12)
- Check server logs
- Use toast notifications
- Check MongoDB data

## Documentation Files

- `README.md` - Project overview
- `QUICK_START.md` - Setup guide
- `ADMIN_FEATURES.md` - Admin panel guide
- `IMAGE_CROPPER_FEATURE.md` - Cropper documentation
- `TEAM_FEATURE.md` - Team recognition guide
- `GITHUB_SETUP.md` - GitHub integration setup
- `DATABASE_SCHEMA.md` - Database structure
- `CHANGELOG.md` - Version history
- `ERROR_HANDLING_FEATURES.md` - Error handling
- `TEST_README.md` - Testing guide

## Support

For issues or questions:
1. Check documentation files
2. Review error messages in console
3. Check server logs
4. Verify environment variables
5. Test with debug tools

## Version
Current: **v2.1** (Image Cropper Feature)
