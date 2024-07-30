import React, { useEffect, useState } from 'react';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import OnboardingStack from './src/navigator/OnboardingStack';
import { View, Text, Button, Linking, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default function App() {
  const navigationRef = useNavigationContainerRef();
  const [isUpdateRequired, setIsUpdateRequired] = useState(false);
  const [updateUrl, setUpdateUrl] = useState('');

  // useEffect(() => {
  //   const checkVersion = async () => {
  //     try {
  //       const versionInfo = await VersionCheck.needUpdate();
  //       if (versionInfo.isNeeded) {
  //         setUpdateUrl(versionInfo.storeUrl);
  //         setIsUpdateRequired(true);
  //       }
  //     } catch (error) {
  //       console.error('Error checking app version:', error);
  //     }
  //   };

  //   checkVersion();
  // }, []);

  if (isUpdateRequired) {
    return (
      <Modal isVisible={true}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>A new version of the app is available. Please update to continue.</Text>
          <Button title='Update Now' onPress={() => Linking.openURL(updateUrl)} />
        </View>
      </Modal>
    );
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
            <OnboardingStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
