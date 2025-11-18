# Design Document - LGM Gaming Website

## Overview

The LazyGuildMasters (LGM) gaming website is a single-page application (SPA) built with Node.js backend and vanilla JavaScript frontend. The application features a modern gaming aesthetic with a black theme and orange accent colors. The architecture follows a client-server model with JWT-based authentication and dynamic content rendering.

## Architecture

### System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         Client (Browser)                     │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  HTML/CSS/JavaScript (Vanilla JS)                      │ │
│  │  - Router (SPA Navigation)                             │ │
│  │  - Authentication Manager                              │ │
│  │  - UI Components (Header, Sidebar, Content)           │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                            │
                    HTTP/HTTPS (REST API)
                            │
┌─────────────────────────────────────────────────────────────┐
│                    Node.js Server (Express)                  │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  API Routes                                            │ │
│  │  - /api/auth/login                                     │ │
│  │  - /api/auth/signup                                    │ │
│  │  - /api/auth/logout                                    │ │
│  │  - /api/user/profile                                   │ │
│  └────────────────────────────────────────────────────────┘ │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Middleware                                            │ │
│  │  - JWT Authentication                                  │ │
│  │  - Error Handler                                       │ │
│  │  - Static File Server                                  │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                            │
┌─────────────────────────────────────────────────────────────┐
│                    Data Storage (JSON File)                  │
│  - users.json (username, email, password hash)              │
└─────────────────────────────────────────────────────────────┘
```

### Technology Stack

- **Backend**: Node.js with Express.js framework
- **Frontend**: Vanilla JavaScript (ES6+), HTML5, CSS3
- **Authentication**: JSON Web Tokens (JWT)
- **Password Security**: bcrypt for hashing
- **Data Storage**: JSON file-based storage (simple implementation)
- **HTTP Server**: Express.js built-in server

## Components and Interfaces

### Frontend Components

#### 1. Router Component
**Purpose**: Manages SPA navigation without page reloads

**Responsibilities**:
- Parse URL paths and update UI accordingly
- Handle browser history (back/forward buttons)
- Route to appropriate page renderer
- Update active navigation states

**Key Methods**:
- `navigate(path)`: Navigate to a new route
- `init()`: Initialize router and set up event listeners
- `handleRoute()`: Process current route and render appropriate content

#### 2. Authentication Manager
**Purpose**: Handle user authentication state and API calls

**Responsibilities**:
- Store and manage JWT tokens
- Make login/signup API requests
- Check authentication status
- Handle logout
- Redirect unauthenticated users

**Key Methods**:
- `login(username, password)`: Authenticate user
- `signup(username, email, password)`: Register new user
- `logout()`: Clear session and redirect
- `isAuthenticated()`: Check if user is logged in
- `getToken()`: Retrieve stored JWT token
- `getUserInfo()`: Get current user data

#### 3. Layout Manager
**Purpose**: Render and manage the main layout structure

**Responsibilities**:
- Render header with logo, navigation, and user info
- Render sidebar with context-specific links
- Manage content area updates
- Apply theme styling

**Key Methods**:
- `renderHeader(username)`: Display header with user info
- `renderSidebar(section)`: Display sidebar for active section
- `renderContent(page)`: Display page content
- `updateActiveStates(section, page)`: Highlight active navigation

#### 4. Page Renderers
**Purpose**: Generate HTML content for each page

**Pages**:
- Login Page
- Signup Page
- Hero Page
- Equipment Page
- Pet Page
- Castle Rush Page
- Guild War Page
- Adventure Expedition Page
- My Team Page

**Common Interface**:
- `render()`: Return HTML string for the page
- `attachEventListeners()`: Set up interactive elements

### Backend Components

#### 1. Express Server
**Purpose**: HTTP server and request routing

**Configuration**:
- Port: 3000 (configurable via environment variable)
- Static file serving from `/public` directory
- JSON body parsing middleware
- CORS enabled for development

#### 2. Authentication Routes (`/api/auth`)

**POST /api/auth/signup**
- Request Body: `{ username, email, password }`
- Response: `{ success: true, token, user: { username, email } }`
- Validates input, checks for duplicates, hashes password, creates user

**POST /api/auth/login**
- Request Body: `{ username, password }`
- Response: `{ success: true, token, user: { username, email } }`
- Validates credentials, generates JWT token

**POST /api/auth/logout**
- Headers: `Authorization: Bearer <token>`
- Response: `{ success: true }`
- Invalidates token (client-side removal)

#### 3. User Routes (`/api/user`)

**GET /api/user/profile**
- Headers: `Authorization: Bearer <token>`
- Response: `{ username, email }`
- Returns authenticated user information

#### 4. Authentication Middleware
**Purpose**: Verify JWT tokens for protected routes

**Functionality**:
- Extract token from Authorization header
- Verify token signature and expiration
- Attach user data to request object
- Return 401 for invalid/missing tokens

#### 5. Data Manager
**Purpose**: Handle data persistence

**Responsibilities**:
- Read/write user data to JSON file
- Ensure data integrity
- Handle concurrent access

**Key Methods**:
- `getUsers()`: Load all users from storage
- `saveUsers(users)`: Write users to storage
- `findUserByUsername(username)`: Query user
- `findUserByEmail(email)`: Query user
- `createUser(userData)`: Add new user

## Data Models

### User Model
```javascript
{
  id: String,              // UUID v4
  username: String,        // Unique, 3-20 characters
  email: String,           // Unique, valid email format
  passwordHash: String,    // bcrypt hash
  createdAt: String        // ISO 8601 timestamp
}
```

### JWT Payload
```javascript
{
  userId: String,          // User ID
  username: String,        // Username
  iat: Number,            // Issued at (timestamp)
  exp: Number             // Expiration (timestamp, 24 hours)
}
```

## User Interface Design

### Theme Specifications

**Colors**:
- Primary Background: `#000000` (Black)
- Secondary Background: `#1a1a1a` (Dark Gray)
- Border Color: `#ff6600` (Orange)
- Text Primary: `#ffffff` (White)
- Text Secondary: `#cccccc` (Light Gray)
- Hover State: `#ff8833` (Light Orange)
- Active State: `#ff6600` (Orange)

