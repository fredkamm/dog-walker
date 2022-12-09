module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      fontFamily: {
        primary: 'Playfair Display',
        body: 'Work Sans',
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          lg: '3rem',
        },
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      extend: {
        content: {},
        colors: {
          primary: '#FCF6F5FF',
          secondary: '#f6f6ff',
          tertiary: '#131419',
          accent: {
            DEFAULT: '#990011FF',
            hover: '#CC313D',
          },
          paragraph: '#181819',
        },
      },
    },
    plugins: [],
  };
  