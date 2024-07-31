import React, { useState,useRef } from 'react';
import { View, Text, FlatList, StyleSheet, KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import CoreTextInput from '../components/CoreTextInput'; // Adjust the path as needed

const messages = [
  { id: '1', text: 'Hello!', isUser: false },
  { id: '2', text: 'Hi! How are you?', isUser: true },
  { id: '3', text: 'I am good, thank you! How about you?', isUser: false },
  // Add more messages here
];

const Chatwithuser = ({ route }) => {
  const { userName } = route.params;
  const [inputText, setInputText] = useState('');
  const navigation = useNavigation();
  let userPass = useRef(null);
  let userEmail = useRef(null);
  const [loginDetail, setLoginDetail] = useState({});
  const [errors, setErrors] = useState({});

  const handleSend = () => {
    if (inputText.trim()) {
      console.log(`Sending message: ${inputText}`);
      setInputText(''); 
    }
  };

  const renderItem = ({ item }) => (
    <View
      style={[
        styles.messageContainer,
        item.isUser ? styles.userMessage : styles.otherMessage,
      ]}
    >
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <GestureHandlerRootView style={styles.flex}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.flex}
        >
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.header}>{userName}</Text>
          <FlatList
            data={messages}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            inverted
            contentContainerStyle={styles.flatListContent}
          />
        </KeyboardAvoidingView>
        <View style={styles.inputContainer}>
        <CoreTextInput
          refVal={userEmail}
          onSubmitEditing={() => userPass.current.focus()}
          style={errors?.email ? styles.errorInput : null}
          placeholder={'Enter your Message'}
          value={loginDetail?.email}
          onChange={(val) => {
            setLoginDetail({ ...loginDetail, email: val });
          }}
          errorMsg={errors?.email}
        />
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    backgroundColor: '#f0f0f0',
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  messageContainer: {
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    maxWidth: '80%',
  },
  userMessage: {
    backgroundColor: '#DCF8C6',
    alignSelf: 'flex-end',
  },
  otherMessage: {
    backgroundColor: '#FFFFFF',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 16,
  },
  flatListContent: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  inputContainer: {
    padding: 10,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: '#007BFF',
  },
});

export default Chatwithuser;
