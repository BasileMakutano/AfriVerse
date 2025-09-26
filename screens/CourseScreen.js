import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CustomTopBar from '../components/CustomTopBar';
import { useTheme } from '../ThemeContext';

export default function CourseScreen() {
  const { darkMode } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: darkMode ? '#000' : '#fff' }]}>
      <CustomTopBar title="Home" />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={[styles.title, { color: darkMode ? '#fff' : '#000' }]}>
          Welcome to the Course
        </Text>
        <Text style={[styles.paragraph, { color: darkMode ? '#ddd' : '#000' }]}>
          This is where your course content will go.
        </Text>
        <Text style={[styles.paragraph, { color: darkMode ? '#ddd' : '#000' }]}>Lesson 1: Introduction</Text>
        <Text style={[styles.paragraph, { color: darkMode ? '#ddd' : '#000' }]}>Lesson 2: Basics</Text>
        <Text style={[styles.paragraph, { color: darkMode ? '#ddd' : '#000' }]}>Lesson 3: Advanced Topics</Text>
        <Text style={[styles.paragraph, { color: darkMode ? '#ddd' : '#000' }]}>Lesson 4: Practice</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 15,
  },
});
