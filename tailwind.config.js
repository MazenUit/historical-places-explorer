/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        primary: "#4F46E5", 
        accent: "#F59E0B",
        secondary: "#6B7280",
        background: "#F3F4F6",
        text: "#111827",
        light:{ 
          100: "#F3F4F6", 
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827"  
        },
        dark: {
          100: "#111827", 
          200: "#1F2937",
          300: "#374151",
          400: "#4B5563",
          500: "#6B7280",
          600: "#9CA3AF",
          700: "#D1D5DB",
          800: "#E5E7EB",
          900: "#F3F4F6"
        }
      }
    },
  },
  plugins: [],
}