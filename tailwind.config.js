module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js", "./components/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Deep navy authority
        primary: {
          DEFAULT: "#1a365d", // navy-900
          50: "#f0f4f8", // navy-50
          100: "#d6e3f0", // navy-100
          200: "#b8d4ea", // navy-200
          300: "#9ac2e4", // navy-300
          400: "#7cb0de", // navy-400
          500: "#5e9ed8", // navy-500
          600: "#4a7ba7", // navy-600
          700: "#365876", // navy-700
          800: "#223545", // navy-800
          900: "#1a365d", // navy-900
        },
        // Secondary Colors - Innovation teal
        secondary: {
          DEFAULT: "#38b2ac", // teal-600
          50: "#f0fdfa", // teal-50
          100: "#ccfbf1", // teal-100
          200: "#99f6e4", // teal-200
          300: "#5eead4", // teal-300
          400: "#2dd4bf", // teal-400
          500: "#14b8a6", // teal-500
          600: "#0d9488", // teal-600
          700: "#0f766e", // teal-700
          800: "#115e59", // teal-800
          900: "#134e4a", // teal-900
        },
        // Accent Colors - Bright highlight
        accent: {
          DEFAULT: "#4fd1c7", // teal-accent-400
          50: "#f0fdfa", // teal-accent-50
          100: "#ccfbf1", // teal-accent-100
          200: "#99f6e4", // teal-accent-200
          300: "#5eead4", // teal-accent-300
          400: "#4fd1c7", // teal-accent-400
          500: "#2dd4bf", // teal-accent-500
          600: "#14b8a6", // teal-accent-600
          700: "#0d9488", // teal-accent-700
          800: "#0f766e", // teal-accent-800
          900: "#115e59", // teal-accent-900
        },
        // Background Colors
        background: "#f7fafc", // gray-50
        surface: "#e2e8f0", // gray-200
        
        // Text Colors
        text: {
          primary: "#2d3748", // gray-700
          secondary: "#718096", // gray-500
        },
        
        // Status Colors
        success: {
          DEFAULT: "#38a169", // green-600
          50: "#f0fff4", // green-50
          100: "#c6f6d5", // green-100
          200: "#9ae6b4", // green-200
          300: "#68d391", // green-300
          400: "#48bb78", // green-400
          500: "#38a169", // green-500
          600: "#2f855a", // green-600
          700: "#276749", // green-700
          800: "#22543d", // green-800
          900: "#1c4532", // green-900
        },
        warning: {
          DEFAULT: "#d69e2e", // yellow-600
          50: "#fffff0", // yellow-50
          100: "#fefcbf", // yellow-100
          200: "#faf089", // yellow-200
          300: "#f6e05e", // yellow-300
          400: "#ecc94b", // yellow-400
          500: "#d69e2e", // yellow-500
          600: "#b7791f", // yellow-600
          700: "#975a16", // yellow-700
          800: "#744210", // yellow-800
          900: "#5f370e", // yellow-900
        },
        error: {
          DEFAULT: "#e53e3e", // red-500
          50: "#fed7d7", // red-50
          100: "#feb2b2", // red-100
          200: "#fc8181", // red-200
          300: "#f56565", // red-300
          400: "#e53e3e", // red-400
          500: "#c53030", // red-500
          600: "#9b2c2c", // red-600
          700: "#742a2a", // red-700
          800: "#63171b", // red-800
          900: "#521b1b", // red-900
        },
        
        // Silver Highlights
        silver: {
          DEFAULT: "#cbd5e0", // gray-300
          50: "#f8fafc", // gray-50
          100: "#f1f5f9", // gray-100
          200: "#e2e8f0", // gray-200
          300: "#cbd5e0", // gray-300
          400: "#a0aec0", // gray-400
          500: "#718096", // gray-500
          600: "#4a5568", // gray-600
          700: "#2d3748", // gray-700
          800: "#1a202c", // gray-800
          900: "#171923", // gray-900
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        primary: ['Inter', 'sans-serif'],
        technical: ['JetBrains Mono', 'monospace'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      boxShadow: {
        'subtle': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card': '0 4px 6px -1px rgba(26, 54, 93, 0.1), 0 2px 4px -1px rgba(26, 54, 93, 0.06)',
        'elevation': '0 10px 15px -3px rgba(26, 54, 93, 0.1), 0 4px 6px -2px rgba(26, 54, 93, 0.05)',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        'full': '9999px',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '300': '300ms',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-out',
        'slide-up': 'slideUp 300ms ease-out',
        'slide-down': 'slideDown 300ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}