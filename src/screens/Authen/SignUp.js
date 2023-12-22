import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import COLORS from '../../../constants/Color';
import { width, height } from '../../../constants/DeviceSize';
import FormInput from '../../../components/Authen/FormInput';

import { signUp } from '../../../utils/Auth/signUp';

const SignUp = ({ navigation }) => {
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [gmail, setGmail] = React.useState('');

  const [isShowPassword, setIsShowPassword] = React.useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = React.useState(false);

  // UI hanlder functions

  const handleSignUp = async () => {
    if (name === '' || password === '' || confirmPassword === '' || gmail === '') {
      Alert.alert('Thiếu thông tin', 'Vui lòng nhập đầy đủ thông tin');
      return;
    } else {
      try {
        const res = await signUp(name, password, gmail);
        if (res.status === 'success') {
          Alert.alert('Đăng ký thành công', res.message);
          navigation.navigate('SignIn');
        } else {
          Alert.alert('Đăng ký thất bại', res.message);
        }
      } catch (error) {
        Alert.alert("Error", error)
      }
    }

  }
  const onPressShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const onPressShowConfirmPassword = () => {
    setIsShowConfirmPassword(!isShowConfirmPassword);
  };

  return (
    <SafeAreaView>
      <ImageBackground
        source={require('../../../assets/BackgroundLogin.jpg')}
        style={styles.imageBackground}
      >
        <View style={{ paddingLeft: width * 0.07 }}>
          <Text style={styles.textTitle}>Đăng ký tài khoản</Text>

          <FormInput
            topic="Họ và tên"
            setValue={setName}
            placeholder="Nhập họ và tên"
          />
          <FormInput
            topic="Email"
            setValue={setGmail}
            placeholder="Nhập email"
          />

          <FormInput
            topic="Mật khẩu"
            setValue={setPassword}
            placeholder="Nhập mật khẩu đăng nhập"
            category="password"
            statePassword={isShowPassword}
            setIsShow={onPressShowPassword}
          />

          <FormInput
            topic="Xác nhận mật khẩu"
            setValue={setConfirmPassword}
            placeholder="Nhập lại mật khẩu đăng nhập"
            category="password"
            statePassword={isShowConfirmPassword}
            setIsShow={onPressShowConfirmPassword}
          />

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
              onPress={handleSignUp}
            >
              <Text style={{ color: COLORS.login.buttonSingIn }}>Đăng ký</Text>
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
              Bạn đã có tài khoản?
            </Text>
            <TouchableOpacity
              onPress={() => { navigation.navigate('SignIn') }}
            >
              <Text
                style={{
                  color: COLORS.login.text,
                  fontWeight: 'bold',
                  paddingLeft: 5,
                }}
              >
                Đăng nhập
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SignUp;

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
