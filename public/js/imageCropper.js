/**
 * Simple Image Cropper
 * Allows users to crop images before uploading
 */

class ImageCropper {
  constructor() {
    this.image = null;
    this.canvas = null;
    this.ctx = null;
    this.cropArea = { x: 0, y: 0, width: 0, height: 0 };
    this.isDragging = false;
    this.dragStart = { x: 0, y: 0 };
    this.scale = 1;
  }

  /**
   * Open cropper modal with image (from file or URL)
   */
  open(imageSource, callback) {
    this.callback = callback;
    
    // Create modal
    const modal = document.createElement('div');
    modal.id = 'crop-modal';
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.9);
      z-index: 10000;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `;
    
    modal.innerHTML = `
      <div style="background: white; padding: 20px; border-radius: 8px; max-width: 90%; max-height: 90%; display: flex; flex-direction: column;">
        <h2 style="color: var(--color-orange); margin-bottom: 15px;">Crop Image</h2>
        
        <div style="position: relative; overflow: auto; max-height: 60vh; border: 2px solid var(--color-orange); margin-bottom: 15px;">
          <canvas id="crop-canvas" style="display: block; cursor: crosshair;"></canvas>
        </div>
        
        <div style="display: flex; gap: 10px; margin-bottom: 15px;">
          <button id="crop-reset" style="padding: 10px 20px; background: #666; color: white; border: none; border-radius: 4px; cursor: pointer;">Reset</button>
          <button id="crop-square" style="padding: 10px 20px; background: var(--color-orange); color: white; border: none; border-radius: 4px; cursor: pointer;">Square Crop</button>
          <div style="flex: 1;"></div>
          <button id="crop-cancel" style="padding: 10px 20px; background: #999; color: white; border: none; border-radius: 4px; cursor: pointer;">Cancel</button>
          <button id="crop-apply" style="padding: 10px 20px; background: var(--color-orange); color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: 600;">Apply Crop</button>
        </div>
        
