/**
 * Authentication Flow Tests
 * Tests for signup, login, logout, and token persistence
 * 
 * Requirements tested: 1.1, 1.4, 1.5, 2.1, 2.3, 2.4, 2.5, 10.1, 10.2, 10.3, 10.4
 */

const fs = require('fs').promises;
const path = require('path');

// Test configuration
const BASE_URL = 'http://localhost:3000';
const USERS_FILE = path.join(__dirname, 'server', 'users.json');

// Test utilities
let testResults = {
  passed: 0,
  failed: 0,
  tests: []
};

function logTest(name, passed, message = '') {
  const status = passed ? '✓ PASS' : '✗ FAIL';
  const color = passed ? '\x1b[32m' : '\x1b[31m';
  console.log(`${color}${status}\x1b[0m ${name}`);
  if (message) {
    console.log(`  ${message}`);
  }
  
  testResults.tests.push({ name, passed, message });
  if (passed) {
    testResults.passed++;
  } else {
    testResults.failed++;
  }
}

async function clearUsersFile() {
  try {
    await fs.writeFile(USERS_FILE, JSON.stringify([], null, 2), 'utf8');
  } catch (error) {
    console.error('Error clearing users file:', error);
  }
}

async function makeRequest(endpoint, method = 'GET', body = null, token = null) {
  const url = `${BASE_URL}${endpoint}`;
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json'
    }
  };

  if (token) {
    options.headers['Authorization'] = `Bearer ${token}`;
  }

  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return { status: response.status, data };
  } catch (error) {
    return { status: 0, error: error.message };
  }
}

// Test 1: Signup with valid data (Requirement 2.1, 2.3, 2.4)
async function testSignupValid() {
  console.log('\n--- Test 1: Signup with valid data ---');
  
  const userData = {
    username: 'testuser1',
    email: 'testuser1@example.com',
    password: 'password123'
  };

  const result = await makeRequest('/api/auth/signup', 'POST', userData);
  
  const passed = result.status === 201 && 
                 result.data.success === true &&
                 result.data.token &&
                 result.data.user.username === userData.username &&
                 result.data.user.email === userData.email;
  
  logTest('Signup with valid data', passed, 
    passed ? 'User created successfully with token' : `Status: ${result.status}, Data: ${JSON.stringify(result.data)}`);
  
  return result.data.token;
}

// Test 2: Signup with duplicate username (Requirement 2.5)
async function testSignupDuplicateUsername() {
  console.log('\n--- Test 2: Signup with duplicate username ---');
  
  const userData = {
    username: 'testuser1',
    email: 'different@example.com',
    password: 'password123'
  };

  const result = await makeRequest('/api/auth/signup', 'POST', userData);
  
  const passed = result.status === 409 && 
                 result.data.error === 'Username already exists';
  
  logTest('Signup with duplicate username', passed,
    passed ? 'Correctly rejected duplicate username' : `Status: ${result.status}, Error: ${result.data.error}`);
}

// Test 3: Signup with duplicate email (Requirement 2.5)
async function testSignupDuplicateEmail() {
  console.log('\n--- Test 3: Signup with duplicate email ---');
  
  const userData = {
    username: 'differentuser',
    email: 'testuser1@example.com',
    password: 'password123'
  };

  const result = await makeRequest('/api/auth/signup', 'POST', userData);
  
  const passed = result.status === 409 && 
                 result.data.error === 'Email already registered';
  
  logTest('Signup with duplicate email', passed,
    passed ? 'Correctly rejected duplicate email' : `Status: ${result.status}, Error: ${result.data.error}`);
}

// Test 4: Signup with invalid username (Requirement 2.2)
async function testSignupInvalidUsername() {
  console.log('\n--- Test 4: Signup with invalid username ---');
  
  const userData = {
    username: 'ab', // Too short
    email: 'test@example.com',
    password: 'password123'
  };

  const result = await makeRequest('/api/auth/signup', 'POST', userData);
  
  const passed = result.status === 400 && 
                 result.data.error.includes('Username');
  
  logTest('Signup with invalid username', passed,
    passed ? 'Correctly rejected invalid username' : `Status: ${result.status}, Error: ${result.data.error}`);
}

