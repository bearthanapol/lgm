function renderLoginPage() {
  const html = `
    <div class="auth-container">
      <div class="auth-card">
        <h1 class="auth-title">Login to LGM</h1>
        <form id="login-form" class="auth-form">
          <div class="form-group">
            <label for="login-username">Username</label>
            <input 
              type="text" 
              id="login-username" 
              name="username" 
              class="form-input"
              required
              autocomplete="username"
            />
          </div>
          <div class="form-group">
            <label for="login-password">Password</label>
            <input 
              type="password" 
              id="login-password" 
              name="password" 
              class="form-input"
              required
              autocomplete="current-password"
            />
          </div>
          <div id="login-error" class="error-message"></div>
          <button type="submit" class="btn-primary">Login</button>
        </form>
        <div class="auth-footer">
          <p>Don't have an account? <a href="/signup" class="auth-link">Sign up</a></p>
        </div>
      </div>
    </div>
  `;

  return html;
}

function attachLoginFormHandler(authManager, router) {
  const form = document.getElementById('login-form');
  const errorDiv = document.getElementById('login-error');
  const usernameInput = document.getElementById('login-username');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      // Clear previous error
      errorDiv.textContent = '';
      errorDiv.style.display = 'none';

      const username = usernameInput.value.trim();
      const password = document.getElementById('login-password').value;

      // Basic validation
      if (!username || !password) {
        errorDiv.textContent = 'Please enter both username and password';
        errorDiv.style.display = 'block';
        return;
      }

      // Disable submit button during request and add loading state
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.classList.add('btn-loading');
      submitBtn.textContent = 'Logging in...';

      // Call AuthManager login method
      const result = await authManager.login(username, password);

      if (result.success) {
        // Show success toast
        if (typeof toastManager !== 'undefined') {
          toastManager.success('Login successful!');
        }
        
        // Redirect to /home on success
        if (router) {
          router.navigate('/home');
        } else {
          window.location.href = '/home';
        }
      } else {
        // Display error message (don't clear username field)
        errorDiv.textContent = result.error || 'Login failed. Please try again.';
        errorDiv.style.display = 'block';
        
        // Re-enable submit button and remove loading state
        submitBtn.disabled = false;
        submitBtn.classList.remove('btn-loading');
        submitBtn.textContent = originalText;
        
        // Clear password field for security
        document.getElementById('login-password').value = '';
        
        // Auto-dismiss error after 5 seconds
        setTimeout(() => {
          errorDiv.style.display = 'none';
        }, 5000);
      }
    });
  }
}
