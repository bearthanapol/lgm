# Implementation Plan - LGM Gaming Website

## Core Application (Completed)

- [x] 1. Set up project structure and dependencies
  - Create Node.js project with package.json
  - Install Express, bcrypt, jsonwebtoken, uuid, mongodb packages
  - Create directory structure: /server, /public, /public/js, /public/css
  - Create main server entry point (server.js)
  - _Requirements: 9.1, 9.2, 9.3_

- [x] 2. Implement backend data management
  - [x] 2.1 Create MongoDB database connection module
    - Write connection functions for MongoDB Atlas
    - Implement getDatabase(), connectToDatabase(), closeDatabaseConnection()
    - Add error handling for database operations
    - _Requirements: 9.3, 9.4_
  
  - [x] 2.2 Create user model and validation utilities
    - Define user data structure with id, username, email, passwordHash, createdAt
    - Write validation functions for username (3-20 chars), email format, password (min 8 chars)
    - _Requirements: 2.2, 2.3_

- [x] 3. Implement authentication system
  - [x] 3.1 Create JWT authentication middleware
    - Write middleware to verify JWT tokens from Authorization header
    - Extract and validate token, attach user data to request
    - Return 401 for invalid/missing tokens
    - _Requirements: 1.4, 9.3, 10.2_
  
  - [x] 3.2 Implement signup API endpoint
    - Create POST /api/auth/signup route
    - Validate input data (username, email, password)
    - Check for duplicate username/email
    - Hash password with bcrypt (10 salt rounds)
    - Create user and generate JWT token
    - Return success response with token and user data
    - _Requirements: 2.1, 2.2, 2.3, 2.4_
  
  - [x] 3.3 Implement login API endpoint
    - Create POST /api/auth/login route
    - Validate credentials against stored users
    - Compare password hash with bcrypt
    - Generate JWT token with 24-hour expiration
    - Return success response with token and user data
    - _Requirements: 1.1, 1.2, 1.4_
  
  - [x] 3.4 Implement logout and user profile endpoints
    - Create POST /api/auth/logout route (client-side token removal)
    - Create GET /api/user/profile route with JWT middleware
    - Return authenticated user information
    - _Requirements: 10.1, 10.2, 10.3_

- [x] 4. Set up Express server and middleware
  - Configure Express app with JSON body parser
  - Set up static file serving from /public directory
  - Add CORS middleware for development
  - Implement global error handling middleware
  - Mount authentication and user routes
  - Start server on port 3000
  - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5_

