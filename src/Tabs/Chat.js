// screens/UserList.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet,SafeAreaView } from 'react-native';

const users = [
  { id: '1', name: 'User One' },
  { id: '2', name: 'User Two' },
  { id: '3', name: 'User Three' },
  // Add more users here
];

const Chat = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.userItem}
      onPress={() => navigation.navigate('Chatwithuser', { userName: item.name })}
    >
      <Text style={styles.userName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  userItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  userName: {
    fontSize: 18,
  },
});

export default Chat;