// Test 5: Signup with invalid email (Requirement 2.2)
async function testSignupInvalidEmail() {
  console.log('\n--- Test 5: Signup with invalid email ---');
  
  const userData = {
    username: 'validuser',
    email: 'invalid-email',
    password: 'password123'
  };

  const result = await makeRequest('/api/auth/signup', 'POST', userData);
  
  const passed = result.status === 400 && 
                 result.data.error.includes('email');
  
  logTest('Signup with invalid email', passed,
    passed ? 'Correctly rejected invalid email' : `Status: ${result.status}, Error: ${result.data.error}`);
}

// Test 6: Signup with weak password (Requirement 2.3)
async function testSignupWeakPassword() {
  console.log('\n--- Test 6: Signup with weak password ---');
  
  const userData = {
    username: 'validuser',
    email: 'valid@example.com',
    password: 'short'
  };

  const result = await makeRequest('/api/auth/signup', 'POST', userData);
  
  const passed = result.status === 400 && 
                 result.data.error.includes('Password');
  
  logTest('Signup with weak password', passed,
    passed ? 'Correctly rejected weak password' : `Status: ${result.status}, Error: ${result.data.error}`);
}

// Test 7: Login with correct credentials (Requirement 1.1, 1.4)
async function testLoginValid() {
  console.log('\n--- Test 7: Login with correct credentials ---');
  
  const credentials = {
    username: 'testuser1',
    password: 'password123'
  };

  const result = await makeRequest('/api/auth/login', 'POST', credentials);
  
  const passed = result.status === 200 && 
                 result.data.success === true &&
                 result.data.token &&
                 result.data.user.username === credentials.username;
  
  logTest('Login with correct credentials', passed,
    passed ? 'Login successful with token' : `Status: ${result.status}, Data: ${JSON.stringify(result.data)}`);
  
  return result.data.token;
}

// Test 8: Login with incorrect password (Requirement 1.5)
async function testLoginInvalidPassword() {
  console.log('\n--- Test 8: Login with incorrect password ---');
  
  const credentials = {
    username: 'testuser1',
    password: 'wrongpassword'
  };

  const result = await makeRequest('/api/auth/login', 'POST', credentials);
  
  const passed = result.status === 401 && 
                 result.data.error === 'Invalid credentials';
  
  logTest('Login with incorrect password', passed,
    passed ? 'Correctly rejected invalid password' : `Status: ${result.status}, Error: ${result.data.error}`);
}

// Test 9: Login with non-existent username (Requirement 1.5)
async function testLoginNonExistentUser() {
  console.log('\n--- Test 9: Login with non-existent username ---');
  
  const credentials = {
    username: 'nonexistentuser',
    password: 'password123'
  };

  const result = await makeRequest('/api/auth/login', 'POST', credentials);
  
  const passed = result.status === 401 && 
                 result.data.error === 'Invalid credentials';
  
  logTest('Login with non-existent username', passed,
    passed ? 'Correctly rejected non-existent user' : `Status: ${result.status}, Error: ${result.data.error}`);
}

// Test 10: Access protected route with valid token (Requirement 10.2)
async function testProtectedRouteWithToken(token) {
  console.log('\n--- Test 10: Access protected route with valid token ---');
  
  const result = await makeRequest('/api/user/profile', 'GET', null, token);
  
  const passed = result.status === 200 && 
                 result.data.success === true &&
                 result.data.user &&
                 result.data.user.username === 'testuser1';
  
  logTest('Access protected route with valid token', passed,
    passed ? 'Successfully accessed protected route' : `Status: ${result.status}, Data: ${JSON.stringify(result.data)}`);
}

// Test 11: Access protected route without token (Requirement 10.2)
async function testProtectedRouteWithoutToken() {
  console.log('\n--- Test 11: Access protected route without token ---');
  
  const result = await makeRequest('/api/user/profile', 'GET');
  
  const passed = result.status === 401;
  
  logTest('Access protected route without token', passed,
    passed ? 'Correctly rejected request without token' : `Status: ${result.status}, Data: ${JSON.stringify(result.data)}`);
}

