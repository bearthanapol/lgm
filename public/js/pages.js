// Placeholder page renderers for Home, LGM, Guild, and Team sections
console.log('pages.js loaded successfully');

// Home Section Page
function renderHomePage() {
  return `
    <div class="page-content">
      <h1>News & Updates</h1>
      <p>Stay updated with the latest game news, events, and announcements.</p>
      
      <div id="public-news-list" style="margin-top: 30px;">
        <p style="color: #666666;">Loading news...</p>
      </div>
    </div>
  `;
}

// LGM Section Pages
function renderHeroPage() {
  return `
    <div class="page-content">
      <h1>Hero</h1>
      <p>Manage your hero stats, skills, and progression here.</p>
      
      <div style="margin-top: 30px;">
        <h2 style="color: var(--color-orange); font-size: 24px; margin-bottom: 15px;">Hero Stats</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border: 2px solid var(--color-orange); border-radius: 4px;">
          <p style="margin-bottom: 10px; color: #000000;"><strong>Level:</strong> Coming soon...</p>
          <p style="margin-bottom: 10px; color: #000000;"><strong>Attack:</strong> Coming soon...</p>
          <p style="margin-bottom: 10px; color: #000000;"><strong>Defense:</strong> Coming soon...</p>
          <p style="margin-bottom: 10px; color: #000000;"><strong>HP:</strong> Coming soon...</p>
        </div>
      </div>
      
      <div style="margin-top: 30px;">
        <h2 style="color: var(--color-orange); font-size: 24px; margin-bottom: 15px;">Skills</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border: 2px solid var(--color-orange); border-radius: 4px;">
          <p style="color: #000000;">Skill management features will be available soon.</p>
        </div>
      </div>
    </div>
  `;
}

function renderEquipmentPage() {
  return `
    <div class="page-content">
      <h1>Equipment</h1>
      <p>View and manage your equipment inventory here.</p>
      
      <div style="margin-top: 30px;">
        <h2 style="color: var(--color-orange); font-size: 24px; margin-bottom: 15px;">Equipment Slots</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 20px;">
          <div style="background-color: #f5f5f5; padding: 20px; border: 2px solid var(--color-orange); border-radius: 4px; text-align: center;">
            <h3 style="color: #000000; margin-bottom: 10px;">Weapon</h3>
            <p style="color: #666666;">Empty</p>
          </div>
          <div style="background-color: #f5f5f5; padding: 20px; border: 2px solid var(--color-orange); border-radius: 4px; text-align: center;">
            <h3 style="color: #000000; margin-bottom: 10px;">Armor</h3>
            <p style="color: #666666;">Empty</p>
          </div>
          <div style="background-color: #f5f5f5; padding: 20px; border: 2px solid var(--color-orange); border-radius: 4px; text-align: center;">
            <h3 style="color: #000000; margin-bottom: 10px;">Accessory</h3>
            <p style="color: #666666;">Empty</p>
          </div>
        </div>
      </div>
      
      <div style="margin-top: 30px;">
        <h2 style="color: var(--color-orange); font-size: 24px; margin-bottom: 15px;">Inventory</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border: 2px solid var(--color-orange); border-radius: 4px;">
          <p style="color: #000000;">Equipment inventory will be displayed here.</p>
        </div>
      </div>
    </div>
  `;
}

function renderPetPage() {
  return `
    <div class="page-content">
      <h1>Pet</h1>
      <p>Manage your pets and their abilities here.</p>
      
      <div style="margin-top: 30px;">
        <h2 style="color: var(--color-orange); font-size: 24px; margin-bottom: 15px;">Active Pet</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border: 2px solid var(--color-orange); border-radius: 4px;">
          <p style="margin-bottom: 10px; color: #000000;"><strong>Name:</strong> Coming soon...</p>
          <p style="margin-bottom: 10px; color: #000000;"><strong>Level:</strong> Coming soon...</p>
          <p style="margin-bottom: 10px; color: #000000;"><strong>Type:</strong> Coming soon...</p>
        </div>
      </div>
      
      <div style="margin-top: 30px;">
        <h2 style="color: var(--color-orange); font-size: 24px; margin-bottom: 15px;">Pet Collection</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border: 2px solid var(--color-orange); border-radius: 4px;">
          <p style="color: #000000;">Your pet collection will be displayed here.</p>
        </div>
      </div>
    </div>
  `;
}

