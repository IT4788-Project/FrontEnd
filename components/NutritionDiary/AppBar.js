import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {width, height} from '../../constants/DeviceSize';
import moment from 'moment';
import {Ionicons} from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons';
import COLORS from '../../constants/Color';
import {AntDesign} from '@expo/vector-icons';

const AppBar = props => {
  const today = props.today;
  const stateNotification = props.stateNotification;
  const stateAddDiary = props.stateAddDiary;

  const formattedDateTime = moment (today).format (`DD [tháng] MM [năm] YYYY`);
  // Chuyển đổi ngày trong tiếng Anh sang tiếng Việt
  const englishDay = moment (today).format ('dddd');

  const vietnameseDay = englishDay => {
    switch (englishDay.toLowerCase ()) {
      case 'sunday':
        return 'Chủ Nhật';
      case 'monday':
        return 'Thứ 2';
      case 'tuesday':
        return 'Thứ 3';
      case 'wednesday':
        return 'Thứ 4';
      case 'thursday':
        return 'Thứ 5';
      case 'friday':
        return 'Thứ 6';
      case 'saturday':
        return 'Thứ 7';
    }
  };

  const onPressShowModal = () => {
    props.setIsVisible (!props.isVisible);
  };

  const onPressNotification = () => {
    props.setStateNotification (!props.stateNotification);
  };

  const onPressAddDiary = () => {
    props.setStateAddDiary (!props.stateAddDiary);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={{fontSize: 16}}>{vietnameseDay (englishDay)}</Text>
        <TouchableOpacity onPress={onPressShowModal}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            {`${formattedDateTime} `}
            {<AntDesign name="caretdown" size={18} color="black" />}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row'}}>
        <View style={styles.icon}>
          <TouchableOpacity onPress={onPressAddDiary}>
            <Ionicons
              name="add"
              size={36}
              color={COLORS.white}
              style={styles.addAppBar}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.icon}>
          <TouchableOpacity onPress={onPressNotification}>
            {stateNotification === true
              ? <MaterialIcons
                  name="notifications-active"
                  size={36}
                  color={COLORS.nutritionDiary.appBar.notification}
                />
              : <MaterialIcons
                  name="notifications-off"
                  size={36}
                  color={COLORS.nutritionDiary.appBar.notification}
                />}
          </TouchableOpacity>

        </View>
      </View>

    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create ({
  container: {
    height: height * 0.15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  addAppBar: {
    backgroundColor: COLORS.nutritionDiary.appBar.add,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    paddingHorizontal: 5,
  },
});
