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
function renderGuildInfoPage() {
  return `
    <div class="page-content">
      <h1>Guild Information</h1>
      <p>Manage your guild membership and view guild details.</p>
      
      <div id="guild-info-container" style="margin-top: 30px;">
        <div id="guild-loading" style="text-align: center; padding: 40px; color: #666;">
          <p>Loading guild information...</p>
        </div>
        
        <div id="guild-member-view" style="display: none;">
          <div style="background-color: var(--color-dark-gray); padding: 30px; border: 2px solid var(--color-orange); border-radius: 8px;">
            <h2 style="color: var(--color-orange); margin-bottom: 20px;">Your Guild</h2>
            <div id="guild-details">
              <!-- Guild details will be loaded here -->
            </div>
            <button id="leave-guild-btn" style="margin-top: 20px; padding: 12px 24px; background: #d32f2f; color: white; border: none; border-radius: 4px; font-size: 14px; font-weight: 600; cursor: pointer;">
              Leave Guild
            </button>
          </div>
        </div>
        
        <div id="guild-no-member-view" style="display: none;">
          <div style="background-color: var(--color-dark-gray); padding: 30px; border: 2px solid var(--color-orange); border-radius: 8px; text-align: center;">
            <h2 style="color: var(--color-orange); margin-bottom: 20px;">You are not in a guild</h2>
            <p style="margin-bottom: 30px; color: var(--color-light-gray);">Create a new guild or join an existing one to get started!</p>
            
            <div style="display: flex; gap: 20px; justify-content: center;">
              <button id="create-guild-btn" style="padding: 15px 30px; background: var(--color-orange); color: white; border: none; border-radius: 4px; font-size: 16px; font-weight: 600; cursor: pointer;">
                Create Guild
              </button>
              <button id="join-guild-btn" style="padding: 15px 30px; background: #2196F3; color: white; border: none; border-radius: 4px; font-size: 16px; font-weight: 600; cursor: pointer;">
                Join Guild
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

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
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
        <div>
          <h1 style="margin: 0 0 5px 0;">Guild War - Enemy Teams</h1>
          <p style="margin: 0;">View and manage all 115 enemy teams for Guild War.</p>
        </div>
        <button 
          onclick="resetGuildWar()"
          style="padding: 10px 20px; background: #d32f2f; color: white; border: none; border-radius: 4px; font-size: 14px; font-weight: bold; cursor: pointer; white-space: nowrap;"
          title="Reset all teams (clear defeated status and star levels)"
        >
          🔄 Reset Guild War
        </button>
      </div>
      
      <div style="margin-top: 20px; margin-bottom: 20px;">
        <input 
          type="text" 
          id="team-search" 
          placeholder="Search by team number or hero name..." 
          style="width: 100%; max-width: 400px; padding: 10px; border: 2px solid var(--color-orange); border-radius: 4px; background: var(--color-dark-gray); color: var(--color-white);"
        />
      </div>
      
      <div id="guild-war-loading" style="text-align: center; padding: 40px; color: var(--color-light-gray);">
        <p>Loading enemy teams...</p>
      </div>
      
      <div id="guild-war-content" style="display: none;">
        <!-- Outer Bailey Sections (Teams 1-50) -->
        <div style="background: var(--color-dark-gray); border: 2px solid var(--color-orange); border-radius: 8px; padding: 15px; margin-bottom: 20px;">
          <h2 style="color: var(--color-orange); margin: 0 0 15px 0; font-size: 20px;">Outer Bailey 1 (Teams 1-10)</h2>
          <div id="outer-bailey-1-teams"></div>
        </div>

        <div style="background: var(--color-dark-gray); border: 2px solid var(--color-orange); border-radius: 8px; padding: 15px; margin-bottom: 20px;">
          <h2 style="color: var(--color-orange); margin: 0 0 15px 0; font-size: 20px;">Outer Bailey 2 (Teams 11-20)</h2>
          <div id="outer-bailey-2-teams"></div>
        </div>

        <div style="background: var(--color-dark-gray); border: 2px solid var(--color-orange); border-radius: 8px; padding: 15px; margin-bottom: 20px;">
          <h2 style="color: var(--color-orange); margin: 0 0 15px 0; font-size: 20px;">Outer Bailey 3 (Teams 21-30)</h2>
          <div id="outer-bailey-3-teams"></div>
        </div>

        <div style="background: var(--color-dark-gray); border: 2px solid var(--color-orange); border-radius: 8px; padding: 15px; margin-bottom: 20px;">
          <h2 style="color: var(--color-orange); margin: 0 0 15px 0; font-size: 20px;">Outer Bailey 4 (Teams 31-40)</h2>
          <div id="outer-bailey-4-teams"></div>
        </div>

        <div style="background: var(--color-dark-gray); border: 2px solid var(--color-orange); border-radius: 8px; padding: 15px; margin-bottom: 20px;">
          <h2 style="color: var(--color-orange); margin: 0 0 15px 0; font-size: 20px;">Outer Bailey 5 (Teams 41-50)</h2>
          <div id="outer-bailey-5-teams"></div>
        </div>
        
        <!-- Inner Citadel Sections (Teams 51-95) -->
        <div style="background: var(--color-dark-gray); border: 2px solid var(--color-orange); border-radius: 8px; padding: 15px; margin-bottom: 20px;">
          <h2 style="color: var(--color-orange); margin: 0 0 15px 0; font-size: 20px;">Inner Citadel 1 (Teams 51-65)</h2>
          <div id="inner-citadel-1-teams"></div>
        </div>

        <div style="background: var(--color-dark-gray); border: 2px solid var(--color-orange); border-radius: 8px; padding: 15px; margin-bottom: 20px;">
          <h2 style="color: var(--color-orange); margin: 0 0 15px 0; font-size: 20px;">Inner Citadel 2 (Teams 66-80)</h2>
          <div id="inner-citadel-2-teams"></div>
        </div>

        <div style="background: var(--color-dark-gray); border: 2px solid var(--color-orange); border-radius: 8px; padding: 15px; margin-bottom: 20px;">
          <h2 style="color: var(--color-orange); margin: 0 0 15px 0; font-size: 20px;">Inner Citadel 3 (Teams 81-95)</h2>
          <div id="inner-citadel-3-teams"></div>
        </div>
        
        <!-- Main Castle Section (Teams 96-115) -->
        <div style="background: var(--color-dark-gray); border: 2px solid var(--color-orange); border-radius: 8px; padding: 15px; margin-bottom: 20px;">
          <h2 style="color: var(--color-orange); margin: 0 0 15px 0; font-size: 20px;">Main Castle (Teams 96-115)</h2>
          <div id="main-castle-teams"></div>
        </div>
      </div>
      
      <!-- Hero Selector Modal -->
      <div id="hero-selector-modal" style="display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.8); z-index: 10001; overflow-y: auto;">
        <div style="max-width: 1000px; margin: 50px auto; background: var(--color-dark-gray); border: 2px solid var(--color-orange); border-radius: 8px; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
            <h2 style="color: var(--color-orange); margin: 0;">Select Hero</h2>
            <button onclick="closeHeroSelector()" style="padding: 8px 16px; background: #d32f2f; color: white; border: none; border-radius: 4px; cursor: pointer;">Close</button>
          </div>
          
          <input 
            type="text" 
            id="hero-selector-search" 
            placeholder="Search heroes..." 
            style="width: 100%; padding: 10px; margin-bottom: 20px; border: 2px solid var(--color-orange); border-radius: 4px; background: #1a1a1a; color: var(--color-white);"
          />
          
          <div id="hero-selector-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 15px; max-height: 600px; overflow-y: auto;">
            <!-- Heroes will be loaded here -->
          </div>
        </div>
      </div>

      <!-- Find Team Modal -->
      <div id="find-team-modal" style="display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.8); z-index: 10000; overflow-y: auto;">
        <div style="max-width: 900px; margin: 50px auto; background: var(--color-dark-gray); border: 2px solid var(--color-orange); border-radius: 8px; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
            <h2 style="color: var(--color-orange); margin: 0;">Find Team to Fight</h2>
            <button onclick="closeFindTeamModal()" style="padding: 8px 16px; background: #d32f2f; color: white; border: none; border-radius: 4px; cursor: pointer;">Close</button>
          </div>
          
          <!-- Previous Battles Section -->
          <div id="battle-history-section" style="margin-bottom: 25px; padding: 15px; background: #1a1a1a; border-radius: 8px; border: 1px solid #333;">
            <h3 style="color: #4FC3F7; margin: 0 0 15px 0; font-size: 16px;">📜 Previous Battles</h3>
            <div id="battle-history-list">
              <p style="color: #888; text-align: center;">Loading battle history...</p>
            </div>
          </div>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: var(--color-white); margin-bottom: 10px;">Select Your 3 Heroes:</h3>
            <div style="display: flex; gap: 10px; justify-content: center; margin-bottom: 20px;">
              <!-- Slot 1 -->
              <div id="find-team-slot-0" onclick="selectFinderHero(0)" style="width: 100px; height: 100px; border: 2px dashed #666; border-radius: 8px; display: flex; align-items: center; justify-content: center; cursor: pointer; background: #1a1a1a;">
                <span style="color: #666;">+ Hero 1</span>
              </div>
              <!-- Slot 2 -->
              <div id="find-team-slot-1" onclick="selectFinderHero(1)" style="width: 100px; height: 100px; border: 2px dashed #666; border-radius: 8px; display: flex; align-items: center; justify-content: center; cursor: pointer; background: #1a1a1a;">
                <span style="color: #666;">+ Hero 2</span>
              </div>
              <!-- Slot 3 -->
              <div id="find-team-slot-2" onclick="selectFinderHero(2)" style="width: 100px; height: 100px; border: 2px dashed #666; border-radius: 8px; display: flex; align-items: center; justify-content: center; cursor: pointer; background: #1a1a1a;">
                <span style="color: #666;">+ Hero 3</span>
              </div>
            </div>
            
            <button onclick="searchForTeam()" style="width: 100%; padding: 12px; background: var(--color-orange); color: white; border: none; border-radius: 4px; font-size: 16px; font-weight: bold; cursor: pointer;">
              Find Members with These Heroes
            </button>
          </div>
          
          <div id="find-team-results" style="display: none;">
            <h3 style="color: var(--color-white); margin-bottom: 10px;">Available Members:</h3>
            <div id="find-team-results-list" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 10px;">
              <!-- Results will be shown here -->
            </div>
          </div>
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
      <p>Manage your hero collection with the Hero Recognition Tool.</p>
        <div style="margin-top: 20px; padding: 30px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px; color: white; text-align: center;">
          <h2 style="margin: 0 0 15px 0; font-size: 28px;">🎮 Hero Recognition Tool</h2>
          <p style="margin: 0 0 20px 0; font-size: 16px; opacity: 0.9;">Upload screenshots, manually edit heroes, set star ratings (0-12), and save your team!</p>
          
          <div style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap;">
            <label for="team-upload" class="action-button" style="cursor: pointer; display: inline-block;">
              📸 Upload Screenshot
            </label>
            <input type="file" id="team-upload" accept="image/*" style="display: none;" onchange="handleTeamUpload(this)">
            
            <button onclick="saveUserTeam()" class="action-button" style="background: #4CAF50;">
              💾 Save Team
            </button>
          </div>
          
          <div style="margin-top: 15px; font-size: 14px; opacity: 0.8;">
            <label style="display: inline-flex; align-items: center; cursor: pointer;">
              <input type="checkbox" id="use-ocr-checkbox" checked style="margin-right: 8px;">
              Use OCR (Better Accuracy)
            </label>
          </div>
        </div>

        <div id="team-loading" style="text-align: center; margin-top: 40px;">
          <div class="spinner"></div>
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

// GWar Noti Page
function renderGWarNotiPage() {
  return `
    <div class="page-content">
      <h1>Guild War Notification</h1>
      <p>View your current Guild War target assignment.</p>
      
      <div id="gwar-noti-content" style="margin-top: 30px;">
        <p style="color: #888; text-align: center;">Loading notification...</p>
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
          const ring = hero.ring || '';
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
              <div style="margin-bottom: 8px;">
                <input type="text" 
                       id="hero-name-${position}" 
                       value="${hero.heroName}" 
                       style="width: 100%; padding: 4px; border: 1px solid #ddd; border-radius: 4px; text-align: center; font-weight: 600; font-size: 13px;"
                       placeholder="Hero Name">
              </div>
              <div class="team-star-rating" id="team-stars-${position}" style="margin-top: 8px; display: flex; justify-content: center; gap: 2px;">
                ${starsHTML}
              </div>
              <div style="margin-top: 8px;">
                <select id="hero-ring-${position}" 
                        style="width: 100%; padding: 6px; border: 1px solid #ddd; border-radius: 4px; font-size: 12px; background: white;">
                  <option value="" ${ring === '' ? 'selected' : ''}>No Ring</option>
                  <option value="Immortality" ${ring === 'Immortality' ? 'selected' : ''}>Immortality</option>
                  <option value="Revive" ${ring === 'Revive' ? 'selected' : ''}>Revive</option>
                  <option value="Barrier" ${ring === 'Barrier' ? 'selected' : ''}>Barrier</option>
                </select>
              </div>
              <button onclick="saveHeroEdit(${position})" 
                      style="margin-top: 8px; padding: 6px 12px; background: var(--color-orange); color: white; border: none; border-radius: 4px; font-size: 12px; font-weight: 600; cursor: pointer; width: 100%;">
                Save
              </button>
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
    star.addEventListener('click', function () {
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

    // Update the star level for the specific hero (preserve ring value)
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

    if (!saveData.success) {
      console.error('Failed to save star level:', saveData.error);
    }
  } catch (error) {
    console.error('Error saving star level:', error);
  }
}

/**
 * Save hero edit (name and star level)
 */
async function saveHeroEdit(position) {
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

    // Get the new hero name from input
    const nameInput = document.getElementById(`hero-name-${position}`);
    if (!nameInput) {
      console.error('Hero name input not found for position:', position);
      return;
    }
    const newHeroName = nameInput.value.trim();

    if (!newHeroName) {
      alert('Hero name cannot be empty!');
      return;
    }

    // Get ring selection
    const ringSelect = document.getElementById(`hero-ring-${position}`);
    const selectedRing = ringSelect ? ringSelect.value : '';

    // Get current star level from the stars
    const stars = document.querySelectorAll(`#team-stars-${position} .team-star`);
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

    // Get current team data
    const response = await fetch(`/api/team/${username}`);
    if (!response.ok) {
      throw new Error('Failed to fetch team data');
    }

    const data = await response.json();
    if (!data.success || !data.data || !data.data.heroes) {
      throw new Error('Invalid team data');
    }

    // Update the hero name, star level, and ring for the specific hero
    const heroes = data.data.heroes.map(hero => {
      if (hero.position === position) {
        return {
          ...hero,
          heroName: newHeroName,
          starLevel: currentLevel,
          ring: selectedRing
        };
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
      // Show success feedback
      const button = document.querySelector(`button[onclick="saveHeroEdit(${position})"]`);
      if (button) {
        const originalText = button.textContent;
        button.textContent = '✓ Saved!';
        button.style.background = '#4caf50';

        setTimeout(() => {
          button.textContent = originalText;
          button.style.background = 'var(--color-orange)';
        }, 2000);
      }


    } else {
      alert('Failed to save: ' + (saveData.error || 'Unknown error'));
      console.error('Failed to save hero edit:', saveData.error);
    }
  } catch (error) {
    alert('Error saving hero: ' + error.message);
    console.error('Error saving hero edit:', error);
  }
}

/**
 * Load guild information for the current user
 */
async function loadGuildInfo() {
  const loadingDiv = document.getElementById('guild-loading');
  const memberView = document.getElementById('guild-member-view');
  const noMemberView = document.getElementById('guild-no-member-view');

  if (!loadingDiv || !memberView || !noMemberView) {
    console.error('Guild info elements not found');
    return;
  }

  try {
    // Get username
    let username = null;
    const userInfo = localStorage.getItem('lgm_user_info');
    const token = localStorage.getItem('lgm_token');

    if (userInfo) {
      const user = JSON.parse(userInfo);
      username = user.username;
    } else if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      username = payload.username;
    }

    if (!username) {
      throw new Error('User not logged in');
    }

    // Fetch all guilds and check if user is a member
    const response = await fetch('/api/guilds');
    if (!response.ok) {
      throw new Error('Failed to fetch guilds');
    }

    const data = await response.json();
    const userGuild = data.data.find(guild =>
      guild.guildMemberNames && guild.guildMemberNames.includes(username)
    );

    loadingDiv.style.display = 'none';

    if (userGuild) {
      // User is in a guild
      const isGuildMaster = userGuild.guildMasterName === username;
      const assistants = userGuild.guildAssistants || [];
      
      // Generate member list with assistant checkboxes (only for guild master)
      const memberListHTML = userGuild.guildMemberNames ? userGuild.guildMemberNames.map(member => {
        const isAssistant = assistants.includes(member);
        const isMaster = member === userGuild.guildMasterName;
        
        if (isGuildMaster && !isMaster) {
          // Show checkbox for guild master to assign assistants
          return `
            <li style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
              <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                <input 
                  type="checkbox" 
                  ${isAssistant ? 'checked' : ''} 
                  onchange="toggleAssistant('${userGuild._id}', '${member}', this.checked)"
                  style="cursor: pointer;"
                />
                <span>${member}</span>
                ${isAssistant ? '<span style="color: #4FC3F7; font-size: 12px;">(Assistant)</span>' : ''}
              </label>
            </li>
          `;
        } else {
          // Regular member display
          return `
            <li style="margin-bottom: 8px;">
              ${member}
              ${isMaster ? '<span style="color: var(--color-orange); font-size: 12px;">(Master)</span>' : ''}
              ${isAssistant ? '<span style="color: #4FC3F7; font-size: 12px;">(Assistant)</span>' : ''}
            </li>
          `;
        }
      }).join('') : '<li>No members</li>';
      
      const detailsDiv = document.getElementById('guild-details');
      detailsDiv.innerHTML = `
        <div style="margin-bottom: 15px;">
          <strong style="color: var(--color-orange);">Guild Name:</strong>
          <span style="color: var(--color-white); font-size: 24px; display: block; margin-top: 5px;">${userGuild.guildName}</span>
        </div>
        <div style="margin-bottom: 15px;">
          <strong style="color: var(--color-orange);">Guild Master:</strong>
          <span style="color: var(--color-white);">${userGuild.guildMasterName}</span>
        </div>
        <div style="margin-bottom: 15px;">
          <strong style="color: var(--color-orange);">Members:</strong>
          <span style="color: var(--color-white);">${userGuild.guildMemberNames ? userGuild.guildMemberNames.length : 0}</span>
        </div>
        <div>
          <strong style="color: var(--color-orange);">Member List:</strong>
          ${isGuildMaster ? '<p style="color: #4FC3F7; font-size: 13px; margin-top: 5px; margin-bottom: 10px;">✓ Check members to assign as assistants</p>' : ''}
          <ul style="margin-top: 10px; padding-left: 20px; color: var(--color-white); list-style: none;">
            ${memberListHTML}
          </ul>
        </div>
      `;

      memberView.style.display = 'block';

      // Attach leave guild handler
      document.getElementById('leave-guild-btn').addEventListener('click', () => leaveGuild(userGuild._id, username));
    } else {
      // User is not in a guild
      noMemberView.style.display = 'block';

      // Attach create and join handlers
      document.getElementById('create-guild-btn').addEventListener('click', showCreateGuildDialog);
      document.getElementById('join-guild-btn').addEventListener('click', showJoinGuildDialog);
    }
  } catch (error) {
    console.error('Error loading guild info:', error);
    loadingDiv.innerHTML = `<p style="color: #d32f2f;">Error: ${error.message}</p>`;
  }
}

/**
 * Show create guild dialog
 */
function showCreateGuildDialog() {
  const guildName = prompt('Enter Guild Name:');
  if (!guildName || !guildName.trim()) {
    return;
  }

  const guildPassword = prompt('Enter Guild Password:');
  if (!guildPassword || !guildPassword.trim()) {
    return;
  }

  createGuild(guildName.trim(), guildPassword.trim());
}

/**
 * Create a new guild
 */
async function createGuild(guildName, guildPassword) {
  try {
    // Get username
    let username = null;
    const userInfo = localStorage.getItem('lgm_user_info');
    const token = localStorage.getItem('lgm_token');

    if (userInfo) {
      const user = JSON.parse(userInfo);
      username = user.username;
    } else if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      username = payload.username;
    }

    if (!username) {
      alert('You must be logged in to create a guild');
      return;
    }

    const response = await fetch('/api/guilds', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        guildName,
        guildPassword,
        guildMasterName: username,
        guildMemberNames: [username]
      })
    });

    const data = await response.json();

    if (data.success) {
      alert('Guild created successfully!');
      await refreshUserRole(); // Refresh role after creating guild (will reload page)
    } else {
      alert('Failed to create guild: ' + data.error);
    }
  } catch (error) {
    console.error('Error creating guild:', error);
    alert('Error creating guild: ' + error.message);
  }
}