// Guild Section Pages
function renderCastleRushPage() {
  return `
    <div class="page-content">
      <h1>Castle Rush</h1>
      <p>Participate in Castle Rush events and view rankings here.</p>
      
      <div style="margin-top: 30px;">
        <h2 style="color: var(--color-orange); font-size: 24px; margin-bottom: 15px;">Current Event</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border: 2px solid var(--color-orange); border-radius: 4px;">
          <p style="margin-bottom: 10px; color: #000000;"><strong>Status:</strong> Coming soon...</p>
          <p style="margin-bottom: 10px; color: #000000;"><strong>Time Remaining:</strong> Coming soon...</p>
          <p style="margin-bottom: 10px; color: #000000;"><strong>Your Score:</strong> Coming soon...</p>
        </div>
      </div>
      
      <div style="margin-top: 30px;">
        <h2 style="color: var(--color-orange); font-size: 24px; margin-bottom: 15px;">Guild Rankings</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border: 2px solid var(--color-orange); border-radius: 4px;">
          <p style="color: #000000;">Guild rankings will be displayed here.</p>
        </div>
      </div>
    </div>
  `;
}

function renderGuildWarPage() {
  return `
    <div class="page-content">
      <h1>Guild War</h1>
      <p>Manage Guild War strategies and view battle results here.</p>
      
      <div style="margin-top: 30px;">
        <h2 style="color: var(--color-orange); font-size: 24px; margin-bottom: 15px;">Battle Status</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border: 2px solid var(--color-orange); border-radius: 4px;">
          <p style="margin-bottom: 10px; color: #000000;"><strong>Current Season:</strong> Coming soon...</p>
          <p style="margin-bottom: 10px; color: #000000;"><strong>Wins:</strong> Coming soon...</p>
          <p style="margin-bottom: 10px; color: #000000;"><strong>Losses:</strong> Coming soon...</p>
        </div>
      </div>
      
      <div style="margin-top: 30px;">
        <h2 style="color: var(--color-orange); font-size: 24px; margin-bottom: 15px;">Battle History</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border: 2px solid var(--color-orange); border-radius: 4px;">
          <p style="color: #000000;">Recent battle results will be displayed here.</p>
        </div>
      </div>
      
      <div style="margin-top: 30px;">
        <h2 style="color: var(--color-orange); font-size: 24px; margin-bottom: 15px;">Strategy</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border: 2px solid var(--color-orange); border-radius: 4px;">
          <p style="color: #000000;">Set your guild war strategy and formations here.</p>
        </div>
      </div>
    </div>
  `;
}

