import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import COLORS from '../../constants/Color';
import {width, height} from '../../constants/DeviceSize';
import FormInput from '../../components/Login/FormInput';

const ConfirmOTP = () => {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require ('../../assets/BackgroundLogin.jpg')}
        style={styles.imageBackground}
      >
        <View style={{paddingLeft: width * 0.07}}>
          <Text style={styles.textTitle}>Quên mật khẩu</Text>

          <FormInput topic="Mã xác thực" placeholder="Nhập mã xác thực" />

          <Text>Mã xác thực đã được gửi tới email.....</Text>

          <View
            style={{
              width: width * 0.75,
              justifyContent: 'center',
              alignItems: 'flex-end',
              marginVertical: 20,
            }}
          >
            <TouchableOpacity style={styles.buttonSingIn}>
              <Text style={{color: COLORS.login.buttonSingIn}}>Xác nhận</Text>
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
              Bạn đã có tài khoản?
            </Text>
            <TouchableOpacity>
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

export default ConfirmOTP;

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
