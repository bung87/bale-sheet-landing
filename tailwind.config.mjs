/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'macos-bg': '#fafafa',
        'macos-bg-secondary': '#f5f5f5',
        'macos-text': '#1a1a1a',
        'macos-text-secondary': '#6b6b6b',
        'macos-border': '#e5e5e5',
        'macos-border-hover': '#d4d4d4',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
