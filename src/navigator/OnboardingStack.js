import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState, useRef } from 'react';
import Login from '../Onboarding/Login';
import Splash from '../Onboarding/Splash';
import Signup from '../Onboarding/Signup';
import BottomTabStack from './BottomTabStack';

const Stack = createNativeStackNavigator();

export default function OnboardingStack() {
  const [enableSplash, setEnableSplash] = useState(true);
  // const isAuthenticated = useSelector((state) => state?.userData?.isAuthenticated);

  // useEffect(() => {
  //   isAuthenticated && getUserDetail();
  // }, [isAuthenticated]);

  // const getUserDetail = async () => {
  //   await ApiClient.userDetail()
  //     .then(async (res) => {
  //       dispatch(setuserDetail(res.data));
  //     })
  //     .catch((err) => {
  //       console.warn('setUserDetail', err);
  //     });
  // };

  const timerRef = useRef(null);
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setEnableSplash(false);
    }, 2000);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      // initialRouteName={!isLoggedIn ? 'Login' : 'BottomTabStack'}
    >
      {enableSplash &&
       <Stack.Screen name='Splash' component={Splash} />}
      {/* <Stack.Screen name='Pin' component={Pin} /> */}
      {/* {isAuthenticated ? ( */}
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name='BottomTabStack' component={BottomTabStack} />
      {/* ) : ( */}
      {/* )} */}
    </Stack.Navigator>
  );
}
