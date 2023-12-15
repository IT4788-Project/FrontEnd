import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  Modal,
} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import COLORS from '../../constants/Color';
import DatePicker from 'react-native-styled-datepicker';
import moment from 'moment';

const ModalCalender = props => {
  const selectDate = props.selectDate;
  const setSelectDate = props.setSelectDate;
  const [selectDateModal, setSelectDateModal] = useState (selectDate);

  useEffect (
    () => {
      setSelectDateModal (moment (selectDate).format ('YYYY-MM-DD'));
    },
    [selectDate]
  );

  /**
   * Set lại ngày được chọn về hôm nay
   */
  const onPressSetToday = () => {
    const date = moment (moment ()).format ('YYYY-MM-DD');
    setSelectDate (date);
    setSelectDateModal (date);
    props.setIsVisible (false);
  };

  /**
   * Set lại ngày được chọn
   */
  const onPressConfirm = () => {
    setSelectDate (selectDateModal);
    props.setIsVisible (false);
  };

  /**
   * Lấy ngày được chọn từ DatePicker
   * @param {*} selectedDate Ngày được chọn từ DatePicker
   */
  const handleDateChange = selectedDate => {
    setSelectDateModal (selectedDate);
  };

  return (
    <Modal visible={props.isVisible} animationType="slide">
      <View style={styles.container}>
        <DatePicker
          initialSelectedDate={`${selectDateModal}`}
          onChange={handleDateChange}
        />

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableOpacity onPress={onPressSetToday} style={styles.selectDate}>
            <Text>Về hôm nay</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressConfirm} style={styles.selectDate}>
            <Text>Xác nhận</Text>
          </TouchableOpacity>
        </View>
      </View>

    </Modal>
  );
};

const styles = StyleSheet.create ({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: COLORS.nutritionDiary.calender
  },
  close: {
    alignItems: 'flex-end',
    marginRight: 10,
  },
  selectDate: {
    borderWidth: 1,
    width: '40%',
    height: '35%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ModalCalender;
