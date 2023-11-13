module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        abfTheme: {
          
          "primary": "#00b3ff",
                   
          "secondary": "#009aff",
                   
          "accent": "#00a964",
                   
          "neutral": "#002731",
                   
          "base-100": "#fcfcfc",
                   
          "info": "#00bbff",
                   
          "success": "#6ffe00",
                   
          "warning": "#ffbb00",
                   
          "error": "#ff5071",
                   },
      },
    ],
  },
};