function renderAdventureExpeditionPage() {
  return `
    <div class="page-content">
      <h1>Adventure Expedition</h1>
      <p>Embark on adventure expeditions and collect rewards here.</p>
      
      <div style="margin-top: 30px;">
        <h2 style="color: var(--color-orange); font-size: 24px; margin-bottom: 15px;">Available Expeditions</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px;">
          <div style="background-color: #f5f5f5; padding: 20px; border: 2px solid var(--color-orange); border-radius: 4px;">
            <h3 style="color: #000000; margin-bottom: 10px;">Expedition 1</h3>
            <p style="color: #666666; margin-bottom: 10px;">Difficulty: Coming soon...</p>
            <p style="color: #666666;">Rewards: Coming soon...</p>
          </div>
          <div style="background-color: #f5f5f5; padding: 20px; border: 2px solid var(--color-orange); border-radius: 4px;">
            <h3 style="color: #000000; margin-bottom: 10px;">Expedition 2</h3>
            <p style="color: #666666; margin-bottom: 10px;">Difficulty: Coming soon...</p>
            <p style="color: #666666;">Rewards: Coming soon...</p>
          </div>
          <div style="background-color: #f5f5f5; padding: 20px; border: 2px solid var(--color-orange); border-radius: 4px;">
            <h3 style="color: #000000; margin-bottom: 10px;">Expedition 3</h3>
            <p style="color: #666666; margin-bottom: 10px;">Difficulty: Coming soon...</p>
            <p style="color: #666666;">Rewards: Coming soon...</p>
          </div>
        </div>
      </div>
      
      <div style="margin-top: 30px;">
        <h2 style="color: var(--color-orange); font-size: 24px; margin-bottom: 15px;">Expedition Progress</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border: 2px solid var(--color-orange); border-radius: 4px;">
          <p style="color: #000000;">Your expedition progress and rewards will be displayed here.</p>
        </div>
      </div>
    </div>
  `;
}

