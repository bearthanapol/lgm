# GitHub Image Upload Setup Guide

This guide explains how to set up automatic image uploads to your GitHub repository.

## Prerequisites

- GitHub account with access to the `bearthanapol/lgm` repository
- Node.js and npm installed

## Step 1: Create GitHub Personal Access Token

1. Go to GitHub Settings: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Give it a descriptive name (e.g., "LGM Image Upload")
4. Set expiration (recommended: 90 days or No expiration for development)
5. Select the following scopes:
   - ✅ **repo** (Full control of private repositories)
     - This includes: repo:status, repo_deployment, public_repo, repo:invite, security_events
6. Click "Generate token"
7. **IMPORTANT**: Copy the token immediately (you won't be able to see it again!)

## Step 2: Configure Environment Variables

1. Create a `.env` file in your project root:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your GitHub token:
   ```
   GITHUB_TOKEN=ghp_your_actual_token_here
   PORT=3000
   NODE_ENV=development
   ```

3. Make sure `.env` is in your `.gitignore` file (it should be by default)

## Step 3: Install Required Packages

The required packages should already be installed, but if not:

```bash
npm install multer @octokit/rest dotenv
```

## Step 4: Update server.js

Add this line at the very top of `server.js`:

```javascript
require('dotenv').config();
```

## Step 5: Create Image Folders in GitHub

The system will automatically create these folders when you upload images, but you can create them manually:

1. Go to your repository: https://github.com/bearthanapol/lgm
2. Create the following folder structure:
   ```
   images/
   ├── heroes/
   └── news/
   ```

## How It Works

### Hero Image Upload

1. Admin goes to Admin Panel → Manage Heroes
2. Fills in hero details
3. Selects an image file (max 5MB)
4. Clicks "Add Hero"
5. System automatically:
   - Uploads image to `images/heroes/` in GitHub
   - Saves the GitHub raw URL to the database
   - Creates the hero record

### Image URLs

Uploaded images are accessible via GitHub raw URLs:
```
https://raw.githubusercontent.com/bearthanapol/lgm/main/images/heroes/hero-name.png
```

## Troubleshooting

### Error: "GitHub token not configured"

- Make sure you created the `.env` file
- Verify the token is correctly set in `.env`
- Restart your server after adding the token

### Error: "Failed to upload to GitHub"

- Check that your token has the correct permissions (repo scope)
- Verify the token hasn't expired
- Make sure you have write access to the repository

### Error: "Only image files are allowed"

- Only image files (PNG, JPG, GIF, etc.) are supported
- Maximum file size is 5MB

### Images not displaying

- Check the browser console for CORS errors
- Verify the GitHub URL is correct
- Make sure the repository is public or the token has access

## Security Notes

1. **Never commit your `.env` file** - It contains sensitive credentials
2. **Rotate tokens regularly** - Generate new tokens every 90 days
3. **Use minimal permissions** - Only grant the `repo` scope needed
4. **Revoke unused tokens** - Delete old tokens from GitHub settings

## Alternative: Manual Upload

If you prefer not to use automatic uploads, you can still:

1. Manually upload images to GitHub
2. Get the raw URL: `https://raw.githubusercontent.com/bearthanapol/lgm/main/images/heroes/your-image.png`
3. Paste the URL in the "Image URL" field (if you keep the old input field)

## Testing

To test the upload functionality:

1. Start your server: `npm start`
2. Login as admin
3. Go to Admin Panel → Manage Heroes
4. Try uploading a small test image
5. Check your GitHub repository to see if the image appears in `images/heroes/`

## Support

If you encounter issues:
1. Check the server console for error messages
2. Verify your GitHub token permissions
3. Make sure the repository name and owner are correct in `server/githubUpload.js`