- [x] 5. Create base HTML structure and theme styling
  - [x] 5.1 Create index.html with meta tags and structure
    - Set up HTML5 boilerplate
    - Link CSS and JavaScript files
    - Create container divs for login, signup, and main app
    - _Requirements: 8.1, 8.4_
  
  - [x] 5.2 Create global CSS with theme styling
    - Define CSS variables for colors (black #000000, orange #ff6600)
    - Style body with white background and black text
    - Create utility classes for borders, buttons, inputs
    - Add typography styles (Segoe UI font family)
    - _Requirements: 3.4_
  
  - [x] 5.3 Style authentication pages (login/signup)
    - Create centered card layout (400px width, 40px padding)
    - Style form inputs (45px height, orange borders)
    - Style submit buttons with orange background
    - Add error message styling (red text)
    - _Requirements: 1.1, 2.1, 3.4_

- [x] 6. Implement frontend authentication manager
  - [x] 6.1 Create AuthManager class
    - Write login(username, password) method to call API
    - Write signup(username, email, password) method to call API
    - Write logout() method to clear token and redirect
    - Implement token storage in localStorage
    - Write isAuthenticated() to check token existence
    - Write getToken() and getUserInfo() helper methods
    - _Requirements: 1.4, 2.3, 2.4, 10.2, 10.3_
  
  - [x] 6.2 Create login page renderer and form handler
    - Write renderLoginPage() to generate login form HTML
    - Attach form submit event listener
    - Call AuthManager.login() on submission
    - Display error messages for failed authentication
    - Redirect to /lgm/hero on success
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5_
  
  - [x] 6.3 Create signup page renderer and form handler
    - Write renderSignupPage() to generate signup form HTML
    - Attach form submit event listener
    - Call AuthManager.signup() on submission
    - Display error messages for validation failures
    - Redirect to /lgm/hero on success
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5_

- [x] 7. Implement SPA router
  - [x] 7.1 Create Router class with navigation logic
    - Write navigate(path) method to update URL and render content
    - Implement handleRoute() to parse current path
    - Set up popstate event listener for browser back/forward
    - Add authentication check to redirect unauthenticated users to /login
    - _Requirements: 8.1, 8.2, 8.3, 8.4_
  
  - [x] 7.2 Define route mappings and page renderers
    - Map /login and /signup to authentication pages
    - Map /lgm/* routes to LGM section pages
    - Map /guild/* routes to Guild section pages
    - Map /team/* routes to Team section pages
    - Set /lgm/hero as default landing page after login
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 6.1, 6.2, 6.3, 6.4, 7.1, 7.2, 8.5_

- [x] 8. Create main layout components
  - [x] 8.1 Implement header component
    - Write renderHeader(username) to generate header HTML
    - Display "LGM" logo on the left (24px, bold)
    - Display navigation links: "LGM", "Guild", "Team", "Admin" in center
    - Display username with dropdown icon on the right
    - Add logout button in user dropdown
    - Style header with fixed position, 60px height, white background, orange bottom border
    - _Requirements: 3.1, 4.1, 4.2, 4.3, 10.1_
  
  - [x] 8.2 Implement sidebar component
    - Write renderSidebar(section) to generate sidebar HTML based on active section
    - For "LGM" section: display "Hero", "Equipment", "Pet" links
    - For "Guild" section: display "Castle Rush", "Guild War", "Adventure Expedition" links
    - For "Team" section: display "My Team" link
    - For "Admin" section: display "Manage Heroes" link
    - Style sidebar with fixed position, 200px width, white background, orange right border
    - Position sidebar below header (top: 60px)
    - _Requirements: 3.2, 5.1, 5.5, 6.1, 6.5, 7.1, 7.3_
  
  - [x] 8.3 Implement content area component
    - Write renderContent(page) to display page-specific content
    - Position content area to not overlap header (margin-top: 60px) or sidebar (margin-left: 200px)
    - Style content area with white background and padding
    - _Requirements: 3.3_
  
  - [x] 8.4 Implement active state highlighting
    - Write updateActiveStates(section, page) to highlight active navigation
    - Add orange color to active header navigation link
    - Add orange background to active sidebar link
    - Update active states on route changes
    - _Requirements: 4.4, 4.5, 5.5, 6.5, 7.3_

- [x] 9. Create page content renderers
  - [x] 9.1 Implement LGM section pages
    - Write renderHeroPage() with placeholder content
    - Write renderEquipmentPage() with placeholder content
    - Write renderPetPage() with placeholder content
    - Style pages with headings and basic layout
    - _Requirements: 5.2, 5.3, 5.4_
  
  - [x] 9.2 Implement Guild section pages
    - Write renderCastleRushPage() with placeholder content
    - Write renderGuildWarPage() with placeholder content
    - Write renderAdventureExpeditionPage() with placeholder content
    - Style pages with headings and basic layout
    - _Requirements: 6.2, 6.3, 6.4_
  
  - [x] 9.3 Implement Team section page
    - Write renderMyTeamPage() with placeholder content
    - Style page with headings and basic layout
    - _Requirements: 7.2_

- [x] 10. Integrate all components and initialize application
  - Create main app.js to initialize router and auth manager
  - Set up initial route handling on page load
  - Check authentication status and redirect if needed
  - Render appropriate page based on current URL
  - Attach event listeners for header navigation and sidebar links
  - Wire logout functionality to AuthManager
  - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5_

- [x] 11. Add error handling and user feedback
  - Implement toast notification system for network errors
  - Add form validation error displays
  - Handle 401 responses by redirecting to login
  - Add loading states for API calls
  - Implement 404 page for invalid routes
  - _Requirements: 1.5, 2.5, 9.4_

- [x] 12. Testing and validation
  - [x] 12.1 Test authentication flows
    - Verify signup with valid and invalid data
    - Verify login with correct and incorrect credentials
    - Verify logout clears session and redirects
    - Verify token persistence across page refresh
    - _Requirements: 1.1, 1.4, 1.5, 2.1, 2.3, 2.4, 2.5, 10.1, 10.2, 10.3, 10.4_
  
  - [x] 12.2 Test navigation and routing
    - Verify all header navigation links work correctly
    - Verify all sidebar links work for each section
    - Verify browser back/forward buttons work
    - Verify direct URL access works
    - Verify unauthenticated users redirect to login
    - _Requirements: 4.4, 5.5, 6.5, 7.3, 8.1, 8.2, 8.3, 8.4_
  
  - [x] 12.3 Test UI and theme
    - Verify theme styling applied throughout
    - Verify layout doesn't overlap (header, sidebar, content)
    - Verify active states highlight correctly
    - Verify all pages render with correct styling
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 4.5, 5.5, 6.5, 7.3_

## Extended Features (Completed)

- [x] 13. Implement MongoDB integration
  - [x] 13.1 Set up MongoDB connection
    - Create database.js module for MongoDB Atlas connection
    - Implement connection pooling and error handling
    - Add graceful shutdown handlers
    - _Database Schema: user_db, Hero_db, guild_db, guildWar_db_
  
  - [x] 13.2 Migrate user authentication to MongoDB
    - Update dataManager to use MongoDB instead of JSON files
    - Implement user CRUD operations with MongoDB
    - Maintain backward compatibility with existing auth flow
    - _Database Schema: user_db collection_

- [x] 14. Implement Hero management system
  - [x] 14.1 Create Hero model and database operations
    - Implement getAllHeroes(), getHeroById(), createHero()
    - Implement updateHero(), deleteHero(), searchHeroes()
    - Add validation for hero data (name, type, stats, rarity)
    - _Database Schema: Hero_db collection_
  
  - [x] 14.2 Create Hero API routes
    - Implement GET /api/heroes (get all heroes)
    - Implement GET /api/heroes/:id (get hero by ID)
    - Implement POST /api/heroes (create hero)
    - Implement PUT /api/heroes/:id (update hero)
    - Implement DELETE /api/heroes/:id (delete hero)
    - Implement GET /api/heroes/search/:query (search heroes)
    - _Database Schema: Hero_db collection_
  
  - [x] 14.3 Create Admin page for hero management
    - Implement renderAdminPage() with hero management UI
    - Add form to create new heroes with all fields
    - Display list of all heroes with edit/delete options
    - Integrate with Hero API endpoints
    - Add loading states and error handling
    - _Admin section in navigation_

- [x] 15. Implement Guild management system
  - [x] 15.1 Create Guild model and database operations
    - Implement createGuild(), getAllGuilds(), getGuildById()
    - Implement verifyGuildPassword() with bcrypt
    - Implement addMemberToGuild(), removeMemberFromGuild()
    - Implement updateGuild(), deleteGuild()
    - _Database Schema: guild_db collection_
  
  - [x] 15.2 Create Guild API routes
    - Implement GET /api/guilds (get all guilds)
    - Implement GET /api/guilds/:id (get guild by ID)
    - Implement POST /api/guilds (create guild)
    - Implement POST /api/guilds/verify (verify guild password)
    - Implement POST /api/guilds/:id/members (add member)
    - Implement DELETE /api/guilds/:id/members/:memberName (remove member)
    - Implement PUT /api/guilds/:id (update guild)
    - Implement DELETE /api/guilds/:id (delete guild)
    - _Database Schema: guild_db collection_

- [x] 16. Implement Guild War enemy team system
  - [x] 16.1 Create Guild War model and database operations
    - Implement createEnemyTeam() with team number validation (1-115)
    - Implement getAllEnemyTeams(), getEnemyTeamByNumber(), getEnemyTeamById()
    - Implement updateEnemyTeam() with hero array validation (max 3 heroes)
    - Implement addHeroToEnemyTeam(), removeHeroFromEnemyTeam()
    - Implement updateHeroInEnemyTeam(), deleteEnemyTeam()
    - Implement getTeamsByOrder() for filtering
    - _Database Schema: guildWar_db collection_
  
  - [x] 16.2 Create Guild War API routes
    - Implement GET /api/guildwar (get all enemy teams)
    - Implement GET /api/guildwar/number/:teamNumber (get team by number 1-115)
    - Implement GET /api/guildwar/:id (get team by ID)
    - Implement POST /api/guildwar (create enemy team)
    - Implement PUT /api/guildwar/:id (update enemy team)
    - Implement POST /api/guildwar/:id/heroes (add hero to team)
    - Implement DELETE /api/guildwar/:id/heroes/:heroname (remove hero)
    - Implement PUT /api/guildwar/:id/heroes/:heroname (update hero in team)
    - Implement DELETE /api/guildwar/:id (delete enemy team)
    - Implement GET /api/guildwar/order/:order (get teams by order)
    - _Database Schema: guildWar_db collection_

## Future Enhancements (Not Started)

- [ ] 17. Enhance user profile management
  - [ ] 17.1 Add user hero collection management
    - Implement user hero list with equipment and star ratings
    - Create UI for adding/removing heroes from user collection
    - Link to Hero_db for hero master data
    - _Database Schema: user_db.heroList array_
  
  - [ ] 17.2 Implement role-based access control
    - Add role field to user model (Admin, Guild Master, Guild Member)
    - Create middleware to check user roles
    - Restrict admin endpoints to Admin role only
    - _Database Schema: user_db.role field_

- [ ] 18. Build interactive Guild War planning interface
  - [ ] 18.1 Create Guild War team builder UI
    - Display all 115 enemy teams in a grid/list view
    - Allow filtering by team number and hero order
    - Show hero details (skills, ring, order) for each team
    - _Frontend: Guild War page enhancement_
  
  - [ ] 18.2 Implement team strategy planning
    - Allow users to assign their heroes to counter enemy teams
    - Save user's guild war strategy
    - Display recommended counters based on hero types
    - _Database: New collection for user strategies_

- [ ] 19. Enhance Guild management features
  - [ ] 19.1 Create guild member dashboard
    - Display guild information and member list
    - Show guild master and member roles
    - Allow guild master to manage members
    - _Frontend: Guild section enhancement_
  
  - [ ] 19.2 Implement guild join workflow
    - Create UI for users to search and join guilds
    - Implement guild password verification flow
    - Update user's guild membership
    - _Frontend: New guild join page_

- [ ] 20. Add data visualization and statistics
  - [ ] 20.1 Create hero statistics dashboard
    - Display hero distribution by type and rarity
    - Show most popular heroes
    - Visualize hero stats with charts
    - _Frontend: New statistics page_
  
  - [ ] 20.2 Create guild war analytics
    - Track win/loss rates for enemy teams
    - Show most challenging teams
    - Display user success rates
    - _Database: New collection for battle history_

