# Quick Start Guide - Admin Panel Features

## What's New?

Your LGM Gaming Website now has enhanced admin features:

✅ **Automatic Image Upload** - Upload hero images directly, no more manual GitHub uploads!  
✅ **News Management** - Post game updates, events, and announcements  
✅ **Tabbed Interface** - Clean, organized admin panel  

## Getting Started (5 Minutes)

### Step 1: Set Up GitHub Token

1. Go to: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Name it: "LGM Image Upload"
4. Check the **repo** permission
5. Click "Generate token"
6. **Copy the token** (starts with `ghp_`)

### Step 2: Configure Your Project

1. Create a `.env` file in your project root:
   ```bash
   GITHUB_TOKEN=ghp_paste_your_token_here
   PORT=3000
   ```

2. Restart your server:
   ```bash
   npm start
   ```

### Step 3: Test It Out!

1. Open http://localhost:3000
2. Login to your account
3. Go to **Admin** → **Manage Heroes**
4. Try adding a hero with an image!

## Using the Admin Panel

### Adding a Hero (With Image Upload!)

1. Click **Admin** in the top navigation
2. Stay on the **Manage Heroes** tab
3. Fill in the form:
   - Enter hero name, type, stats
   - **Click "Choose File"** and select an image
   - See the preview appear!
   - Add a description
4. Click **Add Hero**
5. ✨ Magic happens:
   - Image uploads to GitHub automatically
   - Hero is saved with the image URL
   - You see a success message!

### Creating News/Updates

1. Click **Admin** in the top navigation
2. Click the **News & Updates** tab
3. Fill in the form:
   - Enter a catchy title
   - Choose a category (Update, Event, etc.)
   - Write your content
   - Check "Publish immediately" or save as draft
4. Click **Create News**
5. Your news appears in the list!

## What Happens Behind the Scenes?

### Image Upload Flow

```
You select image → Upload to GitHub → Get URL → Save to database → Done!
```

Your images are stored at:
```
https://raw.githubusercontent.com/bearthanapol/lgm/main/images/heroes/your-image.png
```

### Database Structure

**Heroes** are saved in `Hero_db` collection:
- Name, type, stats, rarity
- Image URL (from GitHub)
- Description

**News** are saved in `news_db` collection:
- Title, content, category
- Published status
- Creation date

## Troubleshooting

### "GitHub token not configured"

❌ Problem: Token not set or server not restarted  
✅ Solution: 
1. Check your `.env` file exists
2. Verify `GITHUB_TOKEN=ghp_...` is set
3. Restart the server: `npm start`

### "Failed to upload image"

❌ Problem: Token expired or wrong permissions  
✅ Solution:
1. Generate a new token with **repo** permission
2. Update `.env` file
3. Restart server

### "Only image files are allowed"

❌ Problem: Wrong file type  
✅ Solution: Use PNG, JPG, GIF, or other image formats

### Image too large

❌ Problem: File over 5MB  
✅ Solution: Resize or compress your image before uploading

## Tips & Best Practices

### For Hero Images
- ✅ Use square images (512x512px recommended)
- ✅ PNG format for transparency
- ✅ Keep under 1MB for fast loading
- ✅ Use descriptive names: `shadow-knight.png`

### For News Posts
- ✅ Write clear, concise titles
- ✅ Use appropriate categories
- ✅ Break content into paragraphs
- ✅ Save as draft to review before publishing

### Security
- ❌ Never commit your `.env` file
- ✅ Add `.env` to `.gitignore`
- ✅ Rotate tokens every 90 days
- ✅ Only grant necessary permissions

## Next Steps

Want to do more? Check out:

- `ADMIN_FEATURES.md` - Detailed feature documentation
- `GITHUB_SETUP.md` - Complete GitHub setup guide
- `DATABASE_SCHEMA.md` - Database structure reference

## Need Help?

Common issues and solutions:

1. **Server won't start**: Check if port 3000 is already in use
2. **Can't login**: Verify MongoDB connection in `server/database.js`
3. **Images not showing**: Check GitHub token permissions
4. **News not saving**: Check MongoDB connection

## What's Next?

Future enhancements planned:
- Rich text editor for news
- Image cropping/editing
- Bulk hero import
- News scheduling
- Analytics dashboard

---

**Enjoy your enhanced admin panel! 🎮**
