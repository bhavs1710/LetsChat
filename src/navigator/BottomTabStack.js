import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppImages, Colors } from '../assets';
import Home from '../Tabs/Home';
import Chat from '../Tabs/Chat';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
  );
};
const MyChatStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Chat' component={Chat} />
    </Stack.Navigator>
  );
};

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        activeTintColor: Colors.BLUE,
        inactiveTintColor: Colors.GREY,
        headerShown: false,
      })}
    >
      <Tab.Screen
        name='HomeStack'
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Image source={AppImages.Home} style={{ width: 18, height: 18, tintColor: color }} />
          ),
        }}
      />
      <Tab.Screen
        name='Chat'
        component={MyChatStack}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color, size }) => (
            <Image source={AppImages.Event} style={{ width: 18, height: 18, tintColor: color }} />
          ),
        }}
      />
    
    </Tab.Navigator>
  );
};

const BottomTabStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Stack.Screen name='NewHome' component={NewHomeScreen} />
      <Stack.Screen name='Settings' component={SettingScreen} /> */}
      <Stack.Screen name='BottomTabs' component={BottomTabs} />
    </Stack.Navigator>
  );
};

export default BottomTabStack;
