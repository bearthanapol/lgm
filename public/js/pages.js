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
          <div style="background-color: white; padding: 30px; border: 2px solid var(--color-orange); border-radius: 8px;">
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
          <div style="background-color: white; padding: 30px; border: 2px solid var(--color-orange); border-radius: 8px; text-align: center;">
            <h2 style="color: var(--color-orange); margin-bottom: 20px;">You are not in a guild</h2>
            <p style="margin-bottom: 30px; color: #666;">Create a new guild or join an existing one to get started!</p>
            
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
          style="width: 100%; max-width: 400px; padding: 10px; border: 2px solid var(--color-orange); border-radius: 4px; background: white; color: black;"
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
      <div id="hero-selector-modal" style="display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.8); z-index: 10003; overflow-y: auto;">
        <div style="max-width: 1200px; margin: 50px auto; background: white; border: 2px solid var(--color-orange); border-radius: 8px; padding: 20px; box-shadow: 0 4px 20px rgba(0,0,0,0.3);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
            <h2 style="color: var(--color-orange); margin: 0;">Select Hero</h2>
            <button onclick="closeHeroSelector()" style="padding: 8px 16px; background: #d32f2f; color: white; border: none; border-radius: 4px; cursor: pointer;">Close</button>
          </div>
          
          <input 
            type="text" 
            id="hero-selector-search" 
            placeholder="Search heroes..." 
            style="width: 100%; padding: 10px; margin-bottom: 20px; border: 2px solid var(--color-orange); border-radius: 4px; background: white; color: black;"
          />
          
          <div id="hero-selector-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 12px; max-height: 600px; overflow-y: auto;">
            <!-- Heroes will be loaded here -->
          </div>
        </div>
      </div>

      <!-- Find Team Modal -->
      <div id="find-team-modal" style="display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.8); z-index: 10000; overflow-y: auto;">
        <div style="max-width: 900px; margin: 50px auto; background: white; border: 2px solid var(--color-orange); border-radius: 8px; padding: 20px; box-shadow: 0 4px 20px rgba(0,0,0,0.3);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
            <h2 style="color: var(--color-orange); margin: 0;">Find Team to Fight</h2>
            <div style="display: flex; gap: 10px;">
              <button type="button" id="manual-battle-btn" onclick="openManualBattleEntry()" style="padding: 8px 16px; background: #2196F3; color: white; border: none; border-radius: 4px; cursor: pointer; display: none;">
                ➕ Manual Battle Entry
              </button>
              <button type="button" onclick="closeFindTeamModal()" style="padding: 8px 16px; background: #d32f2f; color: white; border: none; border-radius: 4px; cursor: pointer;">Close</button>
            </div>
          </div>
          
          <!-- Previous Battles Section -->
          <div id="battle-history-section" style="margin-bottom: 25px; padding: 15px; background: #f5f5f5; border-radius: 8px; border: 1px solid #ddd;">
            <h3 style="color: #4FC3F7; margin: 0 0 15px 0; font-size: 16px;">📜 Previous Battles</h3>
            <div id="battle-history-list" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 10px;">
              <p style="color: #666; text-align: center; grid-column: 1/-1;">Loading battle history...</p>
            </div>
          </div>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #333; margin-bottom: 10px;">Select Your 3 Heroes:</h3>
            <div style="display: flex; gap: 10px; justify-content: center; margin-bottom: 20px;">
              <!-- Slot 1 -->
              <div id="find-team-slot-0" onclick="selectFinderHero(0)" style="width: 100px; height: 100px; border: 2px dashed #ccc; border-radius: 8px; display: flex; align-items: center; justify-content: center; cursor: pointer; background: white;">
                <span style="color: #999;">+ Hero 1</span>
              </div>
              <!-- Slot 2 -->
              <div id="find-team-slot-1" onclick="selectFinderHero(1)" style="width: 100px; height: 100px; border: 2px dashed #ccc; border-radius: 8px; display: flex; align-items: center; justify-content: center; cursor: pointer; background: white;">
                <span style="color: #999;">+ Hero 2</span>
              </div>
              <!-- Slot 3 -->
              <div id="find-team-slot-2" onclick="selectFinderHero(2)" style="width: 100px; height: 100px; border: 2px dashed #ccc; border-radius: 8px; display: flex; align-items: center; justify-content: center; cursor: pointer; background: white;">
                <span style="color: #999;">+ Hero 3</span>
              </div>
            </div>
            
            <button type="button" onclick="searchForTeam()" style="width: 100%; padding: 12px; background: var(--color-orange); color: white; border: none; border-radius: 4px; font-size: 16px; font-weight: bold; cursor: pointer;">
              Find Members with These Heroes
            </button>
          </div>
          
          <div id="find-team-results" style="display: none;">
            <h3 style="color: #333; margin-bottom: 10px;">Guild Members:</h3>
            <div id="find-team-results-list" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 10px;">
              <!-- Results will be shown here -->
            </div>
          </div>
        </div>
      </div>

      <!-- Manual Battle Entry Modal -->
      <div id="manual-battle-modal" style="display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.9); z-index: 10002; overflow-y: auto;">
        <div style="max-width: 600px; margin: 50px auto; background: white; border: 2px solid var(--color-orange); border-radius: 8px; padding: 25px; box-shadow: 0 4px 20px rgba(0,0,0,0.3);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
            <h2 style="color: var(--color-orange); margin: 0;">Manual Battle Entry</h2>
            <button type="button" onclick="closeManualBattleModal()" style="padding: 8px 16px; background: #d32f2f; color: white; border: none; border-radius: 4px; cursor: pointer;">Close</button>
          </div>
          
          <p style="color: #666; margin-bottom: 20px; font-size: 14px;">
            Record a battle for a guild member who didn't update the website. This will mark their heroes as used.
          </p>
          
          <div style="margin-bottom: 20px;">
            <label style="display: block; margin-bottom: 8px; font-weight: bold; color: #333;">Select Guild Member:</label>
            <select id="manual-member-select" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px; font-size: 14px;">
              <option value="">-- Select Member --</option>
            </select>
          </div>
          
          <div style="margin-bottom: 20px;">
            <label style="display: block; margin-bottom: 8px; font-weight: bold; color: #333;">Select 3 Heroes Used:</label>
            <div style="display: flex; gap: 10px; justify-content: center; margin-bottom: 15px;">
              <div id="manual-hero-slot-0" onclick="selectManualHero(0)" style="width: 90px; height: 90px; border: 2px dashed #ccc; border-radius: 8px; display: flex; align-items: center; justify-content: center; cursor: pointer; background: white;">
                <span style="color: #999; font-size: 12px;">+ Hero 1</span>
              </div>
              <div id="manual-hero-slot-1" onclick="selectManualHero(1)" style="width: 90px; height: 90px; border: 2px dashed #ccc; border-radius: 8px; display: flex; align-items: center; justify-content: center; cursor: pointer; background: white;">
                <span style="color: #999; font-size: 12px;">+ Hero 2</span>
              </div>
              <div id="manual-hero-slot-2" onclick="selectManualHero(2)" style="width: 90px; height: 90px; border: 2px dashed #ccc; border-radius: 8px; display: flex; align-items: center; justify-content: center; cursor: pointer; background: white;">
                <span style="color: #999; font-size: 12px;">+ Hero 3</span>
              </div>
            </div>
          </div>
          
          <button type="button" onclick="saveManualBattle()" style="width: 100%; padding: 12px; background: var(--color-orange); color: white; border: none; border-radius: 4px; font-size: 16px; font-weight: bold; cursor: pointer;">
            Save Manual Battle (Pending)
          </button>
          
          <p style="color: #666; font-size: 12px; margin-top: 10px; text-align: center;">
            💡 Tip: After saving, you can set Win/Loss in the "Previous Battles" section
          </p>
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
      <h1>Manage Heroes</h1>
      <p>Add, edit, and manage hero database.</p>
      
      <div style="margin-top: 30px;">
        <h2 style="color: var(--color-orange); font-size: 24px; margin-bottom: 15px;">Add New Hero</h2>
          <div style="background-color: #f5f5f5; padding: 30px; border: 2px solid var(--color-orange); border-radius: 4px;">
            <form id="add-hero-form">
              <div style="margin-bottom: 20px;">
                <label style="display: block; margin-bottom: 8px; color: #000000; font-weight: 500;">Hero Name</label>
                <input type="text" id="hero-name" required style="width: 100%; padding: 12px; border: 2px solid var(--color-orange); border-radius: 4px; font-size: 14px;">
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
  `;
}

// Admin Pet Management Page
function renderAdminPetPage() {
  return `
    <div class="page-content">
      <h1>Pet Management</h1>
      <p>Add and manage pets. Users will select star levels on their team page.</p>
      
      <div style="margin-top: 30px;">
        <h2 style="color: var(--color-orange); font-size: 24px; margin-bottom: 15px;">Add New Pet</h2>
        <div style="background-color: #f5f5f5; padding: 30px; border: 2px solid var(--color-orange); border-radius: 4px;">
          <form id="add-pet-form">
            <div style="margin-bottom: 20px;">
              <label style="display: block; margin-bottom: 8px; color: #000000; font-weight: 500;">Pet Name *</label>
              <input type="text" id="pet-name" required style="width: 100%; padding: 12px; border: 2px solid var(--color-orange); border-radius: 4px; font-size: 14px;">
            </div>
            
            <div style="margin-bottom: 20px;">
              <label style="display: block; margin-bottom: 8px; color: #000000; font-weight: 500;">Pet Image</label>
              <input type="file" id="pet-image-file" accept="image/*" style="width: 100%; padding: 12px; border: 2px solid var(--color-orange); border-radius: 4px; font-size: 14px;">
              <small style="color: #666666; display: block; margin-top: 4px;">Upload a pet image</small>
              <div id="pet-image-preview" style="margin-top: 10px; display: none;">
                <img id="pet-preview-img" src="" alt="Preview" style="max-width: 200px; max-height: 200px; border: 2px solid var(--color-orange); border-radius: 4px;">
              </div>
              <input type="hidden" id="pet-image-url">
            </div>
            
            <button type="submit" style="margin-top: 20px; padding: 12px 30px; background-color: var(--color-orange); color: white; border: none; border-radius: 4px; font-size: 16px; font-weight: 600; cursor: pointer;">
              Add Pet
            </button>
          </form>
        </div>
      </div>
      
      <div style="margin-top: 30px;">
        <h2 style="color: var(--color-orange); font-size: 24px; margin-bottom: 15px;">Pet List</h2>
        <div id="pet-list" style="background-color: #f5f5f5; padding: 20px; border: 2px solid var(--color-orange); border-radius: 4px;">
          <p style="color: #666666;">Loading pets...</p>
        </div>
      </div>
    </div>
  `;
}

// Admin News Page
function renderAdminNewsPage() {
  return `
    <div class="page-content">
      <h1>News & Updates</h1>
      <p>Create and manage news and game updates.</p>
      
      <div style="margin-top: 30px;">
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
  `;
}

// Admin Analytics Page
function renderAdminAnalyticsPage() {
  return `
    <div class="page-content">
      <h1>Analytics</h1>
      <p>View website statistics and user activity.</p>
      
      <div style="margin-top: 30px;">
        <div style="margin-top: 30px;">
          <div style="display: flex; gap: 15px; margin-bottom: 30px;">
            <button class="analytics-period-btn active" data-period="week" style="padding: 10px 20px; background: var(--color-orange); color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: 600;">Last 7 Days</button>
            <button class="analytics-period-btn" data-period="month" style="padding: 10px 20px; background: #f5f5f5; color: #000; border: none; border-radius: 4px; cursor: pointer; font-weight: 600;">Last 30 Days</button>
          </div>
          
          <div id="analytics-loading" style="text-align: center; padding: 40px;">
            <p style="color: #666;">Loading analytics...</p>
          </div>
          
          <div id="analytics-content" style="display: none;">
            <!-- Summary Cards -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 30px;">
              <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 8px; color: white;">
                <div style="font-size: 14px; opacity: 0.9; margin-bottom: 8px;">Total Users</div>
                <div id="stat-total-users" style="font-size: 32px; font-weight: bold;">0</div>
              </div>
              
              <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 20px; border-radius: 8px; color: white;">
                <div style="font-size: 14px; opacity: 0.9; margin-bottom: 8px;">New Users</div>
                <div id="stat-new-users" style="font-size: 32px; font-weight: bold;">0</div>
              </div>
              
              <div style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); padding: 20px; border-radius: 8px; color: white;">
                <div style="font-size: 14px; opacity: 0.9; margin-bottom: 8px;">Total Page Views</div>
                <div id="stat-page-views" style="font-size: 32px; font-weight: bold;">0</div>
              </div>
            </div>
            
            <!-- Page Access Stats -->
            <div style="background: white; padding: 20px; border: 2px solid var(--color-orange); border-radius: 8px; margin-bottom: 30px;">
              <h3 style="color: var(--color-orange); margin-top: 0;">Page Access Statistics</h3>
              <div id="page-access-stats"></div>
            </div>
            
            <!-- Daily Access Chart -->
            <div style="background: white; padding: 20px; border: 2px solid var(--color-orange); border-radius: 8px;">
              <h3 style="color: var(--color-orange); margin-top: 0;">Daily Access Trend</h3>
              <div id="daily-access-chart"></div>
            </div>
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
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
        <div>
          <h1 style="margin: 0;">My Team</h1>
          <p style="margin: 5px 0 0 0;">Select the heroes you own and set their star levels and ring types.</p>
        </div>
        <button 
          onclick="ownAllHeroes()" 
          style="padding: 10px 20px; background: #4CAF50; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px; font-weight: bold; white-space: nowrap;">
          ✓ Own All Heroes
        </button>
      </div>
      
      <div id="team-loading" style="text-align: center; margin-top: 40px; opacity: 1; transition: opacity 0.3s;">
        <div class="spinner"></div>
        <p>Loading heroes...</p>
      </div>

      <div id="team-heroes-grid" style="opacity: 0; margin-top: 20px; transition: opacity 0.3s;">
        <!-- Heroes will be loaded here -->
      </div>
    </div>
  `;
}

// User Pets Page
function renderUserPetsPage() {
  return `
    <div class="page-content">
      <h1>My Pets</h1>
      <p>Select your pets and set their star levels (4-6 stars).</p>
      
      <div id="user-pets-loading" style="text-align: center; margin-top: 40px;">
        <div class="spinner"></div>
        <p>Loading pets...</p>
      </div>

      <div id="user-pets-grid" style="display: none; margin-top: 20px;">
        <!-- Pets will be loaded here -->
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

/**
 * Mark all heroes as owned (bulk operation)
 */
async function ownAllHeroes() {
  if (!confirm('Mark all heroes as owned?\n\nThis will add all heroes to your collection. You can then uncheck the few you don\'t own.')) {
    return;
  }
  
  const userInfo = localStorage.getItem('lgm_user_info');
  if (!userInfo) {
    alert('Please login first');
    return;
  }
  
  let username;
  try {
    username = JSON.parse(userInfo).username;
  } catch (e) {
    alert('Error: Could not get username');
    return;
  }
  
  try {
    // Get all heroes from database
    const heroResponse = await fetch('/api/heroes');
    if (!heroResponse.ok) {
      throw new Error('Failed to fetch heroes');
    }
    
    const heroData = await heroResponse.json();
    if (!heroData.success || !heroData.data) {
      throw new Error('Invalid hero data');
    }
    
    const allHeroes = heroData.data;
    
    // Create hero objects for all heroes
    const heroesToAdd = allHeroes.map(hero => ({
      heroName: hero.heroname || hero.name,
      starLevel: 0,
      ring: '',
      position: hero.position || 0
    }));
    
    // Save all heroes to user's team
    const saveResponse = await fetch('/api/team/bulk-add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        heroes: heroesToAdd
      })
    });
    
    if (!saveResponse.ok) {
      throw new Error('Failed to save heroes');
    }
    
    const saveData = await saveResponse.json();
    
    if (saveData.success) {
      alert(`✅ Success!\n\nAdded ${heroesToAdd.length} heroes to your collection.\n\nYou can now uncheck the few you don't own.`);
      // Reload the page to show all heroes as owned
      loadMyTeamCollection();
    } else {
      throw new Error(saveData.error || 'Unknown error');
    }
  } catch (error) {
    console.error('Error owning all heroes:', error);
    alert('❌ Error: ' + error.message);
  }
}

/**
 * Load all heroes and user's collection for My Team page
 */
