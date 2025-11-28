# LazyGuildMasters (LGM) Gaming Website

A comprehensive guild management web application for Seven Knights Re:BIRTH players.

## 🎮 Features

### User Management
- User registration and authentication
- Role-based access control (Admin, Guild Master, Guild Assistant, Member)
- Secure JWT-based authentication

### Guild System
- Create and manage guilds
- Guild member management
- Guild Master and Assistant roles
- Member invitation system

### Guild War Management
- 115 enemy team tracking
- Hero management with star levels (0-12)
- Ring and skill tracking
- Team composition planning
- Battle history tracking
- Speed tracking and defeat status
- Find team feature with hero search
- Battle comments and strategy notes

### Hero Management
- Hero database with images
- Rarity system (L2, L1, L0, R)
- Hero recognition tool with OCR
- Image upload and cropping
- Star level tracking

### Team Management
- Personal team management
- Hero collection tracking
- Screenshot upload with OCR
- Manual hero editing

### News & Updates
- Admin news management
- Category system (General, Update, Event, Maintenance)
- Publish/Draft status
- Public news feed

### Analytics (Admin)
- User statistics
- Page view tracking
- Daily access trends
- User activity monitoring

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd lgm-gaming-website
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. **Start MongoDB** (if running locally)
```bash
mongod
```

5. **Run the application**
```bash
npm start
```

6. **Open your browser**
```
http://localhost:3000
```

### Deploy to Render.com

See [RENDER_QUICKSTART.md](RENDER_QUICKSTART.md) for 5-minute deployment guide.

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

## 📋 Requirements

- Node.js 14+ 
- MongoDB 4.4+
- npm or yarn

## 🛠️ Technology Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **JWT** - Authentication
- **bcrypt** - Password hashing

### Frontend
- **Vanilla JavaScript** - No framework dependencies
- **SPA Architecture** - Single Page Application
- **Custom Router** - Client-side routing
- **Responsive Design** - Mobile-friendly

### Additional Libraries
- **Tesseract.js** - OCR for hero recognition
- **Sharp** - Image processing
- **Multer** - File uploads
- **Pixelmatch** - Image comparison

## 📁 Project Structure

```
lgm-gaming-website/
├── server/                 # Backend code
│   ├── authRoutes.js      # Authentication routes
│   ├── userRoutes.js      # User management
│   ├── guildRoutes.js     # Guild management
│   ├── guildWarRoutes.js  # Guild War features
│   ├── heroRoutes.js      # Hero database
│   ├── newsRoutes.js      # News management
│   ├── analyticsRoutes.js # Analytics tracking
│   ├── database.js        # MongoDB connection
│   └── ...
├── public/                # Frontend code
│   ├── js/
│   │   ├── app.js        # Main application & router
│   │   ├── pages.js      # Page components
│   │   ├── layoutManager.js # Layout rendering
│   │   └── ...
│   ├── css/
│   │   └── styles.css    # Application styles
│   └── images/           # Static images
├── index.html            # SPA entry point
├── server.js             # Express server
├── package.json          # Dependencies
├── render.yaml           # Render.com config
└── README.md            # This file
```

## 🔐 Environment Variables

Required environment variables:

```env
# Database
MONGODB_URI=your_mongodb_connection_string
DB_NAME=lgm_gaming

# Authentication
JWT_SECRET=your_jwt_secret
SESSION_SECRET=your_session_secret

# Server
PORT=3000
NODE_ENV=production
```

See `.env.example` for complete list.

## 👥 User Roles

1. **Admin** - Full system access
   - Manage heroes database
   - Create news and updates
   - View analytics
   - All guild features

2. **Guild Master** - Guild owner
   - Manage guild settings
   - Add/remove members
   - Assign assistants
   - Edit guild war teams

3. **Guild Assistant** - Helper role
   - Edit guild war teams
   - View guild information
   - Cannot manage members

4. **Guild Member** - Regular member
   - View guild information
   - View guild war teams
   - Manage personal team

## 📱 Pages

- **Home** - News feed and updates
- **LGM Section**
  - Hero Database
  - Equipment (Coming soon)
  - Pet (Coming soon)
- **Guild Section**
  - Guild Info
  - Castle Rush (Coming soon)
  - Guild War
  - Adventure Expedition (Coming soon)
- **Team Section**
  - My Team
  - Guild War Target (GWar Noti)
- **Admin Section** (Admin only)
  - Manage Heroes
  - News & Updates
  - Analytics

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/refresh-role` - Refresh user role

### Guild War
- `GET /api/guildwar` - Get all enemy teams
- `POST /api/guildwar` - Create enemy team
- `PUT /api/guildwar/:id` - Update enemy team
- `POST /api/guildwar/search` - Search teams by heroes
- `POST /api/guildwar/reset` - Reset guild war

### Analytics
- `GET /api/analytics/stats` - Get statistics
- `POST /api/analytics/log` - Log page access

See individual route files for complete API documentation.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## ⚠️ Disclaimer

**LazyGuildMasters** is a fan-made, independent website and is not affiliated with Netmarble. **Seven Knights Re:BIRTH** and related assets are trademarks of Netmarble Corporation. All trademarks and images are used for reference only.

## 📞 Support

For issues and questions:
- Create an issue in the GitHub repository
- Check the documentation in `/docs` folder
- See deployment guides for hosting help

## 🎯 Roadmap

- [ ] Equipment management system
- [ ] Pet management system
- [ ] Castle Rush tracking
- [ ] Adventure Expedition planning
- [ ] Mobile app
- [ ] Discord integration
- [ ] Advanced analytics
- [ ] Team builder tool
- [ ] Hero comparison tool

## 🙏 Acknowledgments

- Seven Knights Re:BIRTH community
- Netmarble for the amazing game
- All contributors and testers

---

**Made with ❤️ by the LazyGuildMasters community**
