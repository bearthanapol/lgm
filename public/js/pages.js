// Placeholder page renderers for Home, LGM, Guild, and Team sections

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
                  <label style="display: block; margin-bottom: 8px; color: #000000; font-weight: 500;">Hero Type</label>
                  <select id="hero-type" required style="width: 100%; padding: 12px; border: 2px solid var(--color-orange); border-radius: 4px; font-size: 14px;">
                    <option value="">Select Type</option>
                    <option value="Physical">Physical</option>
                    <option value="Magic">Magic</option>
                    <option value="Support">Support</option>
                    <option value="Tank">Tank</option>
                  </select>
                </div>
                
                <div>
                  <label style="display: block; margin-bottom: 8px; color: #000000; font-weight: 500;">Attack</label>
                  <input type="number" id="hero-attack" required min="0" style="width: 100%; padding: 12px; border: 2px solid var(--color-orange); border-radius: 4px; font-size: 14px;">
                </div>
                
                <div>
                  <label style="display: block; margin-bottom: 8px; color: #000000; font-weight: 500;">Defense</label>
                  <input type="number" id="hero-defense" required min="0" style="width: 100%; padding: 12px; border: 2px solid var(--color-orange); border-radius: 4px; font-size: 14px;">
                </div>
                
                <div>
                  <label style="display: block; margin-bottom: 8px; color: #000000; font-weight: 500;">HP</label>
                  <input type="number" id="hero-hp" required min="0" style="width: 100%; padding: 12px; border: 2px solid var(--color-orange); border-radius: 4px; font-size: 14px;">
                </div>
                
                <div>
                  <label style="display: block; margin-bottom: 8px; color: #000000; font-weight: 500;">Rarity</label>
                  <select id="hero-rarity" required style="width: 100%; padding: 12px; border: 2px solid var(--color-orange); border-radius: 4px; font-size: 14px;">
                    <option value="">Select Rarity</option>
                    <option value="Common">Common</option>
                    <option value="Rare">Rare</option>
                    <option value="Epic">Epic</option>
                    <option value="Legendary">Legendary</option>
                  </select>
                </div>
              </div>
              
              <div style="margin-top: 20px;">
                <label style="display: block; margin-bottom: 8px; color: #000000; font-weight: 500;">Hero Image</label>
                <input type="file" id="hero-image-file" accept="image/*" style="width: 100%; padding: 12px; border: 2px solid var(--color-orange); border-radius: 4px; font-size: 14px;">
                <small style="color: #666666; display: block; margin-top: 4px;">Upload an image (max 5MB). It will be automatically uploaded to GitHub.</small>
                <div id="hero-image-preview" style="margin-top: 10px; display: none;">
                  <img id="hero-preview-img" src="" alt="Preview" style="max-width: 200px; max-height: 200px; border: 2px solid var(--color-orange); border-radius: 4px;">
                </div>
                <input type="hidden" id="hero-image-url">
              </div>
              
              <div style="margin-top: 20px;">
                <label style="display: block; margin-bottom: 8px; color: #000000; font-weight: 500;">Description</label>
                <textarea id="hero-description" rows="3" style="width: 100%; padding: 12px; border: 2px solid var(--color-orange); border-radius: 4px; font-size: 14px; resize: vertical;"></textarea>
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
      <p>Organize and manage your team composition here.</p>
      
      <div style="margin-top: 30px;">
        <h2 style="color: var(--color-orange); font-size: 24px; margin-bottom: 15px;">Team Formation</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border: 2px solid var(--color-orange); border-radius: 4px;">
          <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 15px; margin-bottom: 20px;">
            <div style="background-color: #ffffff; padding: 15px; border: 2px solid var(--color-orange); border-radius: 4px; text-align: center; min-height: 100px; display: flex; align-items: center; justify-content: center;">
              <p style="color: #666666;">Slot 1</p>
            </div>
            <div style="background-color: #ffffff; padding: 15px; border: 2px solid var(--color-orange); border-radius: 4px; text-align: center; min-height: 100px; display: flex; align-items: center; justify-content: center;">
              <p style="color: #666666;">Slot 2</p>
            </div>
            <div style="background-color: #ffffff; padding: 15px; border: 2px solid var(--color-orange); border-radius: 4px; text-align: center; min-height: 100px; display: flex; align-items: center; justify-content: center;">
              <p style="color: #666666;">Slot 3</p>
            </div>
            <div style="background-color: #ffffff; padding: 15px; border: 2px solid var(--color-orange); border-radius: 4px; text-align: center; min-height: 100px; display: flex; align-items: center; justify-content: center;">
              <p style="color: #666666;">Slot 4</p>
            </div>
            <div style="background-color: #ffffff; padding: 15px; border: 2px solid var(--color-orange); border-radius: 4px; text-align: center; min-height: 100px; display: flex; align-items: center; justify-content: center;">
              <p style="color: #666666;">Slot 5</p>
            </div>
          </div>
          <p style="text-align: center; color: #666666;">Team formation features coming soon...</p>
        </div>
      </div>
      
      <div style="margin-top: 30px;">
        <h2 style="color: var(--color-orange); font-size: 24px; margin-bottom: 15px;">Team Stats</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border: 2px solid var(--color-orange); border-radius: 4px;">
          <p style="margin-bottom: 10px; color: #000000;"><strong>Total Power:</strong> Coming soon...</p>
          <p style="margin-bottom: 10px; color: #000000;"><strong>Team Level:</strong> Coming soon...</p>
          <p style="margin-bottom: 10px; color: #000000;"><strong>Synergy Bonus:</strong> Coming soon...</p>
        </div>
      </div>
      
      <div style="margin-top: 30px;">
        <h2 style="color: var(--color-orange); font-size: 24px; margin-bottom: 15px;">Saved Teams</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border: 2px solid var(--color-orange); border-radius: 4px;">
          <p style="color: #000000;">Your saved team compositions will be displayed here.</p>
        </div>
      </div>
    </div>
  `;
}
