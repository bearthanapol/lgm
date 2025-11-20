function renderSignupPage() {
  const html = `
    <div class="auth-container">
      <div class="auth-card">
        <h1 class="auth-title">Create Account</h1>
        <form id="signup-form" class="auth-form">
          <div class="form-group">
            <label for="signup-username">Username</label>
            <input 
              type="text" 
              id="signup-username" 
              name="username" 
              class="form-input"
              required
              minlength="3"
              maxlength="20"
              autocomplete="username"
            />
            <small class="form-hint">3-20 characters</small>
          </div>
          <div class="form-group">
            <label for="signup-ign">In Game Name</label>
            <input 
              type="text" 
              id="signup-ign" 
              name="ign" 
              class="form-input"
              required
              autocomplete="off"
              placeholder="Your character name in the game"
            />
          </div>
          <div class="form-group">
            <label for="signup-password">Password</label>
            <input 
              type="password" 
              id="signup-password" 
              name="password" 
              class="form-input"
              required
              minlength="8"
              autocomplete="new-password"
            />
            <small class="form-hint">Minimum 8 characters</small>
          </div>
          <div class="form-group">
            <label for="signup-confirm-password">Confirm Password</label>
            <input 
              type="password" 
              id="signup-confirm-password" 
              name="confirmPassword" 
              class="form-input"
              required
              minlength="8"
              autocomplete="new-password"
            />
          </div>
          <div id="signup-error" class="error-message"></div>
          <button type="submit" class="btn-primary">Sign Up</button>
        </form>
        <div class="auth-footer">
          <p>Already have an account? <a href="/login" class="auth-link">Login</a></p>
        </div>
      </div>
    </div>
  `;

  return html;
}

function attachSignupFormHandler(authManager, router) {
  const form = document.getElementById('signup-form');
  const errorDiv = document.getElementById('signup-error');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      // Clear previous error
      errorDiv.textContent = '';
      errorDiv.style.display = 'none';

      const username = document.getElementById('signup-username').value.trim();
      const ign = document.getElementById('signup-ign').value.trim();
      const password = document.getElementById('signup-password').value;
      const confirmPassword = document.getElementById('signup-confirm-password').value;

      // Client-side validation
      if (!username || !ign || !password || !confirmPassword) {
        errorDiv.textContent = 'Please fill in all fields';
        errorDiv.style.display = 'block';
        return;
      }

      if (username.length < 3 || username.length > 20) {
        errorDiv.textContent = 'Username must be between 3 and 20 characters';
        errorDiv.style.display = 'block';
        return;
      }

      if (ign.length < 2) {
        errorDiv.textContent = 'In Game Name must be at least 2 characters';
        errorDiv.style.display = 'block';
        return;
      }

      if (password.length < 8) {
        errorDiv.textContent = 'Password must be at least 8 characters';
        errorDiv.style.display = 'block';
        return;
      }

      if (password !== confirmPassword) {
        errorDiv.textContent = 'Passwords do not match';
        errorDiv.style.display = 'block';
        return;
      }

      // Disable submit button during request and add loading state
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.classList.add('btn-loading');
      submitBtn.textContent = 'Creating account...';

      // Call AuthManager signup method
      const result = await authManager.signup(username, ign, password);

      if (result.success) {
        // Show success toast
        if (typeof toastManager !== 'undefined') {
          toastManager.success('Account created successfully!');
        }
        
        // Redirect to /home on success
        if (router) {
          router.navigate('/home');
        } else {
          window.location.href = '/home';
        }
      } else {
        // Display error message for validation failures
        errorDiv.textContent = result.error || 'Signup failed. Please try again.';
        errorDiv.style.display = 'block';
        
        // Re-enable submit button and remove loading state
        submitBtn.disabled = false;
        submitBtn.classList.remove('btn-loading');
        submitBtn.textContent = originalText;
        
        // Clear password fields for security
        document.getElementById('signup-password').value = '';
        document.getElementById('signup-confirm-password').value = '';
        
        // Auto-dismiss error after 5 seconds
        setTimeout(() => {
          errorDiv.style.display = 'none';
        }, 5000);
      }
    });
  }
}
