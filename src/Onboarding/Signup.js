// import React from 'react';
// import { View, Text, Image } from 'react-native';
// import { AppImages } from '../assets';

// const Signup = () => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     <Text>Helo</Text>
//     </View>
//   );
// };

// export default Signup;


import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert, Keyboard } from 'react-native';
import { styles } from './style';
import { CoreTextInput,} from '../components';

const Signup = (props) => {
  const [signUpDetail, setSignUpDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});

  let userName = useRef(null);
  let userPhone = useRef(null);
  let userEmail = useRef(null);
  let userPass = useRef(null);
  let userConPass = useRef(null);


  const handleLogInPress = () => {
    props.navigation.navigate('Login');
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Register </Text>
        <CoreTextInput
          refVal={userEmail}
          onSubmitEditing={() => userPass.current.focus()}
          style={error?.email ? styles.errorInput : null}
          placeholder={'Email'}
          value={signUpDetail?.email}
          onChange={(val) => {
            setSignUpDetail({ ...signUpDetail, email: val });
          }}
          errorMsg={error?.email}
        />
        <CoreTextInput
          refVal={userPass}
          onSubmitEditing={() => userConPass.current.focus()}
          style={error?.password ? styles.errorInput : null}
          placeholder={'Password'}
          value={signUpDetail?.password}
          onChange={(val) => {
            setSignUpDetail({ ...signUpDetail, password: val });
          }}
          errorMsg={error?.password}
          secureTextEntry
        />
        <CoreTextInput
          refVal={userConPass}
          onSubmitEditing={() => Keyboard.dismiss()}
          style={error?.confirm_password ? styles.errorInput : null}
          placeholder={'Confirm Password'}
          value={signUpDetail?.confirm_password}
          onChange={(val) => {
            setSignUpDetail({ ...signUpDetail, confirm_password: val });
          }}
          errorMsg={error?.confirm_password}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.dontHaveAc}>
        <Text>
          Already Have an Account !{' '}
          <Text style={styles.dontHaveAcLink}>
            Sign In
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default Signup;