/**
 * Show join guild dialog
 */
function showJoinGuildDialog() {
  const guildName = prompt('Enter Guild Name:');
  if (!guildName || !guildName.trim()) {
    return;
  }

  const guildPassword = prompt('Enter Guild Password:');
  if (!guildPassword || !guildPassword.trim()) {
    return;
  }

  joinGuild(guildName.trim(), guildPassword.trim());
}

/**
 * Join a guild
 */
async function joinGuild(guildName, guildPassword) {
  try {
    // Get username
    let username = null;
    const userInfo = localStorage.getItem('lgm_user_info');
    const token = localStorage.getItem('lgm_token');

    if (userInfo) {
      const user = JSON.parse(userInfo);
      username = user.username;
    } else if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      username = payload.username;
    }

    if (!username) {
      alert('You must be logged in to join a guild');
      return;
    }

    // First verify the guild password
    const verifyResponse = await fetch('/api/guilds/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        guildName,
        guildPassword
      })
    });

    const verifyData = await verifyResponse.json();

    if (!verifyData.success) {
      alert('Invalid guild name or password');
      return;
    }

    // Add user to guild
    const addResponse = await fetch(`/api/guilds/${verifyData.data._id}/members`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        memberName: username
      })
    });

    const addData = await addResponse.json();

    if (addData.success) {
      alert('Successfully joined the guild!');
      await refreshUserRole(); // Refresh role after joining guild (will reload page)
    } else {
      alert('Failed to join guild: ' + addData.error);
    }
  } catch (error) {
    console.error('Error joining guild:', error);
    alert('Error joining guild: ' + error.message);
  }
}

