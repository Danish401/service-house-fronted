const getSignUpTheme = (mode) => ({
    palette: {
      mode,
      primary: {
        main: mode === 'light' ? '#7d66d9' : '#6e6ade',
      },
      secondary: {
        main: '#B1A9FF',
      },
      background: {
        default: mode === 'light' ? '#FFFFFF' : '#333333',
        paper: mode === 'light' ? '#E2DDFE' : '#7D66D9',
      },
    },
  });
  
  export default getSignUpTheme;
  