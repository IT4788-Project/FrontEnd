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
import {Entypo} from '@expo/vector-icons';

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
        props.setSelectDate (data.format ('YYYY-MM-DD'));
      }}
    >
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 3}}>
        <Text style={styles.dateText}>{nameDay}</Text>
        <Text style={styles.dateText}>{numberDay}</Text>
      </View>

      <View style={{flex: 1}}>
        {props.dots === true
          ? <Text>
              {
                <Entypo
                  name="controller-record"
                  size={10}
                  color={COLORS.nutritionDiary.dots}
                />
              }
            </Text>
          : null}
      </View>

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
        const day = moment(selectDate).clone ().add (i, 'days');
        sevenDaysArray.push (day);
      }

      setSevenDays (sevenDaysArray);
    },
    [selectDate]
  );
    
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
            dots={props.stateDotsSevenDay.includes (index - 3)}
          />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
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