async function loadMyTeamCollection() {
  console.log('[My Team] Loading hero collection...');
  
  const loadingDiv = document.getElementById('team-loading');
  const gridDiv = document.getElementById('team-heroes-grid');
  
  if (!loadingDiv || !gridDiv) {
    console.error('[My Team] Required elements not found');
    return;
  }
  
  try {
    // Get user info
    const userInfo = JSON.parse(localStorage.getItem('lgm_user_info') || '{}');
    const username = userInfo.username;
    
    if (!username) {
      console.error('[My Team] No username found');
      loadingDiv.innerHTML = '<p style="color: #d32f2f;">Please login to manage your team.</p>';
      return;
    }
    
    // Load all heroes from database
    const heroesResponse = await fetch('/api/heroes');
    if (!heroesResponse.ok) {
      throw new Error('Failed to load heroes');
    }
    const heroesData = await heroesResponse.json();
    const allHeroes = heroesData.data || [];
    
    // Load user's team
    let userTeam = {};
    try {
      const teamResponse = await fetch(`/api/team/${username}`);
      if (teamResponse.ok) {
        const teamData = await teamResponse.json();
        if (teamData.success && teamData.data && teamData.data.heroes) {
          // Convert array to object for easy lookup
          teamData.data.heroes.forEach(hero => {
            userTeam[hero.heroName || hero.name] = {
              starLevel: hero.starLevel || 0,
              ring: hero.ring || ''
            };
          });
        }
      }
    } catch (e) {
      console.log('[My Team] No existing team found');
    }
    
    // Set grid styles first (before content)
    gridDiv.style.display = 'grid';
    gridDiv.style.gridTemplateColumns = 'repeat(auto-fill, minmax(130px, 1fr))';
    gridDiv.style.gap = '12px';
    
    // Render hero cards
    gridDiv.innerHTML = allHeroes.map(hero => {
      const heroName = hero.name || hero.heroname;
      const isOwned = userTeam[heroName] !== undefined;
      const starLevel = isOwned ? userTeam[heroName].starLevel : 0;
      const ring = isOwned ? userTeam[heroName].ring : '';
      
      return `
        <div class="hero-card" data-hero-name="${heroName}" style="background: white; border: 2px solid ${isOwned ? 'var(--color-orange)' : '#ddd'}; border-radius: 6px; padding: 10px; cursor: pointer; transition: all 0.2s;">
          <div style="text-align: center; margin-bottom: 8px; width: 80px; height: 80px; margin-left: auto; margin-right: auto; background: #f5f5f5; border-radius: 6px; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden;">
            ${(hero.heropicture || hero.heroPicture || hero.imageurl || hero.imageUrl) ? `
              <img src="${hero.heropicture || hero.heroPicture || hero.imageurl || hero.imageUrl}" 
                   alt="${heroName}"
                   onload="this.style.opacity='1';"
                   onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                   style="width: 80px; height: 80px; object-fit: contain; border-radius: 6px; opacity: 0; transition: opacity 0.2s; position: absolute;">
              <div style="width: 80px; height: 80px; display: none; align-items: center; justify-content: center; color: #999; font-size: 10px;">No Image</div>
            ` : `
              <div style="color: #999; font-size: 10px;">No Image</div>
            `}
          </div>
          
          <div style="text-align: center; margin-bottom: 8px;">
            <strong style="font-size: 12px; color: #333; display: block; margin-bottom: 4px;">${heroName}</strong>
            <div style="font-size: 14px;">
              ${(() => {
                const level = Math.max(0, Math.min(12, starLevel));
                if (level === 0) {
                  return '<span style="color: #FFD700;">★★★★★★</span>';
                } else if (level >= 1 && level <= 6) {
                  const blue = level;
                  const yellow = 6 - level;
                  return '<span style="color: #4169E1;">' + '★'.repeat(blue) + '</span>' +
                         '<span style="color: #FFD700;">' + '★'.repeat(yellow) + '</span>';
                } else {
                  const red = level - 6;
                  const blue = 6 - red;
                  return '<span style="color: #DC143C;">' + '★'.repeat(red) + '</span>' +
                         '<span style="color: #4169E1;">' + '★'.repeat(blue) + '</span>';
                }
              })()}
            </div>
          </div>
          
          <button type="button" class="toggle-owned-btn" onclick="event.stopPropagation(); toggleHeroOwned(this, '${heroName}');" 
                  style="width: 100%; padding: 6px; background: ${isOwned ? '#4CAF50' : '#999'}; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 11px; margin-bottom: 8px;">
            ${isOwned ? '✓ Owned' : 'Not Owned'}
          </button>
          
          <div class="hero-details" style="display: ${isOwned ? 'block' : 'none'};">
            <div style="display: flex; gap: 6px; align-items: center; justify-content: center;">
              <div style="display: flex; align-items: center; gap: 3px;">
                <label style="font-size: 11px; color: #666;">C</label>
                <select class="hero-stars" onchange="updateHeroStarsFromDropdown(this, '${heroName}')"
                        style="width: 45px; padding: 3px; border: 1px solid #ddd; border-radius: 3px; font-size: 11px;">
                  ${[0,1,2,3,4,5,6,7,8,9,10,11,12].map(level => 
                    `<option value="${level}" ${starLevel === level ? 'selected' : ''}>${level}</option>`
                  ).join('')}
                </select>
              </div>
              
              <div>
                <input type="hidden" class="hero-ring" value="${ring}">
                <button type="button" class="ring-selector-btn" onclick="openRingSelector('${heroName}')"
                        style="padding: 2px; border: 1px solid #ddd; border-radius: 3px; background: white; cursor: pointer; display: flex; align-items: center; justify-content: center; width: 35px; height: 35px;">
                  ${ring === 'no-ring' ? '<span style="font-size: 9px;">Ring</span>' : 
                    ring ? `
                    <img src="https://raw.githubusercontent.com/bearthanapol/lgm/main/images/ring/${ring}.png" 
                         alt=""
                         onerror="this.onerror=null; this.src='https://raw.githubusercontent.com/bearthanapol/lgm/main/images/ring/${ring}.jpg';"
                         onload="this.style.opacity='1';"
                         style="width: 31px; height: 31px; object-fit: contain; opacity: 0; transition: opacity 0.2s;">
                    <span style="display: none; font-size: 9px;">Ring</span>
                  ` : '<span style="font-size: 9px;">Ring</span>'}
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');
    
    // Use requestAnimationFrame for smooth fade-in
    requestAnimationFrame(() => {
      loadingDiv.style.opacity = '0';
      setTimeout(() => {
        loadingDiv.style.display = 'none';
        gridDiv.style.opacity = '1';
      }, 300);
    });
    
    console.log('[My Team] Loaded', allHeroes.length, 'heroes');
    
  } catch (error) {
    console.error('[My Team] Error loading collection:', error);
    loadingDiv.innerHTML = '<p style="color: #d32f2f;">Failed to load heroes. Please try again.</p>';
  }
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

  // Check if heroes are already displayed (from upload) - if so, skip loading
  if (window.recognizedHeroes && window.recognizedHeroes.length > 0 && heroesDiv.style.opacity === '1') {
    console.log('[pages.js] Heroes already displayed from upload, skipping server load');
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
      username = localStorage.getItem('username');
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
        if (loadingDiv) {
          loadingDiv.style.opacity = '0';
          loadingDiv.style.pointerEvents = 'none';
        }
        if (emptyDiv) {
          emptyDiv.style.opacity = '1';
          emptyDiv.style.pointerEvents = 'auto';
        }
        return;
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('[pages.js] Team data received:', data);

    if (loadingDiv) {
      loadingDiv.style.opacity = '0';
      loadingDiv.style.pointerEvents = 'none';
    }

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

      if (heroesDiv) heroesDiv.style.opacity = '1';
    } else {
      console.log('[pages.js] No heroes in team data');
      if (emptyDiv) {
        emptyDiv.style.opacity = '1';
        emptyDiv.style.pointerEvents = 'auto';
      }
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
      username = localStorage.getItem('username');
    }

    if (!username) {
      console.error('No username found');
      return;
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
      username = localStorage.getItem('username');
    }

    if (!username) {
      alert('Please login first');
      return;
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

  // Get username
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
    loadingDiv.style.display = 'none';
    contentDiv.style.display = 'block';
    contentDiv.innerHTML = '<p style="color: #d32f2f; text-align: center;">Please login to view Guild War.</p>';
    return;
  }

  // Check if user is in a guild
  try {
    const guildResponse = await fetch(`/api/guilds/member/${username}`);
    const guildData = await guildResponse.json();
    
    if (!guildData.success || !guildData.data) {
      // User is not in a guild - show the same message as Guild Info page
      loadingDiv.style.display = 'none';
      contentDiv.style.display = 'block';
      contentDiv.innerHTML = `
        <div style="background-color: white; padding: 30px; border: 2px solid var(--color-orange); border-radius: 8px; text-align: center; max-width: 600px; margin: 0 auto;">
          <h2 style="color: var(--color-orange); margin-bottom: 20px;">You are not in a guild</h2>
          <p style="margin-bottom: 30px; color: #666;">Create a new guild or join an existing one to access Guild War!</p>
          
          <button type="button" onclick="window.location.href='/guild/info'" style="padding: 15px 40px; background: var(--color-orange); color: white; border: none; border-radius: 4px; font-size: 16px; font-weight: 600; cursor: pointer;">
            Back to Guild Info
          </button>
        </div>
      `;
      return;
    }
  } catch (error) {
    console.error('Error checking guild membership:', error);
  }

  try {
    const response = await fetch(`/api/guildwar?username=${encodeURIComponent(username)}`);
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
  
  // Check user role
  const canEdit = canEditGuildWar();

  // Create 3 slots for heroes
  const heroSlots = [0, 1, 2].map(slotIndex => {
    const hero = heroes[slotIndex];
    return { hero, slotIndex };
  });

  const enemyName = team.enemyName || '';
  
  // Render buttons based on role
  let buttonsHtml = '';
  if (canEdit) {
    // Master/Assistant: Show Find Team and Save Team buttons
    buttonsHtml = `
      <button 
        onclick="openFindTeamModal(${team.teamNumber}, '${team._id}')"
        style="width: 100%; padding: 4px; background: #2196F3; color: white; border: none; border-radius: 3px; font-size: 10px; cursor: pointer;"
      >
        Find Team
      </button>
      <button 
        onclick="saveEnemyTeam(${team.teamNumber}, '${team._id}')"
        style="width: 100%; padding: 4px; background: #4CAF50; color: white; border: none; border-radius: 3px; font-size: 10px; cursor: pointer; font-weight: bold;"
      >
        Save Team
      </button>
    `;
  } else {
    // Member: Show Battle Record button only
    buttonsHtml = `
      <button 
        onclick="openBattleRecordModal(${team.teamNumber})"
        style="width: 100%; padding: 4px; background: #FF9800; color: white; border: none; border-radius: 3px; font-size: 10px; cursor: pointer; font-weight: bold;"
      >
        Battle Record
      </button>
    `;
  }

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
              style="width: 25px; padding: 1px; font-size: 9px; border: 1px solid #ccc; border-radius: 2px; background: white; color: #333; text-align: center;"
              ${canEdit ? '' : 'disabled'}
            >
            <button 
              onclick="toggleTeamSpeedType('${team._id}')"
              style="padding: 1px 4px; background: ${speedColor}; color: white; border: none; border-radius: 2px; font-size: 8px; cursor: pointer;"
              ${canEdit ? '' : 'disabled'}
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
              ${canEdit ? '' : 'disabled'}
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
          oninput="debounceUpdateEnemyName('${team._id}', this.value)"
          onblur="updateEnemyName('${team._id}', this.value)"
          style="width: 100%; padding: 4px 6px; font-size: 11px; border: 1px solid var(--color-orange); border-radius: 3px; background: white; color: black;"
          ${canEdit ? '' : 'readonly'}
        >
      </div>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px; pointer-events: ${canEdit ? pointerEvents : 'none'};">
        ${heroSlots.map(({ hero, slotIndex }) => renderGuildWarHeroSlot(hero, slotIndex, team.teamNumber, team._id)).join('')}
      </div>
      
      <div style="margin-top: 6px; pointer-events: auto; display: flex; flex-direction: column; gap: 4px;">
        ${buttonsHtml}
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
        style="background: white; border: 2px dashed #ccc; border-radius: 6px; padding: 4px; cursor: pointer; min-height: 130px; display: flex; flex-direction: column; align-items: center; justify-content: center; transition: all 0.3s;"
        onmouseover="this.style.borderColor='var(--color-orange)'; this.style.background='#fff8f0';"
        onmouseout="this.style.borderColor='#ccc'; this.style.background='white';"
      >
        <div style="font-size: 20px; color: #999; margin-bottom: 2px;">+</div>
        <div style="color: #999; font-size: 8px; text-align: center;">Add</div>
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
    <div style="background: white; border: 2px solid var(--color-orange); border-radius: 6px; padding: 5px; min-height: 140px; display: flex; flex-direction: column; font-size: 10px;">
      <!-- Hero Image -->
      <div 
        onclick="openHeroSelector(${teamNumber}, '${teamId}', ${slotIndex})"
        style="text-align: center; margin-bottom: 2px; cursor: pointer; position: relative;"
        title="Click to change hero"
      >
        ${hero.heroPicture ?
      `<img src="${hero.heroPicture}" alt="${hero.heroname}" style="width: 40px; height: 40px; border-radius: 4px; object-fit: cover; border: 1px solid var(--color-orange);" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22%3E%3Crect fill=%22%23f0f0f0%22 width=%2240%22 height=%2240%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%23999%22 font-size=%228%22%3ENo%3C/text%3E%3C/svg%3E'">` :
      `<div style="width: 40px; height: 40px; background: #f0f0f0; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: #999; font-size: 8px; border: 1px solid var(--color-orange); margin: 0 auto;">No Img</div>`
    }
      </div>
      
      <!-- Star Level (Colored Stars) -->
      <div class="guild-war-star-rating" id="gw-stars-${teamNumber}-${slotIndex}" style="display: flex; justify-content: center; gap: 1px; margin-bottom: 2px; pointer-events: auto;">
        ${createGuildWarStarRating(teamNumber, teamId, hero.heroname, slotIndex, hero.starLevel || 0)}
      </div>
      
      <!-- Hero Name -->
      <div style="color: #333; font-weight: 600; font-size: 9px; text-align: center; margin-bottom: 2px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${hero.heroname}">
        ${hero.heroname}
      </div>
      
      <!-- Position Controls (F/B) -->
      <div style="margin-bottom: 4px;">
        <div style="display: flex; gap: 2px; justify-content: center;">
          <button
            onclick="setHeroPosition(${teamNumber}, '${teamId}', '${hero.heroname}', 1)"
            style="width: 20px; padding: 2px 0; background: ${isFront ? '#2196F3' : '#e0e0e0'}; color: ${isFront ? 'white' : '#666'}; border: 1px solid ${isFront ? '#2196F3' : '#ccc'}; border-radius: 3px; font-size: 9px; font-weight: bold; cursor: pointer; text-align: center;"
          >
            F
          </button>
          <button
            onclick="setHeroPosition(${teamNumber}, '${teamId}', '${hero.heroname}', 3)"
            style="width: 20px; padding: 2px 0; background: ${isBack ? '#d32f2f' : '#e0e0e0'}; color: ${isBack ? 'white' : '#666'}; border: 1px solid ${isBack ? '#d32f2f' : '#ccc'}; border-radius: 3px; font-size: 9px; font-weight: bold; cursor: pointer; text-align: center;"
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
              style="width: 16px; height: 14px; background: #f5f5f5; border: 1px solid var(--color-orange); border-radius: 2px; display: flex; align-items: center; justify-content: center; color: #333; font-size: 9px; font-weight: bold; cursor: pointer;"
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
              style="width: 16px; height: 14px; background: #f5f5f5; border: 1px solid var(--color-orange); border-radius: 2px; display: flex; align-items: center; justify-content: center; color: #333; font-size: 9px; font-weight: bold; cursor: pointer;"
              title="Click to cycle 0-3"
            >
              ${downSkill}
            </div>
          </div>
        </div>
        
        <!-- Ring Column -->
        <div style="flex-shrink: 0;">
          <div 
            onclick="openEnemyRingSelector(${teamNumber}, '${teamId}', '${hero.heroname}')"
            style="cursor: pointer; width: 30px; height: 30px; background: white; border: 1px solid var(--color-orange); border-radius: 3px; display: flex; align-items: center; justify-content: center; overflow: hidden;"
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

  // Get username
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

  try {
    // If team doesn't exist, create it first
    if (!teamId || teamId === 'null') {
      const createResponse = await fetch('/api/guildwar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username,
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
    grid.innerHTML = '<p style="color: #666; text-align: center; padding: 40px;">No heroes found</p>';
    return;
  }

  grid.innerHTML = heroes.map(hero => `
    <div 
      onclick="selectHeroFromDatabase('${hero.heroname}', '${hero.heroPicture}')" 
      style="background: white; border: 2px solid #ddd; border-radius: 8px; padding: 8px; cursor: pointer; transition: all 0.3s; text-align: center;"
      onmouseover="this.style.borderColor='var(--color-orange)'; this.style.boxShadow='0 2px 8px rgba(255,102,0,0.3)';"
      onmouseout="this.style.borderColor='#ddd'; this.style.boxShadow='none';"
    >
      ${hero.heroPicture ?
      `<img src="${hero.heroPicture}" alt="${hero.heroname}" style="width: 100%; height: auto; max-width: 100px; object-fit: contain; border-radius: 6px; margin: 0 auto 6px; display: block;" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22%3E%3Crect fill=%22%23f0f0f0%22 width=%22100%22 height=%22100%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%23999%22 font-size=%2212%22%3ENo Img%3C/text%3E%3C/svg%3E'">` :
      `<div style="width: 100px; height: 100px; background: #f0f0f0; border-radius: 6px; display: flex; align-items: center; justify-content: center; color: #999; font-size: 11px; margin: 0 auto 6px;">No Image</div>`
    }
      <div style="color: #333; font-size: 12px; font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${hero.heroname}">
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

    // Get username
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

    // If team doesn't exist, create it first
    if (!teamId || teamId === 'null') {
      // Get enemy name from the input field if it was typed
      const teamCard = document.querySelector(`[data-team-number="${currentHeroSelectorTeamNumber}"]`);
      let enemyName = '';
      if (teamCard) {
        const enemyNameInput = teamCard.querySelector('input[placeholder="Enemy Name"]');
        if (enemyNameInput) {
          enemyName = enemyNameInput.value.trim();
        }
      }
      
      const createResponse = await fetch('/api/guildwar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username,
          teamNumber: currentHeroSelectorTeamNumber,
          heroes: [],
          enemyName: enemyName
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
 * Open ring selector modal for enemy heroes
 */
async function openEnemyRingSelector(teamNumber, teamId, heroname) {
  if (!canEditGuildWar()) {
    if (typeof toastManager !== 'undefined') {
      toastManager.error('Only Guild Master and Assistants can edit Guild War teams');
    }
    return;
  }
  
  // Create popup overlay
  const overlay = document.createElement('div');
  overlay.id = 'enemy-ring-selector-overlay';
  overlay.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 10000;';
  
  const popup = document.createElement('div');
  popup.style.cssText = 'background: white; padding: 20px; border-radius: 8px; max-width: 400px; width: 90%;';
  
  const ringTypes = ['rev4', 'rev5', 'rev6', 'im4', 'im5', 'im6', 'bar4', 'bar5', 'bar6'];
  
  popup.innerHTML = `
    <h3 style="margin: 0 0 15px 0; color: var(--color-orange);">Select Ring for ${heroname}</h3>
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 15px;">
      ${ringTypes.map(ringType => `
        <div class="enemy-ring-option" data-ring="${ringType}" data-team-id="${teamId}" data-heroname="${heroname}"
             style="cursor: pointer; border: 2px solid #ddd; border-radius: 4px; padding: 10px; transition: all 0.2s; text-align: center; background: #f9f9f9;">
          <img src="https://raw.githubusercontent.com/bearthanapol/lgm/main/images/ring/${ringType}.png" 
               alt="${ringType}" style="width: 40px; height: 40px; object-fit: contain; margin-bottom: 5px;">
          <div style="font-size: 10px; color: #666;">${getRingFullName(ringType)}</div>
        </div>
      `).join('')}
    </div>
    <button type="button" class="no-ring-btn" data-team-id="${teamId}" data-heroname="${heroname}"
            style="width: 100%; padding: 10px; background: #999; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px;">
      No Ring
    </button>
  `;
  
  overlay.appendChild(popup);
  document.body.appendChild(overlay);
  
  // Add click handlers for ring options
  popup.querySelectorAll('.enemy-ring-option').forEach(option => {
    option.addEventListener('click', async () => {
      const ringType = option.dataset.ring;
      const ringUrl = `https://raw.githubusercontent.com/bearthanapol/lgm/main/images/ring/${ringType}.png`;
      await updateEnemyHeroRing(teamId, heroname, ringUrl);
      overlay.remove();
    });
    
    option.addEventListener('mouseenter', function() {
      this.style.borderColor = 'var(--color-orange)';
      this.style.background = '#fff3e0';
    });
    
    option.addEventListener('mouseleave', function() {
      this.style.borderColor = '#ddd';
      this.style.background = '#f9f9f9';
    });
  });
  
  // Add click handler for no ring button
  popup.querySelector('.no-ring-btn').addEventListener('click', async () => {
    await updateEnemyHeroRing(teamId, heroname, '');
    overlay.remove();
  });
  
  // Close on overlay click
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.remove();
    }
  });
}

/**
 * Update enemy hero ring
 */
async function updateEnemyHeroRing(teamId, heroname, ringUrl) {
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
        ring: ringUrl,
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
 * Save enemy team - validates and saves enemy name
 */
async function saveEnemyTeam(teamNumber, teamId) {
  if (!canEditGuildWar()) {
    if (typeof toastManager !== 'undefined') {
      toastManager.error('Only Guild Master and Assistants can edit Guild War teams');
    }
    return;
  }
  
  // Get the team card
  const teamCard = document.querySelector(`[data-team-number="${teamNumber}"]`);
  if (!teamCard) {
    alert('Team not found');
    return;
  }
  
  // Get enemy name from input
  const enemyNameInput = teamCard.querySelector('input[placeholder="Enemy Name"]');
  const enemyName = enemyNameInput ? enemyNameInput.value.trim() : '';
  
  // Validate enemy name
  if (!enemyName) {
    alert('⚠️ Please enter an enemy name before saving!');
    if (enemyNameInput) {
      enemyNameInput.focus();
    }
    return;
  }
  
  // Check if team exists in database
  if (!teamId || teamId === 'null') {
    // Team doesn't exist yet - create it
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
    
    try {
      const response = await fetch('/api/guildwar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username,
          teamNumber: teamNumber,
          heroes: [],
          enemyName: enemyName
        })
      });
      
      const data = await response.json();
      if (data.success) {
        alert('✅ Team saved successfully!');
        loadGuildWarTeams();
      } else {
        alert('Failed to save team: ' + data.error);
      }
    } catch (error) {
      console.error('Error saving team:', error);
      alert('Error saving team: ' + error.message);
    }
  } else {
    // Team exists - get current heroes and validate
    try {
      const teamResponse = await fetch(`/api/guildwar/${teamId}`);
      const teamData = await teamResponse.json();
      
      if (teamData.success && teamData.data) {
        const heroes = teamData.data.heroes || [];
        
        // Validate 3 heroes
        if (heroes.length < 3) {
          alert(`⚠️ Please add all 3 heroes before saving!\n\nCurrent: ${heroes.length}/3 heroes`);
          return;
        }
        
        // Update enemy name
        const updateResponse = await fetch(`/api/guildwar/${teamId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ enemyName: enemyName })
        });
        
        if (updateResponse.ok) {
          alert('✅ Team saved successfully!');
          loadGuildWarTeams();
        } else {
          alert('Failed to save team');
        }
      }
    } catch (error) {
      console.error('Error saving team:', error);
      alert('Error saving team: ' + error.message);
    }
  }
}

/**
 * Debounce enemy name updates (save after 500ms of no typing)
 */
let enemyNameDebounceTimers = {};
function debounceUpdateEnemyName(teamId, enemyName) {
  // Clear existing timer for this team
  if (enemyNameDebounceTimers[teamId]) {
    clearTimeout(enemyNameDebounceTimers[teamId]);
  }
  
  // Set new timer
  enemyNameDebounceTimers[teamId] = setTimeout(() => {
    updateEnemyName(teamId, enemyName);
  }, 500);
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
    '• Clear speed settings\n' +
    '• Delete all battle history\n\n' +
    'This action cannot be undone. Continue?'
  );
  
  if (!confirmed) return;
  
  // Get username
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
  
  try {
    const response = await fetch('/api/guildwar/reset', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username })
    });
    
    const data = await response.json();
    
    if (response.ok && data.success) {
      alert(`✅ Guild War Reset Complete!\n\n${data.message}\n\nAll teams have been deleted and battle history cleared.`);
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
 * Open Battle Record Modal (for members only - shows battle history)
 */
async function openBattleRecordModal(teamNumber) {
  const numTeamNumber = parseInt(teamNumber);
  
  // Get username
  const userInfo = localStorage.getItem('lgm_user_info');
  if (!userInfo) {
    alert('Please login first');
    return;
  }
  
  let username;
  try {
    username = JSON.parse(userInfo).username;
  } catch (e) {
    console.error('Error parsing user info:', e);
    return;
  }
  
  // Load battle history
  try {
    const response = await fetch(`/api/guildwar/battle-history/team/${numTeamNumber}?username=${username}`);
    const data = await response.json();
    
    if (!data.success) {
      alert('Failed to load battle history');
      return;
    }
    
    const battles = data.data || [];
    const zoneName = getZoneFromTeamNumber(numTeamNumber);
    
    // Create modal HTML
    let battleHistoryHtml = '';
    if (battles.length === 0) {
      battleHistoryHtml = '<p style="color: #666; text-align: center; padding: 20px;">No battles recorded yet</p>';
    } else {
      battleHistoryHtml = battles.map(battle => {
        const resultIcon = battle.result === 'victory' ? '✅' : battle.result === 'defeat' ? '❌' : '⏳';
        const resultText = battle.result === 'victory' ? 'Victory' : battle.result === 'defeat' ? 'Defeat' : 'Pending';
        const resultColor = battle.result === 'victory' ? '#4CAF50' : battle.result === 'defeat' ? '#d32f2f' : '#FF9800';
        
        const heroesHtml = (battle.heroDetails || []).map(hero => {
          // Handle both heroName (capital N) and heroname (lowercase n)
          const heroName = hero.heroName || hero.heroname || 'Unknown';
          const heroPicture = hero.heroPicture || hero.picture || '';
          
          return `
            <div style="text-align: center;">
              ${heroPicture ? `
                <img src="${heroPicture}" alt="${heroName}" 
                  style="width: 40px; height: 40px; object-fit: contain; border-radius: 3px; margin-bottom: 2px; display: block; margin-left: auto; margin-right: auto;"
                  onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22%3E%3Crect fill=%22%23f0f0f0%22 width=%2240%22 height=%2240%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%23999%22 font-size=%227%22%3ENo Img%3C/text%3E%3C/svg%3E';">
              ` : `
                <div style="width: 40px; height: 40px; background: #f0f0f0; border-radius: 3px; display: flex; align-items: center; justify-content: center; margin: 0 auto 2px; color: #999; font-size: 7px;">No Img</div>
              `}
              <div style="font-size: 9px; color: #333; font-weight: 600; line-height: 1.2;">${heroName}</div>
            </div>
          `;
        }).join('');
        
        return `
          <div style="background: #f9f9f9; border: 1px solid #ddd; border-radius: 4px; padding: 8px; margin-bottom: 8px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
              <strong style="color: #333; font-size: 13px;">${battle.username}</strong>
              <span style="color: ${resultColor}; font-weight: bold; font-size: 11px;">${resultIcon} ${resultText}</span>
            </div>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; margin-bottom: 4px;">
              ${heroesHtml}
            </div>
            ${battle.comment ? `<div style="color: #666; font-size: 10px; font-style: italic; margin-top: 4px; padding-top: 4px; border-top: 1px solid #e0e0e0;">${battle.comment}</div>` : ''}
          </div>
        `;
      }).join('');
    }
    
    // Show modal
    const modalHtml = `
      <div id="battle-record-modal" style="display: block; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 10000; overflow-y: auto; padding: 20px;">
        <div style="background: white; max-width: 900px; margin: 20px auto; border-radius: 8px; padding: 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <h2 style="color: var(--color-orange); margin: 0; font-size: 18px;">Battle Record - Team ${numTeamNumber}</h2>
            <button onclick="closeBattleRecordModal()" style="padding: 6px 12px; background: #d32f2f; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;">Close</button>
          </div>
          <div style="background: #f5f5f5; padding: 8px; border-radius: 4px; margin-bottom: 12px; font-size: 12px;">
            <strong>Zone:</strong> ${zoneName}
          </div>
          <h3 style="color: #333; margin: 0 0 8px 0; font-size: 14px;">Previous Battles</h3>
          <div style="max-height: 60vh; overflow-y: auto; padding-right: 4px;">
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 10px;">
              ${battleHistoryHtml}
            </div>
          </div>
        </div>
      </div>
    `;
    
    // Remove existing modal if any
    const existingModal = document.getElementById('battle-record-modal');
    if (existingModal) {
      existingModal.remove();
    }
    
    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    
  } catch (error) {
    console.error('Error loading battle history:', error);
    alert('Error loading battle history: ' + error.message);
  }
}

/**
 * Close Battle Record Modal
 */
function closeBattleRecordModal() {
  const modal = document.getElementById('battle-record-modal');
  if (modal) {
    modal.remove();
  }
}

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
  const manualBtn = document.getElementById('manual-battle-btn');
  
  if (resultsDiv) resultsDiv.style.display = 'none';
  if (modalDiv) modalDiv.style.display = 'block';
  
  // Show manual battle button for gmaster and gassist
  if (manualBtn && canEditGuildWar()) {
    manualBtn.style.display = 'block';
  }
  
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
 * Load battle history for a specific enemy team (ALL guild members)
 */
async function loadBattleHistory(username, enemyTeamNumber) {
  const historyList = document.getElementById('battle-history-list');
  
  if (!historyList) return;
  
  historyList.innerHTML = '<p style="color: #888; text-align: center;">Loading...</p>';
  
  try {
    const response = await fetch(`/api/guildwar/battle-history/team/${enemyTeamNumber}?username=${encodeURIComponent(username)}`);
    const data = await response.json();
    
    if (!data.success) {
      throw new Error(data.error);
    }
    
    const battles = data.data || [];
    
    if (battles.length === 0) {
      historyList.innerHTML = '<p style="color: #888; text-align: center; font-size: 13px;">No previous battles for this enemy team.</p>';
      return;
    }
    
    // Fetch hero database to get images
    let heroImageMap = {};
    try {
      const heroResponse = await fetch('/api/heroes');
      const heroData = await heroResponse.json();
      if (heroData.success && heroData.data) {
        heroData.data.forEach(hero => {
          const name = hero.name || hero.heroname;
          heroImageMap[name] = hero.heropicture || hero.heroPicture;
        });
      }
    } catch (error) {
      console.error('Error loading hero images:', error);
    }
    
    historyList.innerHTML = battles.map(battle => {
      const resultIcon = battle.result === 'victory' ? '✅' : battle.result === 'defeat' ? '❌' : '⏳';
      const resultColor = battle.result === 'victory' ? '#4CAF50' : battle.result === 'defeat' ? '#f44336' : '#888';
      const resultText = battle.result === 'victory' ? 'Victory' : battle.result === 'defeat' ? 'Defeat' : 'Pending';
      const battleDate = new Date(battle.battleDate).toLocaleDateString();
      const speedValue = battle.speed || '';
      const heroComments = battle.heroComments || {};
      
      // Build hero list with images in a single row
      const heroesHTML = (battle.heroDetails && battle.heroDetails.length > 0) ? `
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          ${battle.heroDetails.map(h => {
            const heroName = h.heroName || 'Unknown';
            // Try to get image from: 1) saved data, 2) hero database, 3) fallback path
            const heroPicture = h.heroPicture || heroImageMap[heroName] || `/images/heroes/${encodeURIComponent(heroName)}.jpg`;
            const comment = heroComments[heroName];
            
            return `
              <div style="display: flex; flex-direction: column; align-items: center; padding: 6px; background: #f9f9f9; border-radius: 4px; min-width: 60px;">
                <img src="${heroPicture}" style="width: 40px; height: 40px; border-radius: 4px; object-fit: cover; border: 1px solid #ddd; margin-bottom: 4px;" onerror="this.style.display='none'">
                <div style="color: #333; font-weight: 600; font-size: 11px; text-align: center;">${heroName}</div>
                ${comment ? `<div style="color: #2196F3; font-size: 10px; text-align: center;">💬 ${comment}</div>` : ''}
              </div>
            `;
          }).join('')}
        </div>
      ` : (battle.targetHeroes || []).map(name => `<span style="color: #333;">${name}</span>`).join(', ');
      
      return `
        <div style="background: white; padding: 10px; border-radius: 4px; border-left: 3px solid ${resultColor}; border: 1px solid #ddd;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; flex-wrap: wrap; gap: 8px;">
            <div style="display: flex; align-items: center; gap: 10px; flex: 1; min-width: 200px;">
              <span style="color: var(--color-orange); font-weight: bold; font-size: 13px;">${battle.targetUsername}</span>
              <div style="display: flex; align-items: center; gap: 4px;">
                <label style="color: #4FC3F7; font-size: 11px; font-weight: bold;">⚡</label>
                <input 
                  type="text" 
                  id="speed_${battle._id}" 
                  value="${speedValue}" 
                  placeholder="Spd"
                  onblur="updateBattleSpeed('${battle._id}', this.value)"
                  style="width: 50px; padding: 2px 6px; background: white; border: 1px solid #ccc; border-radius: 3px; color: #333; font-size: 11px; text-align: center;"
                />
              </div>
            </div>
            <div style="display: flex; gap: 6px; align-items: center; flex-wrap: wrap;">
              <label style="display: flex; align-items: center; cursor: pointer; font-size: 11px; color: #4CAF50; white-space: nowrap;">
                <input type="radio" name="result_${battle._id}" value="victory" ${battle.result === 'victory' ? 'checked' : ''} 
                       onchange="updateBattleResult('${battle._id}', 'victory', ${battle.enemyTeamNumber})" 
                       style="margin-right: 3px;">
                ✅ Win
              </label>
              <label style="display: flex; align-items: center; cursor: pointer; font-size: 11px; color: #f44336; white-space: nowrap;">
                <input type="radio" name="result_${battle._id}" value="defeat" ${battle.result === 'defeat' ? 'checked' : ''} 
                       onchange="updateBattleResult('${battle._id}', 'defeat', ${battle.enemyTeamNumber})" 
                       style="margin-right: 3px;">
                ❌ Loss
              </label>
              <button onclick="deleteBattleHistory('${battle._id}', ${battle.enemyTeamNumber})" 
                      style="padding: 3px 6px; background: #d32f2f; color: white; border: none; border-radius: 3px; cursor: pointer; font-size: 10px;">
                🗑️
              </button>
            </div>
          </div>
          <div style="margin-bottom: 6px;">
            ${heroesHTML}
          </div>
          ${battle.comment ? `<div style="color: var(--color-orange); font-size: 11px; font-weight: bold; padding: 6px; background: #fff3e0; border-radius: 3px; border-left: 2px solid var(--color-orange); margin-top: 6px;">📝 ${battle.comment}</div>` : ''}
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
 * Delete battle history entry
 */
async function deleteBattleHistory(battleId, enemyTeamNumber) {
  if (!confirm('Are you sure you want to delete this battle record?')) {
    return;
  }
  
  console.log('[Delete Battle] Deleting battle:', battleId, 'for enemy team:', enemyTeamNumber);
  
  try {
    const response = await fetch(`/api/guildwar/battle-history/${battleId}`, {
      method: 'DELETE'
    });
    
    const data = await response.json();
    
    console.log('[Delete Battle] Response:', data);
    
    if (!response.ok || !data.success) {
      throw new Error(data.error || 'Failed to delete battle');
    }
    
    // Reload battle history
    const userInfo = localStorage.getItem('lgm_user_info');
    if (userInfo) {
      const username = JSON.parse(userInfo).username;
      console.log('[Delete Battle] Reloading battle history for:', username, 'enemy team:', enemyTeamNumber);
      loadBattleHistory(username, enemyTeamNumber);
    }
    
    // Also reload Guild War notification if on that page
    const gwarNotiContent = document.getElementById('gwar-noti-content');
    if (gwarNotiContent) {
      console.log('[Delete Battle] Reloading Guild War notification');
      setTimeout(() => {
        loadGWarNoti();
      }, 500);
    }
    
  } catch (error) {
    console.error('Error deleting battle:', error);
    alert('Failed to delete battle: ' + error.message);
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
    grid.innerHTML = '<p style="color: #666; grid-column: 1/-1; text-align: center;">No heroes found</p>';
    return;
  }

  grid.innerHTML = heroes.map(hero => `
    <div 
      onclick="confirmFinderHero('${hero.heroname}', '${hero.heroPicture}', ${slotIndex})"
      style="background: white; border: 2px solid #ddd; border-radius: 8px; padding: 8px; cursor: pointer; transition: all 0.3s; text-align: center;"
      onmouseover="this.style.borderColor='var(--color-orange)'; this.style.boxShadow='0 2px 8px rgba(255,102,0,0.3)';"
      onmouseout="this.style.borderColor='#ddd'; this.style.boxShadow='none';"
    >
      <img src="${hero.heroPicture}" alt="${hero.heroname}" style="width: 100%; height: auto; max-width: 100px; object-fit: contain; border-radius: 6px; margin: 0 auto 6px; display: block;">
      <div style="color: #333; font-size: 12px; font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${hero.heroname}">${hero.heroname}</div>
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
      <div style="font-size: 10px; color: #333; font-weight: 600;">${heroname}</div>
    </div>
  `;
  slot.style.border = '2px solid var(--color-orange)';
  slot.style.background = 'white';

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
    
    // Get current user
    let currentUser = window.currentUser || localStorage.getItem('username');
    if (!currentUser) {
      const userInfo = localStorage.getItem('lgm_user_info');
      if (userInfo) {
        try {
          currentUser = JSON.parse(userInfo).username;
        } catch (e) {
          console.error('Error parsing user info:', e);
        }
      }
    }
    
    console.log('[Search] Current user:', currentUser);

    const response = await fetch('/api/guildwar/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ heroes: heroNames, username: currentUser })
    });

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.error);
    }

    let teams = data.data || [];

    // ALWAYS filter by guild - only show guild members
    if (currentUser) {
      try {
        // Get user's guild
        const guildResponse = await fetch(`/api/guilds/member/${currentUser}`);
        if (guildResponse.ok) {
          const guildData = await guildResponse.json();
          if (guildData.success && guildData.data) {
            // Build complete list of guild members including master and assistants
            const guildMembers = guildData.data.guildMemberNames || [];
            const guildMaster = guildData.data.guildMasterName;
            const guildAssistants = guildData.data.guildAssistants || [];
            
            // Combine all members (master, assistants, and regular members)
            const allGuildMembers = [...new Set([guildMaster, ...guildAssistants, ...guildMembers])];
            
            console.log('[Guild Filter] Current user:', currentUser);
            console.log('[Guild Filter] Guild name:', guildData.data.guildName);
            console.log('[Guild Filter] Guild master:', guildMaster);
            console.log('[Guild Filter] Guild members array:', guildMembers);
            console.log('[Guild Filter] All guild members (combined):', allGuildMembers);
            console.log('[Guild Filter] Teams before filter:', teams.map(t => t.username));
            
            // Filter teams to only show guild members (including master and assistants)
            const beforeCount = teams.length;
            teams = teams.filter(team => allGuildMembers.includes(team.username));
            const afterCount = teams.length;
            
            console.log('[Guild Filter] Teams after filter:', teams.map(t => t.username));
            console.log(`[Guild Filter] Filtered ${beforeCount - afterCount} teams out of ${beforeCount}`);
          } else {
            // User not in guild
            listDiv.innerHTML = '<p style="color: #d32f2f; grid-column: 1/-1; text-align: center;">You must be in a guild to search for teams.</p>';
            return;
          }
        }
      } catch (error) {
        console.error('Error filtering by guild:', error);
        listDiv.innerHTML = '<p style="color: #d32f2f; grid-column: 1/-1; text-align: center;">Error loading guild information.</p>';
        return;
      }
    }

    if (teams.length === 0) {
      listDiv.innerHTML = '<p style="color: #888; grid-column: 1/-1; text-align: center;">No guild members found with these heroes.</p>';
      return;
    }

    listDiv.innerHTML = teams.map((team, index) => {
      // Get user's IGN if available, otherwise use username
      const displayName = team.username; // You can add IGN support later if needed
      const matchedHeroes = team.heroes.filter(h => heroNames.includes(h.heroName));
      const usedHeroes = team.usedHeroes || [];
      const usedPets = team.usedPets || [];
      const battles = team.battles || [];
      const battleCount = battles.length;
      const maxBattles = 5;
      
      // Check if user has available heroes (heroes that haven't been used yet)
      const availableHeroes = matchedHeroes.filter(h => !usedHeroes.includes(h.heroName));
      const hasAvailableHeroes = availableHeroes.length > 0;
      const canStillFight = battleCount < maxBattles && hasAvailableHeroes;
      
      const assignedTo = team.assignedTo;
      
      // Store hero details in a global variable to avoid JSON.stringify issues
      if (!window.guildWarTeamData) window.guildWarTeamData = {};
      window.guildWarTeamData[`team_${index}`] = matchedHeroes;

      return `
        <div data-username="${team.username}" data-used-heroes='${JSON.stringify(usedHeroes)}' data-used-pets='${JSON.stringify(usedPets)}' style="background: white; padding: 15px; border-radius: 4px; border: 1px solid #ddd;">
          <div style="color: var(--color-orange); font-weight: bold; font-size: 16px; margin-bottom: 8px;">${displayName}</div>
          <div style="color: #666; font-size: 13px; margin-bottom: 10px;">Has:</div>
          ${matchedHeroes.map(h => {
        const heroName = h.heroName || 'Unknown';
        const starLevel = h.starLevel || 0;
        const ring = h.ring || 'No Ring';
        const isUsed = usedHeroes.includes(heroName);

        return `
              <div style="background: ${isUsed ? '#ffebee' : '#f5f5f5'}; padding: 8px; margin-bottom: 6px; border-radius: 4px; border-left: 3px solid ${isUsed ? '#d32f2f' : 'var(--color-orange)'}; ${isUsed ? 'opacity: 0.6;' : ''}">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <div style="color: #333; font-weight: 600; font-size: 14px; ${isUsed ? 'text-decoration: line-through;' : ''}">${heroName}</div>
                  ${isUsed ? '<span style="color: #d32f2f; font-size: 11px; font-weight: bold;">USED</span>' : ''}
                </div>
                <div style="display: flex; align-items: center; gap: 8px; margin-top: 4px;">
                  <span style="color: #666; font-size: 12px;">C ${starLevel}</span>
                  ${ring ? `
                    <span style="color: #4FC3F7; font-size: 12px;">${getRingFullName(ring)}</span>
                  ` : ''}
                </div>
              </div>
            `;
      }).join('')}
          <div style="margin-top: 10px; display: flex; flex-direction: column; gap: 6px;">
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 6px; background: #f0f0f0; border-radius: 4px;">
              <span style="font-size: 12px; color: #666;">Battles: ${battleCount}/${maxBattles}</span>
              <span style="font-size: 12px; color: ${hasAvailableHeroes ? '#4CAF50' : '#d32f2f'}; font-weight: bold;">
                ${hasAvailableHeroes ? `${availableHeroes.length} heroes available` : 'No heroes available'}
              </span>
            </div>
            <button type="button" onclick="event.preventDefault(); event.stopPropagation(); pickGuildWarTeam('${team.username}', '${heroNames.join(',')}', 'team_${index}'); return false;" 
                    style="background: ${canStillFight ? 'var(--color-orange)' : '#999'}; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: ${canStillFight ? 'pointer' : 'not-allowed'}; font-size: 13px; font-weight: bold; width: 100%;" ${canStillFight ? '' : 'disabled'}>
              ${!canStillFight ? (battleCount >= maxBattles ? 'Max Battles Reached (5/5)' : 'No Available Heroes') : 'Pick This Team'}
            </button>
          </div>
        </div>
      `;
    }).join('');

  } catch (error) {
    console.error('Error searching for team:', error);
    listDiv.innerHTML = `<p style="color: #d32f2f; grid-column: 1/-1; text-align: center;">Error: ${error.message}</p>`;
  }
}

/**
 * Cycle skill order (0 -> 1 -> 2 -> 3 -> 0)
 * Only allows 3 skills total to be selected across all heroes
 */
function cycleSkillOrder(heroIndex, type) {
  const skillBox = document.getElementById(`skill-${type}-${heroIndex}`);
  const currentOrder = parseInt(skillBox.dataset.order || '0');
  
  // Get all skill boxes across all heroes (assuming 3 heroes max)
  const allSkillBoxes = [];
  for (let h = 0; h < 3; h++) {
    for (let t of ['up', 'down']) {
      const box = document.getElementById(`skill-${t}-${h}`);
      if (box) allSkillBoxes.push(box);
    }
  }
  
  // Count how many skills are currently selected (order > 0)
  const selectedSkills = allSkillBoxes.filter(box => parseInt(box.dataset.order || '0') > 0);
  
  let newOrder;
  if (currentOrder === 0) {
    // Trying to select a new skill
    if (selectedSkills.length >= 3) {
      alert('⚠️ You can only select 3 skills maximum across all heroes!\n\nClick on a selected skill to deselect it first.');
      return;
    }
    newOrder = 1; // Start at 1
  } else {
    // Cycle through 1 -> 2 -> 3 -> 0
    newOrder = currentOrder + 1;
    if (newOrder > 3) newOrder = 0;
  }
  
  // Update the box
  skillBox.dataset.order = newOrder;
  const orderSpan = skillBox.querySelector('.skill-order');
  
  if (newOrder === 0) {
    orderSpan.textContent = '-';
    skillBox.style.background = '#f0f0f0';
    skillBox.style.borderColor = '#ccc';
    skillBox.style.color = '#333';
  } else {
    orderSpan.textContent = newOrder;
    // Color based on order: 1=green, 2=blue, 3=orange
    const colors = {
      1: { bg: '#4CAF50', border: '#388E3C', color: 'white' },
      2: { bg: '#2196F3', border: '#1976D2', color: 'white' },
      3: { bg: '#FF9800', border: '#F57C00', color: 'white' }
    };
    skillBox.style.background = colors[newOrder].bg;
    skillBox.style.borderColor = colors[newOrder].border;
    skillBox.style.color = colors[newOrder].color;
  }
}

/**
 * Show comment popup for team selection
 */
async function showCommentPopup(targetUsername, heroDetails, enemyZone, enemyTeamNumber) {
  return new Promise(async (resolve) => {
    // Remove any existing modal first
    const existingModal = document.getElementById('comment-popup-modal');
    if (existingModal) {
      existingModal.remove();
    }
    
    // Fetch all heroes from database to get images
    let heroDatabase = {};
    try {
      const response = await fetch('/api/heroes');
      if (response.ok) {
        const data = await response.json();
        if (data.success && data.data) {
          // Create a map of hero name to hero data
          data.data.forEach(hero => {
            const name = hero.name || hero.heroname;
            heroDatabase[name] = hero;
          });
        }
      }
    } catch (error) {
      console.error('Error loading hero database:', error);
    }
    
    // Create modal overlay
    const modal = document.createElement('div');
    modal.id = 'comment-popup-modal';
    modal.style.cssText = 'display: flex; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.8); z-index: 10002; overflow-y: auto; align-items: center; justify-content: center;';
    
    // Get hero images
    const heroesHTML = heroDetails.map((hero, index) => {
      const heroName = hero.heroName || 'Unknown';
      const starLevel = hero.starLevel || 0;
      const ring = hero.ring || 'No Ring';
      
      // Get image from database
      const dbHero = heroDatabase[heroName];
      const imageUrl = dbHero?.heropicture || dbHero?.heroPicture || hero.imageUrl || hero.heroPicture || hero.heropicture || `/images/heroes/${encodeURIComponent(heroName)}.jpg`;
      
      return `
        <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; border: 2px solid var(--color-orange);">
          <div style="text-align: center; margin-bottom: 10px;">
            <img src="${imageUrl}" 
                 alt="${heroName}" 
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                 onload="this.style.opacity='1';"
                 style="width: 100px; height: 100px; object-fit: contain; border-radius: 8px; background: white; border: 2px solid #ddd; opacity: 0; transition: opacity 0.2s;">
            <div style="display: none; width: 100px; height: 100px; align-items: center; justify-content: center; border-radius: 8px; background: #f5f5f5; border: 2px solid #ddd; color: #999; font-size: 12px;">No Image</div>
          </div>
          <div style="text-align: center; margin-bottom: 8px;">
            <div style="color: var(--color-orange); font-weight: bold; font-size: 14px;">${heroName}</div>
            <div style="display: flex; align-items: center; gap: 8px; margin-top: 4px; justify-content: center;">
              <span style="color: #666; font-size: 12px;">C ${starLevel}</span>
              ${ring ? `
                <span style="color: #4FC3F7; font-size: 12px;">${getRingFullName(ring)}</span>
              ` : ''}
            </div>
            <div style="display: flex; gap: 8px; justify-content: center; margin-top: 8px;">
              <button type="button" class="position-btn" data-hero-index="${index}" data-position="F" 
                      onclick="selectHeroPosition(${index}, 'F')"
                      style="padding: 4px 12px; background: #2196F3; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 11px; font-weight: bold;">
                Front
              </button>
              <button type="button" class="position-btn" data-hero-index="${index}" data-position="B"
                      onclick="selectHeroPosition(${index}, 'B')"
                      style="padding: 4px 12px; background: #f44336; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 11px; font-weight: bold;">
                Back
              </button>
            </div>
          </div>
          <div style="margin: 10px 0;">
            <div style="font-size: 11px; font-weight: bold; color: #666; margin-bottom: 6px;">Skills (Click to set order 1-2-3):</div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px;">
              <div onclick="cycleSkillOrder(${index}, 'up')" 
                   id="skill-up-${index}"
                   data-order="0"
                   style="background: #f0f0f0; border: 2px solid #ccc; border-radius: 4px; padding: 8px; text-align: center; cursor: pointer; font-size: 12px; font-weight: bold; transition: all 0.2s;">
                Up: <span class="skill-order">-</span>
              </div>
              <div onclick="cycleSkillOrder(${index}, 'down')" 
                   id="skill-down-${index}"
                   data-order="0"
                   style="background: #f0f0f0; border: 2px solid #ccc; border-radius: 4px; padding: 8px; text-align: center; cursor: pointer; font-size: 12px; font-weight: bold; transition: all 0.2s;">
                Down: <span class="skill-order">-</span>
              </div>
            </div>
          </div>
          <textarea 
            id="hero-comment-${index}" 
            placeholder="Add comment for ${heroName}..."
            style="width: 100%; min-height: 60px; padding: 8px; border: 1px solid #ccc; border-radius: 4px; font-size: 12px; resize: vertical; font-family: inherit;"
          ></textarea>
        </div>
      `;
    }).join('');
    
    modal.innerHTML = `
      <div style="max-width: 800px; width: 90%; margin: 20px auto; background: white; border: 2px solid var(--color-orange); border-radius: 8px; padding: 25px; box-shadow: 0 4px 20px rgba(0,0,0,0.3);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
          <h2 style="color: var(--color-orange); margin: 0;">Add Battle Comments</h2>
          <button id="close-comment-popup" style="padding: 8px 16px; background: #d32f2f; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">Cancel</button>
        </div>
        
        <div style="background: #e3f2fd; padding: 12px; border-radius: 4px; margin-bottom: 20px; border-left: 4px solid #2196F3;">
          <div style="color: #1976d2; font-weight: bold; font-size: 14px;">Target: ${targetUsername}</div>
          <div style="color: #666; font-size: 13px; margin-top: 4px;">Enemy: ${enemyZone}, Team ${enemyTeamNumber}</div>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-bottom: 20px;">
          ${heroesHTML}
        </div>
        
        <div style="background: #fff3e0; padding: 15px; border-radius: 8px; border: 2px solid var(--color-orange); margin-bottom: 20px;">
          <div style="display: flex; gap: 20px; align-items: flex-start; margin-bottom: 15px;">
            <div style="flex: 1;">
              <label style="display: block; color: var(--color-orange); font-weight: bold; font-size: 14px; margin-bottom: 12px;">
                Formation
              </label>
              <div style="display: flex; gap: 15px; flex-wrap: wrap;">
                <label style="display: flex; align-items: center; cursor: pointer; font-size: 13px;">
                  <input type="radio" name="formation" value="Basic" checked style="margin-right: 6px;">
                  <span>Basic (3B,2F)</span>
                </label>
                <label style="display: flex; align-items: center; cursor: pointer; font-size: 13px;">
                  <input type="radio" name="formation" value="Balanced" style="margin-right: 6px;">
                  <span>Balanced (2B,3F)</span>
                </label>
                <label style="display: flex; align-items: center; cursor: pointer; font-size: 13px;">
                  <input type="radio" name="formation" value="Attack" style="margin-right: 6px;">
                  <span>Attack (4B,1F)</span>
                </label>
                <label style="display: flex; align-items: center; cursor: pointer; font-size: 13px;">
                  <input type="radio" name="formation" value="Protective" style="margin-right: 6px;">
                  <span>Protective (1B,4F)</span>
                </label>
              </div>
            </div>
            
            <div style="flex-shrink: 0;">
              <label style="display: block; color: var(--color-orange); font-weight: bold; font-size: 14px; margin-bottom: 8px;">
                Pet
              </label>
              <div 
                id="pet-selection-box" 
                onclick="openPetSelector('${targetUsername}')"
                style="width: 80px; height: 80px; border: 2px dashed var(--color-orange); border-radius: 6px; display: flex; align-items: center; justify-content: center; cursor: pointer; background: white; transition: all 0.2s;"
                onmouseover="this.style.borderColor='#ff6b35'; this.style.background='#fff3e0';"
                onmouseout="this.style.borderColor='var(--color-orange)'; this.style.background='white';">
                <span id="pet-placeholder" style="color: #999; font-size: 11px; text-align: center;">Click to<br>Select Pet</span>
                <img id="pet-selected-image" src="" alt="" style="display: none; width: 100%; height: 100%; object-fit: contain; border-radius: 4px;">
              </div>
              <input type="hidden" id="selected-pet-id" value="">
              <input type="hidden" id="selected-pet-name" value="">
              <input type="hidden" id="selected-pet-star" value="">
              <input type="hidden" id="target-username" value="${targetUsername}">
            </div>
          </div>
          
          <label style="display: block; color: var(--color-orange); font-weight: bold; font-size: 14px; margin-bottom: 8px;">
            Team Comment (Overall Strategy)
          </label>
          <textarea 
            id="team-comment" 
            placeholder="Add overall team strategy or notes..."
            style="width: 100%; min-height: 80px; padding: 10px; border: 1px solid #ccc; border-radius: 4px; font-size: 13px; resize: vertical; font-family: inherit;"
          ></textarea>
        </div>
        
        <div style="display: flex; gap: 10px; justify-content: flex-end;">
          <button id="cancel-comment-btn" style="padding: 10px 24px; background: #757575; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px; font-weight: bold;">Cancel</button>
          <button id="confirm-comment-btn" style="padding: 10px 24px; background: var(--color-orange); color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px; font-weight: bold;">Confirm Pick</button>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    // Handle close
    const closeModal = (e) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      if (document.body.contains(modal)) {
        document.body.removeChild(modal);
      }
      resolve(null);
    };
    
    // Add event listeners with preventDefault
    const closeBtn = document.getElementById('close-comment-popup');
    const cancelBtn = document.getElementById('cancel-comment-btn');
    const confirmBtn = document.getElementById('confirm-comment-btn');
    
    if (closeBtn) {
      closeBtn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        closeModal();
      };
    }
    
    if (cancelBtn) {
      cancelBtn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        closeModal();
      };
    }
    
    // Handle confirm
    if (confirmBtn) {
      confirmBtn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        try {
        const heroComments = {};
        const heroPositions = {};
        const heroSkills = {};
        
        heroDetails.forEach((hero, index) => {
          const commentEl = document.getElementById(`hero-comment-${index}`);
          if (commentEl) {
            const comment = commentEl.value.trim();
            if (comment) {
              heroComments[hero.heroName] = comment;
            }
          }
          
          // Get selected position
          const selectedBtn = document.querySelector(`[data-hero-index="${index}"][data-selected="true"]`);
          if (selectedBtn) {
            heroPositions[hero.heroName] = selectedBtn.dataset.position;
          }
          
          // Get selected skills (2 skills per hero: up and down)
          const skills = [];
          for (let type of ['up', 'down']) {
            const skillBox = document.getElementById(`skill-${type}-${index}`);
            if (skillBox) {
              const order = parseInt(skillBox.dataset.order || '0');
              if (order > 0) {
                skills.push({
                  type: type,
                  order: order,
                  name: type.charAt(0).toUpperCase() + type.slice(1)
                });
              }
            }
          }
          
          // Sort skills by order
          skills.sort((a, b) => a.order - b.order);
          
          if (skills.length > 0) {
            heroSkills[hero.heroName] = skills;
          }
        });
        
        const teamCommentEl = document.getElementById('team-comment');
        const teamComment = teamCommentEl ? teamCommentEl.value.trim() : '';
        
        // Get selected formation
        const formationEl = document.querySelector('input[name="formation"]:checked');
        const formation = formationEl ? formationEl.value : 'Basic';
        
        // VALIDATION 1: Check skill orders (must be 1, 2, 3 without duplicates)
        const allSkillOrders = [];
        Object.values(heroSkills).forEach(skills => {
          skills.forEach(skill => allSkillOrders.push(skill.order));
        });
        
        if (allSkillOrders.length > 0) {
          // Check for duplicates
          const uniqueOrders = [...new Set(allSkillOrders)];
          if (uniqueOrders.length !== allSkillOrders.length) {
            alert('⚠️ Skill Order Error!\n\nYou have duplicate skill orders. Each skill must have a unique order (1, 2, or 3).\n\nPlease fix the skill orders before confirming.');
            return;
          }
          
          // Check if orders are 1, 2, 3
          allSkillOrders.sort();
          const expectedOrders = allSkillOrders.length === 3 ? [1, 2, 3] : 
                                allSkillOrders.length === 2 ? [1, 2] :
                                allSkillOrders.length === 1 ? [1] : [];
          
          if (JSON.stringify(allSkillOrders) !== JSON.stringify(expectedOrders)) {
            alert('⚠️ Skill Order Error!\n\nSkill orders must be sequential starting from 1.\n\nFor example: 1, 2, 3 (not 1, 2, 2 or 1, 3)');
            return;
          }
        }
        
        // VALIDATION 2: Check formation vs positions
        const formationRules = {
          'Basic': { front: 2, back: 3 },
          'Balanced': { front: 3, back: 2 },
          'Attack': { front: 1, back: 4 },
          'Protective': { front: 4, back: 1 }
        };
        
        const rule = formationRules[formation];
        if (rule) {
          let frontCount = 0;
          let backCount = 0;
          
          Object.values(heroPositions).forEach(position => {
            if (position === 'F') frontCount++;
            if (position === 'B') backCount++;
          });
          
          if (frontCount > rule.front || backCount > rule.back) {
            alert(
              `⚠️ Formation Mismatch!\n\n` +
              `Formation "${formation}" requires:\n` +
              `• Front: ${rule.front} heroes\n` +
              `• Back: ${rule.back} heroes\n\n` +
              `You selected:\n` +
              `• Front: ${frontCount} heroes\n` +
              `• Back: ${backCount} heroes\n\n` +
              `Please adjust hero positions to match the formation.`
            );
            return;
          }
          
          // Also check if positions are set for all heroes
          if (frontCount + backCount < heroDetails.length) {
            alert(`⚠️ Missing Positions!\n\nPlease set Front or Back position for all ${heroDetails.length} heroes.`);
            return;
          }
        }
        
        // Get selected pet BEFORE removing modal
        const petIdInput = document.getElementById('selected-pet-id');
        const petNameInput = document.getElementById('selected-pet-name');
        const petStarInput = document.getElementById('selected-pet-star');
        
        console.log('[Comment Popup] Pet input elements:', {
          petIdInput: !!petIdInput,
          petNameInput: !!petNameInput,
          petStarInput: !!petStarInput
        });
        
        console.log('[Comment Popup] Pet input values before reading:', {
          petId: petIdInput?.value,
          petName: petNameInput?.value,
          petStar: petStarInput?.value
        });
        
        const selectedPetId = petIdInput?.value || '';
        const selectedPetName = petNameInput?.value || '';
        const selectedPetStar = petStarInput?.value || '';
        
        console.log('[Comment Popup] Selected pet after reading:', { selectedPetId, selectedPetName, selectedPetStar });
        
        // Now remove the modal
        if (document.body.contains(modal)) {
          document.body.removeChild(modal);
        }
        
        const petData = selectedPetId ? {
          petId: selectedPetId,
          petName: selectedPetName,
          starLevel: parseInt(selectedPetStar) || 0
        } : null;
        
        console.log('[Comment Popup] Pet data created:', petData);
        
        const result = {
          heroComments,
          heroPositions,
          heroSkills,
          teamComment,
          formation,
          pet: petData
        };
        
        console.log('[Comment Popup] Full result:', JSON.stringify(result, null, 2));
        
        resolve(result);
        
        } catch (error) {
          console.error('=== Error in Confirm Handler ===', error);
          alert('Error: ' + error.message);
        }
      };
    }
    
    // Close on overlay click
    modal.onclick = (e) => {
      if (e.target === modal) {
        e.preventDefault();
        e.stopPropagation();
        closeModal();
      }
    };
    
    // Prevent any form submission
    modal.addEventListener('submit', (e) => {
      e.preventDefault();
      return false;
    });
  });
}

/**
 * Open pet selector modal
 */
function openPetSelector(targetUsername) {
  console.log('[Pet Selector] Target username:', targetUsername);
  
  // Get used pets from the TARGET USER's data
  // We need to check what pets the target user has already used
  let usedPets = [];
  const searchResults = document.getElementById('find-team-results');
  if (searchResults && targetUsername) {
    const teamCards = searchResults.querySelectorAll('[data-username]');
    teamCards.forEach(card => {
      if (card.dataset.username === targetUsername) {
        const usedPetsData = card.dataset.usedPets;
        if (usedPetsData) {
          try {
            usedPets = JSON.parse(usedPetsData);
          } catch (e) {
            console.error('Error parsing used pets:', e);
          }
        }
      }
    });
  }
  
  console.log('[Pet Selector] Target user:', targetUsername);
  console.log('[Pet Selector] Used pets by target user:', usedPets);
  
  // Load target user's pets
  const userPetsKey = `lgm_user_pets_${targetUsername}`;
  const userPets = JSON.parse(localStorage.getItem(userPetsKey) || '{}');
  
  // Get all pets
  fetch('/api/pets')
    .then(res => res.json())
    .then(data => {
      if (!data.success || !data.data) {
        alert('Failed to load pets');
        return;
      }
      
      const allPets = data.data;
      
      // Get all owned pets (including used ones for display)
      const ownedPets = allPets.filter(pet => userPets[pet._id]);
      
      console.log('[Pet Selector] Target user owned pets:', Object.keys(userPets).length);
      console.log('[Pet Selector] Used pets:', usedPets.length);
      console.log('[Pet Selector] Total owned pets:', ownedPets.length);
      
      if (ownedPets.length === 0) {
        alert(`${targetUsername} doesn't have any pets yet!`);
        return;
      }
      
      showPetSelectorModal(ownedPets, userPets, usedPets);
    })
    .catch(error => {
      console.error('Error loading pets:', error);
      alert('Failed to load pets');
    });
}

/**
 * Show pet selector modal
 */
function showPetSelectorModal(pets, userPets, usedPets = []) {
  // Remove existing modal if any
  const existingModal = document.getElementById('pet-selector-modal');
  if (existingModal) {
    existingModal.remove();
  }
  
  const petsHTML = pets.map(pet => {
    const savedPet = userPets[pet._id];
    const starLevel = savedPet ? savedPet.starLevel : 0;
    const stars = '⭐'.repeat(starLevel);
    const isUsed = usedPets.includes(pet._id);
    
    return `
      <div 
        class="pet-selector-card" 
        onclick="${isUsed ? '' : `selectPet('${pet._id}', '${pet.name}', ${starLevel}, '${pet.petPicture || ''}')`}"
        style="background: ${isUsed ? '#f5f5f5' : 'white'}; border: 2px solid ${isUsed ? '#999' : '#ddd'}; border-radius: 6px; padding: 10px; text-align: center; cursor: ${isUsed ? 'not-allowed' : 'pointer'}; transition: all 0.2s; opacity: ${isUsed ? '0.6' : '1'}; position: relative;"
        ${isUsed ? '' : `onmouseover="this.style.borderColor='var(--color-orange)'; this.style.transform='scale(1.05)';" onmouseout="this.style.borderColor='#ddd'; this.style.transform='scale(1)';"`}>
        ${isUsed ? `
          <div style="position: absolute; top: 5px; right: 5px; background: #d32f2f; color: white; padding: 2px 6px; border-radius: 10px; font-size: 9px; font-weight: bold;">USED</div>
        ` : ''}
        ${pet.petPicture ?
          `<img src="${pet.petPicture}" alt="${pet.name}" style="width: 80px; height: 80px; object-fit: contain; border-radius: 4px; border: 1px solid #ddd; display: block; margin: 0 auto 8px;">` :
          '<div style="width: 80px; height: 80px; background: #f0f0f0; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: #999; margin: 0 auto 8px; border: 1px solid #ddd; font-size: 10px;">No Image</div>'
        }
        <div style="font-size: 13px; font-weight: 600; color: #333; margin-bottom: 4px;">${pet.name}</div>
        <div style="font-size: 12px; color: #666;">${stars}</div>
      </div>
    `;
  }).join('');
  
  const modal = document.createElement('div');
  modal.id = 'pet-selector-modal';
  modal.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); z-index: 10003; display: flex; align-items: center; justify-content: center;';
  
  modal.innerHTML = `
    <div style="background: white; padding: 25px; border-radius: 8px; max-width: 600px; width: 90%; max-height: 80vh; overflow-y: auto;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <h2 style="color: var(--color-orange); margin: 0;">Select Your Pet</h2>
        <button onclick="closePetSelector()" style="padding: 8px 16px; background: #d32f2f; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">Close</button>
      </div>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 15px;">
        ${petsHTML}
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Close on overlay click
  modal.onclick = (e) => {
    if (e.target === modal) {
      closePetSelector();
    }
  };
}

/**
 * Select a pet
 */
function selectPet(petId, petName, starLevel, petPicture) {
  console.log('[Pet Select] Called with:', petId, petName, starLevel, petPicture);
  
  // Update hidden inputs
  const petIdInput = document.getElementById('selected-pet-id');
  const petNameInput = document.getElementById('selected-pet-name');
  const petStarInput = document.getElementById('selected-pet-star');
  
  console.log('[Pet Select] Found inputs:', {
    petIdInput: !!petIdInput,
    petNameInput: !!petNameInput,
    petStarInput: !!petStarInput
  });
  
  if (petIdInput) petIdInput.value = petId;
  if (petNameInput) petNameInput.value = petName;
  if (petStarInput) petStarInput.value = starLevel;
  
  console.log('[Pet Select] Set values:', {
    petId: petIdInput?.value,
    petName: petNameInput?.value,
    petStar: petStarInput?.value
  });
  
  // Update display
  const placeholder = document.getElementById('pet-placeholder');
  const image = document.getElementById('pet-selected-image');
  
  if (petPicture && placeholder && image) {
    placeholder.style.display = 'none';
    image.src = petPicture;
    image.style.display = 'block';
  } else if (placeholder) {
    placeholder.textContent = petName;
    placeholder.style.fontSize = '10px';
  }
  
  // Close modal
  closePetSelector();
  
  // Show feedback
  if (typeof toastManager !== 'undefined') {
    toastManager.success(`${petName} selected!`);
  }
}

/**
 * Close pet selector modal
 */
function closePetSelector() {
  const modal = document.getElementById('pet-selector-modal');
  if (modal) {
    modal.remove();
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
  let heroDetails = (window.guildWarTeamData && window.guildWarTeamData[teamDataKey]) || [];
  
  // Validate: Check if the heroes being picked are available (not already used)
  // Get the used heroes for this user from the search results
  const searchResults = document.getElementById('find-team-results');
  if (searchResults) {
    const teamCards = searchResults.querySelectorAll('[data-username]');
    let usedHeroes = [];
    
    teamCards.forEach(card => {
      if (card.dataset.username === targetUsername) {
        const usedHeroesData = card.dataset.usedHeroes;
        if (usedHeroesData) {
          try {
            usedHeroes = JSON.parse(usedHeroesData);
          } catch (e) {
            console.error('Error parsing used heroes:', e);
          }
        }
      }
    });
    
    // Check how many of the selected heroes are already used
    const selectedHeroNames = heroDetails.map(h => h.heroName);
    const unavailableHeroes = selectedHeroNames.filter(hero => usedHeroes.includes(hero));
    
    if (unavailableHeroes.length > 0) {
      alert(
        `⚠️ Cannot pick this team!\n\n` +
        `The following heroes are already used:\n` +
        `${unavailableHeroes.map(h => `• ${h}`).join('\n')}\n\n` +
        `Please select a team with available heroes only.`
      );
      return;
    }
    
    // Also validate that we have at least 1 hero available
    if (selectedHeroNames.length === 0) {
      alert('⚠️ No heroes selected. Please try again.');
      return;
    }
  }
  
  // Enrich hero details with pictures from hero database
  try {
    const heroResponse = await fetch('/api/heroes');
    if (heroResponse.ok) {
      const heroData = await heroResponse.json();
      const allHeroes = heroData.data || [];
      
      // Create a map of hero names to pictures
      const heroPictureMap = {};
      allHeroes.forEach(hero => {
        heroPictureMap[hero.heroname] = hero.heroPicture;
      });
      
      // Add heroPicture to each hero in heroDetails
      heroDetails = heroDetails.map(hero => ({
        ...hero,
        heroPicture: hero.heroPicture || heroPictureMap[hero.heroName] || ''
      }));
    }
  } catch (error) {
    console.error('Error fetching hero pictures:', error);
  }

  // Get enemy team info from findTeamState
  const enemyZone = findTeamState.zoneName || 'Unknown Zone';
  const enemyTeamNumber = findTeamState.teamNumber || 0;

  // Show comment popup modal
  const commentData = await showCommentPopup(targetUsername, heroDetails, enemyZone, enemyTeamNumber);
  
  console.log('[Pick Team] Received commentData:', JSON.stringify(commentData, null, 2));
  
  // User cancelled
  if (!commentData) {
    return;
  }

  try {
    // Save to current selection
    // IMPORTANT: The selection should be saved for targetUsername (the person whose heroes are being used)
    // NOT for username (the person doing the picking)
    console.log('[Pick Team] commentData.pet value:', commentData.pet);
    console.log('[Pick Team] commentData.pet type:', typeof commentData.pet);
    console.log('[Pick Team] Assigning target to:', targetUsername, '(picked by:', username, ')');
    
    const selectionResponse = await fetch('/api/guildwar/selection', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: targetUsername, // The person whose heroes are being used
        targetUsername: targetUsername, // Same as username for consistency
        targetHeroes,
        heroDetails,
        enemyZone,
        enemyTeamNumber,
        comment: commentData.teamComment,
        heroComments: commentData.heroComments,
        heroSkills: commentData.heroSkills,
        formation: commentData.formation,
        pet: commentData.pet
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
        username: targetUsername, // The person whose heroes are being used
        targetUsername: targetUsername, // Same as username for consistency
        targetHeroes,
        heroDetails,
        enemyZone,
        enemyTeamNumber,
        comment: commentData.teamComment,
        heroComments: commentData.heroComments,
        pet: commentData.pet
      })
    });

    const historyData = await historyResponse.json();
    
    if (historyResponse.ok && historyData.success) {
      alert(`Picked ${targetUsername} to fight ${enemyZone}, Team ${enemyTeamNumber}!\nCheck 'GWar Noti' in My Team.\n\nPage will reload to update availability.`);
      
      // Reload the entire page to update used heroes and pets
      console.log('[Pick Team] Reloading page to update hero and pet availability');
      window.location.reload();
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
    const response = await fetch(`/api/guildwar/selections/${username}`);
    const data = await response.json();

    if (data.success && data.data && data.data.length > 0) {
      const selections = data.data;
      
      console.log('[GWar Noti] Selections loaded:', selections);
      console.log('[GWar Noti] First selection pet data:', selections[0]?.pet);
      
      // Fetch enemy names and battle results for all selections
      const selectionsWithEnemyNames = await Promise.all(selections.map(async (selection) => {
        let enemyName = '';
        let battleResult = null;
        let battleId = null;
        const enemyTeamNumber = selection.enemyTeamNumber;
        
        if (enemyTeamNumber) {
          try {
            const teamResponse = await fetch(`/api/guildwar/number/${enemyTeamNumber}?username=${encodeURIComponent(username)}`);
            const teamData = await teamResponse.json();
            if (teamData.success && teamData.data) {
              enemyName = teamData.data.enemyName || '';
            }
          } catch (e) {
            console.error('Error fetching enemy name:', e);
          }
          
          // Fetch battle history to get current result
          try {
            const historyResponse = await fetch(`/api/guildwar/battle-history/${username}/${enemyTeamNumber}`);
            const historyData = await historyResponse.json();
            if (historyData.success && historyData.data && historyData.data.length > 0) {
              const battle = historyData.data[0]; // Most recent battle
              battleResult = battle.result;
              battleId = battle._id;
            }
          } catch (e) {
            console.error('Error fetching battle result:', e);
          }
        }
        
        return { ...selection, enemyName, battleResult, battleId };
      }));
      
      // Render all selections
      const selectionsHtml = selectionsWithEnemyNames.map((selection, index) => {
        const targetHeroes = selection.targetHeroes || [];
        const heroDetails = selection.heroDetails || [];
        const enemyZone = selection.enemyZone || 'Unknown Zone';
        const enemyTeamNumber = selection.enemyTeamNumber || '?';
        const enemyName = selection.enemyName || '';
        const heroComments = selection.heroComments || {};
        const teamComment = selection.comment || '';

        return `
        <div style="background: white; padding: 12px; border-radius: 6px; border: 2px solid var(--color-orange); min-width: 380px; flex-shrink: 0;">
          <div style="border-bottom: 1px solid #ddd; padding-bottom: 6px; margin-bottom: 10px;">
            <h2 style="color: var(--color-orange); margin: 0; font-size: 16px;">Target #${index + 1}</h2>
          </div>
          
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 12px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 10px;">
            <div style="font-size: 12px; color: white; margin-bottom: 8px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px;">🎯 Enemy Target</div>
            <div style="background: rgba(255,255,255,0.95); padding: 10px; border-radius: 4px;">
              <div style="font-size: 16px; color: #333; margin-bottom: 4px;">
                <span style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; font-weight: bold;">${enemyZone}</span>
              </div>
              <div style="font-size: 15px; color: #333; margin-bottom: 4px;">
                Team <span style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; font-weight: bold; font-size: 18px;">${enemyTeamNumber}</span>
              </div>
              ${enemyName ? `<div style="font-size: 13px; color: #666; margin-top: 6px; padding-top: 6px; border-top: 1px solid #e0e0e0;">Enemy: <span style="color: #d32f2f; font-weight: bold;">${enemyName}</span></div>` : ''}
            </div>
          </div>
          
          ${teamComment ? `
          <div style="margin-bottom: 10px; background: #fff3e0; padding: 10px; border-radius: 4px; border-left: 3px solid var(--color-orange);">
            <div style="font-size: 11px; color: var(--color-orange); margin-bottom: 4px; font-weight: bold;">📝 Strategy</div>
            <div style="color: #333; font-size: 11px; line-height: 1.4; white-space: pre-wrap;">${teamComment}</div>
          </div>
          ` : ''}
          
          ${selection.formation ? `
          <div style="margin-bottom: 10px; background: #e3f2fd; padding: 8px; border-radius: 4px; border-left: 3px solid #2196F3;">
            <div style="font-size: 11px; color: #1976d2; font-weight: bold;">⚡ Formation: ${selection.formation}</div>
          </div>
          ` : ''}
          
          ${selection.pet ? `
          <div style="margin-bottom: 10px; background: #fff3e0; padding: 10px; border-radius: 4px; border-left: 3px solid var(--color-orange); display: flex; align-items: center; gap: 10px;">
            <div style="font-size: 11px; color: var(--color-orange); font-weight: bold;">🐾 Pet:</div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <div style="font-size: 12px; color: #333; font-weight: 600;">${selection.pet.petName}</div>
              <div style="font-size: 11px; color: #666;">${'⭐'.repeat(selection.pet.starLevel || 0)}</div>
            </div>
          </div>
          ` : ''}
          
          <h3 style="color: #333; margin: 10px 0 8px 0; font-size: 13px;">⚔️ Selected Heroes:</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin-top: 15px;">
            ${heroDetails.length > 0 ? heroDetails.map(hero => {
        const heroName = hero.heroName || 'Unknown';
        const heroPicture = hero.heroPicture || '';
        const starLevel = hero.starLevel || 0;
        const ring = hero.ring || 'No Ring';
        const heroComment = heroComments[heroName] || '';
        const order = hero.order;
        const formation = order === 1 ? 'Front' : order === 3 ? 'Back' : 'Not Set';
        const formationColor = order === 1 ? '#4CAF50' : order === 3 ? '#FF9800' : '#999';
        
        // Get skills for this hero
        const heroSkillsData = selection.heroSkills || {};
        const skills = heroSkillsData[heroName] || [];

        return `
                <div style="background: white; padding: 8px; border-radius: 4px; border: 2px solid var(--color-orange); box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                  ${heroPicture ? `
                    <div style="text-align: center; margin-bottom: 6px; position: relative;">
                      <img src="${heroPicture}" alt="${heroName}" 
                        style="width: 60px; height: 60px; object-fit: contain; border-radius: 4px; border: 1px solid #ddd;"
                        onerror="this.style.display='none'">
                      ${order ? `
                        <div style="position: absolute; top: -4px; right: -4px; background: ${formationColor}; color: white; padding: 2px 6px; border-radius: 10px; font-size: 9px; font-weight: bold; box-shadow: 0 1px 3px rgba(0,0,0,0.2);">
                          ${formation === 'Front' ? 'F' : 'B'}
                        </div>
                      ` : ''}
                    </div>
                  ` : ''}
                  <div style="color: #333; font-weight: bold; font-size: 12px; margin-bottom: 4px; text-align: center;">${heroName}</div>
                  <div style="display: flex; align-items: center; justify-content: center; gap: 4px; flex-wrap: wrap; margin-bottom: 4px;">
                    ${order ? `
                      <span style="background: ${formationColor}; color: white; padding: 1px 6px; border-radius: 8px; font-size: 9px; font-weight: bold;">
                        ${formation}
                      </span>
                    ` : ''}
                    <span style="color: #666; font-size: 10px;">C ${starLevel}</span>
                    ${ring ? `
                      <span style="color: #4FC3F7; font-size: 10px;">${getRingFullName(ring)}</span>
                    ` : ''}
                  </div>
                  ${skills.length > 0 ? `
                  <div style="background: #f5f5f5; padding: 4px; border-radius: 3px; margin-bottom: ${heroComment ? '6px' : '0'};">
                    <div style="font-size: 9px; color: #666; font-weight: bold; margin-bottom: 2px;">Skills:</div>
                    <div style="display: flex; gap: 3px; justify-content: center; flex-wrap: wrap;">
                      ${skills.map(skill => {
                        const colors = {
                          1: '#4CAF50',
                          2: '#2196F3',
                          3: '#FF9800'
                        };
                        return `<span style="background: ${colors[skill.order]}; color: white; padding: 2px 5px; border-radius: 6px; font-size: 8px; font-weight: bold;">${skill.order}. ${skill.name}</span>`;
                      }).join('')}
                    </div>
                  </div>
                  ` : ''}
                  ${heroComment ? `
                  <div style="background: #e3f2fd; padding: 6px; border-radius: 3px; margin-top: 6px; border-left: 2px solid #2196F3;">
                    <div style="color: #1976d2; font-size: 9px; font-weight: bold; margin-bottom: 3px;">💬 Note:</div>
                    <div style="color: #333; font-size: 10px; line-height: 1.3; white-space: pre-wrap;">${heroComment}</div>
                  </div>
                  ` : ''}
                </div>
              `;
      }).join('') : targetHeroes.map(heroName => `
              <div style="background: white; padding: 15px; border-radius: 6px; color: #333; border: 1px solid #ddd; text-align: center;">
                <div style="font-weight: bold;">${heroName}</div>
              </div>
            `).join('')}
          </div>
          
          <div style="margin-top: 10px; padding: 10px; background: #f5f5f5; border-radius: 4px; border: 2px solid ${selection.battleResult ? (selection.battleResult === 'victory' ? '#4CAF50' : '#f44336') : '#4CAF50'};">
            <h3 style="color: #333; margin: 0 0 8px 0; font-size: 12px;">📊 Battle Result</h3>
            ${selection.battleResult && selection.battleResult !== 'pending' ? `
              <div style="background: ${selection.battleResult === 'victory' ? '#e8f5e9' : '#ffebee'}; padding: 8px; border-radius: 4px; margin-bottom: 8px; border-left: 3px solid ${selection.battleResult === 'victory' ? '#4CAF50' : '#f44336'};">
                <div style="font-size: 13px; font-weight: bold; color: ${selection.battleResult === 'victory' ? '#2e7d32' : '#c62828'};">
                  ${selection.battleResult === 'victory' ? '✅ Victory' : '❌ Defeat'}
                </div>
              </div>
            ` : ''}
            <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
              <label style="display: flex; align-items: center; cursor: pointer; font-size: 12px; color: #4CAF50;">
                <input type="radio" name="result_${enemyTeamNumber}" value="victory" ${selection.battleResult === 'victory' ? 'checked' : ''} style="margin-right: 4px; cursor: pointer;">
                ✅ Win
              </label>
              <label style="display: flex; align-items: center; cursor: pointer; font-size: 12px; color: #f44336;">
                <input type="radio" name="result_${enemyTeamNumber}" value="defeat" ${selection.battleResult === 'defeat' ? 'checked' : ''} style="margin-right: 4px; cursor: pointer;">
                ❌ Loss
              </label>
              <button onclick="submitBattleResult('${username}', ${enemyTeamNumber})" 
                      style="margin-left: auto; padding: 6px 14px; background: ${selection.battleResult && selection.battleResult !== 'pending' ? '#FF9800' : '#4CAF50'}; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px; font-weight: bold;">
                ${selection.battleResult && selection.battleResult !== 'pending' ? 'Re-Submit' : 'Submit'}
              </button>
            </div>
          </div>
        </div>
        `;
      }).join('');
      
      // Set the content with all selections
      contentDiv.innerHTML = `
        <div style="margin: 0 auto;">
          <h2 style="color: var(--color-orange); margin-bottom: 20px;">Current Targets (${selections.length}/5)</h2>
          <div style="display: flex; gap: 15px; overflow-x: auto; padding-bottom: 10px;">
            ${selectionsHtml}
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

/**
 * Submit battle result from My Team notification page
 */
async function submitBattleResult(username, enemyTeamNumber) {
  // Get selected result
  const resultRadios = document.getElementsByName(`result_${enemyTeamNumber}`);
  let selectedResult = null;
  
  for (const radio of resultRadios) {
    if (radio.checked) {
      selectedResult = radio.value;
      break;
    }
  }
  
  if (!selectedResult) {
    alert('⚠️ Please select a result (Victory or Defeat) before submitting.');
    return;
  }
  
  const resultText = selectedResult === 'victory' ? 'Victory ✅' : 'Defeat ❌';
  
  if (!confirm(`Submit battle result as ${resultText}?`)) {
    return;
  }
  
  try {
    // Find the battle history entry for this user and enemy team
    const historyResponse = await fetch(`/api/guildwar/battle-history/${username}/${enemyTeamNumber}`);
    const historyData = await historyResponse.json();
    
    if (!historyData.success || !historyData.data || historyData.data.length === 0) {
      alert('❌ No battle record found. Please contact your guild master.');
      return;
    }
    
    // Get the most recent battle (should be the current one)
    const battle = historyData.data[0];
    
    // Update the battle result
    const updateResponse = await fetch(`/api/guildwar/battle-history/${battle._id}/result`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ result: selectedResult })
    });
    
    const updateData = await updateResponse.json();
    
    if (updateResponse.ok && updateData.success) {
      // Get the enemy team
      try {
        const teamResponse = await fetch(`/api/guildwar/number/${enemyTeamNumber}?username=${encodeURIComponent(username)}`);
        const teamData = await teamResponse.json();
        
        if (teamData.success && teamData.data) {
          const teamId = teamData.data._id;
          
          // If victory, automatically mark enemy team as defeated
          // If defeat, automatically unmark enemy team as defeated
          const isDefeated = selectedResult === 'victory';
          
          const defeatResponse = await fetch(`/api/guildwar/${teamId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ isDefeated })
          });
          
          if (defeatResponse.ok) {
            if (selectedResult === 'victory') {
              alert(`✅ Battle result submitted successfully!\n\nResult: ${resultText}\n\nEnemy Team ${enemyTeamNumber} marked as DEFEATED!`);
            } else {
              alert(`✅ Battle result submitted successfully!\n\nResult: ${resultText}\n\nEnemy Team ${enemyTeamNumber} unmarked as defeated.`);
            }
          } else {
            alert(`✅ Battle result submitted successfully!\n\nResult: ${resultText}\n\n⚠️ Could not update team defeat status.`);
          }
        } else {
          alert(`✅ Battle result submitted successfully!\n\nResult: ${resultText}`);
        }
      } catch (e) {
        console.error('Error updating team defeat status:', e);
        alert(`✅ Battle result submitted successfully!\n\nResult: ${resultText}`);
      }
      
      // Reload the page to show updated status
      loadGWarNoti();
    } else {
      alert('❌ Failed to submit result: ' + (updateData.error || 'Unknown error'));
    }
  } catch (error) {
    console.error('Error submitting battle result:', error);
    alert('❌ Error submitting result: ' + error.message);
  }
}

/**
 * Unassign Guild War team (free up heroes)
 */
async function unassignGuildWarTeam(username) {
  if (!confirm('Are you sure you want to unassign this team? This will free up the heroes for other assignments.')) {
    return;
  }

  try {
    const response = await fetch(`/api/guildwar/unassign/${username}`, {
      method: 'DELETE'
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.error || 'Failed to unassign team');
    }

    alert('Team unassigned successfully! Heroes are now available.');
    
    // Reload the page to show updated state
    loadGWarNoti();
  } catch (error) {
    console.error('Error unassigning team:', error);
    alert('Failed to unassign team: ' + error.message);
  }
}

// Manual Battle Entry State
let manualBattleState = {
  selectedMember: null,
  selectedHeroes: [null, null, null],
  currentSlot: null
};

/**
 * Open Manual Battle Entry Modal
 */
async function openManualBattleEntry() {
  // Reset state
  manualBattleState = {
    selectedMember: null,
    selectedHeroes: [null, null, null],
    currentSlot: null
  };
  
  // Reset UI
  for (let i = 0; i < 3; i++) {
    const slot = document.getElementById(`manual-hero-slot-${i}`);
    if (slot) {
      slot.innerHTML = `<span style="color: #999; font-size: 12px;">+ Hero ${i + 1}</span>`;
      slot.style.border = '2px dashed #ccc';
    }
  }
  
  // Check if modal exists
  const modal = document.getElementById('manual-battle-modal');
  if (!modal) {
    console.error('Manual battle modal not found');
    return;
  }
  
  // Load guild members
  try {
    const userInfo = localStorage.getItem('lgm_user_info');
    if (!userInfo) return;
    
    const username = JSON.parse(userInfo).username;
    const guildResponse = await fetch(`/api/guilds/member/${username}`);
    const guildData = await guildResponse.json();
    
    if (guildData.success && guildData.data) {
      const guildMembers = guildData.data.guildMemberNames || [];
      const guildMaster = guildData.data.guildMasterName;
      const guildAssistants = guildData.data.guildAssistants || [];
      
      const allMembers = [...new Set([guildMaster, ...guildAssistants, ...guildMembers])];
      
      const select = document.getElementById('manual-member-select');
      if (select) {
        select.innerHTML = '<option value="">-- Select Member --</option>' +
          allMembers.map(member => `<option value="${member}">${member}</option>`).join('');
      }
    }
  } catch (error) {
    console.error('Error loading guild members:', error);
  }
  
  // Show modal
  modal.style.display = 'block';
}

/**
 * Close Manual Battle Entry Modal
 */
function closeManualBattleModal() {
  const modal = document.getElementById('manual-battle-modal');
  if (modal) {
    modal.style.display = 'none';
  }
}

/**
 * Select hero slot for manual entry
 */
function selectManualHero(slotIndex) {
  manualBattleState.currentSlot = slotIndex;
  openHeroSelectorForManual();
}

/**
 * Open hero selector for manual entry
 */
async function openHeroSelectorForManual() {
  const modal = document.getElementById('hero-selector-modal');
  const grid = document.getElementById('hero-selector-grid');
  const searchInput = document.getElementById('hero-selector-search');
  
  // Get selected member
  const memberSelect = document.getElementById('manual-member-select');
  const selectedMember = memberSelect.value;
  
  if (!selectedMember) {
    alert('Please select a guild member first');
    return;
  }
  
  // Clear previous content
  grid.innerHTML = '<p style="color: #888; text-align: center; grid-column: 1/-1;">Loading member\'s heroes...</p>';
  searchInput.value = '';
  modal.style.display = 'block';
  
  try {
    // Fetch the member's team
    const teamResponse = await fetch(`/api/team/${selectedMember}`);
    const teamData = await teamResponse.json();
    
    if (!teamData.success || !teamData.data) {
      grid.innerHTML = '<p style="color: #d32f2f; text-align: center; grid-column: 1/-1;">This member has no heroes uploaded yet.</p>';
      return;
    }
    
    const memberHeroes = teamData.data.heroes || [];
    
    if (memberHeroes.length === 0) {
      grid.innerHTML = '<p style="color: #888; text-align: center; grid-column: 1/-1;">This member has no heroes.</p>';
      return;
    }
    
    // Fetch all heroes to get images
    const allHeroesResponse = await fetch('/api/heroes');
    const allHeroesData = await allHeroesResponse.json();
    const allHeroes = allHeroesData.success ? allHeroesData.data : [];
    
    // Create a map of hero names to images
    const heroImageMap = {};
    allHeroes.forEach(hero => {
      const name = hero.name || hero.heroname;
      heroImageMap[name] = hero.heropicture || hero.heroPicture;
    });
    
    // Build hero list with member's heroes
    const heroes = memberHeroes.map(h => ({
      heroname: h.heroName,
      heroPicture: heroImageMap[h.heroName] || `/images/heroes/${encodeURIComponent(h.heroName)}.jpg`,
      starLevel: h.starLevel || 0,
      ring: h.ring || ''
    }));
    
    window.allHeroesForManual = heroes;
    renderManualHeroGrid(heroes);
    
    // Setup search
    searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const filtered = heroes.filter(h => 
        (h.heroname || '').toLowerCase().includes(searchTerm)
      );
      renderManualHeroGrid(filtered);
    });
    
  } catch (error) {
    console.error('Error loading heroes:', error);
    grid.innerHTML = `<p style="color: #d32f2f; text-align: center; grid-column: 1/-1;">Error: ${error.message}</p>`;
  }
}

/**
 * Render hero grid for manual entry
 */
function renderManualHeroGrid(heroes) {
  const grid = document.getElementById('hero-selector-grid');
  
  if (heroes.length === 0) {
    grid.innerHTML = '<p style="color: #888; text-align: center; grid-column: 1/-1;">No heroes found</p>';
    return;
  }
  
  grid.innerHTML = heroes.map(hero => {
    const heroname = hero.name || hero.heroname;
    const heroPicture = hero.heropicture || hero.heroPicture;
    
    return `
      <div onclick="selectManualHeroFromGrid('${heroname}', '${heroPicture}')" 
           style="cursor: pointer; padding: 10px; background: white; border: 1px solid #ddd; border-radius: 4px; text-align: center; transition: all 0.2s;">
        <img src="${heroPicture}" style="width: 60px; height: 60px; border-radius: 4px; object-fit: cover; margin-bottom: 5px;">
        <div style="font-size: 12px; color: #333; font-weight: 600;">${heroname}</div>
      </div>
    `;
  }).join('');
}

/**
 * Select hero from grid for manual entry
 */
function selectManualHeroFromGrid(heroname, heroPicture) {
  const slotIndex = manualBattleState.currentSlot;
  
  if (slotIndex === null) return;
  
  // Store hero data (use heroName to match battle history format)
  manualBattleState.selectedHeroes[slotIndex] = { 
    heroName: heroname,
    heroPicture: heroPicture 
  };
  
  // Update UI
  const slot = document.getElementById(`manual-hero-slot-${slotIndex}`);
  slot.innerHTML = `
    <div style="text-align: center;">
      <img src="${heroPicture}" style="width: 50px; height: 50px; border-radius: 4px; object-fit: cover; margin-bottom: 4px;">
      <div style="font-size: 10px; color: #333; font-weight: 600;">${heroname}</div>
    </div>
  `;
  slot.style.border = '2px solid var(--color-orange)';
  slot.style.background = 'white';
  
  // Close hero selector
  document.getElementById('hero-selector-modal').style.display = 'none';
}

/**
 * Save manual battle entry
 */
async function saveManualBattle() {
  const memberSelect = document.getElementById('manual-member-select');
  const selectedMember = memberSelect.value;
  
  if (!selectedMember) {
    alert('Please select a guild member');
    return;
  }
  
  const selectedHeroes = manualBattleState.selectedHeroes.filter(h => h !== null);
  
  if (selectedHeroes.length === 0) {
    alert('Please select at least one hero');
    return;
  }
  
  // Battle result is always 'pending' - user can update it in Previous Battles
  const battleResult = 'pending';
  
  if (!confirm(`Record battle for ${selectedMember} with ${selectedHeroes.length} hero(es)?\n\nYou can set Win/Loss in Previous Battles after saving.`)) {
    return;
  }
  
  try {
    const userInfo = localStorage.getItem('lgm_user_info');
    if (!userInfo) {
      alert('Please login first');
      return;
    }
    
    const currentUser = JSON.parse(userInfo).username;
    const heroNames = selectedHeroes.map(h => h.heroName);
    const enemyTeamNumber = findTeamState.teamNumber;
    const enemyZone = findTeamState.zoneName;
    const teamId = findTeamState.teamId;
    
    // Save as selection (this will mark heroes as used)
    const selectionResponse = await fetch('/api/guildwar/selection', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: selectedMember,
        targetUsername: selectedMember,
        targetHeroes: heroNames,
        heroDetails: selectedHeroes,
        enemyZone,
        enemyTeamNumber,
        comment: `Manual entry by ${currentUser} - ${battleResult}`,
        heroComments: {}
      })
    });
    
    const selectionData = await selectionResponse.json();
    
    if (!selectionData.success) {
      throw new Error(selectionData.error);
    }
    
    // Save to battle history
    const historyResponse = await fetch('/api/guildwar/battle-history', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: selectedMember,
        targetUsername: selectedMember,
        targetHeroes: heroNames,
        heroDetails: selectedHeroes,
        enemyZone,
        enemyTeamNumber,
        comment: `Manual entry by ${currentUser}`,
        result: battleResult
      })
    });
    
    const historyData = await historyResponse.json();
    
    if (!historyData.success) {
      console.error('Failed to save battle history:', historyData);
    }
    
    alert(`✅ Manual battle recorded!\n${selectedMember} - Pending\nHeroes: ${heroNames.join(', ')}\n\nSet Win/Loss in Previous Battles section.`);
    
    // Close modal
    closeManualBattleModal();
    
    // Reload battle history
    loadBattleHistory(currentUser, enemyTeamNumber);
    
  } catch (error) {
    console.error('Error saving manual battle:', error);
    alert('Failed to save manual battle: ' + error.message);
  }
}


/**
 * Handle team screenshot upload
 */
function handleTeamUpload(input, event) {
  // Prevent any default behavior
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  
  console.log('[Team Upload] Starting upload...');
  
  if (!input.files || !input.files[0]) {
    console.log('[Team Upload] No file selected');
    return false;
  }

  const file = input.files[0];
  console.log('[Team Upload] File selected:', file.name);
  
  const useOCR = document.getElementById('use-ocr-checkbox')?.checked || false;

  // Show loading state using opacity for smooth transition
  const loadingDiv = document.getElementById('team-loading');
  const heroesDiv = document.getElementById('team-heroes');
  const emptyDiv = document.getElementById('team-empty');
  const gridDiv = document.getElementById('team-grid');

  if (loadingDiv) {
    loadingDiv.style.opacity = '1';
    loadingDiv.style.pointerEvents = 'auto';
  }
  if (emptyDiv) {
    emptyDiv.style.opacity = '0';
    emptyDiv.style.pointerEvents = 'none';
  }
  if (heroesDiv) {
    heroesDiv.style.opacity = '0.3';
  }
  if (gridDiv) {
    gridDiv.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #666;">Processing image...</div>';
  }
  
  // Process upload asynchronously without blocking
  processTeamUpload(file, useOCR, loadingDiv, heroesDiv, emptyDiv, input);
  
  return false;
}

/**
 * Process team upload asynchronously
 */
async function processTeamUpload(file, useOCR, loadingDiv, heroesDiv, emptyDiv, input) {
  // Set flag to prevent route re-renders during upload
  window.isUploadingTeam = true;
  console.log('[Team Upload] Set isUploadingTeam flag to true');

  try {
    console.log('[Team Upload] Creating FormData...');
    
    // Create FormData
    const formData = new FormData();
    formData.append('image', file);
    formData.append('useOCR', useOCR);

    console.log('[Team Upload] Sending to server...');
    
    // Upload and process image
    const response = await fetch('/api/team/recognize', {
      method: 'POST',
      body: formData
    });

    console.log('[Team Upload] Response received:', response.status);
    
    const data = await response.json();
    console.log('[Team Upload] Data:', data);

    if (!data.success) {
      throw new Error(data.error || 'Failed to process image');
    }

    // Display recognized heroes
    if (data.heroes && data.heroes.length > 0) {
      console.log('[Team Upload] Displaying', data.heroes.length, 'heroes');
      displayRecognizedHeroes(data.heroes);
      if (typeof toastManager !== 'undefined') {
        toastManager.success(`Recognized ${data.heroes.length} heroes!`);
      }
    } else {
      console.log('[Team Upload] No heroes recognized');
      if (typeof toastManager !== 'undefined') {
        toastManager.warning('No heroes recognized. Try manual entry.');
      }
      if (loadingDiv) {
        loadingDiv.style.opacity = '0';
        loadingDiv.style.pointerEvents = 'none';
      }
      if (emptyDiv) {
        emptyDiv.style.opacity = '1';
        emptyDiv.style.pointerEvents = 'auto';
      }
    }

  } catch (error) {
    console.error('[Team Upload] Error:', error);
    if (typeof toastManager !== 'undefined') {
      toastManager.error('Failed to process image: ' + error.message);
    }
    if (loadingDiv) {
      loadingDiv.style.opacity = '0';
      loadingDiv.style.pointerEvents = 'none';
    }
    if (emptyDiv) {
      emptyDiv.style.opacity = '1';
      emptyDiv.style.pointerEvents = 'auto';
    }
  } finally {
    // Reset file input
    if (input) input.value = '';
    // Clear upload flag after a delay to ensure display is complete
    setTimeout(() => {
      window.isUploadingTeam = false;
      console.log('[Team Upload] Cleared isUploadingTeam flag');
    }, 1000);
    console.log('[Team Upload] Upload complete');
  }
}

/**
 * Display recognized heroes in editable grid
 */
function displayRecognizedHeroes(heroes) {
  console.log('[Display Heroes] Starting to display', heroes.length, 'heroes');
  
  const heroesDiv = document.getElementById('team-heroes');
  const gridDiv = document.getElementById('team-grid');
  const loadingDiv = document.getElementById('team-loading');

  if (!heroesDiv || !gridDiv) {
    console.error('[Display Heroes] Required elements not found');
    return;
  }

  // Store heroes data globally BEFORE updating DOM
  window.recognizedHeroes = heroes;

  // Update DOM using requestAnimationFrame for smooth rendering
  console.log('[Display Heroes] Updating DOM...');
  
  // Hide loading using opacity
  if (loadingDiv) {
    loadingDiv.style.opacity = '0';
    loadingDiv.style.pointerEvents = 'none';
  }
  
  // Show heroes with smooth fade-in
  if (heroesDiv) {
    heroesDiv.style.opacity = '1';
  }
  
  // Build HTML string with loading="eager" and fixed dimensions to prevent layout shift
  const heroHTML = heroes.map((hero, index) => {
    const isUnknown = !hero.name || hero.name === 'Unknown' || hero.name === '';
    const imageContent = isUnknown 
      ? '<div style="width: 100px; height: 100px; display: flex; align-items: center; justify-content: center; color: #999; font-size: 14px;">No Image</div>'
      : `<img src="${hero.imageUrl || '/images/heroes/default.jpg'}" 
             alt="${hero.name}" 
             loading="eager"
             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
             onload="this.style.opacity='1';"
             style="width: 100px; height: 100px; object-fit: contain; border-radius: 8px; opacity: 0; transition: opacity 0.15s;">
         <div style="width: 100px; height: 100px; display: none; align-items: center; justify-content: center; color: #999; font-size: 14px;">No Image</div>`;
    
    return `
    <div style="background: white; padding: 15px; border: 2px solid var(--color-orange); border-radius: 8px;">
      <div style="text-align: center; margin-bottom: 10px; width: 100px; height: 100px; margin-left: auto; margin-right: auto; background: #f5f5f5; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
        ${imageContent}
      </div>
      
      <input type="text" 
             id="hero-name-${index}" 
             value="${hero.name || ''}" 
             placeholder="Hero Name"
             style="width: 100%; padding: 8px; margin-bottom: 8px; border: 1px solid #ddd; border-radius: 4px; font-size: 14px;">
      
      <div style="display: flex; gap: 5px; align-items: center; margin-bottom: 8px;">
        <label style="font-size: 12px; color: #666;">Stars:</label>
        <input type="number" 
               id="hero-stars-${index}" 
               value="${hero.starLevel || 0}" 
               min="0" 
               max="12"
               style="width: 60px; padding: 4px; border: 1px solid #ddd; border-radius: 4px; font-size: 14px;">
      </div>
      
      <button type="button" class="remove-hero-btn" data-hero-index="${index}"
              style="width: 100%; padding: 6px; background: #d32f2f; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;">
        Remove
      </button>
    </div>
  `;
  }).join('');
  
  // Update DOM content
  gridDiv.innerHTML = heroHTML;
  
  // Attach event listeners to remove buttons using event delegation
  gridDiv.removeEventListener('click', handleRemoveButtonClick);
  gridDiv.addEventListener('click', handleRemoveButtonClick);
  
  console.log('[Display Heroes] Complete! Displayed', heroes.length, 'heroes');
}

/**
 * Toggle hero owned status
 */
function toggleHeroOwned(button, heroName) {
  const card = button.closest('.hero-card');
  const details = card.querySelector('.hero-details');
  const isOwned = button.textContent.includes('✓ Owned');
  
  if (isOwned) {
    // Mark as not owned
    button.textContent = 'Not Owned';
    button.style.background = '#999';
    card.style.borderColor = '#ddd';
    details.style.display = 'none';
  } else {
    // Mark as owned
    button.textContent = '✓ Owned';
    button.style.background = '#4CAF50';
    card.style.borderColor = 'var(--color-orange)';
    details.style.display = 'block';
  }
  
  // Auto-save
  autoSaveHeroData(heroName);
}

/**
 * Convert ring code to full name
 * rev4 = Revive 4, im5 = Immortality 5, bar6 = Barrier 6
 */
function getRingFullName(ringCode) {
  if (!ringCode) return '';
  if (ringCode === 'no-ring') return 'No Ring';
  
  // Extract prefix and level
  const match = ringCode.match(/^([a-z]+)(\d+)$/i);
  if (!match) return ringCode;
  
  const prefix = match[1].toLowerCase();
  const level = match[2];
  
  const ringNames = {
    'rev': 'Revive',
    'im': 'Immortality',
    'bar': 'Barrier'
  };
  
  const fullName = ringNames[prefix] || prefix;
  return `${fullName} ${level}`;
}

/**
 * Generate colored star display based on star level
 * 0 = 6 yellow, 1-6 = blue + yellow, 7-12 = red + blue
 */
function generateStarDisplay(starLevel) {
  const level = Math.max(0, Math.min(12, parseInt(starLevel) || 0));
  let stars = '';
  
  if (level === 0) {
    // 0 stars = 6 yellow
    stars = '<span style="color: #FFD700;">★★★★★★</span>';
  } else if (level >= 1 && level <= 6) {
    // 1-6 stars = blue + yellow
    const blueStars = level;
    const yellowStars = 6 - level;
    stars = '<span style="color: #4169E1;">' + '★'.repeat(blueStars) + '</span>' +
            '<span style="color: #FFD700;">' + '★'.repeat(yellowStars) + '</span>';
  } else if (level >= 7 && level <= 12) {
    // 7-12 stars = red + blue
    const redStars = level - 6;
    const blueStars = 6 - redStars;
    stars = '<span style="color: #DC143C;">' + '★'.repeat(redStars) + '</span>' +
            '<span style="color: #4169E1;">' + '★'.repeat(blueStars) + '</span>';
  }
  
  return stars;
}

/**
 * Update hero stars display when star level changes from dropdown
 */
function updateHeroStarsFromDropdown(select, heroName) {
  const card = select.closest('.hero-card');
  const starDisplay = card.querySelector('strong').nextElementSibling;
  const starLevel = parseInt(select.value) || 0;
  
  // Update the star display with colored stars
  starDisplay.innerHTML = generateStarDisplay(starLevel);
  
  // Auto-save
  autoSaveHeroData(heroName);
}

/**
 * Update hero stars display when star level changes (legacy support)
 */
function updateHeroStars(input, heroName) {
  const card = input.closest('.hero-card');
  const starDisplay = card.querySelector('strong').nextElementSibling;
  const starLevel = parseInt(input.value) || 0;
  
  // Update the star display with colored stars
  starDisplay.innerHTML = generateStarDisplay(starLevel);
  
  // Auto-save
  autoSaveHeroData(heroName);
}

/**
 * Open ring selector popup
 */
function openRingSelector(heroName) {
  // Create popup overlay
  const overlay = document.createElement('div');
  overlay.id = 'ring-selector-overlay';
  overlay.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 10000;';
  
  // Create popup content
  const popup = document.createElement('div');
  popup.style.cssText = 'background: white; padding: 20px; border-radius: 8px; max-width: 400px; width: 90%;';
  
  const ringTypes = ['rev4', 'rev5', 'rev6', 'im4', 'im5', 'im6', 'bar4', 'bar5', 'bar6'];
  
  popup.innerHTML = `
    <h3 style="margin: 0 0 15px 0; color: var(--color-orange);">Select Ring for ${heroName}</h3>
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 15px;">
      ${ringTypes.map(ringType => `
        <div class="ring-option" onclick="selectRingFromPopup('${heroName}', '${ringType}')"
             style="cursor: pointer; border: 2px solid #ddd; border-radius: 4px; padding: 10px; transition: all 0.2s; text-align: center; background: #f9f9f9;">
          <img src="https://raw.githubusercontent.com/bearthanapol/lgm/main/images/ring/${ringType}.png" 
               alt="${ringType}"
               onerror="this.onerror=null; this.src='https://raw.githubusercontent.com/bearthanapol/lgm/main/images/ring/${ringType}.jpg';"
               style="width: 100%; height: 70px; object-fit: contain; display: block;">
        </div>
      `).join('')}
    </div>
    <button type="button" onclick="selectRingFromPopup('${heroName}', 'no-ring')" 
            style="width: 100%; padding: 10px; background: #999; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px;">
      No Ring
    </button>
  `;
  
  overlay.appendChild(popup);
  document.body.appendChild(overlay);
  
  // Close on overlay click
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeRingSelector();
    }
  });
}

/**
 * Select ring from popup
 */
function selectRingFromPopup(heroName, ringType) {
  // Find the hero card
  const cards = document.querySelectorAll('.hero-card');
  let targetCard = null;
  
  cards.forEach(card => {
    if (card.dataset.heroName === heroName) {
      targetCard = card;
    }
  });
  
  if (targetCard) {
    const hiddenInput = targetCard.querySelector('.hero-ring');
    const button = targetCard.querySelector('.ring-selector-btn');
    
    // Update values
    hiddenInput.value = ringType;
    
    // Update button display
    if (ringType === 'no-ring') {
      // Show "Ring" text (not "No-Ring") to indicate user can click to select
      button.innerHTML = '<span style="font-size: 11px;">Ring</span>';
    } else {
      // Show ring image (40x40 box with 36x36 image)
      button.innerHTML = `
        <img src="https://raw.githubusercontent.com/bearthanapol/lgm/main/images/ring/${ringType}.png" 
             alt=""
             onerror="this.onerror=null; this.src='https://raw.githubusercontent.com/bearthanapol/lgm/main/images/ring/${ringType}.jpg';"
             onload="this.style.opacity='1';"
             style="width: 36px; height: 36px; object-fit: contain; opacity: 0; transition: opacity 0.2s;">
        <span style="display: none; font-size: 11px;">Ring</span>
      `;
    }
    
    // Auto-save
    autoSaveHeroData(heroName);
  }
  
  // Close popup
  closeRingSelector();
}

/**
 * Close ring selector popup
 */
function closeRingSelector() {
  const overlay = document.getElementById('ring-selector-overlay');
  if (overlay) {
    overlay.remove();
  }
}

/**
 * Select hero position (Front/Back) in battle comments
 */
function selectHeroPosition(heroIndex, position) {
  const buttons = document.querySelectorAll(`[data-hero-index="${heroIndex}"]`);
  buttons.forEach(btn => {
    if (btn.dataset.position === position) {
      btn.style.opacity = '1';
      btn.style.transform = 'scale(1.1)';
      btn.setAttribute('data-selected', 'true');
    } else {
      btn.style.opacity = '0.5';
      btn.style.transform = 'scale(1)';
      btn.removeAttribute('data-selected');
    }
  });
}

/**
 * Auto-save hero data when changed
 */
async function autoSaveHeroData(heroName) {
  try {
    const userInfo = JSON.parse(localStorage.getItem('lgm_user_info') || '{}');
    const username = userInfo.username;
    
    if (!username) {
      console.log('[Auto-save] No username, skipping save');
      return;
    }
    
    // Collect all owned heroes
    const heroCards = document.querySelectorAll('.hero-card');
    const ownedHeroes = [];
    
    heroCards.forEach((card, index) => {
      const button = card.querySelector('.toggle-owned-btn');
      const isOwned = button && button.textContent.includes('✓ Owned');
      
      if (isOwned) {
        const name = card.dataset.heroName;
        const starsSelect = card.querySelector('.hero-stars');
        const starLevel = starsSelect ? parseInt(starsSelect.value) || 0 : 0;
        const ring = card.querySelector('.hero-ring')?.value || '';
        
        ownedHeroes.push({
          position: index + 1,
          heroName: name,
          starLevel: starLevel,
          ring: ring,
          rarity: 'Unknown'
        });
      }
    });
    
    console.log('[Auto-save] Saving', ownedHeroes.length, 'heroes');
    
    // Save to server
    const response = await fetch('/api/team/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        heroes: ownedHeroes
      })
    });
    
    if (response.ok) {
      console.log('[Auto-save] Saved successfully');
    }
    
  } catch (error) {
    console.error('[Auto-save] Error:', error);
  }
}

/**
 * Save user's hero collection
 */
async function saveMyTeamCollection() {
  console.log('[My Team] Saving collection...');
  
  try {
    const userInfo = JSON.parse(localStorage.getItem('lgm_user_info') || '{}');
    const username = userInfo.username;
    
    if (!username) {
      if (typeof toastManager !== 'undefined') {
        toastManager.error('Please login to save your team');
      }
      return;
    }
    
    // Collect all owned heroes
    const heroCards = document.querySelectorAll('.hero-card');
    const ownedHeroes = [];
    
    heroCards.forEach((card, index) => {
      const button = card.querySelector('.toggle-owned-btn');
      const isOwned = button.textContent.includes('✓ Owned');
      
      if (isOwned) {
        const heroName = card.dataset.heroName;
        const starLevel = parseInt(card.querySelector('.hero-stars').value) || 0;
        const ring = card.querySelector('.hero-ring').value || '';
        
        ownedHeroes.push({
          position: index + 1,
          heroName: heroName,
          starLevel: starLevel,
          ring: ring,
          rarity: 'Unknown' // Will be filled by server
        });
      }
    });
    
    console.log('[My Team] Saving', ownedHeroes.length, 'heroes');
    
    // Save to server
    const response = await fetch('/api/team/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        heroes: ownedHeroes
      })
    });
    
    if (!response.ok) {
      throw new Error('Failed to save team');
    }
    
    const data = await response.json();
    
    if (data.success) {
      if (typeof toastManager !== 'undefined') {
        toastManager.success(`Saved ${ownedHeroes.length} heroes to your collection!`);
      }
    } else {
      throw new Error(data.error || 'Failed to save team');
    }
    
  } catch (error) {
    console.error('[My Team] Error saving collection:', error);
    if (typeof toastManager !== 'undefined') {
      toastManager.error('Failed to save collection: ' + error.message);
    }
  }
}

/**
 * Handle remove button clicks using event delegation
 */
function handleRemoveButtonClick(e) {
  if (e.target.classList.contains('remove-hero-btn')) {
    e.preventDefault();
    e.stopPropagation();
    
    const index = parseInt(e.target.dataset.heroIndex);
    console.log('[Remove Hero] Removing hero at index:', index);
    
    if (!window.recognizedHeroes) return false;
    
    window.recognizedHeroes.splice(index, 1);
    displayRecognizedHeroes(window.recognizedHeroes);
    
    if (window.recognizedHeroes.length === 0) {
      document.getElementById('team-heroes').style.display = 'none';
      document.getElementById('team-empty').style.display = 'block';
    }
    
    return false;
  }
}

/**
 * Remove hero from team (legacy - kept for compatibility)
 */
function removeHeroFromTeam(index) {
  console.log('[Remove Hero] Legacy function called for index:', index);
  return false;
}

/**
 * Save user team
 */
async function saveUserTeam() {
  const userInfo = authManager.getUserInfo();
  const username = userInfo ? userInfo.username : null;

  if (!username) {
    if (typeof toastManager !== 'undefined') {
      toastManager.error('Please login first');
    }
    return;
  }

  // Collect hero data from inputs
  const heroes = [];
  const gridDiv = document.getElementById('team-grid');
  
  if (!gridDiv) return;

  const heroCards = gridDiv.querySelectorAll('[id^="hero-name-"]');
  heroCards.forEach((input, index) => {
    const name = input.value.trim();
    const starsInput = document.getElementById(`hero-stars-${index}`);
    const starLevel = starsInput ? parseInt(starsInput.value) || 0 : 0;

    if (name) {
      heroes.push({
        name,
        starLevel,
        imageUrl: window.recognizedHeroes?.[index]?.imageUrl || ''
      });
    }
  });

  if (heroes.length === 0) {
    if (typeof toastManager !== 'undefined') {
      toastManager.warning('No heroes to save');
    }
    return;
  }

  try {
    const response = await fetch('/api/team/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, heroes })
    });

    const data = await response.json();

    if (data.success) {
      if (typeof toastManager !== 'undefined') {
        toastManager.success('Team saved successfully!');
      }
    } else {
      throw new Error(data.error || 'Failed to save team');
    }
  } catch (error) {
    console.error('Error saving team:', error);
    if (typeof toastManager !== 'undefined') {
      toastManager.error('Failed to save team: ' + error.message);
    }
  }
}

// ===== PET MANAGEMENT FUNCTIONS =====

/**
 * Load all pets for admin management
 */
async function loadPets() {
  const petListDiv = document.getElementById('pet-list');
  if (!petListDiv) return;
  
  petListDiv.innerHTML = '<p style="color: #666;">Loading pets...</p>';
  
  try {
    const response = await fetch('/api/pets');
    const data = await response.json();
    
    if (data.success && data.data) {
      renderPetList(data.data);
    } else {
      petListDiv.innerHTML = '<p style="color: red;">Failed to load pets</p>';
    }
  } catch (error) {
    console.error('Error loading pets:', error);
    petListDiv.innerHTML = '<p style="color: red;">Error loading pets</p>';
  }
}

/**
 * Render pet list with drag-and-drop
 */
function renderPetList(pets) {
  const petListDiv = document.getElementById('pet-list');
  if (!petListDiv) return;
  
  if (pets.length === 0) {
    petListDiv.innerHTML = '<p style="color: #666;">No pets found. Add your first pet!</p>';
    return;
  }
  
  // Sort by displayOrder
  const sortedPets = pets.sort((a, b) => {
    const orderA = a.displayOrder !== undefined ? a.displayOrder : 999999;
    const orderB = b.displayOrder !== undefined ? b.displayOrder : 999999;
    return orderA - orderB;
  });
  
  const petsHTML = sortedPets.map((pet, index) => {
    const cacheBuster = `?t=${Date.now()}`;
    
    return `
      <div class="pet-card-draggable" 
           draggable="true" 
           data-pet-id="${pet._id}"
           data-pet-order="${index}"
           style="background-color: #ffffff; padding: 12px; border: 2px solid var(--color-orange); border-radius: 4px; text-align: center; cursor: move; transition: all 0.2s;">
        <div style="color: #999; font-size: 10px; margin-bottom: 4px;">Order: ${index + 1}</div>
        ${pet.petPicture ?
          `<img src="${pet.petPicture}${cacheBuster}" alt="${pet.name}" style="width: 100%; height: auto; max-width: 100px; object-fit: contain; border-radius: 4px; border: 2px solid #ddd; display: block; margin: 0 auto 8px; background-color: #f9f9f9;">` :
          '<div style="width: 100px; height: 100px; background-color: #f0f0f0; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: #999; margin: 0 auto 8px; border: 2px solid #ddd;">No Image</div>'
        }
        <div style="color: var(--color-orange); font-weight: bold; font-size: 13px; margin-bottom: 8px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${pet.name}">${pet.name}</div>
        <div style="display: flex; gap: 4px; justify-content: center;">
          <button onclick="editPet('${pet._id}')" style="padding: 4px 8px; background-color: #0066cc; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 10px; flex: 1;">Edit</button>
          <button onclick="deletePet('${pet._id}')" style="padding: 4px 8px; background-color: #ff3333; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 10px; flex: 1;">Del</button>
        </div>
      </div>
    `;
  }).join('');
  
  petListDiv.innerHTML = `
    <div style="margin-bottom: 15px; padding: 10px; background: #e3f2fd; border-radius: 4px; border-left: 4px solid #2196F3;">
      <strong style="color: #1976d2;">💡 Tip:</strong> <span style="color: #666;">Drag and drop pet cards to reorder them!</span>
      <div style="margin-top: 8px; color: #666; font-size: 13px;">Total pets: ${sortedPets.length}</div>
    </div>
    <div id="pet-grid-draggable" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 12px; position: relative;">
      ${petsHTML}
    </div>
  `;
  
  // Initialize drag and drop
  initializePetDragAndDrop();
}

/**
 * Attach pet form handler
 */
function attachPetFormHandler() {
  const form = document.getElementById('add-pet-form');
  const fileInput = document.getElementById('pet-image-file');
  const preview = document.getElementById('pet-image-preview');
  const previewImg = document.getElementById('pet-preview-img');
  
  if (!form) return;
  
  // Handle image preview
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
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('pet-name').value.trim();
    const imageFile = fileInput?.files[0];
    
    if (!name) {
      alert('Pet name is required');
      return;
    }
    
    try {
      let petPicture = '';
      
      // Upload image if provided
      if (imageFile) {
        const formData = new FormData();
        formData.append('image', imageFile);
        
        const uploadResponse = await fetch('/api/upload/image', {
          method: 'POST',
          body: formData
        });
        
        const uploadData = await uploadResponse.json();
        
        if (uploadData.success) {
          petPicture = uploadData.imageUrl;
        } else {
          alert('Failed to upload image: ' + uploadData.error);
          return;
        }
      }
      
      // Create pet
      const petData = {
        name,
        petPicture
      };
      
      const response = await fetch('/api/pets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(petData)
      });
      
      const data = await response.json();
      
      if (data.success) {
        if (typeof toastManager !== 'undefined') {
          toastManager.success('Pet added successfully!');
        } else {
          alert('Pet added successfully!');
        }
        form.reset();
        preview.style.display = 'none';
        loadPets();
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error('Error adding pet:', error);
      alert('Error adding pet');
    }
  });
}

/**
 * Edit pet
 */
async function editPet(petId) {
  try {
    const response = await fetch(`/api/pets/${petId}`);
    const data = await response.json();
    
    if (data.success && data.data) {
      const pet = data.data;
      showEditPetModal(pet);
    } else {
      alert('Error loading pet data');
    }
  } catch (error) {
    console.error('Error loading pet:', error);
    alert('Error loading pet');
  }
}

/**
 * Show edit pet modal
 */
function showEditPetModal(pet) {
  const modalHtml = `
    <div id="edit-pet-modal" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 10000; display: flex; align-items: center; justify-content: center;">
      <div style="background: white; padding: 30px; border-radius: 8px; width: 90%; max-width: 500px; max-height: 90vh; overflow-y: auto;">
        <h2 style="color: var(--color-orange); margin-bottom: 20px;">Edit Pet</h2>
        
        <form id="edit-pet-form">
          <div style="margin-bottom: 15px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold;">Pet Name *</label>
            <input type="text" id="edit-pet-name" value="${pet.name}" required style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
          </div>
          
          <div style="margin-bottom: 20px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold;">Pet Image</label>
            <input type="file" id="edit-pet-image-file" accept="image/*" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
            <small style="color: #666; display: block; margin-top: 4px;">Leave empty to keep current image</small>
            ${pet.petPicture ? `
              <div style="margin-top: 10px;">
                <img src="${pet.petPicture}" alt="Current" style="max-width: 150px; max-height: 150px; border: 1px solid #ddd; border-radius: 4px;">
                <div style="font-size: 12px; color: #666; margin-top: 5px;">Current image</div>
              </div>
            ` : ''}
            <div id="edit-pet-image-preview" style="margin-top: 10px; display: none;">
              <img id="edit-pet-preview-img" src="" alt="Preview" style="max-width: 150px; max-height: 150px; border: 1px solid #ddd; border-radius: 4px;">
              <div style="font-size: 12px; color: #666; margin-top: 5px;">New image preview</div>
            </div>
            <input type="hidden" id="edit-pet-image-url" value="${pet.petPicture || ''}">
          </div>
          
          <div style="display: flex; gap: 10px; justify-content: flex-end;">
            <button type="button" onclick="closeEditPetModal()" style="padding: 10px 20px; background: #666; color: white; border: none; border-radius: 4px; cursor: pointer;">Cancel</button>
            <button type="submit" style="padding: 10px 20px; background: var(--color-orange); color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">Update Pet</button>
          </div>
          
          <input type="hidden" id="edit-pet-id" value="${pet._id}">
        </form>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', modalHtml);
  
  // Attach image preview handler
  const fileInput = document.getElementById('edit-pet-image-file');
  const preview = document.getElementById('edit-pet-image-preview');
  const previewImg = document.getElementById('edit-pet-preview-img');
  
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
  
  // Attach form handler
  const form = document.getElementById('edit-pet-form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    await saveEditPet();
  });
}

/**
 * Close edit pet modal
 */
function closeEditPetModal() {
  const modal = document.getElementById('edit-pet-modal');
  if (modal) {
    modal.remove();
  }
}

/**
 * Save edited pet
 */
async function saveEditPet() {
  const petId = document.getElementById('edit-pet-id').value;
  const name = document.getElementById('edit-pet-name').value.trim();
  const imageFile = document.getElementById('edit-pet-image-file')?.files[0];
  const currentImageUrl = document.getElementById('edit-pet-image-url').value;
  
  if (!name) {
    alert('Pet name is required');
    return;
  }
  
  try {
    let petPicture = currentImageUrl;
    
    // Upload new image if provided
    if (imageFile) {
      const formData = new FormData();
      formData.append('image', imageFile);
      
      const uploadResponse = await fetch('/api/upload/image', {
        method: 'POST',
        body: formData
      });
      
      const uploadData = await uploadResponse.json();
      
      if (uploadData.success) {
        petPicture = uploadData.imageUrl;
      } else {
        alert('Failed to upload image: ' + uploadData.error);
        return;
      }
    }
    
    // Update pet
    const petData = {
      name,
      petPicture
    };
    
    const response = await fetch(`/api/pets/${petId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(petData)
    });
    
    const data = await response.json();
    
    if (data.success) {
      if (typeof toastManager !== 'undefined') {
        toastManager.success('Pet updated successfully!');
      } else {
        alert('Pet updated successfully!');
      }
      closeEditPetModal();
      loadPets();
    } else {
      alert(`Error: ${data.error}`);
    }
  } catch (error) {
    console.error('Error updating pet:', error);
    alert('Error updating pet');
  }
}

/**
 * Delete pet
 */
async function deletePet(petId) {
  if (!confirm('Are you sure you want to delete this pet? This action cannot be undone.')) {
    return;
  }
  
  try {
    const response = await fetch(`/api/pets/${petId}`, {
      method: 'DELETE'
    });
    
    const data = await response.json();
    
    if (data.success) {
      if (typeof toastManager !== 'undefined') {
        toastManager.success('Pet deleted successfully!');
      } else {
        alert('Pet deleted successfully!');
      }
      loadPets();
    } else {
      alert(`Error: ${data.error}`);
    }
  } catch (error) {
    console.error('Error deleting pet:', error);
    alert('Error deleting pet');
  }
}

/**
 * Initialize drag and drop for pet cards
 */
function initializePetDragAndDrop() {
  const cards = document.querySelectorAll('.pet-card-draggable');
  let draggedElement = null;
  let saveTimeout = null;
  
  cards.forEach(card => {
    card.addEventListener('dragstart', (e) => {
      draggedElement = card;
      card.style.opacity = '0.5';
      card.style.cursor = 'grabbing';
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/html', card.innerHTML);
    });
    
    card.addEventListener('dragend', (e) => {
      card.style.opacity = '1';
      card.style.cursor = 'move';
      draggedElement = null;
      
      // Reset all cards
      cards.forEach(c => {
        c.style.borderColor = 'var(--color-orange)';
        c.style.transform = 'scale(1)';
      });
    });
    
    card.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      
      if (draggedElement && draggedElement !== card) {
        card.style.borderColor = '#4CAF50';
        card.style.transform = 'scale(1.05)';
      }
    });
    
    card.addEventListener('dragleave', (e) => {
      card.style.borderColor = 'var(--color-orange)';
      card.style.transform = 'scale(1)';
    });
    
    card.addEventListener('drop', async (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      card.style.borderColor = 'var(--color-orange)';
      card.style.transform = 'scale(1)';
      
      if (draggedElement && draggedElement !== card) {
        // Get all cards in current order
        const grid = document.getElementById('pet-grid-draggable');
        const allCards = Array.from(grid.querySelectorAll('.pet-card-draggable'));
        
        // Find positions
        const draggedIndex = allCards.indexOf(draggedElement);
        const targetIndex = allCards.indexOf(card);
        
        // Reorder in DOM
        if (draggedIndex < targetIndex) {
          card.parentNode.insertBefore(draggedElement, card.nextSibling);
        } else {
          card.parentNode.insertBefore(draggedElement, card);
        }
        
        // Debounce save
        if (saveTimeout) {
          clearTimeout(saveTimeout);
        }
        
        saveTimeout = setTimeout(async () => {
          await savePetOrder();
          saveTimeout = null;
        }, 500);
      }
    });
  });
  
  console.log(`[Pet Reorder] Initialized drag-and-drop for ${cards.length} pets`);
}

/**
 * Save pet order to server
 */
async function savePetOrder() {
  try {
    const grid = document.getElementById('pet-grid-draggable');
    const cards = Array.from(grid.querySelectorAll('.pet-card-draggable'));
    
    const orderData = cards.map((card, index) => ({
      petId: card.dataset.petId,
      displayOrder: index
    }));
    
    const response = await fetch('/api/pets/reorder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ order: orderData })
    });
    
    const result = await response.json();
    
    if (result.success) {
      if (typeof toastManager !== 'undefined') {
        toastManager.success('Pet order saved!');
      }
      // Reload to show updated order numbers
      await loadPets();
    } else {
      if (typeof toastManager !== 'undefined') {
        toastManager.error(result.error || 'Failed to save order');
      }
    }
  } catch (error) {
    console.error('Error saving pet order:', error);
    if (typeof toastManager !== 'undefined') {
      toastManager.error('Failed to save pet order');
    }
  }
}

// ===== USER PETS FUNCTIONS =====

/**
 * Load user's pet collection
 */
async function loadUserPets() {
  console.log('[User Pets] Loading pet collection...');
  
  const loadingDiv = document.getElementById('user-pets-loading');
  const gridDiv = document.getElementById('user-pets-grid');
  
  if (!loadingDiv || !gridDiv) {
    console.error('[User Pets] Required elements not found');
    return;
  }
  
  try {
    // Get user info
    const userInfo = JSON.parse(localStorage.getItem('lgm_user_info') || '{}');
    const username = userInfo.username;
    
    if (!username) {
      console.error('[User Pets] No username found');
      loadingDiv.innerHTML = '<p style="color: #d32f2f;">Please login to manage your pets.</p>';
      return;
    }
    
    // Fetch all pets from database
    const petsResponse = await fetch('/api/pets');
    const petsData = await petsResponse.json();
    
    if (!petsData.success || !petsData.data) {
      throw new Error('Failed to load pets');
    }
    
    const allPets = petsData.data;
    
    // Fetch user's pet collection (TODO: create user pet collection API)
    // For now, we'll show all pets with star selection
    
    // Hide loading, show grid
    loadingDiv.style.display = 'none';
    gridDiv.style.display = 'grid';
    gridDiv.style.gridTemplateColumns = 'repeat(auto-fill, minmax(140px, 1fr))';
    gridDiv.style.gap = '15px';
    
    // Render pets
    renderUserPetsGrid(allPets, username);
    
  } catch (error) {
    console.error('[User Pets] Error loading pets:', error);
    loadingDiv.innerHTML = '<p style="color: #d32f2f;">Failed to load pets. Please try again.</p>';
  }
}

/**
 * Render user pets grid
 */
function renderUserPetsGrid(pets, username) {
  const gridDiv = document.getElementById('user-pets-grid');
  if (!gridDiv) return;
  
  if (pets.length === 0) {
    gridDiv.innerHTML = '<p style="color: #666; text-align: center; grid-column: 1/-1;">No pets available yet. Check back later!</p>';
    return;
  }
  
  // Load saved pet data
  const userPetsKey = `lgm_user_pets_${username}`;
  const userPets = JSON.parse(localStorage.getItem(userPetsKey) || '{}');
  console.log('[Pet Render] Loaded user pets:', userPets);
  
  const petsHTML = pets.map(pet => {
    const cacheBuster = `?t=${Date.now()}`;
    const savedPet = userPets[pet._id];
    const savedStarLevel = savedPet ? savedPet.starLevel : '';
    
    return `
      <div class="user-pet-card" style="background: white; border: 2px solid #ddd; border-radius: 6px; padding: 10px; text-align: center; transition: all 0.2s;">
        ${pet.petPicture ?
          `<img src="${pet.petPicture}${cacheBuster}" alt="${pet.name}" style="width: 100%; height: auto; max-width: 80px; object-fit: contain; border-radius: 4px; border: 1px solid #ddd; display: block; margin: 0 auto 8px; background: #f9f9f9;">` :
          '<div style="width: 80px; height: 80px; background: #f0f0f0; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: #999; margin: 0 auto 8px; border: 1px solid #ddd; font-size: 10px;">No Image</div>'
        }
        <h3 style="margin: 0 0 8px 0; color: #333; font-size: 13px; font-weight: 600;">${pet.name}</h3>
        
        <select 
          id="pet-star-${pet._id}" 
          onchange="savePetStar('${pet._id}', '${pet.name}')"
          style="width: 100%; padding: 6px; border: 2px solid var(--color-orange); border-radius: 4px; font-size: 12px; cursor: pointer;">
          <option value="" ${savedStarLevel === '' ? 'selected' : ''}>Not Owned</option>
          <option value="4" ${savedStarLevel === 4 ? 'selected' : ''}>⭐⭐⭐⭐</option>
          <option value="5" ${savedStarLevel === 5 ? 'selected' : ''}>⭐⭐⭐⭐⭐</option>
          <option value="6" ${savedStarLevel === 6 ? 'selected' : ''}>⭐⭐⭐⭐⭐⭐</option>
        </select>
      </div>
    `;
  }).join('');
  
  gridDiv.innerHTML = petsHTML;
}

/**
 * Save user's pet star level
 */
async function savePetStar(petId, petName) {
  console.log('[Pet Save] Saving pet:', petId, petName);
  
  const selectElement = document.getElementById(`pet-star-${petId}`);
  const starLevel = selectElement.value;
  
  console.log('[Pet Save] Star level:', starLevel);
  
  // Get username
  const userInfo = JSON.parse(localStorage.getItem('lgm_user_info') || '{}');
  const username = userInfo.username;
  
  if (!username) {
    console.error('[Pet Save] User not logged in');
    return;
  }
  
  console.log('[Pet Save] Username:', username);
  
  try {
    // TODO: Create API endpoint to save user's pet collection
    // For now, we'll use localStorage
    const userPetsKey = `lgm_user_pets_${username}`;
    const userPets = JSON.parse(localStorage.getItem(userPetsKey) || '{}');
    
    if (starLevel === '') {
      // Remove pet from collection
      delete userPets[petId];
      console.log('[Pet Save] Removed pet from collection');
    } else {
      // Add/update pet in collection
      userPets[petId] = {
        petId,
        petName,
        starLevel: parseInt(starLevel)
      };
      console.log('[Pet Save] Added/updated pet in collection');
    }
    
    localStorage.setItem(userPetsKey, JSON.stringify(userPets));
    console.log('[Pet Save] Saved to localStorage:', userPets);
    
    // Show visual feedback
    if (typeof toastManager !== 'undefined') {
      if (starLevel === '') {
        toastManager.info('Pet removed from collection');
      } else {
        toastManager.success(`${petName} saved with ${starLevel} stars!`);
      }
    }
    
  } catch (error) {
    console.error('[Pet Save] Error saving pet star:', error);
    if (typeof toastManager !== 'undefined') {
      toastManager.error('Failed to save pet');
    }
  }
}
