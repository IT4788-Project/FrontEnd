import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import {width, height} from '../../../constants/DeviceSize';
import ListDayBox from '../../../components/NutritionDiary/ListDayBox';
import moment from 'moment';
import AppBar from '../../../components/NutritionDiary/AppBar';

const NutritionDiary = () => {
  const [selectDate, setSelectDate] = useState(moment ());
  const [today, setToday] = useState(moment ());

  return (
    <SafeAreaView>
      <AppBar today={today}/>

      <ListDayBox selectDate={selectDate} setSelectDate={setSelectDate}/>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  dateContainer: {
    // styles for date container
  },
  mealContainer: {
    // styles for meal container
  },
  mealEntry: {
    flexDirection: 'row',
    alignItems: 'center',
    // more styles for meal entry
  },
  timeText: {
    // styles for time text
  },
  mealContent: {
    // styles for meal content
  },
  mealTitle: {
    // styles for meal title
  },
  mealDetails: {
    // styles for meal details
  },
  // ...other styles
});

export default NutritionDiary;
