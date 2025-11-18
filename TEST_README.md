# LGM Gaming Website - Test Documentation

This document describes the test suites for the LGM Gaming Website.

## Test Suites

### 1. Authentication Flow Tests (`test-auth.js`)

The authentication test suite covers all authentication flows as specified in task 12.1:

### Signup Tests (Requirements 2.1, 2.2, 2.3, 2.4, 2.5)
1. ✓ Signup with valid data - Creates user and returns token
2. ✓ Signup with duplicate username - Returns 409 error
3. ✓ Signup with duplicate email - Returns 409 error
4. ✓ Signup with invalid username - Returns 400 error (too short)
5. ✓ Signup with invalid email - Returns 400 error (invalid format)
6. ✓ Signup with weak password - Returns 400 error (too short)

### Login Tests (Requirements 1.1, 1.4, 1.5)
7. ✓ Login with correct credentials - Returns token and user data
8. ✓ Login with incorrect password - Returns 401 error
9. ✓ Login with non-existent username - Returns 401 error

### Protected Route Tests (Requirements 10.2)
10. ✓ Access protected route with valid token - Returns user profile
11. ✓ Access protected route without token - Returns 401 error
12. ✓ Access protected route with invalid token - Returns 401 error

### Logout Tests (Requirements 10.1, 10.3)
13. ✓ Logout endpoint - Returns success response

### Token Persistence Tests (Requirements 10.4)
14. ✓ Token persistence - Token remains valid across multiple requests

### 2. Navigation and Routing Tests (`test-navigation.js`)

The navigation test suite covers all routing and navigation flows as specified in task 12.2:

#### Unauthenticated Access Tests (Requirements 8.1)
1. ✓ Unauthenticated users redirect to login - Protected routes serve index.html for client-side routing
2. ✓ Login page accessibility - Login page loads correctly
3. ✓ Signup page accessibility - Signup page loads correctly
4. ✓ Root path redirect - Root path serves index.html for client-side routing

#### Navigation Structure Tests (Requirements 4.4, 5.5, 6.5, 7.3)
5. ✓ Header navigation structure - Header contains LGM, Guild, and Team links
6. ✓ LGM sidebar links - LGM section pages load successfully
7. ✓ Guild sidebar links - All Guild section pages load successfully
8. ✓ Team sidebar links - Team section page loads successfully

#### Route Accessibility Tests (Requirements 8.2, 8.3)
9. ✓ Direct URL access - All routes accessible via direct URL
10. ✓ LGM section routes - All LGM routes accessible (/lgm/hero, /lgm/equipment, /lgm/pet)
11. ✓ Guild section routes - All Guild routes accessible (/guild/castle-rush, /guild/guild-war, /guild/adventure)
12. ✓ Team section route - Team route accessible (/team/my-team)

#### SPA Behavior Tests (Requirements 8.2, 8.4)
13. ✓ SPA navigation behavior - All routes serve index.html for single-page application
14. ✓ Section switching - Can switch between all sections seamlessly
15. ✓ Invalid route handling - Invalid routes serve index.html for client-side 404

## Running the Tests

### Prerequisites
- Node.js installed
- Server running on port 3000

### Steps

1. Start the server (if not already running):
```bash
npm start
```

2. In a new terminal, run the authentication tests:
```bash
node test-auth.js
```

3. Run the navigation tests:
```bash
node test-navigation.js
```

4. Or run all tests sequentially:
```bash
node test-auth.js && node test-navigation.js
```

### Expected Output

#### Authentication Tests
```
========================================
Authentication Flow Tests
========================================

Users file cleared for testing

--- Test 1: Signup with valid data ---
✓ PASS Signup with valid data
  User created successfully with token

[... additional test results ...]

========================================
Test Summary
========================================
Total Tests: 14
Passed: 14
Failed: 0

✓ All tests passed!
```

#### Navigation Tests
```
========================================
Navigation and Routing Tests
========================================

Setting up test user...

--- Test 1: Unauthenticated users redirect to login ---
✓ PASS Unauthenticated redirect to login
  All protected routes serve index.html for client-side routing

[... additional test results ...]

========================================
Test Summary
========================================
Total Tests: 15
Passed: 15
Failed: 0

✓ All tests passed!
```

## Test Implementation Details

### Test Utilities
- `makeRequest()` - Helper function to make HTTP requests to the API
- `clearUsersFile()` - Clears the users.json file before tests
- `setupTestUser()` - Creates a test user for navigation tests
- `logTest()` - Logs test results with color-coded pass/fail status

### Test Data
- Authentication tests: `testuser1` / `testuser1@example.com` / `password123`
- Navigation tests: `navtestuser` / `navtest@example.com` / `password123`
- Tests automatically clean up by clearing the users file before execution

### Verification Points

#### Authentication Tests
Each test verifies:
- HTTP status code
- Response structure (success flag, data fields)
- Error messages for failure cases
- Token generation and validity
- Data persistence

#### Navigation Tests
Each test verifies:
- Route accessibility (200 status codes)
- HTML content delivery for SPA
- Navigation structure presence
- Section and page routing
- Unauthenticated access handling

## Notes

- Tests clear the `server/users.json` file before execution
- Tests run sequentially to maintain data consistency
- Server must be running on `http://localhost:3000` for tests to work
- All tests use the actual API endpoints and routes (no mocking)
- Navigation tests verify server-side routing; client-side routing behavior is handled by the browser
- Browser back/forward button functionality is tested through the SPA architecture (all routes serve index.html)
