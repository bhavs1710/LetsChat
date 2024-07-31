import React, { useRef, useState } from 'react';
import { View, Text, Alert, TouchableOpacity, ScrollView, Keyboard } from 'react-native';
import { CoreTextInput } from '../components';
import { styles } from './style';
import ApiClient from '../network/ApiManager';
import { CommonActions } from '@react-navigation/native';

const Login = (props) => {
      let userEmail = useRef(null);
  let userPass = useRef(null);

  const [loginDetail, setLoginDetail] = useState({});
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  console.warn('loginDetail',loginDetail);

  const handleLogin = async () => {
    setErrors({});
    // setIsLoading(true);
    ApiClient.userLogin(loginDetail)
      .then(async (res) => {
        let data = res.data;
        console.warn('response',data);
        setIsLoading(false);
        props.navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'BottomTabStack' }],
          })
        );
      })
      .catch((error) => {
        console.warn('login error', error);
        setIsLoading(false);
      });
  };


//   const handleLogin = () => {
//     props.navigation.navigate('BottomTabStack');
//   };
  const handleRegisterPress = () => {
    props.navigation.navigate('Signup');
  };
  return (
       <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Sign In </Text>
        <CoreTextInput
          refVal={userEmail}
          onSubmitEditing={() => userPass.current.focus()}
          style={errors?.email ? styles.errorInput : null}
          placeholder={'Email'}
          value={loginDetail?.email}
          onChange={(val) => {
            setLoginDetail({ ...loginDetail, email: val });
          }}
          errorMsg={errors?.email}
        />
        <CoreTextInput
          refVal={userPass}
          onSubmitEditing={() => Keyboard.dismiss()}
          style={errors?.password ? styles.errorInput : null}
          placeholder={'Password'}
          value={loginDetail?.password}
          onChange={(val) => {
            setLoginDetail({ ...loginDetail, password: val });
          }}
          errorMsg={errors?.password}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.dontHaveAc}>
        <Text>
          Don't Have an Account ?{' '}
          <Text style={styles.dontHaveAcLink} onPress={handleRegisterPress}>
            Sign Up
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default Login;
