# Deployment Guide for Render.com

## Prerequisites
1. GitHub account with your code repository
2. Render.com account (free tier available)
3. MongoDB Atlas account (free tier available)

## Step 1: Prepare MongoDB Atlas

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster (M0 Sandbox)
3. Create a database user:
   - Go to Database Access
   - Add New Database User
   - Choose Password authentication
   - Save username and password
4. Whitelist IP addresses:
   - Go to Network Access
   - Add IP Address
   - Choose "Allow Access from Anywhere" (0.0.0.0/0)
   - This is required for Render.com
5. Get your connection string:
   - Go to Database > Connect
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password
   - Example: `mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority`

## Step 2: Push Code to GitHub

```bash
git add .
git commit -m "Prepare for Render deployment"
git push origin main
```

## Step 3: Deploy on Render.com

### Option A: Using render.yaml (Recommended)

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click "New +" → "Blueprint"
3. Connect your GitHub repository
4. Render will automatically detect `render.yaml`
5. Click "Apply"

### Option B: Manual Setup

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: lgm-gaming-website
   - **Region**: Oregon (US West)
   - **Branch**: main
   - **Root Directory**: (leave empty)
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Plan**: Free

## Step 4: Configure Environment Variables

In Render dashboard, go to your service → Environment:

### Required Variables:

1. **MONGODB_URI**
   - Value: Your MongoDB Atlas connection string
   - Example: `mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/lgm_gaming?retryWrites=true&w=majority`

2. **JWT_SECRET**
   - Value: Generate a random string (32+ characters)
   - Example: `your-super-secret-jwt-key-change-this-in-production`
   - Or use: `openssl rand -base64 32`

3. **SESSION_SECRET**
   - Value: Generate a random string (32+ characters)
   - Example: `your-super-secret-session-key-change-this-too`
   - Or use: `openssl rand -base64 32`

4. **NODE_ENV**
   - Value: `production`

5. **PORT** (Optional - Render sets this automatically)
   - Value: `10000`

### Optional Variables:

6. **DB_NAME** (if you want a different database name)
   - Value: `lgm_gaming`

## Step 5: Deploy

1. Click "Create Web Service" or "Apply" (if using Blueprint)
2. Render will:
   - Clone your repository
   - Install dependencies
   - Start your application
3. Wait for deployment to complete (5-10 minutes)
4. Your app will be available at: `https://your-app-name.onrender.com`

## Step 6: Verify Deployment

1. Visit your Render URL
2. Test the following:
   - ✅ Homepage loads
   - ✅ User registration works
   - ✅ User login works
   - ✅ Database operations work
   - ✅ All pages are accessible

## Important Notes

### Free Tier Limitations:
- **Spin down after 15 minutes of inactivity**
  - First request after spin down takes 30-60 seconds
  - Consider upgrading to paid plan for always-on service
- **750 hours/month free**
- **Automatic SSL certificate**

### Database Connection:
- MongoDB Atlas free tier (M0) is sufficient for development
- Includes 512 MB storage
- Shared CPU and RAM

### Environment Variables Security:
- Never commit `.env` file to GitHub
- Use Render's environment variable management
- Rotate secrets regularly

## Troubleshooting

### Deployment Fails:
1. Check build logs in Render dashboard
2. Verify all dependencies in package.json
3. Ensure Node.js version compatibility

### Database Connection Fails:
1. Verify MONGODB_URI is correct
2. Check MongoDB Atlas network access (0.0.0.0/0)
3. Verify database user credentials
4. Check Render logs for specific error messages

### Application Errors:
1. Check Render logs: Dashboard → Your Service → Logs
2. Look for error messages
3. Verify environment variables are set correctly

## Updating Your Application

```bash
# Make changes to your code
git add .
git commit -m "Your update message"
git push origin main
```

Render will automatically detect the push and redeploy your application.

## Custom Domain (Optional)

1. Go to your service in Render
2. Click "Settings" → "Custom Domain"
3. Add your domain
4. Update DNS records as instructed
5. Render provides free SSL certificate

## Monitoring

- **Logs**: Dashboard → Your Service → Logs
- **Metrics**: Dashboard → Your Service → Metrics
- **Events**: Dashboard → Your Service → Events

## Support

- Render Documentation: https://render.com/docs
- MongoDB Atlas Documentation: https://docs.atlas.mongodb.com/
- GitHub Issues: Create an issue in your repository

## Cost Estimate

### Free Tier:
- Render Web Service: Free (with limitations)
- MongoDB Atlas M0: Free (512 MB)
- **Total: $0/month**

### Paid Tier (Recommended for Production):
- Render Starter: $7/month (always-on, no spin down)
- MongoDB Atlas M2: $9/month (2 GB storage)
- **Total: $16/month**

## Security Checklist

- ✅ Environment variables configured
- ✅ JWT_SECRET is strong and unique
- ✅ SESSION_SECRET is strong and unique
- ✅ MongoDB user has strong password
- ✅ MongoDB network access configured
- ✅ HTTPS enabled (automatic on Render)
- ✅ CORS configured for production
- ✅ No sensitive data in code repository

## Next Steps

1. Set up monitoring and alerts
2. Configure custom domain
3. Set up automated backups for MongoDB
4. Implement rate limiting
5. Add application monitoring (e.g., Sentry)
6. Set up CI/CD pipeline
7. Create staging environment

---

**Congratulations! Your LGM Gaming Website is now live! 🎉**
