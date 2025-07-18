// tailwind.config.js
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        geist: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
    screens: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  darkMode: "class",
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"], // extend default light theme
          primary: "#2563eb",    // blue-600
          secondary: "#f97316",  // orange-500
          accent: "#14b8a6",     // teal-500
          neutral: "#3d4451",
          "base-100": "#ffffff",
          info: "#0ea5e9",       // sky-500
          success: "#22c55e",    // green-500
          warning: "#eab308",    // yellow-500
          error: "#ef4444",      // red-500
        },
      },
      "dark", // keep dark theme available
    ],
  },
};
