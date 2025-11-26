# GitHub Token Setup Guide

## Problem
You're getting this error when uploading hero images:
```
Error: Failed to upload to GitHub: Bad credentials
```

This means your GitHub Personal Access Token is not configured correctly.

## Solution

### Step 1: Create a GitHub Personal Access Token

1. **Go to GitHub Settings**
   - Visit: https://github.com/settings/tokens
   - Or: GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)

2. **Generate New Token**
   - Click "Generate new token" → "Generate new token (classic)"
   - Note: Give it a descriptive name like "LGM Image Upload"

3. **Configure Token**
   - **Expiration**: Choose "No expiration" or "90 days"
   - **Scopes**: Select these permissions:
     - ✅ `repo` (Full control of private repositories)
       - This automatically includes all sub-scopes

4. **Generate and Copy**
   - Click "Generate token" at the bottom
   - **IMPORTANT**: Copy the token immediately!
   - It will look like: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
   - You won't be able to see it again!

### Step 2: Update .env File

1. **Open** `.env` file in your project root
2. **Find** this line:
   ```
   GITHUB_TOKEN=your_github_personal_access_token_here
   ```
3. **Replace** with your actual token:
   ```
   GITHUB_TOKEN=ghp_your_actual_token_here
   ```
4. **Save** the file

### Step 3: Restart the Server

**Option 1: Using Terminal**
```bash
# Stop the current server (Ctrl+C)
# Then restart:
node server.js
```

**Option 2: Using npm**
```bash
npm start
```

### Step 4: Test the Upload

1. Go to Admin page
2. Try to add a hero with an image
3. The upload should now work!

## Verification

After setting up the token, you can verify it's working:

1. **Check Server Logs**
   - Look for: "✓ Connected to MongoDB successfully"
   - No GitHub token errors

2. **Test Upload**
   - Upload a hero image in Admin page
   - Image should appear immediately
   - Check your GitHub repo: https://github.com/bearthanapol/lgm/tree/main/images/heroes

## Troubleshooting

### Token Still Not Working?

**Check Token Permissions:**
- Make sure you selected the `repo` scope
- Token must have write access to the repository

**Check Token Expiration:**
- Go to: https://github.com/settings/tokens
- Check if your token is expired
- Generate a new one if needed

**Check .env File:**
- No spaces around the `=` sign
- No quotes around the token
- Token is on a single line

**Correct Format:**
```env
GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

**Incorrect Formats:**
```env
GITHUB_TOKEN = ghp_xxx  # ❌ Spaces around =
GITHUB_TOKEN="ghp_xxx"  # ❌ Quotes
GITHUB_TOKEN=ghp_xxx
ghp_yyy                 # ❌ Multiple lines
```

### Still Getting Errors?

1. **Regenerate Token**
   - Delete old token on GitHub
   - Create a new one
   - Update .env file
   - Restart server

2. **Check Repository Access**
   - Make sure you have write access to `bearthanapol/lgm`
   - Check if repository exists and is accessible

3. **Check Network**
   - Make sure you can access GitHub
   - Check firewall settings

## Security Notes

⚠️ **IMPORTANT**: 
- Never commit your `.env` file to Git
- Never share your GitHub token publicly
- The `.env` file is already in `.gitignore`
- If you accidentally expose your token, revoke it immediately on GitHub

## Alternative: Use Local Storage

If you don't want to use GitHub for image storage, you can:

1. Store images locally in `public/images/heroes/`
2. Modify the upload route to save files locally
3. Serve images from your server

Let me know if you need help setting up local storage instead!

## Quick Reference

- **GitHub Tokens**: https://github.com/settings/tokens
- **Repository**: https://github.com/bearthanapol/lgm
- **Images Folder**: https://github.com/bearthanapol/lgm/tree/main/images/heroes
- **Token Format**: `ghp_` followed by 36 characters
