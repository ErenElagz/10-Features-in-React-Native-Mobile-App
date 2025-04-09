// ThemeContext.js
import React, {createContext, useState} from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const theme = {
    colors: {
      background: isDarkMode ? '#121212' : '#FFFFFF',
      text: isDarkMode ? '#FFFFFF' : '#000000',
      primary: isDarkMode ? '#BB86FC' : '#6200EE',
    },
    isDarkMode,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