/**
 * Leave guild
 */
async function leaveGuild(guildId, username) {
  if (!confirm('Are you sure you want to leave this guild?')) {
    return;
  }

  try {
    const response = await fetch(`/api/guilds/${guildId}/members/${username}`, {
      method: 'DELETE'
    });

    const data = await response.json();

    if (data.success) {
      alert('You have left the guild');
      await refreshUserRole(); // Refresh role after leaving (will reload page)
    } else {
      alert('Failed to leave guild: ' + data.error);
    }
  } catch (error) {
    console.error('Error leaving guild:', error);
    alert('Error leaving guild: ' + error.message);
  }
}

/**
 * Toggle assistant status for a guild member
 */
async function toggleAssistant(guildId, memberName, isAssistant) {
  try {
    const method = isAssistant ? 'POST' : 'DELETE';
    const url = isAssistant 
      ? `/api/guilds/${guildId}/assistants`
      : `/api/guilds/${guildId}/assistants/${memberName}`;
    
    const options = {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      }
    };
    
    if (isAssistant) {
      options.body = JSON.stringify({ assistantName: memberName });
    }
    
    const response = await fetch(url, options);
    const data = await response.json();
    
    if (data.success) {
      if (typeof toastManager !== 'undefined') {
        toastManager.success(isAssistant ? `${memberName} is now an assistant` : `${memberName} is no longer an assistant`);
      }
      // Reload guild info to refresh the display
      await loadGuildInfo();
    } else {
      if (typeof toastManager !== 'undefined') {
        toastManager.error(data.error || 'Failed to update assistant status');
      }
      // Reload to reset checkbox state
      await loadGuildInfo();
    }
  } catch (error) {
    console.error('Error toggling assistant:', error);
    if (typeof toastManager !== 'undefined') {
      toastManager.error('Error updating assistant status');
    }
    // Reload to reset checkbox state
    await loadGuildInfo();
  }
}

/**
 * Refresh user role from server
 */
async function refreshUserRole() {
  try {
    const token = localStorage.getItem('lgm_auth_token');
    if (!token) return;
    
    const response = await fetch('/api/auth/refresh-role', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    
    const data = await response.json();
    
    if (data.success) {
      // Update token and user info in localStorage
      localStorage.setItem('lgm_auth_token', data.token);
      localStorage.setItem('lgm_user_info', JSON.stringify(data.user));
      
      // Reload the page to update UI with new role
      window.location.reload();
    }
  } catch (error) {
    console.error('Error refreshing user role:', error);
  }
}

/**
 * Check if user can edit Guild War (gmaster, gassist, or admin)
 */
function canEditGuildWar() {
  const userInfo = localStorage.getItem('lgm_user_info');
  if (!userInfo) return false;
  
  try {
    const user = JSON.parse(userInfo);
    const role = user.role || 'gmember';
    return role === 'gmaster' || role === 'gassist' || role === 'admin';
  } catch (e) {
    return false;
  }
}

/**
 * Load and display all Guild War enemy teams
 */
async function loadGuildWarTeams() {
  const loadingDiv = document.getElementById('guild-war-loading');
  const contentDiv = document.getElementById('guild-war-content');

  if (!loadingDiv || !contentDiv) {
    console.error('Guild War elements not found');
    return;
  }

  try {
    const response = await fetch('/api/guildwar');
    if (!response.ok) {
      throw new Error('Failed to fetch enemy teams');
    }

    const data = await response.json();
    const fetchedTeams = data.data || [];

    // Create a map of existing teams for easy lookup
    const teamMap = new Map();
    fetchedTeams.forEach(team => {
      if (team.teamNumber) {
        teamMap.set(team.teamNumber, team);
      }
    });

    // Generate full list of 115 teams, using existing data where available
    let teams = [];
    for (let i = 1; i <= 115; i++) {
      if (teamMap.has(i)) {
        teams.push(teamMap.get(i));
      } else {
        teams.push({
          teamNumber: i,
          heroes: [],
          _id: null
        });
      }
    }

    // Store teams globally for search
    window.allGuildWarTeams = teams;

    renderGuildWarTeams(teams);

    // Setup search listener
    const searchInput = document.getElementById('team-search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        filterGuildWarTeams(e.target.value, teams);
      });
    }

  } catch (error) {
    console.error('Error loading guild war teams:', error);
    loadingDiv.innerHTML = `<p style="color: #d32f2f;">Error: ${error.message}</p>`;
  }
}



/**
 * Render all Guild War teams in categorized grids
 */
function renderGuildWarTeams(teams) {
  const outerBailey1Div = document.getElementById('outer-bailey-1-teams');
  const outerBailey2Div = document.getElementById('outer-bailey-2-teams');
  const outerBailey3Div = document.getElementById('outer-bailey-3-teams');
  const outerBailey4Div = document.getElementById('outer-bailey-4-teams');
  const outerBailey5Div = document.getElementById('outer-bailey-5-teams');
  const innerCitadel1Div = document.getElementById('inner-citadel-1-teams');
  const innerCitadel2Div = document.getElementById('inner-citadel-2-teams');
  const innerCitadel3Div = document.getElementById('inner-citadel-3-teams');
  const mainCastleDiv = document.getElementById('main-castle-teams');

  // Filter teams by range
  const outerBailey1Teams = teams.filter(t => t.teamNumber >= 1 && t.teamNumber <= 10);
  const outerBailey2Teams = teams.filter(t => t.teamNumber >= 11 && t.teamNumber <= 20);
  const outerBailey3Teams = teams.filter(t => t.teamNumber >= 21 && t.teamNumber <= 30);
  const outerBailey4Teams = teams.filter(t => t.teamNumber >= 31 && t.teamNumber <= 40);
  const outerBailey5Teams = teams.filter(t => t.teamNumber >= 41 && t.teamNumber <= 50);

  const innerCitadel1Teams = teams.filter(t => t.teamNumber >= 51 && t.teamNumber <= 65);
  const innerCitadel2Teams = teams.filter(t => t.teamNumber >= 66 && t.teamNumber <= 80);
  const innerCitadel3Teams = teams.filter(t => t.teamNumber >= 81 && t.teamNumber <= 95);

  const mainCastleTeams = teams.filter(t => t.teamNumber >= 96 && t.teamNumber <= 115);

  // Grid style
  // Grid style
  const gridStyle = 'display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 10px;';

  if (outerBailey1Div) {
    outerBailey1Div.innerHTML = `
      <div style="${gridStyle}">
        ${outerBailey1Teams.map(team => renderGuildWarTeamCard(team)).join('')}
      </div>
    `;
  }

  if (outerBailey2Div) {
    outerBailey2Div.innerHTML = `
      <div style="${gridStyle}">
        ${outerBailey2Teams.map(team => renderGuildWarTeamCard(team)).join('')}
      </div>
    `;
  }

  if (outerBailey3Div) {
    outerBailey3Div.innerHTML = `
      <div style="${gridStyle}">
        ${outerBailey3Teams.map(team => renderGuildWarTeamCard(team)).join('')}
      </div>
    `;
  }

  if (outerBailey4Div) {
    outerBailey4Div.innerHTML = `
      <div style="${gridStyle}">
        ${outerBailey4Teams.map(team => renderGuildWarTeamCard(team)).join('')}
      </div>
    `;
  }

  if (outerBailey5Div) {
    outerBailey5Div.innerHTML = `
      <div style="${gridStyle}">
        ${outerBailey5Teams.map(team => renderGuildWarTeamCard(team)).join('')}
      </div>
    `;
  }

  if (innerCitadel1Div) {
    innerCitadel1Div.innerHTML = `
      <div style="${gridStyle}">
        ${innerCitadel1Teams.map(team => renderGuildWarTeamCard(team)).join('')}
      </div>
    `;
  }

  if (innerCitadel2Div) {
    innerCitadel2Div.innerHTML = `
      <div style="${gridStyle}">
        ${innerCitadel2Teams.map(team => renderGuildWarTeamCard(team)).join('')}
      </div>
    `;
  }

  if (innerCitadel3Div) {
    innerCitadel3Div.innerHTML = `
      <div style="${gridStyle}">
        ${innerCitadel3Teams.map(team => renderGuildWarTeamCard(team)).join('')}
      </div>
    `;
  }

  if (mainCastleDiv) {
    mainCastleDiv.innerHTML = `
      <div style="${gridStyle}">
        ${mainCastleTeams.map(team => renderGuildWarTeamCard(team)).join('')}
      </div>
    `;
  }

  // Show content, hide loading
  document.getElementById('guild-war-loading').style.display = 'none';
  document.getElementById('guild-war-content').style.display = 'block';
  
  // Attach star click handlers after rendering
  setTimeout(() => {
    attachGuildWarStarHandlers();
  }, 100);
}

/**
 * Render a single team card
 */
