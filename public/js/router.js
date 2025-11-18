class Router {
  constructor(authManager) {
    this.authManager = authManager;
    this.routes = {};
    this.currentRoute = null;
  }

  /**
   * Navigate to a new route
   * @param {string} path - The path to navigate to
   * @param {boolean} addToHistory - Whether to add to browser history (default: true)
   */
  navigate(path, addToHistory = true) {
    // Update browser URL without page reload
    if (addToHistory) {
      window.history.pushState({}, '', path);
    }
    
    // Handle the route
    this.handleRoute();
  }

  /**
   * Parse current path and render appropriate content
   */
  handleRoute() {
    const path = window.location.pathname;
    this.currentRoute = path;

    // Check authentication for protected routes
    const isAuthRoute = path === '/login' || path === '/signup';
    const isAuthenticated = this.authManager.isAuthenticated();

    // Redirect unauthenticated users to /login
    if (!isAuthRoute && !isAuthenticated) {
      window.history.replaceState({}, '', '/login');
      this.renderRoute('/login');
      return;
    }

    // Redirect authenticated users away from auth pages
    if (isAuthRoute && isAuthenticated) {
      window.history.replaceState({}, '', '/home');
      this.renderRoute('/home');
      return;
    }

    // Render the current route
    this.renderRoute(path);
  }

  /**
   * Render content for the given route
   * @param {string} path - The path to render
   */
  renderRoute(path) {
    const route = this.routes[path];
    
    if (route) {
      route.render();
    } else {
      // Try to match wildcard routes
      const matchedRoute = this.matchRoute(path);
      if (matchedRoute) {
        matchedRoute.render();
      } else {
        // 404 - Route not found
        this.render404();
      }
    }
  }

  /**
   * Match path against registered routes (including wildcards)
   * @param {string} path - The path to match
   * @returns {Object|null} - The matched route or null
   */
  matchRoute(path) {
    // Check for exact matches first
    if (this.routes[path]) {
      return this.routes[path];
    }

    // Check for pattern matches
    for (const routePath in this.routes) {
      if (routePath.includes('*')) {
        const pattern = routePath.replace('*', '.*');
        const regex = new RegExp(`^${pattern}$`);
        if (regex.test(path)) {
          return this.routes[routePath];
        }
      }
    }

    return null;
  }

  /**
   * Register a route
   * @param {string} path - The path pattern
   * @param {Function} renderFn - The render function for this route
   */
  addRoute(path, renderFn) {
    this.routes[path] = { render: renderFn };
  }

  /**
   * Initialize the router
   */
  init() {
    // Handle browser back/forward buttons
    window.addEventListener('popstate', () => {
      this.handleRoute();
    });

    // Handle initial page load
    this.handleRoute();

    // Intercept link clicks for SPA navigation
    document.addEventListener('click', (e) => {
      // Check if clicked element is a link
      const link = e.target.closest('a');
      if (link && link.href) {
        const url = new URL(link.href);
        
        // Only handle internal links
        if (url.origin === window.location.origin) {
          e.preventDefault();
          this.navigate(url.pathname);
        }
      }
    });
  }

  /**
   * Render 404 page
   */
  render404() {
    const appContainer = document.getElementById('app-container');
    const loginContainer = document.getElementById('login-container');
    const signupContainer = document.getElementById('signup-container');

    // Hide all containers
    if (appContainer) appContainer.classList.add('hidden');
    if (loginContainer) loginContainer.classList.add('hidden');
    if (signupContainer) signupContainer.classList.add('hidden');

    // Show 404 in app container
    if (appContainer) {
      appContainer.classList.remove('hidden');
      appContainer.innerHTML = `
        <div class="page-404">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>The page you're looking for doesn't exist or has been moved.</p>
          <a href="/home" class="btn-primary">Go to Home</a>
        </div>
      `;
    }
    
    // Show toast notification
    if (typeof toastManager !== 'undefined') {
      toastManager.warning('Page not found. Redirecting you to a valid page.');
    }
  }

  /**
   * Get current route path
   * @returns {string} - Current route path
   */
  getCurrentRoute() {
    return this.currentRoute;
  }
}
