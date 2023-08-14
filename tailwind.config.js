/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#1E1F20",
        dark: "#003993",
        light: "#ECFDF5",
        main: "#008CFF",
        neutral: {
          50: "#f9fafb",
          100: "#F6F7F8",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827"
        },
        success: {
          50: "#F0FDF4",
          200: "#BBF7D0",
          500: "#22C55E",
          700: "#15803D",
        },
        error: {
          50: "#FEF2F2",
          300: "#FECACA",
          500: "#EF4444",
          800: "#B91C1C",
        },
        alert: {
          50: "#FEFCE8",
          200: "#FEF08A",
          500: "#EAB308",
          600: "#CA8A04"
        },
        info: {
          50: "#EFF6FF",
          200: "#BFDBFE",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
        }
      },
      gridTemplateColumns: {
        default: "16rem 1fr",
      },
    },
  },
  plugins: [],
};