function renderGuildWarTeamCard(team) {
  const heroes = team.heroes || [];
  const isDefeated = team.isDefeated || false;
  const opacity = isDefeated ? '0.5' : '1';
  const pointerEvents = isDefeated ? 'none' : 'auto';
  const speed = team.speed || '';
  const speedType = team.speedType || 'lower';
  const speedColor = speedType === 'lower' ? '#4CAF50' : '#d32f2f';
  const speedText = speedType === 'lower' ? 'Lower' : 'Higher';

  // Create 3 slots for heroes
  const heroSlots = [0, 1, 2].map(slotIndex => {
    const hero = heroes[slotIndex];
    return { hero, slotIndex };
  });

  const enemyName = team.enemyName || '';

  return `
    <div class="guild-war-team-card" data-team-number="${team.teamNumber}" style="background: var(--color-dark-gray); border: 2px solid var(--color-orange); border-radius: 6px; padding: 8px; opacity: ${opacity};">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
        <h3 style="color: var(--color-orange); margin: 0; font-size: 12px;">Team ${team.teamNumber}</h3>
        <div style="display: flex; align-items: center; gap: 4px;">
          <!-- Speed Control -->
          <div style="display: flex; gap: 2px;">
            <input 
              type="text" 
              value="${speed}" 
              placeholder="Spd"
              onchange="updateTeamSpeed('${team._id}', this.value)"
              style="width: 25px; padding: 1px; font-size: 9px; border: 1px solid #666; border-radius: 2px; background: #333; color: white; text-align: center;"
            >
            <button 
              onclick="toggleTeamSpeedType('${team._id}')"
              style="padding: 1px 4px; background: ${speedColor}; color: white; border: none; border-radius: 2px; font-size: 8px; cursor: pointer;"
            >
              ${speedText}
            </button>
          </div>
          
          <!-- Defeat Checkbox -->
          <div style="display: flex; align-items: center; gap: 2px;">
            <input 
              type="checkbox" 
              ${isDefeated ? 'checked' : ''} 
              onchange="toggleTeamDefeat('${team._id}', this.checked)"
              style="cursor: pointer;"
            >
            <span style="color: #666; font-size: 10px;">Def</span>
          </div>
        </div>
      </div>
      
      <!-- Enemy Name Input -->
      <div style="margin-bottom: 6px;">
        <input 
          type="text" 
          value="${enemyName}" 
          placeholder="Enemy Name"
          onblur="updateEnemyName('${team._id}', this.value)"
          style="width: 100%; padding: 4px 6px; font-size: 11px; border: 1px solid var(--color-orange); border-radius: 3px; background: white; color: black;"
        >
      </div>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px; pointer-events: ${pointerEvents};">
        ${heroSlots.map(({ hero, slotIndex }) => renderGuildWarHeroSlot(hero, slotIndex, team.teamNumber, team._id)).join('')}
      </div>
      
      <div style="margin-top: 6px; pointer-events: auto;">
        <button 
          onclick="openFindTeamModal(${team.teamNumber}, '${team._id}')"
          style="width: 100%; padding: 4px; background: #2196F3; color: white; border: none; border-radius: 3px; font-size: 10px; cursor: pointer;"
        >
          Find Team
        </button>
      </div>
    </div>
  `;
}

/**
 * Render a single hero slot (clickable box)
 */
function renderGuildWarHeroSlot(hero, slotIndex, teamNumber, teamId) {
  if (!hero) {
    // Empty slot - show clickable box to add hero
    return `
      <div 
        onclick="openHeroSelector(${teamNumber}, '${teamId}', ${slotIndex})" 
        style="background: #1a1a1a; border: 2px dashed #666; border-radius: 6px; padding: 4px; cursor: pointer; min-height: 130px; display: flex; flex-direction: column; align-items: center; justify-content: center; transition: all 0.3s;"
        onmouseover="this.style.borderColor='var(--color-orange)'; this.style.background='#252525';"
        onmouseout="this.style.borderColor='#666'; this.style.background='#1a1a1a';"
      >
        <div style="font-size: 20px; color: #666; margin-bottom: 2px;">+</div>
        <div style="color: #666; font-size: 8px; text-align: center;">Add</div>
      </div>
    `;
  }

  // Hero exists - show hero details
  const skills = hero.skills || [];
  const isFront = hero.order === 1;
  const isBack = hero.order === 3;

  // Create skill slots (2 slots: Up skill and Down skill)
  const upSkill = skills[0] || '0';
  const downSkill = skills[1] || '0';

  return `
    <div style="background: #1a1a1a; border: 2px solid var(--color-orange); border-radius: 6px; padding: 5px; min-height: 140px; display: flex; flex-direction: column; font-size: 10px;">
      <!-- Hero Image -->
      <div 
        onclick="openHeroSelector(${teamNumber}, '${teamId}', ${slotIndex})"
        style="text-align: center; margin-bottom: 2px; cursor: pointer; position: relative;"
        title="Click to change hero"
      >
        ${hero.heroPicture ?
      `<img src="${hero.heroPicture}" alt="${hero.heroname}" style="width: 40px; height: 40px; border-radius: 4px; object-fit: cover; border: 1px solid var(--color-orange);" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22%3E%3Crect fill=%22%23333%22 width=%2240%22 height=%2240%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%23666%22 font-size=%228%22%3ENo%3C/text%3E%3C/svg%3E'">` :
      `<div style="width: 40px; height: 40px; background: #333; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: #666; font-size: 8px; border: 1px solid var(--color-orange); margin: 0 auto;">No Img</div>`
    }
      </div>
      
      <!-- Star Level (Colored Stars) -->
      <div class="guild-war-star-rating" id="gw-stars-${teamNumber}-${slotIndex}" style="display: flex; justify-content: center; gap: 1px; margin-bottom: 2px; pointer-events: auto;">
        ${createGuildWarStarRating(teamNumber, teamId, hero.heroname, slotIndex, hero.starLevel || 0)}
      </div>
      
      <!-- Hero Name -->
      <div style="color: var(--color-white); font-weight: 600; font-size: 9px; text-align: center; margin-bottom: 2px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${hero.heroname}">
        ${hero.heroname}
      </div>
      
      <!-- Position Controls (F/B) -->
      <div style="margin-bottom: 4px;">
        <div style="display: flex; gap: 2px; justify-content: center;">
          <button
            onclick="setHeroPosition(${teamNumber}, '${teamId}', '${hero.heroname}', 1)"
            style="width: 20px; padding: 2px 0; background: ${isFront ? '#2196F3' : '#333'}; color: white; border: 1px solid ${isFront ? '#2196F3' : '#666'}; border-radius: 3px; font-size: 9px; font-weight: bold; cursor: pointer; text-align: center;"
          >
            F
          </button>
          <button
            onclick="setHeroPosition(${teamNumber}, '${teamId}', '${hero.heroname}', 3)"
            style="width: 20px; padding: 2px 0; background: ${isBack ? '#d32f2f' : '#333'}; color: white; border: 1px solid ${isBack ? '#d32f2f' : '#666'}; border-radius: 3px; font-size: 9px; font-weight: bold; cursor: pointer; text-align: center;"
          >
            B
          </button>
        </div>
      </div>
      
      <!-- Skills and Ring Row -->
      <div style="margin-bottom: 4px; display: flex; gap: 4px; align-items: center; justify-content: center;">
        <!-- Skills Column -->
        <div style="display: flex; flex-direction: column; gap: 2px;">
          <!-- Up Skill -->
          <div style="display: flex; align-items: center; gap: 2px;">
            <button 
              onclick="cycleSkillNumber(${teamNumber}, '${teamId}', '${hero.heroname}', 0, 'up')"
              style="width: 14px; height: 14px; padding: 0; background: #4CAF50; color: white; border: none; border-radius: 2px; font-size: 8px; font-weight: bold; cursor: pointer; display: flex; align-items: center; justify-content: center;"
              title="Up Skill"
            >
              U
            </button>
            <div 
              onclick="cycleSkillNumber(${teamNumber}, '${teamId}', '${hero.heroname}', 0, 'up')"
              style="width: 16px; height: 14px; background: #2a2a2a; border: 1px solid var(--color-orange); border-radius: 2px; display: flex; align-items: center; justify-content: center; color: var(--color-white); font-size: 9px; font-weight: bold; cursor: pointer;"
              title="Click to cycle 0-3"
            >
              ${upSkill}
            </div>
          </div>
          <!-- Down Skill -->
          <div style="display: flex; align-items: center; gap: 2px;">
            <button 
              onclick="cycleSkillNumber(${teamNumber}, '${teamId}', '${hero.heroname}', 1, 'up')"
              style="width: 14px; height: 14px; padding: 0; background: #4CAF50; color: white; border: none; border-radius: 2px; font-size: 8px; font-weight: bold; cursor: pointer; display: flex; align-items: center; justify-content: center;"
              title="Down Skill"
            >
              D
            </button>
            <div 
              onclick="cycleSkillNumber(${teamNumber}, '${teamId}', '${hero.heroname}', 1, 'up')"
              style="width: 16px; height: 14px; background: #2a2a2a; border: 1px solid var(--color-orange); border-radius: 2px; display: flex; align-items: center; justify-content: center; color: var(--color-white); font-size: 9px; font-weight: bold; cursor: pointer;"
              title="Click to cycle 0-3"
            >
              ${downSkill}
            </div>
          </div>
        </div>
        
        <!-- Ring Column -->
        <div style="flex-shrink: 0;">
          <div 
            onclick="openRingSelector(${teamNumber}, '${teamId}', '${hero.heroname}')"
            style="cursor: pointer; width: 30px; height: 30px; background: #2a2a2a; border: 1px solid var(--color-orange); border-radius: 3px; display: flex; align-items: center; justify-content: center; overflow: hidden;"
            title="Click to change ring"
          >
            ${hero.ring ?
      `<img src="${hero.ring}" alt="Ring" style="width: 100%; height: 100%; object-fit: cover;">` :
      `<span style="color: #666; font-size: 8px;">+</span>`
    }
          </div>
        </div>
      </div>
      
      <!-- Remove Button (Small X at top right) -->
      <div 
        onclick="removeHeroFromTeam(${teamNumber}, '${teamId}', '${hero.heroname}')"
        style="position: absolute; top: 2px; right: 2px; width: 12px; height: 12px; background: #d32f2f; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 8px; cursor: pointer; z-index: 10;"
        title="Remove Hero"
      >
        ×
      </div>
    </div>
  `;
}

/**
 * Filter teams based on search query
 */
function filterGuildWarTeams(teams, query) {
  const teamsDiv = document.getElementById('guild-war-teams');
  const searchQuery = query.toLowerCase().trim();

  if (!searchQuery) {
    renderGuildWarTeams(teams);
    return;
  }

  const filteredTeams = teams.filter(team => {
    // Search by team number
    if (team.teamNumber.toString().includes(searchQuery)) {
      return true;
    }

    // Search by hero name
    if (team.heroes && team.heroes.some(hero =>
      hero.heroname && hero.heroname.toLowerCase().includes(searchQuery)
    )) {
      return true;
    }

    return false;
  });

  renderGuildWarTeams(filteredTeams);
}

/**
 * Add hero to team
 */
async function addHeroToTeam(teamNumber, teamId) {
  if (!canEditGuildWar()) {
    if (typeof toastManager !== 'undefined') {
      toastManager.error('Only Guild Master and Assistants can edit Guild War teams');
    }
    return;
  }
  
  const heroname = prompt('Enter Hero Name:');
  if (!heroname || !heroname.trim()) {
    return;
  }

  const heroPicture = prompt('Enter Hero Picture URL (GitHub):');
  if (!heroPicture || !heroPicture.trim()) {
    return;
  }

  try {
    // If team doesn't exist, create it first
    if (!teamId || teamId === 'null') {
      const createResponse = await fetch('/api/guildwar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          teamNumber: teamNumber,
          heroes: []
        })
      });

      const createData = await createResponse.json();
      if (!createData.success) {
        throw new Error(createData.error);
      }

      teamId = createData.data._id;
    }

    // Add hero to team
    const response = await fetch(`/ api / guildwar / ${teamId}/heroes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        heroname: heroname.trim(),
        heroPicture: heroPicture.trim(),
        skills: [],
        ring: '',
        order: null
      })
    });

    const data = await response.json();

    if (data.success) {
      alert('Hero added successfully!');
      loadGuildWarTeams(); // Reload teams
    } else {
      alert('Failed to add hero: ' + data.error);
    }
  } catch (error) {
    console.error('Error adding hero:', error);
    alert('Error adding hero: ' + error.message);
  }
}

