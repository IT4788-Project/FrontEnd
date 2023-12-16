import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import FormInput from '../../components/Login/FormInput';
import {width, height} from '../../constants/DeviceSize';
import COLORS from '../../constants/Color';
import Checkbox from 'expo-checkbox';

const SignIn = () => {
  const [email, setEmail] = React.useState (null);
  const [password, setPassword] = React.useState (null);
  const [isShowPassword, setIsShowPassword] = React.useState (false);
  const [isChecked, setIsChecked] = React.useState (false);

  const onPressShowPassword = () => {
    setIsShowPassword (!isShowPassword);
  };

  return (
    <SafeAreaView>
      <ImageBackground
        source={require ('../../assets/BackgroundLogin.jpg')}
        style={styles.imageBackground}
      >
        <View style={{paddingLeft: width * 0.07}}>
          <Text style={styles.textTitle}>Đăng nhập</Text>

          <FormInput
            topic="Email"
            setValue={setEmail}
            placeholder="Nhập email đăng nhập"
          />

          <FormInput
            topic="Mật khẩu"
            setValue={setPassword}
            placeholder="Nhập mật khẩu"
            category="password"
            statePassword={isShowPassword}
            setIsShow={onPressShowPassword}
          />

          <View
            style={{
              flexDirection: 'row',
              width: width * 0.75,
              justifyContent: 'space-between',
            }}
          >
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: COLORS.login.text}}>Nhớ tài khoản</Text>
              <Checkbox
                value={isChecked}
                onValueChange={setIsChecked}
                color={COLORS.login.text}
                style={{marginLeft: 5}}
              />
            </View>

            <View>
              <Text style={{color: COLORS.login.text}}>Quên mật khẩu</Text>
            </View>
          </View>

          <View
            style={{
              width: width * 0.75,
              justifyContent: 'center',
              alignItems: 'flex-end',
              marginVertical: 20,
            }}
          >
            <TouchableOpacity style={styles.buttonSingIn}>
              <Text style={{color: COLORS.login.buttonSingIn}}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <Image source={require ('../../assets/IconGoogle.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require ('../../assets/IconFacebook.png')} />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              width: width * 0.7,
            }}
          >
            <Text style={{color: COLORS.login.text}}>
              Bạn chưa có tài khoản?
            </Text>
            <TouchableOpacity>
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

const styles = StyleSheet.create ({
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
