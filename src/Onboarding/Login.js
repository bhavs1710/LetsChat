import React, { useRef, useState } from 'react';
import { View, Text, Alert, TouchableOpacity, ScrollView, Keyboard } from 'react-native';
import { CoreTextInput } from '../components';
import { styles } from './style';

const Login = (props) => {
      let userEmail = useRef(null);
  let userPass = useRef(null);

  const [loginDetail, setLoginDetail] = useState({});
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    props.navigation.navigate('BottomTabStack');
  };
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

// import React, { useRef, useState } from 'react';
// import { View, Text, Alert, TouchableOpacity, ScrollView, Keyboard } from 'react-native';
// // import { CommonActions } from '@react-navigation/native';
// import { CoreTextInput} from '../components/CoreTextInput';

// import { styles } from './style';
// // import { useDispatch, useSelector } from 'react-redux';

// const Login = (props) => {
//   let userEmail = useRef(null);
//   let userPass = useRef(null);
// //   const dispatch = useDispatch();

//   const [loginDetail, setLoginDetail] = useState({});
//   const [errors, setErrors] = useState({});
//   const [isLoading, setIsLoading] = useState(false);

//   const handleLoginIn = async () => {
//     // setErrors({});
//     // setIsLoading(true);
//     // ApiClient.userLogin(loginDetail)
//     //   .then(async (res) => {
//     //     let data = res.data;
//     //     const { access, refresh } = data.token;
//     //     await storeToken('token', access);
//     //     await storeToken('refreshToken', refresh);
//     //     setIsLoading(false);
//     //     dispatch(setuserDetail(res.data?.user_detail));
//     //     dispatch(setIsAuthenticated(true));
//         // props.navigation.dispatch(
//         //   CommonActions.reset({
//         //     index: 0,
//         //     routes: [{ name: 'BottomTabStack' }],
//         //   })
//         // );
//     //   })
//     //   .catch((error) => {
//     //     console.warn('login error', error);
//     //     setIsLoading(false);
//     //     if (error?.response?.data?.error?.non_field_errors) {
//     //       Alert.alert('', error?.response?.data?.error?.non_field_errors[0]);
//     //     } else if (error?.response?.data?.error) {
//     //       setErrors(error.response.data.error);
//     //     }
//     //   });
//   };

//   const handleRegisterPress = () => {
//     props.navigation.navigate('Register');
//   };

//   return (
//     <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={{ flexGrow: 1 }}>
//       <View style={styles.container}>
//         <Text style={styles.title}>Sign In </Text>
//         <CoreTextInput
//           refVal={userEmail}
//           onSubmitEditing={() => userPass.current.focus()}
//           style={errors?.email ? styles.errorInput : null}
//           placeholder={'Email'}
//           value={loginDetail?.email}
//           onChange={(val) => {
//             setLoginDetail({ ...loginDetail, email: val });
//           }}
//           errorMsg={errors?.email}
//         />
//         <CoreTextInput
//           refVal={userPass}
//           onSubmitEditing={() => Keyboard.dismiss()}
//           style={errors?.password ? styles.errorInput : null}
//           placeholder={'Password'}
//           value={loginDetail?.password}
//           onChange={(val) => {
//             setLoginDetail({ ...loginDetail, password: val });
//           }}
//           errorMsg={errors?.password}
//           secureTextEntry
//         />
//         <TouchableOpacity onPress={handleLoginIn} style={styles.button}>
//           <Text style={styles.buttonText}>Login</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={styles.dontHaveAc}>
//         <Text>
//           Don't Have an Account ?{' '}
//           <Text style={styles.dontHaveAcLink} onPress={handleRegisterPress}>
//             Sign Up
//           </Text>
//         </Text>
//       </View>
//     </ScrollView>
//   );
// };

// export default Login;