/**
 * Edit hero in team
 */
async function editGuildWarHero(teamNumber, teamId, heroname) {
  if (!canEditGuildWar()) {
    if (typeof toastManager !== 'undefined') {
      toastManager.error('Only Guild Master and Assistants can edit Guild War teams');
    }
    return;
  }
  
  // Get current hero data
  const response = await fetch(`/api/guildwar/${teamId}`);
  const teamData = await response.json();
  const hero = teamData.data.heroes.find(h => h.heroname === heroname);

  if (!hero) {
    alert('Hero not found');
    return;
  }

  // Prompt for skills (comma-separated, max 3)
  const skillsInput = prompt(`Enter up to 3 skills (comma-separated):\nCurrent: ${hero.skills.join(', ')}`, hero.skills.join(', '));
  if (skillsInput === null) return;

  const skills = skillsInput.split(',').map(s => s.trim()).filter(s => s).slice(0, 3);

  // Prompt for ring URL
  const ring = prompt('Enter Ring Image URL (GitHub):', hero.ring || '');
  if (ring === null) return;

  // Prompt for order
  const orderInput = prompt('Enter Position (1=Front, 2=Middle, 3=Back, or leave empty):', hero.order || '');
  const order = orderInput ? parseInt(orderInput) : null;

  try {
    const updateResponse = await fetch(`/api/guildwar/${teamId}/heroes/${heroname}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        skills,
        ring: ring.trim(),
        order
      })
    });

    const data = await updateResponse.json();

    if (data.success) {
      alert('Hero updated successfully!');
      loadGuildWarTeams(); // Reload teams
    } else {
      alert('Failed to update hero: ' + data.error);
    }
  } catch (error) {
    console.error('Error updating hero:', error);
    alert('Error updating hero: ' + error.message);
  }
}

/**
 * Remove hero from team
 */
async function removeHeroFromTeam(teamNumber, teamId, heroname) {
  if (!canEditGuildWar()) {
    if (typeof toastManager !== 'undefined') {
      toastManager.error('Only Guild Master and Assistants can edit Guild War teams');
    }
    return;
  }
  
  if (!confirm(`Remove ${heroname} from Team ${teamNumber}?`)) {
    return;
  }

  try {
    const response = await fetch(`/api/guildwar/${teamId}/heroes/${heroname}`, {
      method: 'DELETE'
    });

    const data = await response.json();

    if (data.success) {
      alert('Hero removed successfully!');
      loadGuildWarTeams(); // Reload teams
    } else {
      alert('Failed to remove hero: ' + data.error);
    }
  } catch (error) {
    console.error('Error removing hero:', error);
    alert('Error removing hero: ' + error.message);
  }
}

/**
 * Move hero position (front/back)
 */
async function moveHeroPosition(teamNumber, teamId, heroname, direction) {
  try {
    // Get current hero data
    const response = await fetch(`/api/guildwar/${teamId}`);
    const teamData = await response.json();
    const hero = teamData.data.heroes.find(h => h.heroname === heroname);

    if (!hero) {
      alert('Hero not found');
      return;
    }

    let newOrder = hero.order || 2; // Default to middle

    if (direction === 'up') {
      newOrder = 1; // Front
    } else if (direction === 'down') {
      newOrder = 3; // Back
    }

    // Update hero position
    const updateResponse = await fetch(`/api/guildwar/${teamId}/heroes/${heroname}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        skills: hero.skills,
        ring: hero.ring,
        order: newOrder
      })
    });

    const data = await updateResponse.json();

    if (data.success) {
      loadGuildWarTeams(); // Reload teams
    } else {
      alert('Failed to update position: ' + data.error);
    }
  } catch (error) {
    console.error('Error updating position:', error);
    alert('Error updating position: ' + error.message);
  }
}

// Global variables for hero selector
let currentHeroSelectorTeamNumber = null;
let currentHeroSelectorTeamId = null;
let currentHeroSelectorSlotIndex = null;
let allHeroesForSelector = [];

/**
 * Open hero selector modal
 */
async function openHeroSelector(teamNumber, teamId, slotIndex) {
  if (!canEditGuildWar()) {
    if (typeof toastManager !== 'undefined') {
      toastManager.error('Only Guild Master and Assistants can edit Guild War teams');
    }
    return;
  }
  
  currentHeroSelectorTeamNumber = teamNumber;
  currentHeroSelectorTeamId = teamId;
  currentHeroSelectorSlotIndex = slotIndex;

  const modal = document.getElementById('hero-selector-modal');
  if (!modal) {
    console.error('Hero selector modal not found');
    return;
  }

  modal.style.display = 'block';

  // Load all heroes from database
  try {
    const response = await fetch('/api/heroes');
    if (!response.ok) {
      throw new Error('Failed to fetch heroes');
    }

    const data = await response.json();
    allHeroesForSelector = data.data || [];

    renderHeroSelectorGrid(allHeroesForSelector);

    // Attach search functionality
    const searchInput = document.getElementById('hero-selector-search');
    if (searchInput) {
      searchInput.value = '';
      searchInput.addEventListener('input', (e) => {
        filterHeroSelector(e.target.value);
      });
    }
  } catch (error) {
    console.error('Error loading heroes:', error);
    alert('Error loading heroes: ' + error.message);
  }
}

/**
 * Close hero selector modal
 */
function closeHeroSelector() {
  const modal = document.getElementById('hero-selector-modal');
  if (modal) {
    modal.style.display = 'none';
  }

  currentHeroSelectorTeamNumber = null;
  currentHeroSelectorTeamId = null;
  currentHeroSelectorSlotIndex = null;
}

/**
 * Render hero selector grid
 */
function renderHeroSelectorGrid(heroes) {
  const grid = document.getElementById('hero-selector-grid');
  if (!grid) return;

  if (heroes.length === 0) {
    grid.innerHTML = '<p style="color: var(--color-light-gray); text-align: center; padding: 40px;">No heroes found</p>';
    return;
  }

  grid.innerHTML = heroes.map(hero => `
    <div 
      onclick="selectHeroFromDatabase('${hero.heroname}', '${hero.heroPicture}')" 
      style="background: #1a1a1a; border: 2px solid #444; border-radius: 8px; padding: 10px; cursor: pointer; transition: all 0.3s; text-align: center;"
      onmouseover="this.style.borderColor='var(--color-orange)'; this.style.background='#252525';"
      onmouseout="this.style.borderColor='#444'; this.style.background='#1a1a1a';"
    >
      ${hero.heroPicture ?
      `<img src="${hero.heroPicture}" alt="${hero.heroname}" style="width: 100%; height: 120px; object-fit: cover; border-radius: 6px; margin-bottom: 8px;" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Crect fill=%22%23333%22 width=%22120%22 height=%22120%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%23666%22 font-size=%2214%22%3ENo Img%3C/text%3E%3C/svg%3E'">` :
      `<div style="width: 100%; height: 120px; background: #333; border-radius: 6px; display: flex; align-items: center; justify-content: center; color: #666; font-size: 12px; margin-bottom: 8px;">No Image</div>`
    }
      <div style="color: var(--color-white); font-size: 13px; font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${hero.heroname}">
        ${hero.heroname}
      </div>
    </div>
  `).join('');
}

/**
 * Filter hero selector
 */
function filterHeroSelector(query) {
  const searchQuery = query.toLowerCase().trim();

  if (!searchQuery) {
    renderHeroSelectorGrid(allHeroesForSelector);
    return;
  }

  const filteredHeroes = allHeroesForSelector.filter(hero =>
    hero.heroname && hero.heroname.toLowerCase().includes(searchQuery)
  );

  renderHeroSelectorGrid(filteredHeroes);
}

/**
 * Select hero from database and add to team
 */
/**
 * Select hero from database and add/replace in team
 */
async function selectHeroFromDatabase(heroname, heroPicture) {
  if (!currentHeroSelectorTeamNumber || currentHeroSelectorSlotIndex === null) {
    alert('Invalid selection context');
    return;
  }

  try {
    let teamId = currentHeroSelectorTeamId;
    let currentHeroes = [];

    // If team doesn't exist, create it first
    if (!teamId || teamId === 'null') {
      const createResponse = await fetch('/api/guildwar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          teamNumber: currentHeroSelectorTeamNumber,
          heroes: []
        })
      });

      const createData = await createResponse.json();
      if (!createData.success) {
        throw new Error(createData.error);
      }

      teamId = createData.data._id;
    } else {
      // Fetch current team to get existing heroes
      const teamResponse = await fetch(`/api/guildwar/${teamId}`);
      const teamData = await teamResponse.json();
      if (teamData.success && teamData.data) {
        currentHeroes = teamData.data.heroes || [];
      }
    }

    // Prepare new hero object
    // If replacing, preserve the position (order)
    const existingHero = currentHeroes[currentHeroSelectorSlotIndex];
    const newHero = {
      heroname: heroname,
      heroPicture: heroPicture,
      skills: [], // Reset skills for new hero
      ring: '',   // Reset ring for new hero
      order: existingHero ? existingHero.order : null // Preserve position (F/B)
    };

    // Update the heroes array
    // Ensure array is long enough if adding to a specific slot (though UI usually fills sequentially, 
    // but safe to handle gaps or direct index assignment)
    if (currentHeroSelectorSlotIndex >= currentHeroes.length) {
      // Pushing new hero
      currentHeroes.push(newHero);
    } else {
      // Replacing existing hero
      currentHeroes[currentHeroSelectorSlotIndex] = newHero;
    }

    // Update the team with the new heroes list
    const response = await fetch(`/api/guildwar/${teamId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        heroes: currentHeroes
      })
    });

    const data = await response.json();

    if (data.success) {
      closeHeroSelector();
      loadGuildWarTeams(); // Reload teams
    } else {
      alert('Failed to update team: ' + data.error);
    }
  } catch (error) {
    console.error('Error selecting hero:', error);
    alert('Error selecting hero: ' + error.message);
  }
}

/**
 * Set hero position (F=1, B=3)
 */
