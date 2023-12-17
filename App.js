import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import NutritionDiary from './src/screens/User/NutritionDiary';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import ForgotPassword from './src/screens/ForgotPassword';
import ConfirmOTP from './src/screens/ConfirmOTP';
import PasswordReset from './src/screens/PasswordReset';
import HomeUser from './src/screens/User/HomeUser';
import AuthenEmail from './src/screens/AuthenEmail';

export default function App () {
  return <HomeUser />;
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
