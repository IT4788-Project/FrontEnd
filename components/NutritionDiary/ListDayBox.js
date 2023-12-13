import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {width, height} from '../../constants/DeviceSize';
import COLORS from '../../constants/Color';
import moment from 'moment';

/**
 * @constant {number} width - DateBox width in pixels on figma = 40
 * @constant {number} height - DateBox height in pixels on figma = 72
 */
const DateBox = props => {
  const data = props.data;

  const nameDay =
    data.format ('ddd').charAt (0).toUpperCase () +
    data.format ('ddd').slice (1);
  const numberDay = data.format ('DD');

  const dateBoxOn = props.dateBoxOn;
  const colorDateBox = dateBoxOn
    ? COLORS.nutritionDiary.dateBoxOn
    : COLORS.nutritionDiary.dateBoxOff;

  return (
    <TouchableOpacity
      style={[styles.dateBox, {backgroundColor: colorDateBox}]}
      onPress={() => {
        props.setSelectDate (data);
      }}
    >
      <Text style={styles.dateText}>{nameDay}</Text>
      <Text style={styles.dateText}>{numberDay}</Text>
    </TouchableOpacity>
  );
};

const ListDayBox = props => {
  const selectDate = props.selectDate;
  const setSelectDate = props.setSelectDate;
  const [sevenDays, setSevenDays] = useState ([]);

  useEffect (
    () => {
      const sevenDaysArray = [];
      // Lặp qua 7 ngày, 3 ngày trước và 3 ngày sau ngày hôm nay
      for (let i = -3; i <= 3; i++) {
        const day = selectDate.clone ().add (i, 'days');
        sevenDaysArray.push (day);
      }

      setSevenDays (sevenDaysArray);
    },
    [selectDate]
  );

  const formattedDateTime = moment (selectDate).format (
    `DD [tháng] MM [năm] YYYY`
  );
  // Chuyển đổi ngày trong tiếng Anh sang tiếng Việt
  const englishDay = moment (selectDate).format ('dddd');

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

  return (
    <View style={{alignItems: 'center'}}>
      <FlatList
        style={styles.container}
        data={sevenDays}
        renderItem={({item, index}) => (
          <DateBox
            data={item}
            dateBoxOn={index === 3}
            setSelectDate={setSelectDate}
          />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />

      <Text style={{marginVertical: 10, fontSize: 16}}>Nhật ký ngày: {vietnameseDay (englishDay)}, {formattedDateTime}</Text>
    </View>
  );
};

export default ListDayBox;

const styles = StyleSheet.create ({
  container: {
    flexDirection: 'row',
  },
  dateBox: {
    borderRadius: 18,
    width: width * 0.1,
    height: height * 0.08,
    marginHorizontal: width * 0.015,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 14,
    color: COLORS.white,
  },
  // ...other styles
});