async function setHeroPosition(teamNumber, teamId, heroname, position) {
  if (!canEditGuildWar()) {
    if (typeof toastManager !== 'undefined') {
      toastManager.error('Only Guild Master and Assistants can edit Guild War teams');
    }
    return;
  }
  
  try {
    // Get current hero data
    const response = await fetch(`/api/guildwar/${teamId}`);
    const teamData = await response.json();
    const hero = teamData.data.heroes.find(h => h.heroname === heroname);

    if (!hero) {
      alert('Hero not found');
      return;
    }

    // Update hero position
    const updateResponse = await fetch(`/api/guildwar/${teamId}/heroes/${heroname}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        skills: hero.skills,
        ring: hero.ring,
        order: position
      })
    });

    const data = await updateResponse.json();

    if (data.success) {
      loadGuildWarTeams(); // Reload teams
    } else {
      alert('Failed to update position: ' + data.error);
    }
  } catch (error) {
    console.error('Error updating position:', error);
    alert('Error updating position: ' + error.message);
  }
}

/**
 * Cycle skill number (0-3)
 * U increases: 0->1->2->3->0
 * D decreases: 0->1->2->3->0 (same as up, cycles forward)
 */
async function cycleSkillNumber(teamNumber, teamId, heroname, skillIndex, direction) {
  if (!canEditGuildWar()) {
    if (typeof toastManager !== 'undefined') {
      toastManager.error('Only Guild Master and Assistants can edit Guild War teams');
    }
    return;
  }
  
  try {
    // Get current hero data
    const response = await fetch(`/api/guildwar/${teamId}`);
    const teamData = await response.json();
    const hero = teamData.data.heroes.find(h => h.heroname === heroname);

    if (!hero) {
      alert('Hero not found');
      return;
    }

    // Ensure skills array has 2 slots (Up skill and Down skill)
    const skills = hero.skills || [];
    while (skills.length < 2) {
      skills.push('0');
    }

    // Get current skill number (default to 0 if not set)
    let currentNumber = parseInt(skills[skillIndex]) || 0;

    // Cycle the number (0->1->2->3->0)
    if (direction === 'up') {
      currentNumber = (currentNumber + 1) % 4; // 0->1->2->3->0
    } else if (direction === 'down') {
      currentNumber = (currentNumber + 1) % 4; // Same as up: 0->1->2->3->0
    }

    // Update the skill at this index
    skills[skillIndex] = currentNumber.toString();

    // Update hero with new skills
    const updateResponse = await fetch(`/api/guildwar/${teamId}/heroes/${heroname}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        skills: skills,
        ring: hero.ring,
        order: hero.order
      })
    });

    const data = await updateResponse.json();

    if (data.success) {
      loadGuildWarTeams(); // Reload teams
    } else {
      alert('Failed to update skill: ' + data.error);
    }
  } catch (error) {
    console.error('Error updating skill:', error);
    alert('Error updating skill: ' + error.message);
  }
}

/**
 * Create star rating HTML for Guild War
 */
function createGuildWarStarRating(teamNumber, teamId, heroname, slotIndex, initialLevel) {
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

    html += `<span class="guild-war-star ${colorClass}" data-team="${teamNumber}" data-teamid="${teamId}" data-heroname="${heroname}" data-slot="${slotIndex}" data-index="${i}" style="cursor: pointer; font-size: 10px;">★</span>`;
  }

  return html;
}

/**
 * Attach click handlers to Guild War stars
 */
function attachGuildWarStarHandlers() {
  document.querySelectorAll('.guild-war-star').forEach(star => {
    star.addEventListener('click', function () {
      const teamNumber = parseInt(this.dataset.team);
      const teamId = this.dataset.teamid;
      const heroname = this.dataset.heroname;
      const slotIndex = parseInt(this.dataset.slot);
      cycleGuildWarStarLevel(teamNumber, teamId, heroname, slotIndex);
    });
  });
}

/**
 * Cycle through star levels for Guild War (0 → 1 → 2 → ... → 12 → 0)
 */
async function cycleGuildWarStarLevel(teamNumber, teamId, heroname, slotIndex) {
  if (!canEditGuildWar()) {
    if (typeof toastManager !== 'undefined') {
      toastManager.error('Only Guild Master and Assistants can edit Guild War teams');
    }
    return;
  }
  
  const stars = document.querySelectorAll(`#gw-stars-${teamNumber}-${slotIndex} .guild-war-star`);

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

  // Apply new level visually
  setGuildWarStarLevel(teamNumber, slotIndex, nextLevel);

  // Save to database
  await saveGuildWarStarLevel(teamId, heroname, nextLevel);
}

/**
 * Set star level visually for Guild War
 */
function setGuildWarStarLevel(teamNumber, slotIndex, level) {
  const stars = document.querySelectorAll(`#gw-stars-${teamNumber}-${slotIndex} .guild-war-star`);

  if (stars.length === 0) return;

  // Calculate star colors based on level
  let redCount = 0;
  let blueCount = 0;

  if (level === 0) {
    // All yellow
  } else if (level <= 6) {
    blueCount = level;
  } else {
    redCount = level - 6;
    blueCount = 6 - redCount;
  }

  // Apply colors to stars
  stars.forEach((star, index) => {
    star.classList.remove('yellow', 'blue', 'red');
    
    if (index < redCount) {
      star.classList.add('red');
    } else if (index < redCount + blueCount) {
      star.classList.add('blue');
    } else {
      star.classList.add('yellow');
    }
  });
}

/**
 * Save star level to database for Guild War
 */
async function saveGuildWarStarLevel(teamId, heroname, starLevel) {
  try {
    // Get current hero data
    const response = await fetch(`/api/guildwar/${teamId}`);
    if (!response.ok) return;
    
    const teamData = await response.json();
    const hero = teamData.data.heroes.find(h => h.heroname === heroname);
    
    if (!hero) return;
    
    // Update hero with new star level
    const updateResponse = await fetch(`/api/guildwar/${teamId}/heroes/${heroname}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        skills: hero.skills,
        ring: hero.ring,
        order: hero.order,
        starLevel: starLevel
      })
    });
    
    if (!updateResponse.ok) return;
    
    const data = await updateResponse.json();
    if (!data.success) {
      console.error('Failed to update star level:', data.error);
    }
  } catch (error) {
    console.error('Error saving star level:', error);
  }
}

/**
 * Open ring selector modal
 */
async function openRingSelector(teamNumber, teamId, heroname) {
  if (!canEditGuildWar()) {
    if (typeof toastManager !== 'undefined') {
      toastManager.error('Only Guild Master and Assistants can edit Guild War teams');
    }
    return;
  }
  
  // Ring URLs - you can update these when you create the GitHub folder
  const rings = [
    { name: 'Ring 1', url: 'https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/rings/ring1.png' },
    { name: 'Ring 2', url: 'https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/rings/ring2.png' },
    { name: 'Ring 3', url: 'https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/rings/ring3.png' },
    { name: 'No Ring', url: '' }
  ];

  // Create a simple selection dialog
  let ringOptions = 'Select a ring:\n\n';
  rings.forEach((ring, idx) => {
    ringOptions += `${idx + 1}. ${ring.name}\n`;
  });
  ringOptions += '\nEnter number (1-4):';

  const selection = prompt(ringOptions);

  if (!selection) return;

  const ringIndex = parseInt(selection) - 1;

  if (ringIndex < 0 || ringIndex >= rings.length) {
    alert('Invalid selection');
    return;
  }

  const selectedRing = rings[ringIndex];

  try {
    // Get current hero data
    const response = await fetch(`/api/guildwar/${teamId}`);
    const teamData = await response.json();
    const hero = teamData.data.heroes.find(h => h.heroname === heroname);

    if (!hero) {
      alert('Hero not found');
      return;
    }

    // Update hero with new ring
    const updateResponse = await fetch(`/api/guildwar/${teamId}/heroes/${heroname}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        skills: hero.skills,
        ring: selectedRing.url,
        order: hero.order,
        starLevel: hero.starLevel || 0
      })
    });

    const data = await updateResponse.json();

    if (data.success) {
      loadGuildWarTeams(); // Reload teams
    } else {
      alert('Failed to update ring: ' + data.error);
    }
  } catch (error) {
    console.error('Error updating ring:', error);
    alert('Error updating ring: ' + error.message);
  }
}

/**
 * Toggle team defeat status
 */
async function toggleTeamDefeat(teamId, isDefeated) {
  if (!canEditGuildWar()) {
    if (typeof toastManager !== 'undefined') {
      toastManager.error('Only Guild Master and Assistants can edit Guild War teams');
    }
    // Reload to reset checkbox
    await loadGuildWarTeams();
    return;
  }
  
  // If team doesn't exist yet (empty slot), we can't defeat it
  if (!teamId || teamId === 'null') return;

  try {
    const response = await fetch(`/api/guildwar/${teamId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isDefeated })
    });

    if (response.ok) {
      loadGuildWarTeams(); // Reload to update UI
    }
  } catch (error) {
    console.error('Error toggling defeat:', error);
  }
}

/**
 * Update team speed
 */
async function updateTeamSpeed(teamId, speed) {
  if (!canEditGuildWar()) {
    if (typeof toastManager !== 'undefined') {
      toastManager.error('Only Guild Master and Assistants can edit Guild War teams');
    }
    return;
  }
  
  if (!teamId || teamId === 'null') return;

  try {
    const response = await fetch(`/api/guildwar/${teamId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ speed })
    });

    if (response.ok) {
      // Update local data to avoid full reload flicker if possible
      // But for now, reload is safer to ensure consistency
      loadGuildWarTeams();
    }
  } catch (error) {
    console.error('Error updating team speed:', error);
  }
}

/**
 * Update enemy name
 */
async function updateEnemyName(teamId, enemyName) {
  if (!canEditGuildWar()) {
    if (typeof toastManager !== 'undefined') {
      toastManager.error('Only Guild Master and Assistants can edit Guild War teams');
    }
    return;
  }
  
  if (!teamId || teamId === 'null') return;

  try {
    const response = await fetch(`/api/guildwar/${teamId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ enemyName })
    });

    if (!response.ok) {
      console.error('Failed to update enemy name');
    }
  } catch (error) {
    console.error('Error updating enemy name:', error);
  }
}

/**
 * Toggle team speed type (Lower/Higher)
 */
async function toggleTeamSpeedType(teamId) {
  if (!canEditGuildWar()) {
    if (typeof toastManager !== 'undefined') {
      toastManager.error('Only Guild Master and Assistants can edit Guild War teams');
    }
    return;
  }
  
  if (!teamId || teamId === 'null') return;

  try {
    const team = window.allGuildWarTeams.find(t => t._id === teamId);
    const newType = team.speedType === 'lower' ? 'higher' : 'lower';

    const response = await fetch(`/api/guildwar/${teamId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ speedType: newType })
    });

    if (response.ok) {
      loadGuildWarTeams();
    }
  } catch (error) {
    console.error('Error toggling team speed type:', error);
  }
}

/**
 * Reset Guild War - Clear all data for new cycle
 */
async function resetGuildWar() {
  if (!canEditGuildWar()) {
    if (typeof toastManager !== 'undefined') {
      toastManager.error('Only Guild Master and Assistants can reset Guild War');
    }
    return;
  }
  
  const confirmed = confirm(
    '⚠️ Reset Guild War?\n\n' +
    'This will CLEAR ALL DATA:\n' +
    '• Remove all heroes from all teams\n' +
    '• Clear defeated team checkmarks\n' +
    '• Reset star levels, skills, and rings\n' +
    '• Clear speed settings\n\n' +
    'This action cannot be undone. Continue?'
  );
  
  if (!confirmed) return;
  
  try {
    const response = await fetch('/api/guildwar/reset', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });
    
    const data = await response.json();
    
    if (response.ok && data.success) {
      alert(`✅ Guild War Reset Complete!\n\n${data.message}\n\nAll teams are now empty and ready for the new cycle.`);
      loadGuildWarTeams(); // Reload to show reset state
    } else {
      alert('Failed to reset Guild War: ' + (data.error || 'Unknown error'));
    }
  } catch (error) {
    console.error('Error resetting Guild War:', error);
    alert('Error resetting Guild War: ' + error.message);
  }
}

