import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Colors, FontSize, Fonts } from '../../assets';

const CoreTextInput = ({
  refVal,
  onSubmitEditing,
  style,
  maxLength,
  value,
  onChange,
  placeholder,
  errorMsg,
  onlyNumeric,
  keyboardType,
  secureTextEntry,
  label,
  required,
}) => {
  const onChangeText = (val) => {
    let onChangeVal = onlyNumeric ? val.replace(/[^0-9]/g, '') : val;
    onChange(onChangeVal);
  };
  return (
    <View style={{ width: '100%' }}>
      {label ? (
        <Text style={styles.label}>
          {label} {required ? <Text style={{ color: Colors.ERROR }}>*</Text> : null}
        </Text>
      ) : null}
      <TextInput
        ref={refVal}
        onSubmitEditing={onSubmitEditing}
        blurOnSubmit={false}
        style={[styles.input, style]}
        placeholder={placeholder}
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChangeText}
        maxLength={maxLength}
        secureTextEntry={secureTextEntry}
      />
      <Text style={styles.errorMsg}>{errorMsg ? errorMsg : null}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 40,
    borderColor: Colors.GREY,
    borderBottomWidth: 1,
    paddingHorizontal: 5,
    fontFamily: Fonts.regular,
  },
  errorMsg: {
    color: Colors.ERROR,
    fontSize: FontSize.ten,
    alignSelf: 'flex-end',
    fontFamily: Fonts.regular,
  },
  label: {
    fontFamily: Fonts.medium,
    fontSize: FontSize.fourteen,
    color: Colors.BLACKGRAY,
    marginBottom: 6,
  },
});

export default CoreTextInput;
