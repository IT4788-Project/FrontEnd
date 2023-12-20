import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NutritionDiary from './src/screens/User/NutritionDiary';
import SignIn from './src/screens/Authen/SignIn';
import SignUp from './src/screens/Authen/SignUp';
import ForgotPassword from './src/screens/Authen/ForgotPassword';
import ConfirmOTP from './src/screens/Authen/ConfirmOTP';
import PasswordReset from './src/screens/Authen/PasswordReset';
import AuthenEmail from './src/screens/Authen/AuthenEmail';
import HomeUser from './src/screens/User/HomeUser'
import PersonalPage from './src/screens/User/PersonalPage';
import SeeAllFollow from './src/screens/User/SeeAllFollow';
import CookingRecipe from './src/screens/User/CookingRecipe';
import SearchPage from './src/screens/User/SearchPage';
import InforMe from './src/screens/User/InforMe';
import SettingInfor from './src/screens/User/SettingInfor';
import SettingInforPerson from './src/screens/User/SettingInforPerson';

import { AuthProvider } from './contexts/authContext';
import { Router } from './routes/Router';


export default function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