/**
 * Get zone name from team number
 */
function getZoneFromTeamNumber(teamNumber) {
  const num = parseInt(teamNumber);
  
  if (isNaN(num)) return 'Unknown Zone';
  
  if (num >= 1 && num <= 10) return 'Outer Bailey 1';
  if (num >= 11 && num <= 20) return 'Outer Bailey 2';
  if (num >= 21 && num <= 30) return 'Outer Bailey 3';
  if (num >= 31 && num <= 40) return 'Outer Bailey 4';
  if (num >= 41 && num <= 50) return 'Outer Bailey 5';
  if (num >= 51 && num <= 65) return 'Inner Citadel 1';
  if (num >= 66 && num <= 80) return 'Inner Citadel 2';
  if (num >= 81 && num <= 95) return 'Inner Citadel 3';
  if (num >= 96 && num <= 115) return 'Main Castle';
  
  return 'Unknown Zone';
}

// Find Team Modal State
let findTeamState = {
  teamNumber: null,
  teamId: null,
  zoneName: null,
  selectedHeroes: [null, null, null] // Array of 3 hero objects
};

/**
 * Open Find Team Modal
 */
function openFindTeamModal(teamNumber, teamId) {
  if (!canEditGuildWar()) {
    if (typeof toastManager !== 'undefined') {
      toastManager.error('Only Guild Master and Assistants can edit Guild War teams');
    }
    return;
  }
  
  // Ensure teamNumber is a number
  const numTeamNumber = parseInt(teamNumber);
  
  findTeamState = {
    teamNumber: numTeamNumber,
    teamId,
    zoneName: getZoneFromTeamNumber(numTeamNumber),
    selectedHeroes: [null, null, null]
  };

  // Reset UI
  for (let i = 0; i < 3; i++) {
    const slot = document.getElementById(`find-team-slot-${i}`);
    if (slot) {
      slot.innerHTML = `<span style="color: #666;">+ Hero ${i + 1}</span>`;
      slot.style.border = '2px dashed #666';
    }
  }

  const resultsDiv = document.getElementById('find-team-results');
  const modalDiv = document.getElementById('find-team-modal');
  
  if (resultsDiv) resultsDiv.style.display = 'none';
  if (modalDiv) modalDiv.style.display = 'block';
  
  // Load battle history for this enemy team
  const userInfo = localStorage.getItem('lgm_user_info');
  if (userInfo) {
    try {
      const username = JSON.parse(userInfo).username;
      loadBattleHistory(username, numTeamNumber);
    } catch (e) {
      console.error('Error loading battle history:', e);
    }
  }
}

/**
 * Load battle history for a specific enemy team
 */
async function loadBattleHistory(username, enemyTeamNumber) {
  const historyList = document.getElementById('battle-history-list');
  
  if (!historyList) return;
  
  historyList.innerHTML = '<p style="color: #888; text-align: center;">Loading...</p>';
  
  try {
    const response = await fetch(`/api/guildwar/battle-history/${username}/${enemyTeamNumber}`);
    const data = await response.json();
    
    if (!data.success) {
      throw new Error(data.error);
    }
    
    const battles = data.data || [];
    
    if (battles.length === 0) {
      historyList.innerHTML = '<p style="color: #888; text-align: center; font-size: 13px;">No previous battles for this enemy team.</p>';
      return;
    }
    
    historyList.innerHTML = battles.map(battle => {
      const resultIcon = battle.result === 'victory' ? '✅' : battle.result === 'defeat' ? '❌' : '⏳';
      const resultColor = battle.result === 'victory' ? '#4CAF50' : battle.result === 'defeat' ? '#f44336' : '#888';
      const resultText = battle.result === 'victory' ? 'Victory' : battle.result === 'defeat' ? 'Defeat' : 'Pending';
      const battleDate = new Date(battle.battleDate).toLocaleDateString();
      const speedValue = battle.speed || '';
      
      return `
        <div style="background: #2a2a2a; padding: 12px; border-radius: 6px; margin-bottom: 10px; border-left: 3px solid ${resultColor};">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <div style="flex: 1;">
              <span style="color: var(--color-orange); font-weight: bold; font-size: 14px;">${battle.targetUsername}</span>
              <span style="color: #888; font-size: 12px; margin-left: 10px;">${battleDate}</span>
            </div>
            <div style="display: flex; gap: 8px; align-items: center;">
              <label style="display: flex; align-items: center; cursor: pointer; font-size: 13px; color: #4CAF50;">
                <input type="radio" name="result_${battle._id}" value="victory" ${battle.result === 'victory' ? 'checked' : ''} 
                       onchange="updateBattleResult('${battle._id}', 'victory', ${battle.enemyTeamNumber})" 
                       style="margin-right: 4px;">
                ✅ Win
              </label>
              <label style="display: flex; align-items: center; cursor: pointer; font-size: 13px; color: #f44336;">
                <input type="radio" name="result_${battle._id}" value="defeat" ${battle.result === 'defeat' ? 'checked' : ''} 
                       onchange="updateBattleResult('${battle._id}', 'defeat', ${battle.enemyTeamNumber})" 
                       style="margin-right: 4px;">
                ❌ Loss
              </label>
            </div>
          </div>
          <div style="display: flex; gap: 10px; align-items: center; margin-bottom: 8px;">
            <label style="color: #4FC3F7; font-size: 12px; font-weight: bold;">⚡ Speed:</label>
            <input 
              type="text" 
              id="speed_${battle._id}" 
              value="${speedValue}" 
              placeholder="e.g., 245.5"
              onblur="updateBattleSpeed('${battle._id}', this.value)"
              style="flex: 1; padding: 4px 8px; background: #1a1a1a; border: 1px solid #444; border-radius: 4px; color: white; font-size: 12px; max-width: 120px;"
            />
          </div>
          <div style="color: #aaa; font-size: 12px;">
            ${(battle.heroDetails || []).map(h => h.heroName).join(', ') || battle.targetHeroes.join(', ')}
          </div>
        </div>
      `;
    }).join('');
    
  } catch (error) {
    console.error('Error loading battle history:', error);
    historyList.innerHTML = `<p style="color: #d32f2f; text-align: center; font-size: 13px;">Error: ${error.message}</p>`;
  }
}

/**
 * Update battle result (victory or defeat)
 */
async function updateBattleResult(battleId, result, enemyTeamNumber) {
  try {
    const response = await fetch(`/api/guildwar/battle-history/${battleId}/result`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ result })
    });
    
    const data = await response.json();
    
    if (!response.ok || !data.success) {
      alert('Failed to update result: ' + (data.error || 'Unknown error'));
      return;
    }
    
    // If victory, ask if user wants to mark enemy team as defeated
    if (result === 'victory' && enemyTeamNumber) {
      const markAsDefeated = confirm(
        `🎉 Victory recorded!\n\nDo you want to mark Enemy Team ${enemyTeamNumber} as DEFEATED?\n\n` +
        `This will show a checkmark on the team box in Guild War page.`
      );
      
      if (markAsDefeated) {
        await markEnemyTeamAsDefeated(enemyTeamNumber);
      }
    }
    
  } catch (error) {
    console.error('Error updating battle result:', error);
    alert('Error updating result: ' + error.message);
  }
}

/**
 * Update battle speed
 */
async function updateBattleSpeed(battleId, speed) {
  try {
    const response = await fetch(`/api/guildwar/battle-history/${battleId}/speed`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ speed })
    });
    
    const data = await response.json();
    
    if (!response.ok || !data.success) {
      return;
    }
    
  } catch (error) {
    console.error('Error updating battle speed:', error);
  }
}

/**
 * Mark enemy team as defeated
 */
