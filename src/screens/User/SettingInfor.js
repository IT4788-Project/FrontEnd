import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppBar from '../../../components/SettingInfor/AppBar';
import COLORS from '../../../constants/Color';
import ButtonNavigation
  from '../../../components/SettingInfor/ButtonNavigation';
import { width } from '../../../constants/DeviceSize';
import { useAuth } from '../../../contexts/authContext';

const SettingInfor = props => {
  const auth = useAuth();
  const handleLogOut = async () => {
    await auth._logOut();
  }

  return (
    <SafeAreaView style={styles.container}>
      <AppBar namePage="Cài đặt" />
      <View style={{ marginVertical: 20 }}>
        <Text style={styles.textTopic}>Tài khoản của bạn</Text>
      </View>
      <ButtonNavigation
        title="Thông tin cá nhân"
        nextScreen={true}
        nameNextScreen="SettingInforPerson"
      />
      <ButtonNavigation title="Thông báo" nextScreen={true} disabled={true} />

      <Text style={[styles.textTopic, { marginVertical: 20 }]}>
        Hỗ trợ và thông tin thêm
      </Text>

      <ButtonNavigation
        title="Trợ giúp & hỗ trợ"
        nextScreen={true}
        disabled={true}
      />
      <ButtonNavigation title="Chính sách" nextScreen={true} disabled={true} />

      <View style={{ width: width, alignItems: "center" }}>
        <TouchableOpacity
          style={styles.logOutButton}
          onPress={() => {
            handleLogOut();
          }}
        >
          <Text style={styles.textLogOut}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SettingInfor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.inforMe.background,
  },
  logOutButton: {
    paddingHorizontal: 20,
    backgroundColor: COLORS.settingInfor.logOutButton,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 20,
  },
  textLogOut: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  textTopic: {
    color: COLORS.inforMe.textName,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: width * 0.05,
  },
});