**Typography**:
- Font Family: 'Segoe UI', Arial, sans-serif
- Header Logo: 24px, bold
- Navigation Links: 16px, medium
- Content Headings: 28px, bold
- Body Text: 14px, regular

### Layout Structure

```
┌─────────────────────────────────────────────────────────────┐
│  Header (Fixed, Height: 60px)                               │
│  [LGM Logo]    [LGM] [Guild] [Team]         [Username ▼]   │
└─────────────────────────────────────────────────────────────┘
┌──────────────┬──────────────────────────────────────────────┐
│  Sidebar     │  Content Area                                │
│  (200px)     │                                              │
│              │                                              │
│  [Hero]      │  Page-specific content rendered here        │
│  [Equipment] │                                              │
│  [Pet]       │                                              │
│              │                                              │
│              │                                              │
└──────────────┴──────────────────────────────────────────────┘
```

**Dimensions**:
- Header Height: 60px (fixed)
- Sidebar Width: 200px (fixed)
- Content Area: calc(100vw - 200px) width, calc(100vh - 60px) height
- Border Width: 2px (orange)

### Authentication Pages Layout

**Login/Signup Pages** (Centered Card):
- Card Width: 400px
- Card Background: `#1a1a1a`
- Card Border: 2px solid `#ff6600`
- Card Padding: 40px
- Input Height: 45px
- Button Height: 45px

## Navigation Flow

### Route Structure

```
/login                    → Login Page (unauthenticated)
/signup                   → Signup Page (unauthenticated)
/lgm/hero                → Hero Page (default landing)
/lgm/equipment           → Equipment Page
/lgm/pet                 → Pet Page
/guild/castle-rush       → Castle Rush Page
/guild/guild-war         → Guild War Page
/guild/adventure         → Adventure Expedition Page
/team/my-team            → My Team Page
```

