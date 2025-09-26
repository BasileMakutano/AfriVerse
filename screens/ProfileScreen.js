import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomTopBar from '../components/CustomTopBar';
import { useTheme } from '../ThemeContext';

export default function ProfileScreen() {
  const { darkMode } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: darkMode ? '#000' : '#fff' }]}>
      <CustomTopBar title="Profile" />
      <View style={styles.content}>
        <Text style={[styles.text, { color: darkMode ? '#fff' : '#000' }]}>
          Hello there
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
