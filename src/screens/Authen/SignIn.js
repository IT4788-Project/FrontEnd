import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';
import React from 'react';
import FormInput from '../../../components/Authen/FormInput';
import { width, height } from '../../../constants/DeviceSize';
import COLORS from '../../../constants/Color';
import Checkbox from 'expo-checkbox';

import { useAuth } from '../../../contexts/authContext';

export const SignIn = ({navigation}) => {
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [isShowPassword, setIsShowPassword] = React.useState(false);
  const [isChecked, setIsChecked] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const auth = useAuth();

  // UI handler functions
  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const handleSignIn = async () => {
    try {
      if (!email || !password) {
        Alert.alert('Thiếu thông tin','Vui lòng nhập đầy đủ thông tin đăng nhập');
        return;
      } else {
        const res = await auth._signIn(email, password);
        switch (res.status) {
          case 'success':
            Alert.alert('Đăng nhập thành công', res.message);
            break;
          case 'failed':
            Alert.alert('Đăng nhập thất bại', res.message);
            break;
          default:
            Alert.alert('Lỗi', 'Dữ liệu bất đồng bộ!');
        }
      }
    } catch (error) {
      Alert.alert('Lỗi', 'Lỗi giao thức: ' + error);
    }

  };

  return (
    <SafeAreaView>
      <ImageBackground
        source={require('../../../assets/BackgroundLogin.jpg')}
        style={styles.imageBackground}
      >
        <View style={{ paddingLeft: width * 0.07 }}>
          <Text style={styles.textTitle}>Đăng nhập</Text>

          <FormInput
            topic="Email"
            placeholder="Nhập email đăng nhập"
            category="email"
            setValue={setEmail}
          />

          <FormInput
            topic="Mật khẩu"
            setValue={setPassword}
            placeholder="Nhập mật khẩu"
            category="password"
            statePassword={isShowPassword}
            setIsShow={handleShowPassword}
          />

          <View
            style={{
              flexDirection: 'row',
              width: width * 0.75,
              justifyContent: 'space-between',
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: COLORS.login.text }}>Nhớ tài khoản</Text>
              <Checkbox
                value={isChecked}
                onValueChange={setIsChecked}
                color={COLORS.login.text}
                style={{ marginLeft: 5 }}
              />
            </View>

            <TouchableOpacity
              onPress={() => {navigation.navigate("ForgotPassword")}}
            >
              <Text style={{ color: COLORS.login.text }}>Quên mật khẩu</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: width * 0.75,
              justifyContent: 'center',
              alignItems: 'flex-end',
              marginVertical: 20,
            }}
          >
            <TouchableOpacity
              style={styles.buttonSingIn}
              onPress={handleSignIn}
            >
              <Text style={{ color: COLORS.login.buttonSingIn }}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity>
              <Image source={require('../../../assets/IconGoogle.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../../../assets/IconFacebook.png')} />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              width: width * 0.7,
            }}
          >
            <Text style={{ color: COLORS.login.text }}>
              Bạn chưa có tài khoản?
            </Text>
            <TouchableOpacity
              onPress={() => {navigation.navigate("SignUp")}}
            >
              <Text
                style={{
                  color: COLORS.login.text,
                  fontWeight: 'bold',
                  paddingLeft: 5,
                }}
              >
                Đăng ký ngay
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  textTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS.login.text,
    marginBottom: 20,
  },
  buttonSingIn: {
    height: height * 0.05,
    width: width * 0.3,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    elevation: 10,
    backgroundColor: 'white',
  },
});
