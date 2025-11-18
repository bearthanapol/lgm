class AuthManager {
  constructor() {
    this.tokenKey = 'lgm_auth_token';
    this.userKey = 'lgm_user_info';
  }

  async login(username, password) {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle 401 specifically
        if (response.status === 401) {
          throw new Error(data.error || 'Invalid credentials');
        }
        throw new Error(data.error || 'Login failed');
      }

      // Store token and user info in localStorage
      localStorage.setItem(this.tokenKey, data.token);
      localStorage.setItem(this.userKey, JSON.stringify(data.user));

      return { success: true, user: data.user };
    } catch (error) {
      // Check if it's a network error
      if (error.message === 'Failed to fetch' || !navigator.onLine) {
        if (typeof toastManager !== 'undefined') {
          toastManager.error('Network error. Please check your connection.');
        }
        return { success: false, error: 'Network error. Please check your connection.' };
      }
      return { success: false, error: error.message };
    }
  }

  async signup(username, email, password) {
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Signup failed');
      }

      // Store token and user info in localStorage
      localStorage.setItem(this.tokenKey, data.token);
      localStorage.setItem(this.userKey, JSON.stringify(data.user));

      return { success: true, user: data.user };
    } catch (error) {
      // Check if it's a network error
      if (error.message === 'Failed to fetch' || !navigator.onLine) {
        if (typeof toastManager !== 'undefined') {
          toastManager.error('Network error. Please check your connection.');
        }
        return { success: false, error: 'Network error. Please check your connection.' };
      }
      return { success: false, error: error.message };
    }
  }

  /**
   * Make an authenticated API request
   * @param {string} url - The API endpoint
   * @param {object} options - Fetch options
   * @returns {Promise} - Response data
   */
  async authenticatedFetch(url, options = {}) {
    const token = this.getToken();
    
    if (!token) {
      throw new Error('No authentication token found');
    }

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      ...options.headers
    };

    try {
      const response = await fetch(url, {
        ...options,
        headers
      });

      // Handle 401 - Unauthorized (token expired or invalid)
      if (response.status === 401) {
        if (typeof toastManager !== 'undefined') {
          toastManager.error('Session expired. Please login again.');
        }
        // Clear auth data and redirect to login
        this.logout();
        return null;
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Request failed');
      }

      return { success: true, data };
    } catch (error) {
      // Check if it's a network error
      if (error.message === 'Failed to fetch' || !navigator.onLine) {
        if (typeof toastManager !== 'undefined') {
          toastManager.error('Network error. Please check your connection.');
        }
        return { success: false, error: 'Network error. Please check your connection.' };
      }
      return { success: false, error: error.message };
    }
  }

  logout() {
    // Clear token and user info from localStorage
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
    
    // Redirect to login page
    window.location.href = '/login';
  }

  isAuthenticated() {
    const token = this.getToken();
    return token !== null && token !== undefined && token !== '';
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }

  getUserInfo() {
    const userJson = localStorage.getItem(this.userKey);
    if (userJson) {
      try {
        return JSON.parse(userJson);
      } catch (error) {
        return null;
      }
    }
    return null;
  }
}
