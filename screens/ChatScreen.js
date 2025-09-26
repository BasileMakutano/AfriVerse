import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView } from 'react-native';

export default function ChatScreen({ route }) {
  const { user } = route.params;
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    // Add user message
    setChat(prev => [...prev, { sender: user, text: message }]);

    try {
      const response = await fetch("http://YOUR_SERVER_IP:11434/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "llama3",  // or "mistral", "gemma"
          prompt: message,
        }),
      });

      const data = await response.json();

      // Add AI reply
      setChat(prev => [...prev, { sender: "AI", text: data.response || "No response" }]);
    } catch (error) {
      setChat(prev => [...prev, { sender: "AI", text: "Error: could not connect" }]);
    }

    setMessage('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome {user} 👋</Text>

      <ScrollView style={styles.chatBox}>
        {chat.map((msg, idx) => (
          <Text key={idx} style={msg.sender === "AI" ? styles.aiText : styles.userText}>
            {msg.sender}: {msg.text}
          </Text>
        ))}
      </ScrollView>

      <TextInput
        style={styles.input}
        placeholder="Type your message..."
        value={message}
        onChangeText={setMessage}
      />

      <Button title="Send" onPress={sendMessage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  chatBox: {
    flex: 1,
    marginBottom: 15,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#333',
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  userText: {
    color: 'blue',
    marginVertical: 4,
  },
  aiText: {
    color: 'green',
    marginVertical: 4,
  },
});
