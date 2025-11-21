// Main application initialization

// Initialize AuthManager
const authManager = new AuthManager();

// Initialize Router
const router = new Router(authManager);

// Helper function to show/hide containers
function showContainer(containerId) {
  const containers = ['login-container', 'signup-container', 'app-container'];
  containers.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      if (id === containerId) {
        element.classList.remove('hidden');
      } else {
        element.classList.add('hidden');
      }
    }
  });
}

// Helper function to render main app layout
function renderMainLayout(section, page, pageContent) {
  const appContainer = document.getElementById('app-container');
  const headerElement = document.getElementById('header');
  const sidebarElement = document.getElementById('sidebar');
  const contentArea = document.getElementById('content');

  if (appContainer && headerElement && sidebarElement && contentArea) {
    showContainer('app-container');

    // Get username from auth manager
    const userInfo = authManager.getUserInfo();
    const username = userInfo ? userInfo.username : 'User';

    // Render header
    headerElement.innerHTML = renderHeader(username, section);

    // Render sidebar
    sidebarElement.innerHTML = renderSidebar(section, page);

    // Render content
    contentArea.innerHTML = renderContent(pageContent);

    // Attach header event listeners (logout, dropdown)
    attachHeaderEventListeners(authManager, router);

    // Update active states
    updateActiveStates(section, page);
  }
}

// Route: /login
router.addRoute('/login', () => {
  showContainer('login-container');
  const loginContainer = document.getElementById('login-container');
  if (loginContainer) {
    loginContainer.innerHTML = renderLoginPage();
    attachLoginFormHandler(authManager, router);
  }
});

// Route: /signup
router.addRoute('/signup', () => {
  showContainer('signup-container');
  const signupContainer = document.getElementById('signup-container');
  if (signupContainer) {
    signupContainer.innerHTML = renderSignupPage();
    attachSignupFormHandler(authManager, router);
  }
});

// Home Section Route
router.addRoute('/home', () => {
  const pageContent = renderHomePage();
  renderMainLayout('home', 'news', pageContent);

  // Load published news after rendering
  setTimeout(async () => {
    await loadPublicNews();
  }, 100);
});

// LGM Section Routes
router.addRoute('/lgm/hero', () => {
  const pageContent = renderHeroPage();
  renderMainLayout('lgm', 'hero', pageContent);
});

router.addRoute('/lgm/equipment', () => {
  const pageContent = renderEquipmentPage();
  renderMainLayout('lgm', 'equipment', pageContent);
});

router.addRoute('/lgm/pet', () => {
  const pageContent = renderPetPage();
  renderMainLayout('lgm', 'pet', pageContent);
});

// Guild Section Routes
router.addRoute('/guild/info', () => {
  const pageContent = renderGuildInfoPage();
  renderMainLayout('guild', 'info', pageContent);

  // Load guild info after rendering
  setTimeout(() => {
    loadGuildInfo();
  }, 100);
});

router.addRoute('/guild/castle-rush', () => {
  const pageContent = renderCastleRushPage();
  renderMainLayout('guild', 'castle-rush', pageContent);
});

router.addRoute('/guild/guild-war', () => {
  const pageContent = renderGuildWarPage();
  renderMainLayout('guild', 'guild-war', pageContent);

  // Load guild war teams after rendering
  setTimeout(() => {
    loadGuildWarTeams();
  }, 100);
});

router.addRoute('/guild/adventure', () => {
  const pageContent = renderAdventureExpeditionPage();
  renderMainLayout('guild', 'adventure', pageContent);
});

// Team Section Routes
router.addRoute('/team/my-team', () => {
  console.log('My Team route handler called');
  const pageContent = renderMyTeamPage();
  renderMainLayout('team', 'my-team', pageContent);

  // Load content after rendering
  setTimeout(async () => {
    console.log('setTimeout executed');
    try {
      // Attach screenshot upload handler
      attachScreenshotUploadHandler();

      // Load user's saved team if exists
      console.log('Checking if loadUserTeamFromPages exists:', typeof loadUserTeamFromPages);
      if (typeof loadUserTeamFromPages === 'function') {
        console.log('Calling loadUserTeamFromPages...');
        try {
          await loadUserTeamFromPages();
          console.log('loadUserTeamFromPages completed');
        } catch (loadError) {
          console.error('Error calling loadUserTeamFromPages:', loadError);
          console.error('Stack trace:', loadError.stack);
        }
      } else {
        console.error('loadUserTeamFromPages function not found');
      }
    } catch (error) {
      console.error('Error in my-team route:', error);
      console.error('Stack trace:', error.stack);
    }
  }, 500);
});

