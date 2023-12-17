import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import NutritionDiary from './src/screens/User/NutritionDiary';
import SignIn from './src/screens/Authen/SignIn';
import SignUp from './src/screens/Authen/SignUp';
import ForgotPassword from './src/screens/Authen/ForgotPassword';
import ConfirmOTP from './src/screens/Authen/ConfirmOTP';
import PasswordReset from './src/screens/Authen/PasswordReset';
import AuthenEmail from './src/screens/Authen/AuthenEmail';

export default function App () {
  return <AuthenEmail />;
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
