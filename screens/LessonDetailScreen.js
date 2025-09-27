// screens/LessonDetailScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

export default function LessonDetailScreen({ route, navigation }) {
  const { lesson } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{lesson.title}</Text>
      <Text style={styles.description}>{lesson.description}</Text>
      <Text style={styles.duration}>⏱ {lesson.duration}</Text>

      {/* Back button fixed to bottom */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Courses')}>
        <Text style={styles.backText}>⬅ Back to Courses</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20, justifyContent: 'space-between' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  description: { fontSize: 16, marginBottom: 10 },
  duration: { fontSize: 14, color: '#007aff' },
  backButton: {
    backgroundColor: '#007aff',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  backText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});
