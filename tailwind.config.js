/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: '0.875rem', // 14px
        md: '1rem',    // 16px
        lg: '1.25rem',  // 20px
        xl: '1.5rem',   // 24px
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        typewriter: "typewriter 2s steps(20) infinite alternate"
      },
      keyframes: {
        typewriter: {
          to: {
            transform: 'translateX(100%)',
          }
        }
      }
    },
  },
  plugins: [],
}