// Admin Section Routes
router.addRoute('/admin/manage', () => {
  const pageContent = renderAdminPage();
  renderMainLayout('admin', 'manage', pageContent);

  // Load content after rendering
  setTimeout(async () => {
    // Set up tab switching
    setupAdminTabs();

    // Load heroes
    await loadHeroes();

    // Load news
    await loadNews();

    // Attach hero form handler
    attachHeroFormHandler();

    // Attach news form handler
    attachNewsFormHandler();

    // Attach image preview handler
    attachImagePreviewHandler();
  }, 100);
});

// Helper function to load and display heroes
async function loadHeroes() {
  const heroListContainer = document.getElementById('hero-list');
  if (!heroListContainer) return;

  try {
    heroListContainer.innerHTML = '<p style="color: #666666;">Loading heroes...</p>';

    const response = await fetch('/api/heroes');
    const result = await response.json();

    if (result.success && result.data.length > 0) {
      // Group heroes by name
      const groupedHeroes = {};
      result.data.forEach(hero => {
        const heroName = hero.name || hero.heroname;
        if (!groupedHeroes[heroName]) {
          groupedHeroes[heroName] = [];
        }
        groupedHeroes[heroName].push(hero);
      });

      // Generate HTML for grouped heroes
      const heroesHTML = Object.entries(groupedHeroes).map(([heroName, skins]) => {
        const firstHero = skins[0];
        const skinsHTML = skins.map(hero => {
          const imageUrl = hero.imageUrl || hero.heroPicture;
          const cacheBuster = `?t=${Date.now()}`;
          return `
          <div style="text-align: center;">
            ${imageUrl ?
              `<img src="${imageUrl}${cacheBuster}" alt="${heroName}" style="width: 180px; height: 180px; object-fit: contain; border-radius: 4px; border: 2px solid #ddd; display: block; margin-bottom: 8px; background-color: #f9f9f9;">` :
              '<div style="width: 180px; height: 180px; background-color: #f0f0f0; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: #999; margin-bottom: 8px; border: 2px solid #ddd;">No Image</div>'
            }
            <div style="display: flex; gap: 5px;">
              <button onclick="editHeroImage('${hero._id}', '${imageUrl}', '${heroName}', '${hero.rarity}')" style="padding: 6px 12px; background-color: #0066cc; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px; flex: 1;">Edit</button>
              <button onclick="deleteHero('${hero._id}')" style="padding: 6px 12px; background-color: #ff3333; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px; flex: 1;">Delete</button>
            </div>
          </div>
        `;
        }).join('');

        return `
          <div style="background-color: #ffffff; padding: 20px; border: 2px solid var(--color-orange); border-radius: 4px; margin-bottom: 15px;">
            <h3 style="color: var(--color-orange); margin-bottom: 8px; font-size: 18px;">${heroName}</h3>
            <p style="color: #000000; margin-bottom: 15px;"><strong>Rarity:</strong> ${firstHero.rarity} | <strong>Skins:</strong> ${skins.length}</p>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 20px;">
              ${skinsHTML}
            </div>
          </div>
        `;
      }).join('');

      heroListContainer.innerHTML = heroesHTML;
    } else {
      heroListContainer.innerHTML = '<p style="color: #666666;">No heroes found. Add your first hero above!</p>';
    }
  } catch (error) {
    console.error('Error loading heroes:', error);
    heroListContainer.innerHTML = '<p style="color: #ff3333;">Failed to load heroes. Please refresh the page.</p>';
  }
}

// Global function to delete hero
async function deleteHero(heroId) {
  if (!confirm('Are you sure you want to delete this hero?')) {
    return;
  }

  try {
    const response = await fetch(`/api/heroes/${heroId}`, {
      method: 'DELETE'
    });

    const result = await response.json();

    if (result.success) {
      if (typeof toastManager !== 'undefined') {
        toastManager.success('Hero deleted successfully!');
      }
      await loadHeroes();
    } else {
      if (typeof toastManager !== 'undefined') {
        toastManager.error(result.error || 'Failed to delete hero');
      }
    }
  } catch (error) {
    console.error('Error deleting hero:', error);
    if (typeof toastManager !== 'undefined') {
      toastManager.error('Failed to delete hero. Please try again.');
    }
  }
}

