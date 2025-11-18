class ToastManager {
  constructor() {
    this.toastContainer = null;
    this.init();
  }

  init() {
    // Create toast container if it doesn't exist
    if (!this.toastContainer) {
      this.toastContainer = document.createElement('div');
      this.toastContainer.id = 'toast-container';
      this.toastContainer.className = 'toast-container';
      document.body.appendChild(this.toastContainer);
    }
  }

  /**
   * Show a toast notification
   * @param {string} message - The message to display
   * @param {string} type - The type of toast (success, error, warning, info)
   * @param {number} duration - Duration in milliseconds (default: 5000)
   */
  show(message, type = 'info', duration = 5000) {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    // Create icon based on type
    const icon = this.getIcon(type);
    
    toast.innerHTML = `
      <div class="toast-icon">${icon}</div>
      <div class="toast-message">${message}</div>
      <button class="toast-close" aria-label="Close">&times;</button>
    `;

    // Add to container
    this.toastContainer.appendChild(toast);

    // Trigger animation
    setTimeout(() => {
      toast.classList.add('toast-show');
    }, 10);

    // Close button handler
    const closeBtn = toast.querySelector('.toast-close');
    closeBtn.addEventListener('click', () => {
      this.hide(toast);
    });

    // Auto-dismiss after duration
    if (duration > 0) {
      setTimeout(() => {
        this.hide(toast);
      }, duration);
    }

    return toast;
  }

  /**
   * Hide a toast notification
   * @param {HTMLElement} toast - The toast element to hide
   */
  hide(toast) {
    toast.classList.remove('toast-show');
    toast.classList.add('toast-hide');
    
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }

  /**
   * Get icon for toast type
   * @param {string} type - The type of toast
   * @returns {string} - HTML for the icon
   */
  getIcon(type) {
    const icons = {
      success: '✓',
      error: '✕',
      warning: '⚠',
      info: 'ℹ'
    };
    return icons[type] || icons.info;
  }

  /**
   * Show success toast
   * @param {string} message - The message to display
   * @param {number} duration - Duration in milliseconds
   */
  success(message, duration = 5000) {
    return this.show(message, 'success', duration);
  }

  /**
   * Show error toast
   * @param {string} message - The message to display
   * @param {number} duration - Duration in milliseconds
   */
  error(message, duration = 5000) {
    return this.show(message, 'error', duration);
  }

  /**
   * Show warning toast
   * @param {string} message - The message to display
   * @param {number} duration - Duration in milliseconds
   */
  warning(message, duration = 5000) {
    return this.show(message, 'warning', duration);
  }

  /**
   * Show info toast
   * @param {string} message - The message to display
   * @param {number} duration - Duration in milliseconds
   */
  info(message, duration = 5000) {
    return this.show(message, 'info', duration);
  }

  /**
   * Clear all toasts
   */
  clearAll() {
    const toasts = this.toastContainer.querySelectorAll('.toast');
    toasts.forEach(toast => this.hide(toast));
  }
}

// Create global instance
const toastManager = new ToastManager();