// Test 12: Access protected route with invalid token (Requirement 10.2)
async function testProtectedRouteWithInvalidToken() {
  console.log('\n--- Test 12: Access protected route with invalid token ---');
  
  const result = await makeRequest('/api/user/profile', 'GET', null, 'invalid-token');
  
  const passed = result.status === 401;
  
  logTest('Access protected route with invalid token', passed,
    passed ? 'Correctly rejected invalid token' : `Status: ${result.status}, Data: ${JSON.stringify(result.data)}`);
}

// Test 13: Logout endpoint (Requirement 10.1, 10.3)
async function testLogout(token) {
  console.log('\n--- Test 13: Logout endpoint ---');
  
  const result = await makeRequest('/api/auth/logout', 'POST', null, token);
  
  const passed = result.status === 200 && 
                 result.data.success === true;
  
  logTest('Logout endpoint', passed,
    passed ? 'Logout successful' : `Status: ${result.status}, Data: ${JSON.stringify(result.data)}`);
}

// Test 14: Token persistence verification (Requirement 10.4)
async function testTokenPersistence(token) {
  console.log('\n--- Test 14: Token persistence verification ---');
  
  // Simulate using the same token after some time
  const result = await makeRequest('/api/user/profile', 'GET', null, token);
  
  const passed = result.status === 200 && 
                 result.data.success === true &&
                 result.data.user &&
                 result.data.user.username === 'testuser1';
  
  logTest('Token persistence', passed,
    passed ? 'Token remains valid across requests' : `Status: ${result.status}, Data: ${JSON.stringify(result.data)}`);
}

// Main test runner
async function runTests() {
  console.log('\x1b[36m%s\x1b[0m', '========================================');
  console.log('\x1b[36m%s\x1b[0m', 'Authentication Flow Tests');
  console.log('\x1b[36m%s\x1b[0m', '========================================');
  
  // Check if server is running
  try {
    await makeRequest('/api/auth/login', 'POST', {});
  } catch (error) {
    console.error('\x1b[31m%s\x1b[0m', '\nError: Server is not running!');
    console.log('Please start the server with: npm start');
    process.exit(1);
  }

  // Clear users file before tests
  await clearUsersFile();
  console.log('\nUsers file cleared for testing\n');

  let token = null;

  // Run all tests
  try {
    // Signup tests
    token = await testSignupValid();
    await testSignupDuplicateUsername();
    await testSignupDuplicateEmail();
    await testSignupInvalidUsername();
    await testSignupInvalidEmail();
    await testSignupWeakPassword();

    // Login tests
    const loginToken = await testLoginValid();
    await testLoginInvalidPassword();
    await testLoginNonExistentUser();

    // Protected route tests
    await testProtectedRouteWithToken(loginToken || token);
    await testProtectedRouteWithoutToken();
    await testProtectedRouteWithInvalidToken();

    // Logout test
    await testLogout(loginToken || token);

    // Token persistence test
    await testTokenPersistence(loginToken || token);

  } catch (error) {
    console.error('\n\x1b[31m%s\x1b[0m', 'Test execution error:', error.message);
  }

  // Print summary
  console.log('\n\x1b[36m%s\x1b[0m', '========================================');
  console.log('\x1b[36m%s\x1b[0m', 'Test Summary');
  console.log('\x1b[36m%s\x1b[0m', '========================================');
  console.log(`Total Tests: ${testResults.passed + testResults.failed}`);
  console.log(`\x1b[32mPassed: ${testResults.passed}\x1b[0m`);
  console.log(`\x1b[31mFailed: ${testResults.failed}\x1b[0m`);
  
  if (testResults.failed === 0) {
    console.log('\n\x1b[32m%s\x1b[0m', '✓ All tests passed!');
  } else {
    console.log('\n\x1b[31m%s\x1b[0m', '✗ Some tests failed');
    process.exit(1);
  }
}

// Run tests
runTests().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
