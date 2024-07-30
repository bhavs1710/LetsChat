import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeToken = async (tokenName, tokenValue) => {
  try {
    await AsyncStorage.setItem(tokenName, tokenValue);
  } catch (error) {
    console.error('Error storing token:', error);
  }
};

export const getToken = async (tokenName) => {
  try {
    return await AsyncStorage.getItem(tokenName);
  } catch (error) {
    console.error('Error retrieving token:', error);
    return null;
  }
};

export const clearTokens = async (tokenName) => {
  try {
    await AsyncStorage.removeItem(tokenName);
  } catch (error) {
    console.error('Error clearing tokens:', error);
  }
};
