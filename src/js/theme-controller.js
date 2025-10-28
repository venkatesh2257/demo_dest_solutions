/**
 * Dynamic Theme Controller
 * Allows admin panel to update colors in real-time
 * 
 * Usage from Admin Panel:
 * updateThemeColors({
 *   primary: '#FF0000',
 *   bg: '#FFFFFF'
 * });
 */

// Theme Controller Class
class ThemeController {
  constructor() {
    this.root = document.documentElement;
    this.colorVariables = {
      bg: '--color-bg',
      primary: '--color-primary',
      primaryHover: '--color-primary-hover',
      primaryActive: '--color-primary-active',
      text: '--color-text',
      white: '--color-white',
      border: '--color-border',
    };
  }

  /**
   * Update a single color variable
   * @param {string} name - Variable name (e.g., 'primary', 'bg')
   * @param {string} value - Hex color value (e.g., '#1612FF')
   */
  updateColor(name, value) {
    const cssVar = this.colorVariables[name];
    if (cssVar) {
      this.root.style.setProperty(cssVar, value);
      
      // Auto-generate hover and active states for primary color
      if (name === 'primary') {
        this.root.style.setProperty('--color-primary-hover', this.darkenColor(value, 10));
        this.root.style.setProperty('--color-primary-active', this.darkenColor(value, 20));
      }
      
      // Persist to localStorage for future visits
      this.saveToLocalStorage(name, value);
      
      return true;
    }
    return false;
  }

  /**
   * Update multiple colors at once
   * @param {Object} colors - Object with color names and values
   * Example: { primary: '#1612FF', bg: '#F6F6F6' }
   */
  updateThemeColors(colors) {
    Object.entries(colors).forEach(([name, value]) => {
      this.updateColor(name, value);
    });
  }

  /**
   * Load saved colors from localStorage
   */
  loadSavedColors() {
    const savedColors = localStorage.getItem('themeColors');
    if (savedColors) {
      try {
        const colors = JSON.parse(savedColors);
        this.updateThemeColors(colors);
      } catch (e) {
        console.error('Failed to load saved theme colors:', e);
      }
    }
  }

  /**
   * Save color to localStorage
   */
  saveToLocalStorage(name, value) {
    let savedColors = {};
    try {
      savedColors = JSON.parse(localStorage.getItem('themeColors') || '{}');
    } catch (e) {
      console.error('Failed to parse saved colors:', e);
    }
    savedColors[name] = value;
    localStorage.setItem('themeColors', JSON.stringify(savedColors));
  }

  /**
   * Reset to default colors
   */
  resetToDefaults() {
    const defaults = {
      bg: '#F6F6F6',
      primary: '#1612FF',
      text: '#000000',
      white: '#FFFFFF',
      border: '#E0E0E0',
    };
    this.updateThemeColors(defaults);
    localStorage.removeItem('themeColors');
  }

  /**
   * Get current color value
   */
  getColor(name) {
    const cssVar = this.colorVariables[name];
    if (cssVar) {
      return getComputedStyle(this.root).getPropertyValue(cssVar).trim();
    }
    return null;
  }

  /**
   * Utility: Darken a color by percentage
   */
  darkenColor(hex, percent) {
    // Remove # if present
    hex = hex.replace('#', '');
    
    // Convert to RGB
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);
    
    // Darken
    r = Math.max(0, Math.floor(r * (1 - percent / 100)));
    g = Math.max(0, Math.floor(g * (1 - percent / 100)));
    b = Math.max(0, Math.floor(b * (1 - percent / 100)));
    
    // Convert back to hex
    return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
  }

  /**
   * Fetch colors from API (for admin panel integration)
   * @param {string} apiEndpoint - Your API endpoint
   */
  async fetchColorsFromAPI(apiEndpoint) {
    try {
      const response = await fetch(apiEndpoint);
      const data = await response.json();
      this.updateThemeColors(data);
      return data;
    } catch (error) {
      console.error('Failed to fetch theme colors from API:', error);
      return null;
    }
  }

  /**
   * Send updated colors to API (for admin panel integration)
   * @param {string} apiEndpoint - Your API endpoint
   * @param {Object} colors - Colors to save
   */
  async saveColorsToAPI(apiEndpoint, colors) {
    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(colors),
      });
      return await response.json();
    } catch (error) {
      console.error('Failed to save theme colors to API:', error);
      return null;
    }
  }
}

// Initialize theme controller
const themeController = new ThemeController();

// Load saved colors on page load
document.addEventListener('DOMContentLoaded', () => {
  themeController.loadSavedColors();
});

// Make it globally available for admin panel
window.themeController = themeController;
window.updateThemeColors = (colors) => themeController.updateThemeColors(colors);

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ThemeController;
}

