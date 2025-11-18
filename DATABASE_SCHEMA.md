# LGM Gaming Website - Database Schema

## MongoDB Connection
- **URL**: `mongodb+srv://bearthanapol_db_user:WOdCunHGxm5MGZG9@b7k.cj6f4tm.mongodb.net/?appName=b7k`
- **Database Name**: `lgm_gaming`
- **Region**: Singapore (SG)

## Collections

### 1. user_db (User Collection)
Stores user account information and their hero collections.

**Schema:**
```javascript
{
  _id: ObjectId,
  username: String,              // For login
  password: String,              // Hashed password for login
  inGameName: String,            // Display name in game
  heroList: [                    // Array of user's heroes
    {
      heroname: String,          // Links to Hero_db.heroname
      heroPicture: String,       // GitHub URL (same as Hero_db)
      itemSet: String,           // Equipment set
      ring: String,              // Ring item
      star: Number               // Star rating
    }
  ],
  role: String,                  // "Admin", "Guild Master", "Guild Member"
  createdAt: Date,
  updatedAt: Date
}
```

**API Endpoints:**
- `POST /api/auth/signup` - Create new user
- `POST /api/auth/login` - Login user
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update user profile
- `POST /api/user/heroes` - Add hero to user's collection
- `DELETE /api/user/heroes/:heroname` - Remove hero from collection
- `PUT /api/user/heroes/:heroname` - Update user's hero

---

### 2. Hero_db (Hero Master Collection)
Master list of all heroes in the game.

**Schema:**
```javascript
{
  _id: ObjectId,
  heroname: String,              // Unique hero identifier
  heroPicture: String,           // GitHub URL for hero image
  type: String,                  // "Physical", "Magic", "Support", "Tank"
  attack: Number,
  defense: Number,
  hp: Number,
  rarity: String,                // "Common", "Rare", "Epic", "Legendary"
  description: String,
  createdAt: Date,
  updatedAt: Date
}
```

**API Endpoints:**
- `GET /api/heroes` - Get all heroes
- `GET /api/heroes/:id` - Get hero by ID
- `POST /api/heroes` - Create new hero (Admin only)
- `PUT /api/heroes/:id` - Update hero
- `DELETE /api/heroes/:id` - Delete hero
- `GET /api/heroes/search/:query` - Search heroes

---

### 3. guild_db (Guild Collection)
Stores guild information and members.

**Schema:**
```javascript
{
  _id: ObjectId,
  guildName: String,             // Unique guild name
  guildMasterName: String,       // Username of guild master
  guildMemberNames: [String],    // Array of member usernames
  guildPassword: String,         // Hashed password for guild
  createdAt: Date,
  updatedAt: Date
}
```

**API Endpoints:**
- `GET /api/guilds` - Get all guilds
- `GET /api/guilds/:id` - Get guild by ID
- `POST /api/guilds` - Create new guild
- `POST /api/guilds/verify` - Verify guild password
- `POST /api/guilds/:id/members` - Add member to guild
- `DELETE /api/guilds/:id/members/:memberName` - Remove member
- `PUT /api/guilds/:id` - Update guild
- `DELETE /api/guilds/:id` - Delete guild

---

### 4. guildWar_db (Guild War Enemy Teams Collection)
Stores enemy team compositions for guild war (115 teams total).

**Schema:**
```javascript
{
  _id: ObjectId,
  teamNumber: Number,            // 1-115 (unique)
  heroes: [                      // Array of 3 heroes max
    {
      heroname: String,          // Links to Hero_db.heroname
      heroPicture: String,       // GitHub URL
      skills: [                  // Array of 2 skills
        {
          skillName: String,
          skillOrder: Number     // 1, 2, or 3 (or null if not set)
        }
      ],
      ring: String,              // Ring image from GitHub
      order: Number              // 1, 2, 3, or null (not set)
    }
  ],
  createdAt: Date,
  updatedAt: Date
}
```

**API Endpoints:**
- `GET /api/guildwar` - Get all enemy teams
- `GET /api/guildwar/number/:teamNumber` - Get team by number (1-115)
- `GET /api/guildwar/:id` - Get team by ID
- `POST /api/guildwar` - Create new enemy team
- `PUT /api/guildwar/:id` - Update enemy team
- `POST /api/guildwar/:id/heroes` - Add hero to team
- `DELETE /api/guildwar/:id/heroes/:heroname` - Remove hero from team
- `PUT /api/guildwar/:id/heroes/:heroname` - Update hero in team
- `DELETE /api/guildwar/:id` - Delete enemy team
- `GET /api/guildwar/order/:order` - Get teams by order (1, 2, or 3)

---

## Image Storage
All hero images and ring images are stored on **GitHub** and referenced by URL.

**Example GitHub URL format:**
```
https://raw.githubusercontent.com/username/repo/main/images/heroes/hero-name.png
https://raw.githubusercontent.com/username/repo/main/images/rings/ring-name.png
```

---

## Relationships

1. **user_db.heroList.heroname** → **Hero_db.heroname**
   - User's heroes reference the master hero list

2. **guild_db.guildMemberNames** → **user_db.username**
   - Guild members are linked by username

3. **guildWar_db.heroes.heroname** → **Hero_db.heroname**
   - Enemy team heroes reference the master hero list

---

## Security Notes

1. All passwords (user and guild) are hashed using bcrypt
2. JWT tokens are used for authentication
3. Admin-only endpoints should be protected with role-based middleware
4. Guild passwords allow members to join guilds

---

## Usage Examples

### Adding a Hero to the Database
```javascript
POST /api/heroes
{
  "name": "Shadow Knight",
  "imageUrl": "https://raw.githubusercontent.com/user/repo/main/heroes/shadow-knight.png",
  "type": "Physical",
  "attack": 850,
  "defense": 420,
  "hp": 5200,
  "rarity": "Legendary",
  "description": "A powerful knight from the shadows"
}
```

### Creating a Guild
```javascript
POST /api/guilds
{
  "guildName": "Dragon Warriors",
  "guildMasterName": "player123",
  "guildPassword": "securepass123"
}
```

### Creating an Enemy Team
```javascript
POST /api/guildwar
{
  "teamNumber": 1,
  "heroes": [
    {
      "heroname": "Shadow Knight",
      "heroPicture": "https://raw.githubusercontent.com/.../shadow-knight.png",
      "skills": [
        { "skillName": "Dark Slash", "skillOrder": 1 },
        { "skillName": "Shadow Step", "skillOrder": 2 }
      ],
      "ring": "https://raw.githubusercontent.com/.../power-ring.png",
      "order": 1
    }
  ]
}
```
