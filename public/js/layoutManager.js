// Layout Manager - Handles rendering of header, sidebar, and content area

/**
 * Render the header component
 * @param {string} username - The authenticated user's username
 * @param {string} activeSection - The currently active section (home/lgm/guild/team)
 * @param {string} userRole - The user's role (gmember, gmaster, gassist, admin)
 * @returns {string} - HTML string for the header
 */
function renderHeader(username, activeSection = '', userRole = 'gmember') {
  // Only show Admin link for admin role
  const adminLink = userRole === 'admin' 
    ? `<a href="/admin/manage" class="header-nav-link ${activeSection === 'admin' ? 'active' : ''}" data-section="admin">Admin</a>`
    : '';

  return `
    <div class="header-logo">LGM</div>
    <nav class="header-nav">
      <a href="/home" class="header-nav-link ${activeSection === 'home' ? 'active' : ''}" data-section="home">Home</a>
      <a href="/lgm/hero" class="header-nav-link ${activeSection === 'lgm' ? 'active' : ''}" data-section="lgm">LGM</a>
      <a href="/guild/info" class="header-nav-link ${activeSection === 'guild' ? 'active' : ''}" data-section="guild">Guild</a>
      <a href="/team/my-team" class="header-nav-link ${activeSection === 'team' ? 'active' : ''}" data-section="team">Team</a>
      ${adminLink}
    </nav>
    <div class="header-user" id="header-user">
      <span class="header-user-name">${username}</span>
      <span class="header-user-icon">▼</span>
      <div class="header-user-dropdown" id="user-dropdown">
        <button id="logout-btn">Logout</button>
      </div>
    </div>
  `;
}

/**
 * Render the sidebar component based on active section
 * @param {string} section - The active section (home/lgm/guild/team)
 * @param {string} activePage - The currently active page
 * @returns {string} - HTML string for the sidebar
 */
function renderSidebar(section, activePage = '') {
  let sidebarLinks = '';

  if (section === 'home') {
    sidebarLinks = `
      <li><a href="/home" class="sidebar-link ${activePage === 'news' ? 'active' : ''}" data-page="news">News & Updates</a></li>
    `;
  } else if (section === 'lgm') {
    sidebarLinks = `
      <li><a href="/lgm/hero" class="sidebar-link ${activePage === 'hero' ? 'active' : ''}" data-page="hero">Hero</a></li>
      <li><a href="/lgm/equipment" class="sidebar-link ${activePage === 'equipment' ? 'active' : ''}" data-page="equipment">Equipment</a></li>
      <li><a href="/lgm/pet" class="sidebar-link ${activePage === 'pet' ? 'active' : ''}" data-page="pet">Pet</a></li>
    `;
  } else if (section === 'guild') {
    sidebarLinks = `
      <li><a href="/guild/info" class="sidebar-link ${activePage === 'info' ? 'active' : ''}" data-page="info">Guild Info</a></li>
      <li><a href="/guild/castle-rush" class="sidebar-link ${activePage === 'castle-rush' ? 'active' : ''}" data-page="castle-rush">Castle Rush</a></li>
      <li><a href="/guild/guild-war" class="sidebar-link ${activePage === 'guild-war' ? 'active' : ''}" data-page="guild-war">Guild War</a></li>
      <li><a href="/guild/adventure" class="sidebar-link ${activePage === 'adventure' ? 'active' : ''}" data-page="adventure">Adventure Expedition</a></li>
    `;
  } else if (section === 'team') {
    sidebarLinks = `
      <li><a href="/team/my-team" class="sidebar-link ${activePage === 'my-team' ? 'active' : ''}" data-page="my-team">My Team</a></li>
      <li><a href="/team/gwar-noti" class="sidebar-link ${activePage === 'gwar-noti' ? 'active' : ''}" data-page="gwar-noti">Guild War Target</a></li>
    `;
  } else if (section === 'admin') {
    sidebarLinks = `
      <li><a href="/admin/manage" class="sidebar-link ${activePage === 'manage' ? 'active' : ''}" data-page="manage">Manage Heroes</a></li>
      <li><a href="/admin/news" class="sidebar-link ${activePage === 'news' ? 'active' : ''}" data-page="news">News & Updates</a></li>
      <li><a href="/admin/analytics" class="sidebar-link ${activePage === 'analytics' ? 'active' : ''}" data-page="analytics">Analytics</a></li>
    `;
  }

  return `
    <ul class="sidebar-nav">
      ${sidebarLinks}
    </ul>
  `;
}

/**
 * Render the content area with page-specific content
 * @param {string} pageContent - The HTML content for the page
 * @returns {string} - HTML string for the content area
 */
function renderContent(pageContent) {
  return `
    ${pageContent}
    
    <!-- Footer -->
    <div style="margin-top: 60px; padding: 30px 20px; background: #f5f5f5; border-top: 2px solid var(--color-orange); border-radius: 8px;">
      <div style="max-width: 1200px; margin: 0 auto;">
        <h3 style="color: var(--color-orange); margin: 0 0 15px 0; font-size: 18px;">⚠️ Disclaimer</h3>
        <p style="color: #666; font-size: 14px; line-height: 1.6; margin: 0;">
          <strong>LazyGuildMasters</strong> is a fan-made, independent website and is not affiliated with Netmarble. 
          <strong>Seven Knights Re:BIRTH</strong> and related assets are trademarks of Netmarble Corporation. 
          All trademarks and images are used for reference only.
        </p>
        <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center; color: #999; font-size: 12px;">
          © ${new Date().getFullYear()} LazyGuildMasters - Fan Community Project
        </div>
      </div>
    </div>
  `;
}

/**
 * Update active states for navigation elements
 * @param {string} section - The active section (lgm/guild/team)
 * @param {string} page - The active page
 */
function updateActiveStates(section, page) {
  // Update header navigation active state
  const headerLinks = document.querySelectorAll('.header-nav-link');
  headerLinks.forEach(link => {
    const linkSection = link.getAttribute('data-section');
    if (linkSection === section) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Update sidebar navigation active state
  const sidebarLinks = document.querySelectorAll('.sidebar-link');
  sidebarLinks.forEach(link => {
    const linkPage = link.getAttribute('data-page');
    if (linkPage === page) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/**
 * Attach event listeners for header user dropdown
 */
function attachHeaderEventListeners(authManager, router) {
  // Toggle user dropdown
  const headerUser = document.getElementById('header-user');
  const userDropdown = document.getElementById('user-dropdown');

  if (headerUser && userDropdown) {
    headerUser.addEventListener('click', (e) => {
      e.stopPropagation();
      userDropdown.classList.toggle('show');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
      userDropdown.classList.remove('show');
    });
  }

  // Logout button
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      authManager.logout();
      router.navigate('/login');
    });
  }
}