async function markEnemyTeamAsDefeated(teamNumber) {
  try {
    // Find the team ID from the loaded teams
    const team = window.allGuildWarTeams?.find(t => t.teamNumber === teamNumber);
    
    if (!team || !team._id) {
      alert('Could not find enemy team to mark as defeated');
      return;
    }
    
    const response = await fetch(`/api/guildwar/${team._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isDefeated: true })
    });
    
    const data = await response.json();
    
    if (response.ok && data.success) {
      alert(`✅ Enemy Team ${teamNumber} marked as DEFEATED!`);
      
      // Reload guild war teams to show the checkmark
      if (typeof loadGuildWarTeams === 'function') {
        loadGuildWarTeams();
      }
    } else {
      console.error('Failed to mark as defeated:', data);
      alert('Failed to mark team as defeated: ' + (data.error || 'Unknown error'));
    }
    
  } catch (error) {
    console.error('Error marking team as defeated:', error);
    alert('Error marking team as defeated: ' + error.message);
  }
}

/**
 * Close Find Team Modal
 */
function closeFindTeamModal() {
  document.getElementById('find-team-modal').style.display = 'none';
}

/**
 * Select hero for finder slot
 * Uses the existing hero selector modal but with a different callback
 */
function selectFinderHero(slotIndex) {
  // Reuse the hero selector modal
  const modal = document.getElementById('hero-selector-modal');
  const grid = document.getElementById('hero-selector-grid');
  const searchInput = document.getElementById('hero-selector-search');

  // Clear previous content
  grid.innerHTML = '<p style="color: #888; grid-column: 1/-1; text-align: center;">Loading heroes...</p>';
  searchInput.value = '';

  modal.style.display = 'block';

  // Fetch heroes
  fetch('/api/heroes')
    .then(res => res.json())
    .then(data => {
      const heroes = data.data || [];
      window.allHeroes = heroes; // Store for search
      renderFinderHeroGrid(heroes, slotIndex);

      // Update search listener
      searchInput.oninput = (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = heroes.filter(h => h.heroname.toLowerCase().includes(term));
        renderFinderHeroGrid(filtered, slotIndex);
      };
    })
    .catch(err => {
      console.error('Error loading heroes:', err);
      grid.innerHTML = '<p style="color: #d32f2f; grid-column: 1/-1; text-align: center;">Failed to load heroes</p>';
    });
}

/**
 * Render heroes for finder selection
 */
function renderFinderHeroGrid(heroes, slotIndex) {
  const grid = document.getElementById('hero-selector-grid');

  if (heroes.length === 0) {
    grid.innerHTML = '<p style="color: #888; grid-column: 1/-1; text-align: center;">No heroes found</p>';
    return;
  }

  grid.innerHTML = heroes.map(hero => `
    <div 
      onclick="confirmFinderHero('${hero.heroname}', '${hero.heroPicture}', ${slotIndex})"
      style="background: #1a1a1a; border: 1px solid #333; border-radius: 6px; padding: 10px; cursor: pointer; transition: all 0.2s; text-align: center;"
      onmouseover="this.style.borderColor='var(--color-orange)'; this.style.background='#252525';"
      onmouseout="this.style.borderColor='#333'; this.style.background='#1a1a1a';"
    >
      <img src="${hero.heroPicture}" alt="${hero.heroname}" style="width: 60px; height: 60px; border-radius: 4px; object-fit: cover; margin-bottom: 8px;">
      <div style="color: var(--color-white); font-size: 12px; font-weight: 500;">${hero.heroname}</div>
    </div>
  `).join('');
}

/**
 * Confirm hero selection for finder
 */
function confirmFinderHero(heroname, heroPicture, slotIndex) {
  findTeamState.selectedHeroes[slotIndex] = { heroname, heroPicture };

  // Update UI
  const slot = document.getElementById(`find-team-slot-${slotIndex}`);
  slot.innerHTML = `
    <div style="text-align: center;">
      <img src="${heroPicture}" style="width: 50px; height: 50px; border-radius: 4px; object-fit: cover; margin-bottom: 4px;">
      <div style="font-size: 10px; color: white;">${heroname}</div>
    </div>
  `;
  slot.style.border = '2px solid var(--color-orange)';

  // Close hero selector
  document.getElementById('hero-selector-modal').style.display = 'none';
}

/**
 * Search for team members who have the selected heroes
 */
async function searchForTeam() {
  const selectedHeroes = findTeamState.selectedHeroes.filter(h => h !== null);

  if (selectedHeroes.length === 0) {
    alert('Please select at least one hero');
    return;
  }

  const resultsDiv = document.getElementById('find-team-results');
  const listDiv = document.getElementById('find-team-results-list');

  resultsDiv.style.display = 'block';
  listDiv.innerHTML = '<p style="color: #888; grid-column: 1/-1; text-align: center;">Searching...</p>';

  try {
    // Extract hero names
    const heroNames = selectedHeroes.map(h => h.heroname);

    const response = await fetch('/api/guildwar/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ heroes: heroNames })
    });

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.error);
    }

    const teams = data.data || [];

    if (teams.length === 0) {
      listDiv.innerHTML = '<p style="color: #888; grid-column: 1/-1; text-align: center;">No members found with these heroes.</p>';
      return;
    }

    listDiv.innerHTML = teams.map((team, index) => {
      // Get user's IGN if available, otherwise use username
      const displayName = team.username; // You can add IGN support later if needed
      const matchedHeroes = team.heroes.filter(h => heroNames.includes(h.heroName));
      
      // Store hero details in a global variable to avoid JSON.stringify issues
      if (!window.guildWarTeamData) window.guildWarTeamData = {};
      window.guildWarTeamData[`team_${index}`] = matchedHeroes;

      return `
        <div style="background: #1a1a1a; padding: 15px; border-radius: 4px; border: 1px solid #333;">
          <div style="color: var(--color-orange); font-weight: bold; font-size: 16px; margin-bottom: 8px;">${displayName}</div>
          <div style="color: #ccc; font-size: 13px; margin-bottom: 10px;">Has:</div>
          ${matchedHeroes.map(h => {
        const heroName = h.heroName || 'Unknown';
        const starLevel = h.starLevel || 0;
        const ring = h.ring || 'No Ring';

        return `
              <div style="background: #2a2a2a; padding: 8px; margin-bottom: 6px; border-radius: 4px; border-left: 3px solid var(--color-orange);">
                <div style="color: white; font-weight: 600; font-size: 14px;">${heroName}</div>
                <div style="color: #aaa; font-size: 12px; margin-top: 4px;">
                  <span style="color: #ffd700;">★ ${starLevel}</span> / 
                  <span style="color: #4FC3F7;">${ring}</span>
                </div>
              </div>
            `;
      }).join('')}
          <button onclick="pickGuildWarTeam('${team.username}', '${heroNames.join(',')}', 'team_${index}')" 
                  style="margin-top: 10px; background: var(--color-orange); color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; font-size: 13px; font-weight: bold; width: 100%;">
            Pick This Team
          </button>
        </div>
      `;
    }).join('');

  } catch (error) {
    console.error('Error searching for team:', error);
    listDiv.innerHTML = `<p style="color: #d32f2f; grid-column: 1/-1; text-align: center;">Error: ${error.message}</p>`;
  }
}

/**
 * Pick a team for Guild War
 */
async function pickGuildWarTeam(targetUsername, heroNamesStr, teamDataKey) {
  let username = null;
  const userInfo = localStorage.getItem('lgm_user_info');
  if (userInfo) {
    try {
      username = JSON.parse(userInfo).username;
    } catch (e) {
      console.error('Error parsing user info', e);
    }
  }

  if (!username) {
    alert('Please login first');
    return;
  }

  const targetHeroes = heroNamesStr.split(',');
  
  // Get hero details from stored data
  const heroDetails = (window.guildWarTeamData && window.guildWarTeamData[teamDataKey]) || [];

  // Get enemy team info from findTeamState
  const enemyZone = findTeamState.zoneName || 'Unknown Zone';
  const enemyTeamNumber = findTeamState.teamNumber || 0;

  try {
    // Save to current selection
    const selectionResponse = await fetch('/api/guildwar/selection', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        targetUsername,
        targetHeroes,
        heroDetails,
        enemyZone,
        enemyTeamNumber
      })
    });

    const selectionData = await selectionResponse.json();

    if (!selectionResponse.ok || !selectionData.success) {
      console.error('Failed to save selection:', selectionData);
      alert('Failed to pick team: ' + (selectionData.error || 'Unknown error'));
      return;
    }

    // Save to battle history
    const historyResponse = await fetch('/api/guildwar/battle-history', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        targetUsername,
        targetHeroes,
        heroDetails,
        enemyZone,
        enemyTeamNumber
      })
    });

    const historyData = await historyResponse.json();
    
    if (historyResponse.ok && historyData.success) {
      alert(`Picked ${targetUsername} to fight ${enemyZone}, Team ${enemyTeamNumber}!\nCheck 'GWar Noti' in My Team.`);
      closeFindTeamModal();
      
      // Reload battle history if modal is still open
      if (findTeamState.teamNumber) {
        loadBattleHistory(username, findTeamState.teamNumber);
      }
    } else {
      console.error('Failed to save battle history:', historyData);
      alert('Team picked but failed to save history: ' + (historyData.error || 'Unknown error'));
    }
  } catch (error) {
    console.error('Error picking team:', error);
    alert('Error picking team: ' + error.message);
  }
}



/**
 * Load Guild War Notification (Selected Target)
 */
async function loadGWarNoti() {
  const contentDiv = document.getElementById('gwar-noti-content');

  let username = null;
  const userInfo = localStorage.getItem('lgm_user_info');
  if (userInfo) {
    try {
      username = JSON.parse(userInfo).username;
    } catch (e) {
      console.error('Error parsing user info', e);
    }
  }

  if (!username) {
    contentDiv.innerHTML = '<p style="color: #d32f2f; text-align: center;">Please login to view notifications.</p>';
    return;
  }

  contentDiv.innerHTML = '<p style="color: #888; text-align: center;">Loading...</p>';

  try {
    const response = await fetch(`/api/guildwar/selection/${username}`);
    const data = await response.json();

    if (data.success && data.data) {
      const selection = data.data;
      const targetHeroes = selection.targetHeroes || [];
      const heroDetails = selection.heroDetails || [];

      const enemyZone = selection.enemyZone || 'Unknown Zone';
      const enemyTeamNumber = selection.enemyTeamNumber || '?';
      
      // Fetch enemy name from guild war team
      let enemyName = '';
      if (enemyTeamNumber && enemyTeamNumber !== '?') {
        try {
          const teamResponse = await fetch(`/api/guildwar/number/${enemyTeamNumber}`);
          const teamData = await teamResponse.json();
          if (teamData.success && teamData.data) {
            enemyName = teamData.data.enemyName || '';
          }
        } catch (e) {
          console.error('Error fetching enemy name:', e);
        }
      }

      contentDiv.innerHTML = `
        <div style="background: #1a1a1a; padding: 20px; border-radius: 8px; border: 2px solid var(--color-orange); max-width: 600px; margin: 0 auto;">
          <h2 style="color: var(--color-orange); margin-top: 0; border-bottom: 1px solid #333; padding-bottom: 10px;">Current Target</h2>
          
          <div style="margin-top: 20px; background: #2a2a2a; padding: 15px; border-radius: 6px; border-left: 4px solid #ff6600;">
            <div style="font-size: 16px; color: #4FC3F7; margin-bottom: 8px; font-weight: bold;">🎯 Enemy Team</div>
            <div style="font-size: 18px; color: white; margin-bottom: 5px;">
              <span style="color: var(--color-orange); font-weight: bold;">${enemyZone}</span>, Team <span style="color: var(--color-orange); font-weight: bold;">${enemyTeamNumber}</span>
            </div>
            ${enemyName ? `<div style="font-size: 14px; color: #aaa; margin-top: 5px;">Enemy: <span style="color: white;">${enemyName}</span></div>` : ''}
          </div>
          
          <div style="margin-top: 20px;">
            <div style="font-size: 16px; color: #4FC3F7; margin-bottom: 8px; font-weight: bold;">👤 Target Player</div>
            <div style="font-size: 18px; color: white; margin-bottom: 5px;">
              <span style="color: var(--color-orange); font-weight: bold;">${selection.targetUsername}</span>
            </div>
            <div style="color: #888; font-size: 12px;">Selected on: ${new Date(selection.updatedAt).toLocaleString()}</div>
          </div>
          
          <h3 style="color: white; margin-top: 25px; font-size: 16px;">⚔️ Target Heroes:</h3>
          <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 15px;">
            ${heroDetails.length > 0 ? heroDetails.map(hero => {
        const heroName = hero.heroName || 'Unknown';
        const starLevel = hero.starLevel || 0;
        const ring = hero.ring || 'No Ring';

        return `
                <div style="background: #2a2a2a; padding: 12px; border-radius: 6px; border-left: 3px solid var(--color-orange);">
                  <div style="color: white; font-weight: bold; font-size: 15px; margin-bottom: 6px;">${heroName}</div>
                  <div style="color: #aaa; font-size: 13px;">
                    <span style="color: #ffd700;">★ ${starLevel}</span> / 
                    <span style="color: #4FC3F7;">${ring}</span>
                  </div>
                </div>
              `;
      }).join('') : targetHeroes.map(heroName => `
              <div style="background: #333; padding: 15px; border-radius: 6px; color: white; border: 1px solid #444; text-align: center;">
                <div style="font-weight: bold;">${heroName}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else {
      contentDiv.innerHTML = '<p style="color: #888; text-align: center; padding: 40px;">No active Guild War target selected.<br>Go to Guild War > Find Team to pick a target.</p>';
    }
  } catch (error) {
    console.error('Error loading notification:', error);
    contentDiv.innerHTML = `<p style="color: #d32f2f; text-align: center;">Error: ${error.message}</p>`;
  }
}
