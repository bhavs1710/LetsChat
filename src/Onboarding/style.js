import { StyleSheet } from 'react-native';
import { Colors, FontSize, Fonts } from '../assets';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    flex: 1,
  },
  title: {
    fontSize: FontSize.twFour,
    marginBottom: 20,
    fontFamily: Fonts.bold,
    marginTop: 100,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: Colors.GREY,
    color: Colors.BLACK,
    borderBottomWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  errorInput: { borderColor: Colors.ERROR },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: Colors.APP_BLUE,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 30,
  },
  buttonText: {
    color: Colors.WHITE,
    fontSize: FontSize.sixteen,
  },
  dontHaveAc: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 80,
  },
  dontHaveAcLink: {
    color: Colors.APP_BLUE,
  },
});
