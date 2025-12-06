import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // GovCon Giants Brand Colors
        primary: {
          blue: '#0066ff',
          green: '#00fd9e',
          white: '#ffffff',
          black: '#000000',
        },
        accent: {
          green: '#00fd9e',
          blue: '#0066ff',
          'light-blue': '#e8f1ff',
        },
        neutral: {
          'dark-charcoal': '#131517',
          'medium-charcoal': '#282a2f',
          'medium-gray': '#abafb7',
          'light-gray': '#f3f4f5',
          'border-gray': '#dbdde0',
          cream: '#f0eae0',
        },
        govcon: {
          // Semantic color names for easier use
          'primary': '#0066ff',
          'secondary': '#00fd9e',
          'dark': '#131517',
          'light': '#e8f1ff',
          'gray': '#7b818e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['Fragment Mono', 'monospace'],
      },
      maxWidth: {
        'govcon': '1200px',
      },
      spacing: {
        'govcon-mobile': '16px',
        'govcon-tablet': '32px',
        'govcon-desktop': '64px',
      },
    },
  },
  plugins: [],
};

export default config;
