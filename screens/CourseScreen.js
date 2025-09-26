import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';

// --- SVG XML icons ---
const homeIcon = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" 
viewBox="0 0 24 24">
  <path d="M3 9.5l9-7 9 7V20a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-5H9v5a2 2 0 0 1-2 2H3V9.5z"/>
</svg>
`;

const dashboardIcon = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" 
viewBox="0 0 24 24">
  <rect x="3" y="3" width="7" height="7"/>
  <rect x="14" y="3" width="7" height="7"/>
  <rect x="14" y="14" width="7" height="7"/>
  <rect x="3" y="14" width="7" height="7"/>
</svg>
`;

const profileIcon = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" 
viewBox="0 0 24 24">
  <circle cx="12" cy="7" r="4"/>
  <path d="M5.5 21a7.5 7.5 0 0 1 13 0"/>
</svg>
`;

const sunIcon = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" 
viewBox="0 0 24 24">
  <circle cx="12" cy="12" r="5"/>
  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 
19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
</svg>
`;

const moonIcon = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" 
viewBox="0 0 24 24">
  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
</svg>
`;

export default function CourseScreen() {
  const [darkMode, setDarkMode] = useState(false);
  const iconColor = darkMode ? "#fff" : "#000";

  return (
    <View style={[styles.container, { backgroundColor: darkMode ? '#121212' : '#fff' }]}>
      
      {/* Title + Dark Mode Toggle in the SAME row */}
      <View style={styles.headerRow}>
        <Text style={[styles.title, { color: iconColor }]}>Course Content</Text>
        <TouchableOpacity onPress={() => setDarkMode(!darkMode)}>
          <SvgXml 
            xml={darkMode ? sunIcon : moonIcon} 
            width="26" 
            height="26" 
            stroke={iconColor} 
          />
        </TouchableOpacity>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={[styles.paragraph, { color: iconColor }]}>
          Welcome to the Course! Scroll to explore lessons.
        </Text>
        <Text style={[styles.paragraph, { color: iconColor }]}>Lesson 1: Introduction</Text>
        <Text style={[styles.paragraph, { color: iconColor }]}>Lesson 2: Basics</Text>
        <Text style={[styles.paragraph, { color: iconColor }]}>Lesson 3: Advanced Topics</Text>
        <Text style={[styles.paragraph, { color: iconColor }]}>Lesson 4: Practice</Text>
        <Text style={[styles.paragraph, { color: iconColor }]}>Lesson 5: Summary</Text>
        <Text style={[styles.paragraph, { color: iconColor }]}>Lesson 6: Extra Notes</Text>
        <Text style={[styles.paragraph, { color: iconColor }]}>Lesson 7: Final Review</Text>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={[styles.bottomBar, { backgroundColor: darkMode ? '#1e1e1e' : '#f2f2f2' }]}>
        <TouchableOpacity style={styles.navButton}>
          <SvgXml xml={homeIcon} width="26" height="26" stroke={iconColor} />
          <Text style={{ color: iconColor }}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton}>
          <SvgXml xml={dashboardIcon} width="26" height="26" stroke={iconColor} />
          <Text style={{ color: iconColor }}>Dashboard</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton}>
          <SvgXml xml={profileIcon} width="26" height="26" stroke={iconColor} />
          <Text style={{ color: iconColor }}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 80, // leave space for bottom bar
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 15,
    lineHeight: 22,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 5,
  },
  navButton: {
    alignItems: 'center',
  },
});
