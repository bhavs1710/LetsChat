import React from 'react';
import { View, Text, Image } from 'react-native';
import { AppImages } from '../assets';

const Splash = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:25, fontWeight:'800',textAlign:'center'}}> Let's Chat </Text>
    </View>
  );
};

export default Splash;