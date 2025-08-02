// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure .jsx is included
    "./App.jsx" // Include App.jsx explicitly since it's outside src
  ],
  theme: {
    extend: {
      fontFamily: {
        merienda: ['"Merienda"', 'cursive'],
      },
    },
  },
  plugins: [],
};