### Navigation State Management

**Active Section Tracking**:
- Current section stored in router state (lgm/guild/team)
- Sidebar updates based on active section
- Header navigation highlights active section

**Active Page Tracking**:
- Current page stored in router state
- Sidebar highlights active page link
- Content area renders active page

## Error Handling

### Frontend Error Handling

**Authentication Errors**:
- Display error messages below form inputs
- Maintain form state (don't clear username)
- Use red text color for error messages
- Auto-dismiss after 5 seconds

**Network Errors**:
- Display toast notification for connection issues
- Retry mechanism for failed requests
- Fallback to cached data when possible

**Navigation Errors**:
- Redirect to 404 page for invalid routes
- Redirect to login for unauthenticated access
- Maintain intended destination for post-login redirect

### Backend Error Handling

**Validation Errors** (400):
- Return specific error messages
- Include field-level error details

**Authentication Errors** (401):
- Return "Invalid credentials" for login failures
- Return "Token expired" for expired JWT
- Return "Unauthorized" for missing token

**Duplicate Entry Errors** (409):
- Return "Username already exists"
- Return "Email already registered"

**Server Errors** (500):
- Log error details server-side
- Return generic error message to client
- Include error ID for tracking

## Testing Strategy

### Unit Testing

**Frontend**:
- Router navigation logic
- Authentication manager methods
- Form validation functions
- UI component rendering

**Backend**:
- Authentication middleware
- Password hashing/verification
- JWT token generation/validation
- Data manager CRUD operations

### Integration Testing

**API Endpoints**:
- Signup flow (success and failure cases)
- Login flow (success and failure cases)
- Protected route access
- Token expiration handling

**Frontend-Backend Integration**:
- Complete authentication flow
- Navigation with authentication checks
- API error handling
- Session persistence

### Manual Testing Checklist

**Authentication**:
- [ ] Signup with valid data
- [ ] Signup with duplicate username
- [ ] Signup with duplicate email
- [ ] Login with valid credentials
- [ ] Login with invalid credentials
- [ ] Logout functionality
- [ ] Session persistence across page refresh

**Navigation**:
- [ ] All header navigation links work
- [ ] All sidebar links work for each section
- [ ] Active states update correctly
- [ ] Browser back/forward buttons work
- [ ] Direct URL access works
- [ ] Unauthenticated redirect to login

**UI/UX**:
- [ ] Theme colors applied correctly
- [ ] Layout doesn't overlap
- [ ] Responsive behavior (if applicable)
- [ ] Hover states work
- [ ] Forms are user-friendly
- [ ] Error messages display correctly

## Security Considerations

**Password Security**:
- Use bcrypt with salt rounds of 10
- Never log or expose passwords
- Enforce minimum password length (8 characters)

**JWT Security**:
- Use strong secret key (environment variable)
- Set reasonable expiration (24 hours)
- Store tokens in localStorage (with XSS considerations)
- Validate tokens on every protected request

**Input Validation**:
- Sanitize all user inputs
- Validate email format
- Enforce username constraints
- Prevent SQL injection (not applicable with JSON storage)

**HTTPS**:
- Use HTTPS in production
- Set secure cookie flags
- Implement HSTS headers

## Performance Considerations

**Frontend Optimization**:
- Minimize DOM manipulations
- Use event delegation
- Lazy load page content
- Cache static assets

**Backend Optimization**:
- Implement request rate limiting
- Use compression middleware
- Optimize file I/O operations
- Consider caching for user data

## Future Enhancements

**Potential Improvements**:
- Database integration (MongoDB/PostgreSQL)
- Real-time updates with WebSockets
- User profile customization
- Game data integration
- Mobile responsive design
- Progressive Web App (PWA) features
- Social features (friend lists, messaging)
- Admin dashboard
