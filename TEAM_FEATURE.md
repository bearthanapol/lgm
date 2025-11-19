# Team Feature - Automatic Hero Recognition

## Overview

The Team feature allows users to upload a screenshot of their hero collection from the game, and the system will automatically recognize and save all heroes using image matching.

## How It Works

### 1. Screenshot Upload
- User uploads a screenshot showing 40 heroes in a 4×10 grid
- System accepts images up to 10MB

### 2. Image Processing
- Screenshot is split into 40 individual cells (4 rows × 10 columns)
- Each cell is resized to 100×100 pixels for standardized comparison

### 3. Image Matching
- Each hero cell is compared against all heroes in the database
- Uses pixel-by-pixel comparison with `pixelmatch` library
- Calculates similarity score (0-1, where 1 is perfect match)
- Minimum threshold: 50% similarity

### 4. Results
- Displays recognition results with statistics
- Shows 4×10 grid with hero names and confidence scores
- Green background: Recognized heroes
- Red background: Unknown heroes
- Saves results to user's team in database

## Technical Implementation

### Backend Components

#### Image Matching Service (`server/imageMatching.js`)
- `splitScreenshotIntoGrid()` - Splits screenshot into 40 cells
- `compareImages()` - Compares two images using pixelmatch
- `matchHeroCell()` - Matches a cell against all database heroes
- `processScreenshotAndMatch()` - Main processing function

#### User Team Model (`server/userTeamModel.js`)
- `saveUserTeam()` - Save/update user's hero team
- `getUserTeam()` - Retrieve user's team
- `getHeroStatistics()` - Get hero usage statistics

#### Team Routes (`server/teamRoutes.js`)
- `POST /api/team/upload` - Upload and process screenshot
- `GET /api/team/:username` - Get user's team
- `GET /api/team/stats/heroes` - Get hero statistics

### Frontend Components

#### Team Page (`public/js/pages.js`)
- Upload form with file input
- Screenshot preview
- Results display with statistics
- 4×10 hero grid visualization

#### Team Handlers (`public/js/app.js`)
- `attachScreenshotUploadHandler()` - Handle screenshot upload
- `displayTeamResults()` - Display recognition results
- `loadUserTeam()` - Load saved team

## Database Schema

### Collection: `user_teams`
```javascript
{
  _id: ObjectId,
  username: String,
  heroes: [
    {
      position: Number,      // 1-40
      row: Number,           // 1-4
      col: Number,           // 1-10
      heroName: String,
      heroId: ObjectId,
      rarity: String,
      similarity: Number,    // 0-1
      matchedImageUrl: String
    }
  ],
  totalHeroes: Number,
  lastUpdated: Date
}
```

## Usage

### For Users

1. Go to **Team** → **My Team**
2. Click **Choose File** and select your hero screenshot
3. Preview appears below
4. Click **Process Screenshot**
5. Wait for processing (may take 1-2 minutes)
6. View results:
   - Total heroes recognized
   - 4×10 grid showing all heroes
   - Confidence scores for each match

### For Admins

1. Add heroes to database with images (Admin Panel → Manage Heroes)
2. Multiple skins per hero improve matching accuracy
3. More heroes in database = better recognition

## Image Matching Algorithm

### Current Implementation: Pixel Comparison
- Resizes both images to 100×100 pixels
- Compares pixel-by-pixel using `pixelmatch`
- Calculates difference count
- Converts to similarity score: `1 - (differences / totalPixels)`

### Matching Process
1. For each of 40 cells:
   - Compare against all heroes in database
   - Track best match (highest similarity)
   - If similarity ≥ 50%, mark as recognized
   - If similarity < 50%, mark as unknown

### Performance
- Processing time: ~1-2 minutes for 40 heroes
- Depends on number of heroes in database
- Each comparison takes ~100-200ms

## Improving Accuracy

### Tips for Better Recognition

1. **High-Quality Screenshots**
   - Use clear, high-resolution images
   - Avoid blurry or compressed screenshots
   - Ensure good lighting/contrast

2. **Add Multiple Skins**
   - Add all hero skins to database
   - More variations = better matching
   - System compares against all skins

3. **Consistent Grid Layout**
   - Screenshot must show 4 rows × 10 columns
   - Heroes should be evenly spaced
   - No overlapping or missing cells

4. **Database Coverage**
   - Add all heroes to database before uploading
   - Include hero images from same game version
   - Update hero images when game updates

## Future Enhancements

### Potential Improvements

1. **Advanced Matching Algorithms**
   - Feature detection (SIFT, SURF, ORB)
   - Deep learning (CNN-based recognition)
   - Template matching with rotation/scale invariance

2. **Performance Optimization**
   - Parallel processing of cells
   - Caching of hero image data
   - Progressive results display

3. **User Feedback**
   - Manual correction of misidentified heroes
   - Confidence threshold adjustment
   - Re-process specific cells

4. **Statistics & Analytics**
   - Most popular heroes
   - Rarity distribution
   - Team composition analysis

## Troubleshooting

### "No heroes in database"
- Add heroes in Admin Panel first
- Each hero needs at least one image

### Low Recognition Rate
- Check screenshot quality
- Ensure 4×10 grid layout
- Add more hero skins to database
- Try different screenshot

### Processing Takes Too Long
- Normal for large hero databases
- Wait 1-2 minutes for completion
- Check server console for progress

### Unknown Heroes
- Hero not in database
- Low image quality
- Different hero skin/version
- Add missing heroes to database

## API Reference

### Upload Screenshot
```
POST /api/team/upload
Content-Type: multipart/form-data

Body:
- screenshot: File (image)
- username: String

Response:
{
  success: true,
  data: {
    totalHeroes: 35,
    unknownHeroes: 5,
    heroes: [...],
    team: {...}
  }
}
```

### Get User Team
```
GET /api/team/:username

Response:
{
  success: true,
  data: {
    username: "player1",
    heroes: [...],
    totalHeroes: 35,
    lastUpdated: "2024-01-15T10:30:00Z"
  }
}
```

### Get Hero Statistics
```
GET /api/team/stats/heroes

Response:
{
  success: true,
  data: [
    {
      heroName: "Shadow Knight",
      count: 15,
      rarity: "L2"
    },
    ...
  ]
}
```

## Dependencies

- `sharp` - Image processing
- `pixelmatch` - Pixel comparison
- `pngjs` - PNG image handling
- `multer` - File upload handling

## Notes

- Processing is CPU-intensive
- Consider implementing queue system for production
- May need to adjust similarity threshold based on game graphics
- Test with various screenshot qualities
