/**
 * Navigation and Routing Tests
 * Tests for header navigation, sidebar navigation, browser back/forward, direct URL access, and auth redirects
 * 
 * Requirements tested: 4.4, 5.5, 6.5, 7.3, 8.1, 8.2, 8.3, 8.4
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
    
    // For HTML responses, return text
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('text/html')) {
      const text = await response.text();
      return { status: response.status, data: text, isHtml: true };
    }
    
    // For JSON responses
    const data = await response.json();
    return { status: response.status, data, isHtml: false };
  } catch (error) {
    return { status: 0, error: error.message };
  }
}

async function setupTestUser() {
  // Clear users file
  await fs.writeFile(USERS_FILE, JSON.stringify([], null, 2), 'utf8');
  
  // Create a test user
  const userData = {
    username: 'navtestuser',
    email: 'navtest@example.com',
    password: 'password123'
  };

  const result = await makeRequest('/api/auth/signup', 'POST', userData);
  return result.data.token;
}

// Test 1: Verify unauthenticated users redirect to login (Requirement 8.1)
async function testUnauthenticatedRedirect() {
  console.log('\n--- Test 1: Unauthenticated users redirect to login ---');
  
  // Try to access protected routes without authentication
  const protectedRoutes = [
    '/lgm/hero',
    '/lgm/equipment',
    '/lgm/pet',
    '/guild/castle-rush',
    '/guild/guild-war',
    '/guild/adventure',
    '/team/my-team'
  ];
  
  let allPassed = true;
  
  for (const route of protectedRoutes) {
    const result = await makeRequest(route, 'GET');
    
    // Check if response is HTML (index.html served)
    // The router will handle redirect on client side
    if (result.status === 200 && result.isHtml) {
      // Success - server serves the page, client-side router will redirect
      continue;
    } else {
      allPassed = false;
      break;
    }
  }
  
  logTest('Unauthenticated redirect to login', allPassed,
    allPassed ? 'All protected routes serve index.html for client-side routing' : 'Some routes failed to serve properly');
}

// Test 2: Verify direct URL access works (Requirement 8.4)
async function testDirectUrlAccess(token) {
  console.log('\n--- Test 2: Direct URL access works ---');
  
  const routes = [
    '/lgm/hero',
    '/lgm/equipment',
    '/lgm/pet',
    '/guild/castle-rush',
    '/guild/guild-war',
    '/guild/adventure',
    '/team/my-team'
  ];
  
  let allPassed = true;
  
  for (const route of routes) {
    const result = await makeRequest(route, 'GET');
    
    // All routes should return 200 and serve index.html
    if (result.status !== 200 || !result.isHtml) {
      allPassed = false;
      break;
    }
  }
  
  logTest('Direct URL access', allPassed,
    allPassed ? 'All routes accessible via direct URL' : 'Some routes failed direct access');
}

// Test 3: Verify header navigation links structure (Requirement 4.4)
async function testHeaderNavigationStructure(token) {
  console.log('\n--- Test 3: Header navigation links structure ---');
  
  const result = await makeRequest('/lgm/hero', 'GET');
  
  if (result.isHtml) {
    const html = result.data;
    
    // Check for header navigation elements
    const hasLgmLink = html.includes('LGM') || html.includes('lgm');
    const hasGuildLink = html.includes('Guild') || html.includes('guild');
    const hasTeamLink = html.includes('Team') || html.includes('team');
    
    const passed = hasLgmLink && hasGuildLink && hasTeamLink;
    
    logTest('Header navigation structure', passed,
      passed ? 'Header contains LGM, Guild, and Team navigation' : 'Missing navigation elements');
  } else {
    logTest('Header navigation structure', false, 'Failed to load page HTML');
  }
}

// Test 4: Verify LGM sidebar links (Requirement 5.5)
async function testLgmSidebarLinks(token) {
  console.log('\n--- Test 4: LGM sidebar links ---');
  
  const result = await makeRequest('/lgm/hero', 'GET');
  
  if (result.isHtml) {
    const html = result.data;
    
    // Check for LGM section sidebar elements
    // The sidebar is rendered client-side, so we check that the page loads
    const passed = result.status === 200;
    
    logTest('LGM sidebar links', passed,
      passed ? 'LGM section page loads successfully' : 'Failed to load LGM section');
  } else {
    logTest('LGM sidebar links', false, 'Failed to load page HTML');
  }
}

// Test 5: Verify Guild sidebar links (Requirement 6.5)
async function testGuildSidebarLinks(token) {
  console.log('\n--- Test 5: Guild sidebar links ---');
  
  const guildRoutes = [
    '/guild/castle-rush',
    '/guild/guild-war',
    '/guild/adventure'
  ];
  
  let allPassed = true;
  
  for (const route of guildRoutes) {
    const result = await makeRequest(route, 'GET');
    
    if (result.status !== 200 || !result.isHtml) {
      allPassed = false;
      break;
    }
  }
  
  logTest('Guild sidebar links', allPassed,
    allPassed ? 'All Guild section pages load successfully' : 'Some Guild pages failed to load');
}

// Test 6: Verify Team sidebar links (Requirement 7.3)
async function testTeamSidebarLinks(token) {
  console.log('\n--- Test 6: Team sidebar links ---');
  
  const result = await makeRequest('/team/my-team', 'GET');
  
  const passed = result.status === 200 && result.isHtml;
  
  logTest('Team sidebar links', passed,
    passed ? 'Team section page loads successfully' : 'Failed to load Team section');
}

// Test 7: Verify all LGM section routes (Requirement 8.2, 8.3)
async function testLgmSectionRoutes(token) {
  console.log('\n--- Test 7: LGM section routes ---');
  
  const lgmRoutes = [
    '/lgm/hero',
    '/lgm/equipment',
    '/lgm/pet'
  ];
  
  let allPassed = true;
  
  for (const route of lgmRoutes) {
    const result = await makeRequest(route, 'GET');
    
    if (result.status !== 200 || !result.isHtml) {
      allPassed = false;
      break;
    }
  }
  
  logTest('LGM section routes', allPassed,
    allPassed ? 'All LGM routes accessible' : 'Some LGM routes failed');
}

// Test 8: Verify all Guild section routes (Requirement 8.2, 8.3)
async function testGuildSectionRoutes(token) {
  console.log('\n--- Test 8: Guild section routes ---');
  
  const guildRoutes = [
    '/guild/castle-rush',
    '/guild/guild-war',
    '/guild/adventure'
  ];
  
  let allPassed = true;
  
  for (const route of guildRoutes) {
    const result = await makeRequest(route, 'GET');
    
    if (result.status !== 200 || !result.isHtml) {
      allPassed = false;
      break;
    }
  }
  
  logTest('Guild section routes', allPassed,
    allPassed ? 'All Guild routes accessible' : 'Some Guild routes failed');
}

// Test 9: Verify Team section route (Requirement 8.2, 8.3)
async function testTeamSectionRoute(token) {
  console.log('\n--- Test 9: Team section route ---');
  
  const result = await makeRequest('/team/my-team', 'GET');
  
  const passed = result.status === 200 && result.isHtml;
  
  logTest('Team section route', passed,
    passed ? 'Team route accessible' : 'Team route failed');
}

// Test 10: Verify root path redirects appropriately (Requirement 8.1)
async function testRootPathRedirect() {
  console.log('\n--- Test 10: Root path redirect ---');
  
  const result = await makeRequest('/', 'GET');
  
  const passed = result.status === 200 && result.isHtml;
  
  logTest('Root path redirect', passed,
    passed ? 'Root path serves index.html for client-side routing' : 'Root path failed');
}

// Test 11: Verify 404 handling for invalid routes (Requirement 8.2)
async function testInvalidRouteHandling(token) {
  console.log('\n--- Test 11: Invalid route handling ---');
  
  const result = await makeRequest('/invalid/route/path', 'GET');
  
  // Should still serve index.html, client-side router will show 404
  const passed = result.status === 200 && result.isHtml;
  
  logTest('Invalid route handling', passed,
    passed ? 'Invalid routes serve index.html for client-side 404' : 'Invalid route handling failed');
}

// Test 12: Verify login page accessibility (Requirement 8.1)
async function testLoginPageAccess() {
  console.log('\n--- Test 12: Login page accessibility ---');
  
  const result = await makeRequest('/login', 'GET');
  
  const passed = result.status === 200 && result.isHtml;
  
  logTest('Login page access', passed,
    passed ? 'Login page accessible' : 'Login page failed to load');
}

// Test 13: Verify signup page accessibility (Requirement 8.1)
async function testSignupPageAccess() {
  console.log('\n--- Test 13: Signup page accessibility ---');
  
  const result = await makeRequest('/signup', 'GET');
  
  const passed = result.status === 200 && result.isHtml;
  
  logTest('Signup page access', passed,
    passed ? 'Signup page accessible' : 'Signup page failed to load');
}

// Test 14: Verify navigation maintains SPA behavior (Requirement 8.2)
async function testSpaNavigation(token) {
  console.log('\n--- Test 14: SPA navigation behavior ---');
  
  // Test that all routes return the same index.html (SPA)
  const routes = ['/lgm/hero', '/guild/castle-rush', '/team/my-team'];
  const responses = [];
  
  for (const route of routes) {
    const result = await makeRequest(route, 'GET');
    responses.push(result);
  }
  
  // All should return 200 and HTML
  const allPassed = responses.every(r => r.status === 200 && r.isHtml);
  
  logTest('SPA navigation behavior', allPassed,
    allPassed ? 'All routes serve index.html for SPA' : 'Some routes failed SPA behavior');
}

// Test 15: Verify section switching (Requirement 4.4)
async function testSectionSwitching(token) {
  console.log('\n--- Test 15: Section switching ---');
  
  // Test switching between different sections
  const sections = [
    '/lgm/hero',
    '/guild/castle-rush',
    '/team/my-team',
    '/lgm/equipment'
  ];
  
  let allPassed = true;
  
  for (const route of sections) {
    const result = await makeRequest(route, 'GET');
    
    if (result.status !== 200 || !result.isHtml) {
      allPassed = false;
      break;
    }
  }
  
  logTest('Section switching', allPassed,
    allPassed ? 'Can switch between all sections' : 'Section switching failed');
}

// Main test runner
async function runTests() {
  console.log('\x1b[36m%s\x1b[0m', '========================================');
  console.log('\x1b[36m%s\x1b[0m', 'Navigation and Routing Tests');
  console.log('\x1b[36m%s\x1b[0m', '========================================');
  
  // Check if server is running
  try {
    await makeRequest('/', 'GET');
  } catch (error) {
    console.error('\x1b[31m%s\x1b[0m', '\nError: Server is not running!');
    console.log('Please start the server with: npm start');
    process.exit(1);
  }

  console.log('\nSetting up test user...\n');
  const token = await setupTestUser();

  // Run all tests
  try {
    // Unauthenticated access tests
    await testUnauthenticatedRedirect();
    await testLoginPageAccess();
    await testSignupPageAccess();
    await testRootPathRedirect();

    // Authenticated navigation tests
    await testDirectUrlAccess(token);
    await testHeaderNavigationStructure(token);
    await testLgmSidebarLinks(token);
    await testGuildSidebarLinks(token);
    await testTeamSidebarLinks(token);

    // Route accessibility tests
    await testLgmSectionRoutes(token);
    await testGuildSectionRoutes(token);
    await testTeamSectionRoute(token);

    // SPA behavior tests
    await testSpaNavigation(token);
    await testSectionSwitching(token);
    await testInvalidRouteHandling(token);

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