        <p style="color: #666; font-size: 12px;">Click and drag on the image to select crop area</p>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    // Load image from file or URL
    if (typeof imageSource === 'string') {
      // It's a URL
      const img = new Image();
      img.crossOrigin = 'anonymous'; // Enable CORS
      img.onload = () => {
        this.image = img;
        this.initCanvas();
        this.attachEventListeners();
      };
      img.onerror = () => {
        alert('Failed to load image from URL');
        this.close();
      };
      img.src = imageSource;
    } else {
      // It's a File object
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          this.image = img;
          this.initCanvas();
          this.attachEventListeners();
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(imageSource);
    }
  }

  /**
   * Initialize canvas
   */
  initCanvas() {
    this.canvas = document.getElementById('crop-canvas');
    this.ctx = this.canvas.getContext('2d');
    
    // Set canvas size to fit image
    const maxWidth = 800;
    const maxHeight = 600;
    
    let width = this.image.width;
    let height = this.image.height;
    
    if (width > maxWidth) {
      height = (height * maxWidth) / width;
      width = maxWidth;
    }
    
    if (height > maxHeight) {
      width = (width * maxHeight) / height;
      height = maxHeight;
    }
    
    this.canvas.width = width;
    this.canvas.height = height;
    this.scale = width / this.image.width;
    
    // Initialize crop area to full image
    this.cropArea = {
      x: 0,
      y: 0,
      width: width,
      height: height
    };
    
    this.draw();
  }

  /**
   * Draw image and crop overlay
   */
  draw() {
    // Clear canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Draw image
    this.ctx.drawImage(this.image, 0, 0, this.canvas.width, this.canvas.height);
    
    // Draw dark overlay
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Clear crop area
    this.ctx.clearRect(this.cropArea.x, this.cropArea.y, this.cropArea.width, this.cropArea.height);
    
    // Redraw image in crop area
    const sx = this.cropArea.x / this.scale;
    const sy = this.cropArea.y / this.scale;
    const sw = this.cropArea.width / this.scale;
    const sh = this.cropArea.height / this.scale;
    
    this.ctx.drawImage(
      this.image,
      sx, sy, sw, sh,
      this.cropArea.x, this.cropArea.y, this.cropArea.width, this.cropArea.height
    );
    
    // Draw crop border
    this.ctx.strokeStyle = '#ff6600';
    this.ctx.lineWidth = 2;
    this.ctx.strokeRect(this.cropArea.x, this.cropArea.y, this.cropArea.width, this.cropArea.height);
    
    // Draw corner handles
    const handleSize = 10;
    this.ctx.fillStyle = '#ff6600';
    
    // Top-left
    this.ctx.fillRect(this.cropArea.x - handleSize/2, this.cropArea.y - handleSize/2, handleSize, handleSize);
    // Top-right
    this.ctx.fillRect(this.cropArea.x + this.cropArea.width - handleSize/2, this.cropArea.y - handleSize/2, handleSize, handleSize);
    // Bottom-left
    this.ctx.fillRect(this.cropArea.x - handleSize/2, this.cropArea.y + this.cropArea.height - handleSize/2, handleSize, handleSize);
    // Bottom-right
    this.ctx.fillRect(this.cropArea.x + this.cropArea.width - handleSize/2, this.cropArea.y + this.cropArea.height - handleSize/2, handleSize, handleSize);
  }

  /**
   * Attach event listeners
   */
  attachEventListeners() {
    // Canvas mouse events
    this.canvas.addEventListener('mousedown', (e) => this.onMouseDown(e));
    this.canvas.addEventListener('mousemove', (e) => this.onMouseMove(e));
    this.canvas.addEventListener('mouseup', () => this.onMouseUp());
    this.canvas.addEventListener('mouseleave', () => this.onMouseUp());
    
    // Button events
    document.getElementById('crop-apply').addEventListener('click', () => this.applyCrop());
    document.getElementById('crop-cancel').addEventListener('click', () => this.close());
    document.getElementById('crop-reset').addEventListener('click', () => this.resetCrop());
    document.getElementById('crop-square').addEventListener('click', () => this.squareCrop());
    
    this.dragMode = null; // 'move', 'resize', or 'create'
    this.resizeHandle = null;
  }

  /**
   * Check if point is inside crop area
   */
  isInsideCropArea(x, y) {
    return x >= this.cropArea.x && x <= this.cropArea.x + this.cropArea.width &&
           y >= this.cropArea.y && y <= this.cropArea.y + this.cropArea.height;
  }

  /**
   * Get resize handle at position
   */
  getResizeHandle(x, y) {
    const handleSize = 15;
    const { x: cx, y: cy, width: cw, height: ch } = this.cropArea;
    
    // Check corners
    if (Math.abs(x - cx) < handleSize && Math.abs(y - cy) < handleSize) return 'nw';
    if (Math.abs(x - (cx + cw)) < handleSize && Math.abs(y - cy) < handleSize) return 'ne';
    if (Math.abs(x - cx) < handleSize && Math.abs(y - (cy + ch)) < handleSize) return 'sw';
    if (Math.abs(x - (cx + cw)) < handleSize && Math.abs(y - (cy + ch)) < handleSize) return 'se';
    
    // Check edges
    if (Math.abs(x - cx) < handleSize && y > cy && y < cy + ch) return 'w';
    if (Math.abs(x - (cx + cw)) < handleSize && y > cy && y < cy + ch) return 'e';
    if (Math.abs(y - cy) < handleSize && x > cx && x < cx + cw) return 'n';
    if (Math.abs(y - (cy + ch)) < handleSize && x > cx && x < cx + cw) return 's';
    
    return null;
  }

  /**
   * Mouse down event
   */
  onMouseDown(e) {
    const rect = this.canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    this.dragStart = { x, y };
    this.cropAreaStart = { ...this.cropArea };
    
    // Check if clicking on resize handle
    const handle = this.getResizeHandle(x, y);
    if (handle) {
      this.dragMode = 'resize';
      this.resizeHandle = handle;
      this.canvas.style.cursor = this.getCursorForHandle(handle);
    }
    // Check if clicking inside crop area (move)
    else if (this.isInsideCropArea(x, y) && this.cropArea.width > 0) {
      this.dragMode = 'move';
      this.canvas.style.cursor = 'move';
    }
    // Otherwise create new crop area
    else {
      this.dragMode = 'create';
      this.cropArea = { x, y, width: 0, height: 0 };
    }
    
    this.isDragging = true;
  }

  /**
   * Get cursor style for resize handle
   */
  getCursorForHandle(handle) {
    const cursors = {
      'nw': 'nw-resize', 'ne': 'ne-resize', 'sw': 'sw-resize', 'se': 'se-resize',
      'n': 'n-resize', 's': 's-resize', 'e': 'e-resize', 'w': 'w-resize'
    };
    return cursors[handle] || 'default';
  }

  /**
   * Mouse move event
   */
  onMouseMove(e) {
    const rect = this.canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    if (!this.isDragging) {
      // Update cursor based on position
      const handle = this.getResizeHandle(x, y);
      if (handle) {
        this.canvas.style.cursor = this.getCursorForHandle(handle);
      } else if (this.isInsideCropArea(x, y) && this.cropArea.width > 0) {
        this.canvas.style.cursor = 'move';
      } else {
        this.canvas.style.cursor = 'crosshair';
      }
      return;
    }
    
    const dx = x - this.dragStart.x;
    const dy = y - this.dragStart.y;
    
    if (this.dragMode === 'move') {
      // Move crop area
      this.cropArea.x = Math.max(0, Math.min(this.canvas.width - this.cropArea.width, this.cropAreaStart.x + dx));
      this.cropArea.y = Math.max(0, Math.min(this.canvas.height - this.cropArea.height, this.cropAreaStart.y + dy));
    }
    else if (this.dragMode === 'resize') {
      // Resize crop area based on handle
      const { x: sx, y: sy, width: sw, height: sh } = this.cropAreaStart;
      
      if (this.resizeHandle.includes('e')) {
        this.cropArea.width = Math.max(20, sw + dx);
      }
      if (this.resizeHandle.includes('w')) {
        const newWidth = Math.max(20, sw - dx);
        this.cropArea.x = sx + (sw - newWidth);
        this.cropArea.width = newWidth;
      }
      if (this.resizeHandle.includes('s')) {
        this.cropArea.height = Math.max(20, sh + dy);
      }
      if (this.resizeHandle.includes('n')) {
        const newHeight = Math.max(20, sh - dy);
        this.cropArea.y = sy + (sh - newHeight);
        this.cropArea.height = newHeight;
      }
      
      // Keep within bounds
      this.cropArea.x = Math.max(0, this.cropArea.x);
      this.cropArea.y = Math.max(0, this.cropArea.y);
      this.cropArea.width = Math.min(this.canvas.width - this.cropArea.x, this.cropArea.width);
      this.cropArea.height = Math.min(this.canvas.height - this.cropArea.y, this.cropArea.height);
    }
    else if (this.dragMode === 'create') {
      // Create new crop area
      let newWidth = x - this.dragStart.x;
      let newHeight = y - this.dragStart.y;
      
      if (newWidth < 0) {
        this.cropArea.x = x;
        this.cropArea.width = Math.abs(newWidth);
      } else {
        this.cropArea.x = this.dragStart.x;
        this.cropArea.width = newWidth;
      }
      
      if (newHeight < 0) {
        this.cropArea.y = y;
        this.cropArea.height = Math.abs(newHeight);
      } else {
        this.cropArea.y = this.dragStart.y;
        this.cropArea.height = newHeight;
      }
    }
    
    this.draw();
  }

  /**
   * Mouse up event
   */
  onMouseUp() {
    this.isDragging = false;
    this.dragMode = null;
    this.resizeHandle = null;
    this.canvas.style.cursor = 'crosshair';
  }

  /**
   * Reset crop to full image
   */
  resetCrop() {
    this.cropArea = {
      x: 0,
      y: 0,
      width: this.canvas.width,
      height: this.canvas.height
    };
    this.draw();
  }

  /**
   * Create square crop in center
   */
  squareCrop() {
    const size = Math.min(this.canvas.width, this.canvas.height) * 0.8;
    this.cropArea = {
      x: (this.canvas.width - size) / 2,
      y: (this.canvas.height - size) / 2,
      width: size,
      height: size
    };
    this.draw();
  }

  /**
   * Apply crop and return cropped image
   */
  applyCrop() {
    // Create new canvas for cropped image
    const croppedCanvas = document.createElement('canvas');
    const croppedCtx = croppedCanvas.getContext('2d');
    
    // Calculate actual crop dimensions
    const sx = this.cropArea.x / this.scale;
    const sy = this.cropArea.y / this.scale;
    const sw = this.cropArea.width / this.scale;
    const sh = this.cropArea.height / this.scale;
    
    croppedCanvas.width = sw;
    croppedCanvas.height = sh;
    
    // Draw cropped portion
    croppedCtx.drawImage(
      this.image,
      sx, sy, sw, sh,
      0, 0, sw, sh
    );
    
    // Convert to blob
    croppedCanvas.toBlob((blob) => {
      // Create file from blob with unique timestamp
      const timestamp = Date.now();
      const randomId = Math.random().toString(36).substring(2, 8);
      const fileName = `cropped-${timestamp}-${randomId}.png`;
      const file = new File([blob], fileName, { type: 'image/png' });
      
      if (this.callback) {
        this.callback(file);
      }
      
      this.close();
    }, 'image/png', 0.95);
  }

  /**
   * Close cropper modal
   */
  close() {
    const modal = document.getElementById('crop-modal');
    if (modal) {
      modal.remove();
    }
  }
}

// Create global instance
const imageCropper = new ImageCropper();
