import React, { createContext, useState, useContext } from 'react';
import { View, Switch, Text, StyleSheet } from 'react-native';

const DarkModeContext = createContext();

const SettingsScreen = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setDarkMode(previousState => !previousState);
  };

  return (
    <DarkModeContext.Provider value={darkMode}>
      <View style={[styles.container, darkMode && styles.containerDark]}>
        <View style={styles.setting}>
          <Text style={[styles.settingText, darkMode && styles.settingTextDark]}>Mode Sombre</Text>
          <Switch
            value={darkMode}
            onValueChange={handleToggleDarkMode}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={darkMode ? '#f5dd4b' : '#f4f3f4'}
          />
        </View>
        {/* Ajouter d'autres paramètres */}
      </View>
    </DarkModeContext.Provider>
  );
};

const ComponentUsingDarkMode = () => {
  const darkMode = useContext(DarkModeContext);

  return (
    <View style={[styles.componentContainer, darkMode && styles.componentContainerDark]}>
      <Text style={[styles.componentText, darkMode && styles.componentTextDark]}>Composant utilisant le mode sombre</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  containerDark: {
    backgroundColor: '#000',
  },
  setting: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  settingText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  settingTextDark: {
    color: '#fff',
  },
  componentContainer: {
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  componentContainerDark: {
    backgroundColor: '#333',
  },
  componentText: {
    fontSize: 18,
    color: '#333',
  },
  componentTextDark: {
    color: '#fff',
  },
});

export default SettingsScreen;
