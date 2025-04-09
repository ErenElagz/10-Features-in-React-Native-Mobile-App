import {StyleSheet, Text, View, Button, StatusBar} from 'react-native';
import React, {useState, createContext, useContext} from 'react';
import Pages from '../../data/Pages';
import CustomButton from '../../components/Button';

const ThemeContext = createContext();
const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const theme = {
    colors: {
      background: isDarkMode ? '#000' : '#fff',
      text: isDarkMode ? '#fff' : '#000',
      primary: isDarkMode ? 'yellow' : 'darkblue',
      textSecondary: isDarkMode ? '#ffffff50' : '#aaa',
    },
    isDarkMode,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

const ThemeScreenContent = () => {
  const {colors, toggleTheme} = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      padding: 16,
    },
    title: {
      fontSize: 28,
      marginTop: 8,
      color: colors.text,
      letterSpacing: -0.75,
    },
    description: {
      fontSize: 16,
      color: colors.textSecondary,
      marginBottom: 16,
    },
    function: {
      fontSize: 24,
      color: colors.primary,
      letterSpacing: -0.5,
      fontWeight: 'bold',
    },
  });

  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle={colors.isDarkMode ? 'light-content' : 'dark-content'}
      />
      <View style={styles.container}>
        <Text style={styles.function}>Function {Pages[6].index}</Text>
        <Text style={styles.title}>{Pages[6].title}</Text>
        <Text style={styles.description}>{Pages[6].description}</Text>

        <CustomButton
          title="Change Theme"
          onPress={toggleTheme}
          style={{backgroundColor: colors.primary, borderRadius: 12}}
        />
      </View>
    </View>
  );
};

export default function ThemeScreen() {
  return (
    <ThemeProvider>
      <ThemeScreenContent />
    </ThemeProvider>
  );
}
