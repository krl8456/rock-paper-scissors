/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-text': 'hsl(229, 25%, 31%)',
        'score-text': 'hsl(229, 64%, 46%)',
        'header-outline': 'hsl(217, 16%, 45%)',
        'scissors-gradient': 'hsl(39, 89%, 49%), hsl(40, 84%, 53%)',
        'paper-gradient': 'hsl(230, 89%, 62%), hsl(230, 89%, 65%)',
        'rock-gradient': 'hsl(349, 71%, 52%), hsl(349, 70%, 56%)',
        'lizard-gradient': 'hsl(261, 73%, 60%), hsl(261, 72%, 63%)',
        'cyan': 'hsl(189, 59%, 53%), hsl(189, 58%, 57%)',
      },
    },
  },
  plugins: [],
}