// Global function to edit hero image
async function editHeroImage(heroId, imageUrl, heroName, rarity) {
  // Extract original filename from URL
  const urlParts = imageUrl.split('/');
  const originalFilename = urlParts[urlParts.length - 1];

  // Open cropper with the hero's current image
  imageCropper.open(imageUrl, async (croppedImageFile) => {
    try {
      // Show loading toast
      if (typeof toastManager !== 'undefined') {
        toastManager.info('Updating image...');
      }

      // Create local preview URL for immediate display
      const localPreviewUrl = URL.createObjectURL(croppedImageFile);

      // Immediately update the image in the UI with local preview
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (img.src.includes(originalFilename) || img.src.includes(imageUrl)) {
          img.src = localPreviewUrl;
          img.style.border = '3px solid #00cc66'; // Green border to show it's updated
        }
      });

      // Create a new File with the original filename to override it
      const fileToUpload = new File([croppedImageFile], originalFilename, { type: croppedImageFile.type });

      // Upload the cropped image to GitHub (will override the old file)
      const formData = new FormData();
      formData.append('image', fileToUpload);

      const uploadResponse = await fetch('/api/upload/hero-image', {
        method: 'POST',
        body: formData
      });

      const uploadResult = await uploadResponse.json();

      if (!uploadResult.success) {
        throw new Error(uploadResult.error || 'Failed to upload image');
      }

      // The URL should be the same since we used the same filename
      const updatedImageUrl = uploadResult.imageUrl;

      // Update hero with the image URL (same URL but file is overwritten)
      const updateResponse = await fetch(`/api/heroes/${heroId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          imageUrl: updatedImageUrl
        })
      });

      const updateResult = await updateResponse.json();

      if (updateResult.success) {
        if (typeof toastManager !== 'undefined') {
          toastManager.success(`Hero "${heroName}" image updated! (Showing preview)`);
        }

        // Note: GitHub CDN may take 1-5 minutes to update
        // The local preview will show immediately
        // After page refresh, it will load from GitHub
      } else {
        if (typeof toastManager !== 'undefined') {
          toastManager.error(updateResult.error || 'Failed to update hero');
        }
        // Reload on error to show correct state
        await loadHeroes();
      }
    } catch (error) {
      console.error('Error updating hero image:', error);
      if (typeof toastManager !== 'undefined') {
        toastManager.error(error.message || 'Failed to update hero image');
      }
      // Reload on error
      await loadHeroes();
    }
  });
}

// Default route - redirect to /home for authenticated users, /login for guests
router.addRoute('/', () => {
  if (authManager.isAuthenticated()) {
    window.history.replaceState({}, '', '/home');
    router.renderRoute('/home');
  } else {
    window.history.replaceState({}, '', '/login');
    router.renderRoute('/login');
  }
});

// Initialize router when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  router.init();

  // Set up global error handlers
  setupGlobalErrorHandlers();
});

/**
 * Set up global error handlers for the application
 */
function setupGlobalErrorHandlers() {
  // Handle online/offline events
  window.addEventListener('online', () => {
    if (typeof toastManager !== 'undefined') {
      toastManager.success('Connection restored');
    }
  });

  window.addEventListener('offline', () => {
    if (typeof toastManager !== 'undefined') {
      toastManager.error('No internet connection', 0); // 0 = don't auto-dismiss
    }
  });

  // Handle unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
    if (typeof toastManager !== 'undefined') {
      toastManager.error('An unexpected error occurred. Please try again.');
    }
  });

  // Handle global errors
  window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
    // Don't show toast for script loading errors
    if (!event.filename) {
      return;
    }
  });
}


/**
 * Set up admin tab switching
 */
function setupAdminTabs() {
  const tabButtons = document.querySelectorAll('.admin-tab');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tabName = button.getAttribute('data-tab');

      // Update button styles
      tabButtons.forEach(btn => {
        if (btn === button) {
          btn.style.background = 'var(--color-orange)';
          btn.style.color = 'white';
          btn.classList.add('active');
        } else {
          btn.style.background = '#f5f5f5';
          btn.style.color = '#000';
          btn.classList.remove('active');
        }
      });

      // Show/hide tab content
      document.getElementById('heroes-tab').style.display = tabName === 'heroes' ? 'block' : 'none';
      document.getElementById('news-tab').style.display = tabName === 'news' ? 'block' : 'none';
    });
  });
}

/**
 * Attach image preview handler for hero image upload with crop functionality
 */
function attachImagePreviewHandler() {
  const fileInput = document.getElementById('hero-image-file');
  const preview = document.getElementById('hero-image-preview');
  const previewImg = document.getElementById('hero-preview-img');
  const selectFromDbBtn = document.getElementById('select-from-db-btn');

  // Store the cropped file
  let croppedFile = null;

  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        // Open cropper
        imageCropper.open(file, (croppedImageFile) => {
          // Store cropped file
          croppedFile = croppedImageFile;

          // Update file input with cropped file
          const dataTransfer = new DataTransfer();
          dataTransfer.items.add(croppedImageFile);
          fileInput.files = dataTransfer.files;

          // Show preview
          const reader = new FileReader();
          reader.onload = (event) => {
            previewImg.src = event.target.result;
            preview.style.display = 'block';
          };
          reader.readAsDataURL(croppedImageFile);
        });
      } else {
        preview.style.display = 'none';
        croppedFile = null;
      }
    });
  }

  // Handle "Select from Database" button
  if (selectFromDbBtn) {
    selectFromDbBtn.addEventListener('click', async () => {
      await showDatabaseImageSelector((imageUrl) => {
        // Open cropper with selected image URL
        imageCropper.open(imageUrl, (croppedImageFile) => {
          // Store cropped file
          croppedFile = croppedImageFile;

          // Update file input with cropped file
          const dataTransfer = new DataTransfer();
          dataTransfer.items.add(croppedImageFile);
          fileInput.files = dataTransfer.files;

          // Show preview
          const reader = new FileReader();
          reader.onload = (event) => {
            previewImg.src = event.target.result;
            preview.style.display = 'block';
          };
          reader.readAsDataURL(croppedImageFile);
        });
      });
    });
  }
}

/**
 * Show database image selector modal
 */
async function showDatabaseImageSelector(callback) {
  try {
    // Fetch all heroes
    const response = await fetch('/api/heroes');
    const result = await response.json();

    if (!result.success || result.data.length === 0) {
      if (typeof toastManager !== 'undefined') {
        toastManager.warning('No heroes found in database');
      }
      return;
    }

    // Create modal
    const modal = document.createElement('div');
    modal.id = 'db-image-selector-modal';
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: auto;
    `;

    // Generate image grid
    const imagesHTML = result.data
      .filter(hero => hero.imageUrl || hero.heroPicture)
      .map(hero => {
        const imageUrl = hero.imageUrl || hero.heroPicture;
        const heroName = hero.name || hero.heroname;
        return `
          <div class="db-image-item" data-image-url="${imageUrl}" style="cursor: pointer; text-align: center; padding: 10px; border: 2px solid transparent; border-radius: 4px; transition: all 0.2s;">
            <img src="${imageUrl}" alt="${heroName}" style="width: 120px; height: 120px; object-fit: contain; border-radius: 4px; background-color: #f9f9f9; border: 1px solid #ddd;">
            <p style="color: white; margin-top: 8px; font-size: 12px;">${heroName}</p>
          </div>
        `;
      }).join('');

    modal.innerHTML = `
      <div style="background: #2a2a2a; padding: 30px; border-radius: 8px; max-width: 90%; max-height: 90%; overflow: auto;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
          <h2 style="color: var(--color-orange); margin: 0;">Select Hero Image from Database</h2>
          <button id="close-db-selector" style="padding: 8px 16px; background: #666; color: white; border: none; border-radius: 4px; cursor: pointer;">Close</button>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 15px; max-height: 60vh; overflow-y: auto;">
          ${imagesHTML}
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    // Add hover effect and click handlers
    const imageItems = modal.querySelectorAll('.db-image-item');
    imageItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        item.style.borderColor = 'var(--color-orange)';
        item.style.backgroundColor = 'rgba(255, 102, 0, 0.1)';
      });

      item.addEventListener('mouseleave', () => {
        item.style.borderColor = 'transparent';
        item.style.backgroundColor = 'transparent';
      });

      item.addEventListener('click', () => {
        const imageUrl = item.getAttribute('data-image-url');
        modal.remove();
        callback(imageUrl);
      });
    });

    // Close button
    document.getElementById('close-db-selector').addEventListener('click', () => {
      modal.remove();
    });

    // Close on background click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.remove();
      }
    });

  } catch (error) {
    console.error('Error loading database images:', error);
    if (typeof toastManager !== 'undefined') {
      toastManager.error('Failed to load images from database');
    }
  }
}

/**
 * Attach hero form handler with image upload
 */
function attachHeroFormHandler() {
  const form = document.getElementById('add-hero-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Uploading...';

    try {
      // Upload image first if file is selected
      const fileInput = document.getElementById('hero-image-file');
      let imageUrl = '';

      if (fileInput.files.length > 0) {
        const formData = new FormData();
        formData.append('image', fileInput.files[0]);

        const uploadResponse = await fetch('/api/upload/hero-image', {
          method: 'POST',
          body: formData
        });

        const uploadResult = await uploadResponse.json();

        if (!uploadResult.success) {
          throw new Error(uploadResult.error || 'Failed to upload image');
        }

        imageUrl = uploadResult.imageUrl;

        if (typeof toastManager !== 'undefined') {
          toastManager.success('Image uploaded to GitHub!');
        }
      }

      // Create hero with uploaded image URL
      const heroData = {
        name: document.getElementById('hero-name').value,
        rarity: document.getElementById('hero-rarity').value,
        imageUrl: imageUrl
      };

      const response = await fetch('/api/heroes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(heroData)
      });

      const result = await response.json();

      if (result.success) {
        if (typeof toastManager !== 'undefined') {
          toastManager.success(`Hero "${heroData.name}" added successfully!`);
        }

        // Reset form
        form.reset();
        document.getElementById('hero-image-preview').style.display = 'none';

        // Reload hero list
        await loadHeroes();
      } else {
        if (typeof toastManager !== 'undefined') {
          toastManager.error(result.error || 'Failed to add hero');
        }
      }
    } catch (error) {
      console.error('Error adding hero:', error);
      if (typeof toastManager !== 'undefined') {
        toastManager.error(error.message || 'Failed to add hero. Please try again.');
      }
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
  });
}

/**
 * Attach news form handler
 */
function attachNewsFormHandler() {
  const form = document.getElementById('add-news-form');
  if (!form) {
    console.error('News form not found!');
    return;
  }

  console.log('News form handler attached');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log('News form submitted');

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Creating...';

    try {
      const newsData = {
        title: document.getElementById('news-title').value,
        content: document.getElementById('news-content').value,
        category: document.getElementById('news-category').value,
        published: document.getElementById('news-published').checked
      };

      console.log('Sending news data:', newsData);

      const response = await fetch('/api/news', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newsData)
      });

      console.log('Response status:', response.status);
      const result = await response.json();
      console.log('Response data:', result);

      if (result.success) {
        if (typeof toastManager !== 'undefined') {
          toastManager.success('News created successfully!');
        }

        // Reset form
        form.reset();

        // Reload news list
        await loadNews();
      } else {
        console.error('Server returned error:', result.error);
        if (typeof toastManager !== 'undefined') {
          toastManager.error(result.error || 'Failed to create news');
        }
      }
    } catch (error) {
      console.error('Error creating news:', error);
      console.error('Error stack:', error.stack);
      if (typeof toastManager !== 'undefined') {
        toastManager.error('Failed to create news. Please try again.');
      }
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
  });
}

/**
 * Load and display news (admin view - all news)
 */
async function loadNews() {
  const newsListContainer = document.getElementById('news-list');
  if (!newsListContainer) return;

  try {
    newsListContainer.innerHTML = '<p style="color: #666666;">Loading news...</p>';

    const response = await fetch('/api/news');
    const result = await response.json();

    if (result.success && result.data.length > 0) {
      const newsHTML = result.data.map(news => {
        const date = new Date(news.createdAt).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        });

        const categoryColors = {
          general: '#666666',
          update: '#0066cc',
          event: '#ff6600',
          maintenance: '#cc0000'
        };

        const categoryColor = categoryColors[news.category] || '#666666';

        return `
          <div style="background-color: #ffffff; padding: 20px; border: 2px solid var(--color-orange); border-radius: 4px; margin-bottom: 15px;">
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 10px;">
              <div style="flex: 1;">
                <h3 style="color: var(--color-orange); margin-bottom: 8px;">${news.title}</h3>
                <div style="display: flex; gap: 15px; margin-bottom: 10px;">
                  <span style="color: ${categoryColor}; font-weight: 600; text-transform: uppercase; font-size: 12px;">${news.category}</span>
                  <span style="color: #999999; font-size: 12px;">${date}</span>
                  <span style="color: ${news.published ? '#00cc66' : '#999999'}; font-size: 12px;">${news.published ? '● Published' : '○ Draft'}</span>
                </div>
              </div>
              <button onclick="deleteNews('${news._id}')" style="padding: 8px 16px; background-color: #ff3333; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px;">Delete</button>
            </div>
            <p style="color: #000000; white-space: pre-wrap; line-height: 1.6;">${news.content}</p>
          </div>
        `;
      }).join('');

      newsListContainer.innerHTML = newsHTML;
    } else {
      newsListContainer.innerHTML = '<p style="color: #666666;">No news found. Create your first news post above!</p>';
    }
  } catch (error) {
    console.error('Error loading news:', error);
    newsListContainer.innerHTML = '<p style="color: #ff3333;">Failed to load news. Please refresh the page.</p>';
  }
}

/**
 * Load and display public news (published only)
 */
async function loadPublicNews() {
  const newsListContainer = document.getElementById('public-news-list');
  if (!newsListContainer) return;

  try {
    newsListContainer.innerHTML = '<p style="color: #666666;">Loading news...</p>';

    const response = await fetch('/api/news?published=true');
    const result = await response.json();

    if (result.success && result.data.length > 0) {
      const newsHTML = result.data.map(news => {
        const date = new Date(news.createdAt).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        });

        const categoryColors = {
          general: '#666666',
          update: '#0066cc',
          event: '#ff6600',
          maintenance: '#cc0000'
        };

        const categoryColor = categoryColors[news.category] || '#666666';
        const categoryLabels = {
          general: 'General',
          update: 'Game Update',
          event: 'Event',
          maintenance: 'Maintenance'
        };

        return `
          <div style="background-color: #ffffff; padding: 25px; border: 2px solid var(--color-orange); border-radius: 4px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="margin-bottom: 15px;">
              <h2 style="color: var(--color-orange); margin-bottom: 10px; font-size: 24px;">${news.title}</h2>
              <div style="display: flex; gap: 15px; align-items: center;">
                <span style="background-color: ${categoryColor}; color: white; padding: 4px 12px; border-radius: 3px; font-weight: 600; text-transform: uppercase; font-size: 11px;">${categoryLabels[news.category] || news.category}</span>
                <span style="color: #999999; font-size: 14px;">📅 ${date}</span>
              </div>
            </div>
            <p style="color: #000000; white-space: pre-wrap; line-height: 1.8; font-size: 15px;">${news.content}</p>
          </div>
        `;
      }).join('');

      newsListContainer.innerHTML = newsHTML;
    } else {
      newsListContainer.innerHTML = `
        <div style="text-align: center; padding: 60px 20px; background-color: #f5f5f5; border: 2px solid var(--color-orange); border-radius: 4px;">
          <h2 style="color: #666666; margin-bottom: 10px;">No News Yet</h2>
          <p style="color: #999999;">Check back later for updates and announcements!</p>
        </div>
      `;
    }
  } catch (error) {
    console.error('Error loading public news:', error);
    newsListContainer.innerHTML = '<p style="color: #ff3333;">Failed to load news. Please refresh the page.</p>';
  }
}

/**
 * Global function to delete news
 */
async function deleteNews(newsId) {
  if (!confirm('Are you sure you want to delete this news post?')) {
    return;
  }

  try {
    const response = await fetch(`/api/news/${newsId}`, {
      method: 'DELETE'
    });

    const result = await response.json();

    if (result.success) {
      if (typeof toastManager !== 'undefined') {
        toastManager.success('News deleted successfully!');
      }
      await loadNews();
    } else {
      if (typeof toastManager !== 'undefined') {
        toastManager.error(result.error || 'Failed to delete news');
      }
    }
  } catch (error) {
    console.error('Error deleting news:', error);
    if (typeof toastManager !== 'undefined') {
      toastManager.error('Failed to delete news. Please try again.');
    }
  }
}


/**
 * Attach screenshot upload handler for team page
 */
function attachScreenshotUploadHandler() {
  const form = document.getElementById('upload-screenshot-form');
  const fileInput = document.getElementById('screenshot-file');
  const preview = document.getElementById('screenshot-preview');
  const previewImg = document.getElementById('screenshot-preview-img');

  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          previewImg.src = event.target.result;
          preview.style.display = 'block';
        };
        reader.readAsDataURL(file);
      } else {
        preview.style.display = 'none';
      }
    });
  }

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = document.getElementById('upload-btn');
    const processingStatus = document.getElementById('processing-status');
    const originalText = submitBtn.textContent;

    submitBtn.disabled = true;
    submitBtn.textContent = 'Processing...';
    processingStatus.style.display = 'block';

    try {
      const file = fileInput.files[0];
      if (!file) {
        throw new Error('Please select a screenshot');
      }

      // Get username from auth manager
      const userInfo = authManager.getUserInfo();
      const username = userInfo ? userInfo.username : 'guest';

      const formData = new FormData();
      formData.append('screenshot', file);
      formData.append('username', username);

      console.log('Uploading screenshot for processing...');

      const response = await fetch('/api/team/upload', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();
      console.log('Processing result:', result);

      if (result.success) {
        if (typeof toastManager !== 'undefined') {
          toastManager.success(`Recognized ${result.data.totalHeroes} heroes!`);
        }

        // Display results
        displayTeamResults(result.data);

        // Reset form
        form.reset();
        preview.style.display = 'none';
      } else {
        if (typeof toastManager !== 'undefined') {
          toastManager.error(result.error || 'Failed to process screenshot');
        }
      }
    } catch (error) {
      console.error('Error uploading screenshot:', error);
      if (typeof toastManager !== 'undefined') {
        toastManager.error(error.message || 'Failed to process screenshot');
      }
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
      processingStatus.style.display = 'none';
    }
  });
}

/**
 * Display team recognition results
 */
function displayTeamResults(data) {
  const resultsDiv = document.getElementById('team-results');
  const totalHeroesEl = document.getElementById('total-heroes');
  const recognizedHeroesEl = document.getElementById('recognized-heroes');
  const unknownHeroesEl = document.getElementById('unknown-heroes');
  const heroGridEl = document.getElementById('hero-grid');

  if (!resultsDiv || !heroGridEl) return;

  // Show results section
  resultsDiv.style.display = 'block';

  // Update stats
  totalHeroesEl.textContent = '40';
  recognizedHeroesEl.textContent = data.totalHeroes;
  unknownHeroesEl.textContent = data.unknownHeroes;

  // Create hero grid (4 rows × 10 columns)
  const gridHTML = data.heroes.map(hero => {
    const isUnknown = hero.heroName === 'Unknown';
    const bgColor = isUnknown ? '#ffcccc' : '#ccffcc';
    const textColor = isUnknown ? '#cc0000' : '#006600';
    const similarityPercent = Math.round(hero.similarity * 100);

    return `
      <div style="background-color: ${bgColor}; padding: 8px; border: 1px solid var(--color-orange); border-radius: 4px; text-align: center;">
        <p style="color: ${textColor}; font-size: 11px; font-weight: 600; margin-bottom: 4px;">${hero.heroName}</p>
        ${hero.rarity ? `<p style="color: #666; font-size: 10px; margin-bottom: 4px;">${hero.rarity}</p>` : ''}
        <p style="color: #999; font-size: 9px;">${similarityPercent}%</p>
      </div>
    `;
  }).join('');

  heroGridEl.innerHTML = `
    <div style="display: grid; grid-template-columns: repeat(10, 1fr); gap: 8px;">
      ${gridHTML}
    </div>
  `;

  // Scroll to results
  resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/**
 * Load user's saved team
 */
async function loadUserTeam() {
  const userInfo = authManager.getUserInfo();
  const username = userInfo ? userInfo.username : null;

  if (!username) return;

  try {
    const response = await fetch(`/api/team/${username}`);
    const result = await response.json();

    if (result.success && result.data) {
      displayTeamResults(result.data);
    }
  } catch (error) {
    console.log('No saved team found');
  }
}