// Admin Section Page
function renderAdminPage() {
  return `
    <div class="page-content">
      <h1>Admin Panel</h1>
      <p>Manage heroes, news, and game updates here.</p>
      
      <!-- Admin Tabs -->
      <div style="margin-top: 30px; border-bottom: 2px solid var(--color-orange);">
        <button class="admin-tab active" data-tab="heroes" style="padding: 12px 24px; background: var(--color-orange); color: white; border: none; cursor: pointer; font-size: 16px; font-weight: 600; margin-right: 5px;">Manage Heroes</button>
        <button class="admin-tab" data-tab="news" style="padding: 12px 24px; background: #f5f5f5; color: #000; border: none; cursor: pointer; font-size: 16px; font-weight: 600;">News & Updates</button>
      </div>
      
      <!-- Heroes Tab -->
      <div id="heroes-tab" class="admin-tab-content">
        <div style="margin-top: 30px;">
          <h2 style="color: var(--color-orange); font-size: 24px; margin-bottom: 15px;">Add New Hero</h2>
          <div style="background-color: #f5f5f5; padding: 30px; border: 2px solid var(--color-orange); border-radius: 4px;">
            <form id="add-hero-form">
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                <div>
                  <label style="display: block; margin-bottom: 8px; color: #000000; font-weight: 500;">Hero Name</label>
                  <input type="text" id="hero-name" required style="width: 100%; padding: 12px; border: 2px solid var(--color-orange); border-radius: 4px; font-size: 14px;">
                </div>
                
                <div>
                  <label style="display: block; margin-bottom: 8px; color: #000000; font-weight: 500;">Rarity</label>
                  <select id="hero-rarity" required style="width: 100%; padding: 12px; border: 2px solid var(--color-orange); border-radius: 4px; font-size: 14px;">
                    <option value="">Select Rarity</option>
                    <option value="L2">L2</option>
                    <option value="L1">L1</option>
                    <option value="L0">L0</option>
                    <option value="R">R</option>
                  </select>
                </div>
              </div>
              
              <div style="margin-top: 20px;">
                <label style="display: block; margin-bottom: 8px; color: #000000; font-weight: 500;">Hero Image</label>
                <div style="display: flex; gap: 10px; margin-bottom: 10px;">
                  <input type="file" id="hero-image-file" accept="image/*" style="flex: 1; padding: 12px; border: 2px solid var(--color-orange); border-radius: 4px; font-size: 14px;">
                  <button type="button" id="select-from-db-btn" style="padding: 12px 20px; background-color: #0066cc; color: white; border: none; border-radius: 4px; font-size: 14px; font-weight: 600; cursor: pointer; white-space: nowrap;">Select from Database</button>
                </div>
                <small style="color: #666666; display: block; margin-top: 4px;">Upload a new image or select from existing heroes. Image cropper will open automatically.</small>
                <div id="hero-image-preview" style="margin-top: 10px; display: none;">
                  <img id="hero-preview-img" src="" alt="Preview" style="max-width: 200px; max-height: 200px; border: 2px solid var(--color-orange); border-radius: 4px;">
                </div>
                <input type="hidden" id="hero-image-url">
              </div>
              
              <button type="submit" style="margin-top: 20px; padding: 12px 30px; background-color: var(--color-orange); color: white; border: none; border-radius: 4px; font-size: 16px; font-weight: 600; cursor: pointer;">
                Add Hero
              </button>
            </form>
          </div>
        </div>
        
        <div style="margin-top: 30px;">
          <h2 style="color: var(--color-orange); font-size: 24px; margin-bottom: 15px;">Hero List</h2>
          <div id="hero-list" style="background-color: #f5f5f5; padding: 20px; border: 2px solid var(--color-orange); border-radius: 4px;">
            <p style="color: #666666;">Loading heroes...</p>
          </div>
        </div>
      </div>
      
      <!-- News Tab -->
      <div id="news-tab" class="admin-tab-content" style="display: none;">
        <div style="margin-top: 30px;">
          <h2 style="color: var(--color-orange); font-size: 24px; margin-bottom: 15px;">Create News/Update</h2>
          <div style="background-color: #f5f5f5; padding: 30px; border: 2px solid var(--color-orange); border-radius: 4px;">
            <form id="add-news-form">
              <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 20px;">
                <div>
                  <label style="display: block; margin-bottom: 8px; color: #000000; font-weight: 500;">Title</label>
                  <input type="text" id="news-title" required style="width: 100%; padding: 12px; border: 2px solid var(--color-orange); border-radius: 4px; font-size: 14px;">
                </div>
                
                <div>
                  <label style="display: block; margin-bottom: 8px; color: #000000; font-weight: 500;">Category</label>
                  <select id="news-category" required style="width: 100%; padding: 12px; border: 2px solid var(--color-orange); border-radius: 4px; font-size: 14px;">
                    <option value="general">General</option>
                    <option value="update">Game Update</option>
                    <option value="event">Event</option>
                    <option value="maintenance">Maintenance</option>
                  </select>
                </div>
              </div>
              
              <div style="margin-top: 20px;">
                <label style="display: block; margin-bottom: 8px; color: #000000; font-weight: 500;">Content</label>
                <textarea id="news-content" required rows="8" style="width: 100%; padding: 12px; border: 2px solid var(--color-orange); border-radius: 4px; font-size: 14px; resize: vertical;" placeholder="Write your news content here..."></textarea>
                <small style="color: #666666; display: block; margin-top: 4px;">Supports plain text and line breaks</small>
              </div>
              
              <div style="margin-top: 20px;">
                <label style="display: flex; align-items: center; color: #000000; font-weight: 500; cursor: pointer;">
                  <input type="checkbox" id="news-published" checked style="margin-right: 8px; width: 18px; height: 18px;">
                  Publish immediately
                </label>
              </div>
              
              <button type="submit" style="margin-top: 20px; padding: 12px 30px; background-color: var(--color-orange); color: white; border: none; border-radius: 4px; font-size: 16px; font-weight: 600; cursor: pointer;">
                Create News
              </button>
            </form>
          </div>
        </div>
        
        <div style="margin-top: 30px;">
          <h2 style="color: var(--color-orange); font-size: 24px; margin-bottom: 15px;">News List</h2>
          <div id="news-list" style="background-color: #f5f5f5; padding: 20px; border: 2px solid var(--color-orange); border-radius: 4px;">
            <p style="color: #666666;">Loading news...</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Team Section Page
function renderMyTeamPage() {
  return `
    <div class="page-content">
      <h1>My Team</h1>
      <p>Manage your hero collection with our advanced recognition tool.</p>
      
      <div style="margin-top: 20px; padding: 30px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px; color: white; text-align: center;">
        <h2 style="margin: 0 0 15px 0; font-size: 28px;">🎮 Hero Recognition Tool</h2>
        <p style="margin: 0 0 20px 0; font-size: 16px; opacity: 0.9;">Upload screenshots, manually edit heroes, set star ratings (0-12), and save your team!</p>
        <button onclick="window.location.href='/test-grid-detection.html'" style="display: inline-block; padding: 15px 40px; background: white; color: #667eea; border: none; border-radius: 6px; font-size: 18px; font-weight: 600; transition: all 0.2s; box-shadow: 0 4px 6px rgba(0,0,0,0.1); cursor: pointer;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 12px rgba(0,0,0,0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)'">
          🚀 Open Hero Recognition Tool
        </button>
        <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.3);">
          <p style="margin: 0; font-size: 14px; opacity: 0.8;">✨ Features: OCR Recognition • Manual Entry • Inline Editing • Star Levels • Batch Processing</p>
        </div>
      </div>
      
      <div style="margin-top: 40px;">
        <h2 id="team-heroes-heading">Your Heroes</h2>
        <div id="team-loading" style="text-align: center; padding: 40px; color: #666;">
          <p>Loading your team...</p>
        </div>
        <div id="team-heroes" style="display: none;">
          <div id="team-stats" style="margin-bottom: 20px; padding: 15px; background: #f5f5f5; border-radius: 8px;"></div>
          <div id="team-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 15px;"></div>
        </div>
        <div id="team-empty" style="display: none; text-align: center; padding: 40px; color: #666;">
          <p>No heroes saved yet. Use the Hero Recognition Tool to add heroes to your team!</p>
        </div>
      </div>
    </div>
  `;
}

async function loadUserTeamFromPages() {
  console.log('[pages.js] loadUserTeamFromPages called');
  
  // Wait a bit to ensure DOM is ready
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const loadingDiv = document.getElementById('team-loading');
  const heroesDiv = document.getElementById('team-heroes');
  const emptyDiv = document.getElementById('team-empty');
  
  if (!loadingDiv || !heroesDiv || !emptyDiv) {
    console.error('[pages.js] Required DOM elements not found:', {
      loadingDiv: !!loadingDiv,
      heroesDiv: !!heroesDiv,
      emptyDiv: !!emptyDiv
    });
    return;
  }
  
  try {
    // Get logged-in username and IGN from localStorage
    let username = null;
    let ign = null;
    
    // Try multiple sources for username
    const userInfo = localStorage.getItem('lgm_user_info');
    const token = localStorage.getItem('lgm_token');
    
    if (userInfo) {
      try {
        const user = JSON.parse(userInfo);
        username = user.username;
        ign = user.ign; // Get IGN from user info
        console.log('[pages.js] Using username from lgm_user_info:', username, 'IGN:', ign);
      } catch (e) {
        console.error('[pages.js] Error parsing user info:', e);
      }
    }
    
    // If still no username, try to decode from token
    if (!username && token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        username = payload.username;
        console.log('[pages.js] Using username from token:', username);
      } catch (e) {
        console.error('[pages.js] Error decoding token:', e);
      }
    }
    
    // Last resort: check if there's a username in localStorage directly
    if (!username) {
      username = localStorage.getItem('username') || 'test_user';
      console.log('[pages.js] Using fallback username:', username);
    }
    
    // Update the heading with IGN if available
    const headingElement = document.getElementById('team-heroes-heading');
    if (headingElement && ign) {
      headingElement.textContent = `${ign}'s Heroes`;
    }
    
    console.log('[pages.js] Fetching team for username:', username);
    const response = await fetch(`/api/team/${username}`);
    
    console.log('[pages.js] Response status:', response.status);
    
    if (!response.ok) {
      if (response.status === 404) {
        console.log('[pages.js] No team found for user');
        if (loadingDiv) loadingDiv.style.display = 'none';
        if (emptyDiv) emptyDiv.style.display = 'block';
        return;
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('[pages.js] Team data received:', data);
    
    if (loadingDiv) loadingDiv.style.display = 'none';
    
    if (data.success && data.data && data.data.heroes && data.data.heroes.length > 0) {
      const team = data.data;
      
      // Show stats
      const statsDiv = document.getElementById('team-stats');
      if (statsDiv) {
        statsDiv.innerHTML = `
          <strong>Total Heroes:</strong> ${team.totalHeroes} | 
          <strong>Last Updated:</strong> ${new Date(team.lastUpdated).toLocaleString()}
        `;
      }
      
      // Show heroes in a grid
      const gridDiv = document.getElementById('team-grid');
      if (gridDiv) {
        gridDiv.innerHTML = team.heroes.map((hero, index) => {
          const starLevel = hero.starLevel || 0;
          const position = hero.position || index + 1;
          
          // Get hero image URL
          let imageUrl = hero.matchedImageUrl;
          if (!imageUrl) {
            const heroFileName = hero.heroName.replace(/\s+/g, '%20');
            imageUrl = `https://raw.githubusercontent.com/bearthanapol/lgm/main/images/heroes/${heroFileName}.png`;
          }
          
          // Create fallback SVG placeholder
          const placeholderSvg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23f0f0f0' width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23999' font-size='12'%3E${encodeURIComponent(hero.heroName)}%3C/text%3E%3C/svg%3E`;
          
          // Create star rating HTML
          const starsHTML = createTeamStarRating(position, starLevel);
          
          return `
            <div style="background: white; border: 2px solid #ddd; border-radius: 8px; padding: 10px; text-align: center;">
              <img src="${imageUrl}" 
                   alt="${hero.heroName}" 
                   style="width: 100%; height: 120px; object-fit: contain; margin-bottom: 8px; background: #f9f9f9;"
                   onerror="this.onerror=null; this.src='${placeholderSvg}';"
                   loading="lazy">
              <div style="font-weight: 600; color: #000; margin-bottom: 4px; font-size: 13px;">${hero.heroName}</div>
              <div style="font-size: 11px; color: #666; margin-bottom: 4px;">Pos: ${position}</div>
              <div class="team-star-rating" id="team-stars-${position}" style="margin-top: 8px; display: flex; justify-content: center; gap: 2px;">
                ${starsHTML}
              </div>
            </div>
          `;
        }).join('');
        
        // Attach star click handlers after rendering
        attachTeamStarHandlers();
      }
      
      if (heroesDiv) heroesDiv.style.display = 'block';
    } else {
      console.log('[pages.js] No heroes in team data');
      if (emptyDiv) emptyDiv.style.display = 'block';
    }
  } catch (error) {
    console.error('[pages.js] Error loading team:', error);
    const loadingDiv = document.getElementById('team-loading');
    if (loadingDiv) {
      loadingDiv.innerHTML = '<p style="color: #d32f2f;">Error loading team: ' + error.message + '</p>';
    }
  }
}


/**
 * Create star rating HTML for team page
 */
function createTeamStarRating(position, initialLevel) {
  let html = '';
  
  // Calculate star colors based on level
  let redCount = 0;
  let blueCount = 0;
  let yellowCount = 6;
  
  if (initialLevel === 0) {
    yellowCount = 6;
  } else if (initialLevel <= 6) {
    blueCount = initialLevel;
    yellowCount = 6 - initialLevel;
  } else {
    redCount = initialLevel - 6;
    blueCount = 6 - redCount;
    yellowCount = 0;
  }
  
  // Create stars with appropriate colors
  for (let i = 0; i < 6; i++) {
    let colorClass = 'yellow';
    if (i < redCount) {
      colorClass = 'red';
    } else if (i < redCount + blueCount) {
      colorClass = 'blue';
    }
    
    html += `<span class="team-star ${colorClass}" data-position="${position}" data-index="${i}">★</span>`;
  }
  
  return html;
}

/**
 * Attach click handlers to team stars
 */
function attachTeamStarHandlers() {
  document.querySelectorAll('.team-star').forEach(star => {
    star.addEventListener('click', function() {
      const position = parseInt(this.dataset.position);
      cycleTeamStarLevel(position);
    });
  });
}

/**
 * Cycle through star levels (0 → 1 → 2 → ... → 12 → 0)
 */
function cycleTeamStarLevel(position) {
  const stars = document.querySelectorAll(`#team-stars-${position} .team-star`);
  
  // Get current level from star colors
  let currentLevel = 0;
  let redCount = 0;
  let blueCount = 0;
  
  stars.forEach(star => {
    if (star.classList.contains('red')) redCount++;
    else if (star.classList.contains('blue')) blueCount++;
  });
  
  // Calculate current level
  if (redCount > 0) {
    currentLevel = 6 + redCount;
  } else if (blueCount > 0) {
    currentLevel = blueCount;
  } else {
    currentLevel = 0;
  }
  
  // Cycle to next level (0 → 1 → 2 → ... → 12 → 0)
  let nextLevel = (currentLevel + 1) % 13;
  
  // Apply new level
  setTeamStarLevel(position, nextLevel);
  
  // Save to database
  saveTeamStarLevel(position, nextLevel);
  
  console.log(`Position ${position}: Level ${currentLevel} → ${nextLevel}`);
}

/**
 * Set star level visually
 */
function setTeamStarLevel(position, level) {
  const stars = document.querySelectorAll(`#team-stars-${position} .team-star`);
  
  // Calculate star colors based on level
  let redCount = 0;
  let blueCount = 0;
  let yellowCount = 6;
  
  if (level === 0) {
    yellowCount = 6;
  } else if (level <= 6) {
    blueCount = level;
    yellowCount = 6 - level;
  } else {
    redCount = level - 6;
    blueCount = 6 - redCount;
    yellowCount = 0;
  }
  
  // Apply colors
  let index = 0;
  stars.forEach((star) => {
    star.classList.remove('yellow', 'blue', 'red');
    
    if (index < redCount) {
      star.classList.add('red');
    } else if (index < redCount + blueCount) {
      star.classList.add('blue');
    } else {
      star.classList.add('yellow');
    }
    index++;
  });
}

/**
 * Save star level to database
 */
async function saveTeamStarLevel(position, level) {
  try {
    // Get username
    let username = null;
    const userInfo = localStorage.getItem('lgm_user_info');
    const token = localStorage.getItem('lgm_token');
    
    if (userInfo) {
      try {
        const user = JSON.parse(userInfo);
        username = user.username;
      } catch (e) {
        console.error('Error parsing user info:', e);
      }
    }
    
    if (!username && token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        username = payload.username;
      } catch (e) {
        console.error('Error decoding token:', e);
      }
    }
    
    if (!username) {
      username = localStorage.getItem('username') || 'test_user';
    }
    
    // Get current team data
    const response = await fetch(`/api/team/${username}`);
    if (!response.ok) {
      throw new Error('Failed to fetch team data');
    }
    
    const data = await response.json();
    if (!data.success || !data.data || !data.data.heroes) {
      throw new Error('Invalid team data');
    }
    
    // Update the star level for the specific hero
    const heroes = data.data.heroes.map(hero => {
      if (hero.position === position) {
        return { ...hero, starLevel: level };
      }
      return hero;
    });
    
    // Save updated team
    const saveResponse = await fetch('/api/team/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        heroes: heroes
      })
    });
    
    const saveData = await saveResponse.json();
    
    if (saveData.success) {
      console.log(`Saved star level ${level} for position ${position}`);
    } else {
      console.error('Failed to save star level:', saveData.error);
    }
  } catch (error) {
    console.error('Error saving star level:', error);
  }
}
