import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppBar from '../../../components/SettingInfor/AppBar';
import COLORS from '../../../constants/Color';
import ButtonNavigation
  from '../../../components/SettingInfor/ButtonNavigation';
import {width, height} from '../../../constants/DeviceSize';

const SettingInforPerson = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppBar namePage="Thông tin cá nhân" />

      <ScrollView style={{flex: 1}}>
        <ButtonNavigation
          title="Tên của bạn"
          modal={true}
          value="Nguyễn Đình Văn"
        />
        <ButtonNavigation title="Tuổi của bạn" modal={true} value="20" />
        <ButtonNavigation title="Chiều cao" modal={true} value={`175 cm`} />
        <ButtonNavigation title="Giới tính" modal={true} value="Nam" />
        <ButtonNavigation
          title="Mục tiêu cá nhân"
          modal={true}
          value="Giảm cân"
        />

        <View style={{width: width, alignItems: 'center'}}>
          <Text style={[styles.textTopic, {marginVertical: 20}]}>
            Cân nặng của bạn:
          </Text>
        </View>

        <ButtonNavigation title="Cân nặng ban đầu" />
        <ButtonNavigation title="Cân nặng hiện tại" />
        <ButtonNavigation title="Cân nặng mục tiêu" />
        <ButtonNavigation title="Số đo hiện tại" />
        <ButtonNavigation title="Số đo hiện tại" />
        <ButtonNavigation title="Số đo hiện tại" />

      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingInforPerson;

const styles = StyleSheet.create ({
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
  },
});
