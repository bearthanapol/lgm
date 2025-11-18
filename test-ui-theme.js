/**
 * UI and Theme Test Suite
 * Tests for verifying black theme with orange borders, layout positioning, 
 * active states, and page styling
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');

// Load HTML and CSS
const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const css = fs.readFileSync(path.join(__dirname, 'public/css/styles.css'), 'utf8');

// Helper function to check if CSS contains a rule
function cssContains(pattern) {
  return css.includes(pattern) || new RegExp(pattern).test(css);
}

// Helper function to extract CSS rule value
function getCSSRuleValue(selector, property) {
  const regex = new RegExp(`${selector}\\s*{[^}]*${property}:\\s*([^;]+);`, 's');
  const match = css.match(regex);
  return match ? match[1].trim() : null;
}

// Helper function to check HTML structure
function checkHTMLStructure() {
  assert(html.includes('id="header"'), 'HTML should contain header element');
  assert(html.includes('id="sidebar"'), 'HTML should contain sidebar element');
  assert(html.includes('id="content"'), 'HTML should contain content element');
  assert(html.includes('id="app-container"'), 'HTML should contain app-container element');
  assert(html.includes('id="login-container"'), 'HTML should contain login-container element');
  assert(html.includes('id="signup-container"'), 'HTML should contain signup-container element');
}

console.log('Starting UI and Theme Tests...\n');

// Test 1: Verify black theme colors
console.log('Test 1: Verify black theme with orange borders applied throughout');
try {
  // Check CSS variables
  assert(cssContains('--color-black: #000000'), 'CSS should define --color-black as #000000');
  assert(cssContains('--color-orange: #ff6600'), 'CSS should define --color-orange as #ff6600');
  assert(cssContains('--color-white: #ffffff'), 'CSS should define --color-white as #ffffff');
  
  // Check body styling
  assert(cssContains('background-color: var(--color-black)') && css.match(/body\s*{[^}]*background-color/s), 
    'Body should have black background');
  assert(cssContains('color: var(--color-white)') && css.match(/body\s*{[^}]*color/s), 
    'Body should have white text color');
  
  // Check header border
  assert(css.match(/#header\s*{[^}]*border-bottom[^}]*var\(--color-orange\)/s), 
    'Header should have orange bottom border');
  
  // Check sidebar border
  assert(css.match(/#sidebar\s*{[^}]*border-right[^}]*var\(--color-orange\)/s), 
    'Sidebar should have orange right border');
  
  // Check auth card border
  assert(css.match(/\.auth-card\s*{[^}]*border[^}]*var\(--color-orange\)/s), 
    'Auth card should have orange border');
  
  // Check input borders
  assert(css.match(/\.input\s*{[^}]*border[^}]*var\(--color-orange\)/s) || 
         css.match(/\.form-input\s*{[^}]*border[^}]*var\(--color-orange\)/s), 
    'Inputs should have orange borders');
  
  console.log('✓ Black theme with orange borders verified\n');
} catch (error) {
  console.error('✗ Test 1 failed:', error.message, '\n');
  process.exit(1);
}

// Test 2: Verify layout doesn't overlap
console.log('Test 2: Verify layout doesn\'t overlap (header, sidebar, content)');
try {
  // Check header positioning
  assert(css.match(/#header\s*{[^}]*position:\s*fixed/s), 
    'Header should be fixed positioned');
  assert(css.match(/#header\s*{[^}]*top:\s*0/s), 
    'Header should be at top: 0');
  assert(css.match(/#header\s*{[^}]*height:\s*var\(--header-height\)/s), 
    'Header should use --header-height variable');
  assert(cssContains('--header-height: 60px'), 
    'Header height should be 60px');
  
  // Check sidebar positioning
  assert(css.match(/#sidebar\s*{[^}]*position:\s*fixed/s), 
    'Sidebar should be fixed positioned');
  assert(css.match(/#sidebar\s*{[^}]*top:\s*var\(--header-height\)/s), 
    'Sidebar should be positioned below header');
  assert(css.match(/#sidebar\s*{[^}]*width:\s*var\(--sidebar-width\)/s), 
    'Sidebar should use --sidebar-width variable');
  assert(cssContains('--sidebar-width: 200px'), 
    'Sidebar width should be 200px');
  
  // Check content positioning
  assert(css.match(/#content\s*{[^}]*margin-top:\s*var\(--header-height\)/s), 
    'Content should have margin-top equal to header height');
  assert(css.match(/#content\s*{[^}]*margin-left:\s*var\(--sidebar-width\)/s), 
    'Content should have margin-left equal to sidebar width');
  
  console.log('✓ Layout positioning verified - no overlaps\n');
} catch (error) {
  console.error('✗ Test 2 failed:', error.message, '\n');
  process.exit(1);
}

// Test 3: Verify active states highlight correctly
console.log('Test 3: Verify active states highlight correctly');
try {
  // Check header active link styling
  assert(css.match(/\.header-nav\s+a\.active\s*{[^}]*color:\s*var\(--color-orange\)/s), 
    'Active header nav link should be orange');
  
  // Check sidebar active link styling
  assert(css.match(/\.sidebar-nav\s+a\.active\s*{[^}]*background-color:\s*var\(--color-orange\)/s), 
    'Active sidebar link should have orange background');
  
  // Check that regular header links are white
  assert(css.match(/\.header-nav\s+a\s*{[^}]*color:\s*var\(--color-white\)/s), 
    'Regular header nav links should be white');
  
  // Check that regular sidebar links are white
  assert(css.match(/\.sidebar-nav\s+a\s*{[^}]*color:\s*var\(--color-white\)/s), 
    'Regular sidebar links should be white');
  
  console.log('✓ Active states highlighting verified\n');
} catch (error) {
  console.error('✗ Test 3 failed:', error.message, '\n');
  process.exit(1);
}

// Test 4: Verify all pages render with correct styling
console.log('Test 4: Verify all pages render with correct styling');
try {
  // Check page content h1 styling
  assert(css.match(/\.page-content\s+h1\s*{[^}]*color:\s*var\(--color-orange\)/s), 
    'Page h1 should be orange');
  assert(css.match(/\.page-content\s+h1\s*{[^}]*border-bottom[^}]*var\(--color-orange\)/s), 
    'Page h1 should have orange bottom border');
  
  // Check content area background
  assert(css.match(/#content\s*{[^}]*background-color:\s*var\(--color-black\)/s), 
    'Content area should have black background');
  
  // Check page content padding
  assert(css.match(/\.page-content\s*{[^}]*padding/s), 
    'Page content should have padding');
  
  // Check content area padding
  assert(css.match(/#content\s*{[^}]*padding/s), 
    'Content area should have padding');
  
  console.log('✓ Page styling verified\n');
} catch (error) {
  console.error('✗ Test 4 failed:', error.message, '\n');
  process.exit(1);
}

// Test 5: Verify authentication page styling
console.log('Test 5: Verify authentication page styling');
try {
  // Check auth container styling
  assert(css.match(/\.auth-container\s*{[^}]*background-color:\s*var\(--color-black\)/s), 
    'Auth container should have black background');
  
  // Check auth card styling
  assert(css.match(/\.auth-card\s*{[^}]*width:\s*400px/s), 
    'Auth card should be 400px wide');
  assert(css.match(/\.auth-card\s*{[^}]*background-color:\s*var\(--color-dark-gray\)/s), 
    'Auth card should have dark gray background');
  assert(css.match(/\.auth-card\s*{[^}]*border[^}]*var\(--color-orange\)/s), 
    'Auth card should have orange border');
  assert(css.match(/\.auth-card\s*{[^}]*padding:\s*40px/s), 
    'Auth card should have 40px padding');
  
  // Check input styling
  assert(css.match(/\.form-input\s*{[^}]*height:\s*45px/s) || 
         css.match(/\.form-group\s+input\s*{[^}]*height:\s*45px/s), 
    'Form inputs should be 45px high');
  assert(css.match(/\.form-input\s*{[^}]*border[^}]*var\(--color-orange\)/s) || 
         css.match(/\.form-group\s+input\s*{[^}]*border[^}]*var\(--color-orange\)/s), 
    'Form inputs should have orange borders');
  
  // Check button styling
  assert(css.match(/\.auth-submit-btn\s*{[^}]*height:\s*45px/s), 
    'Auth submit button should be 45px high');
  assert(css.match(/\.auth-submit-btn\s*{[^}]*background-color:\s*var\(--color-orange\)/s), 
    'Auth submit button should have orange background');
  
  console.log('✓ Authentication page styling verified\n');
} catch (error) {
  console.error('✗ Test 5 failed:', error.message, '\n');
  process.exit(1);
}

// Test 6: Verify CSS variables are defined
console.log('Test 6: Verify CSS variables are defined');
try {
  assert(cssContains('--color-black: #000000'), 
    '--color-black should be defined as #000000');
  assert(cssContains('--color-dark-gray: #1a1a1a'), 
    '--color-dark-gray should be defined as #1a1a1a');
  assert(cssContains('--color-orange: #ff6600'), 
    '--color-orange should be defined as #ff6600');
  assert(cssContains('--color-light-orange: #ff8833'), 
    '--color-light-orange should be defined as #ff8833');
  assert(cssContains('--color-white: #ffffff'), 
    '--color-white should be defined as #ffffff');
  assert(cssContains('--color-light-gray: #cccccc'), 
    '--color-light-gray should be defined as #cccccc');
  assert(cssContains('--header-height: 60px'), 
    '--header-height should be defined as 60px');
  assert(cssContains('--sidebar-width: 200px'), 
    '--sidebar-width should be defined as 200px');
  assert(cssContains('--border-width: 2px'), 
    '--border-width should be defined as 2px');
  assert(cssContains('--font-family:'), 
    '--font-family should be defined');
  
  console.log('✓ CSS variables verified\n');
} catch (error) {
  console.error('✗ Test 6 failed:', error.message, '\n');
  process.exit(1);
}

// Test 7: Verify border widths are consistent
console.log('Test 7: Verify border widths are consistent (2px)');
try {
  assert(cssContains('--border-width: 2px'), 
    'Border width variable should be 2px');
  
  // Check that borders use the variable
  assert(css.match(/border[^:]*:\s*var\(--border-width\)/g), 
    'Borders should use --border-width variable');
  
  console.log('✓ Border widths verified\n');
} catch (error) {
  console.error('✗ Test 7 failed:', error.message, '\n');
  process.exit(1);
}

// Test 8: Verify HTML structure
console.log('Test 8: Verify HTML structure');
try {
  checkHTMLStructure();
  
  // Check that CSS is linked
  assert(html.includes('href="/public/css/styles.css"'), 
    'HTML should link to styles.css');
  
  // Check that JavaScript files are linked
  assert(html.includes('src="/public/js/'), 
    'HTML should link to JavaScript files');
  
  console.log('✓ HTML structure verified\n');
} catch (error) {
  console.error('✗ Test 8 failed:', error.message, '\n');
  process.exit(1);
}

// Test 9: Verify typography styling
console.log('Test 9: Verify typography styling');
try {
  // Check font family
  assert(css.match(/body\s*{[^}]*font-family:\s*var\(--font-family\)/s), 
    'Body should use font-family variable');
  
  // Check heading sizes
  assert(css.match(/h1\s*{[^}]*font-size:\s*28px/s), 
    'H1 should be 28px');
  assert(css.match(/h2\s*{[^}]*font-size:\s*24px/s), 
    'H2 should be 24px');
  
  // Check header logo size
  assert(css.match(/\.header-logo\s*{[^}]*font-size:\s*24px/s), 
    'Header logo should be 24px');
  assert(css.match(/\.header-logo\s*{[^}]*font-weight:\s*bold/s), 
    'Header logo should be bold');
  
  console.log('✓ Typography styling verified\n');
} catch (error) {
  console.error('✗ Test 9 failed:', error.message, '\n');
  process.exit(1);
}

console.log('='.repeat(50));
console.log('All UI and Theme Tests Passed! ✓');
console.log('='.repeat(50));
console.log('\nTest Summary:');
console.log('✓ Black theme with orange borders applied throughout');
console.log('✓ Layout doesn\'t overlap (header, sidebar, content)');
console.log('✓ Active states highlight correctly');
console.log('✓ All pages render with correct styling');
console.log('✓ Authentication pages styled correctly');
console.log('✓ CSS variables defined correctly');
console.log('✓ Border widths consistent (2px)');
