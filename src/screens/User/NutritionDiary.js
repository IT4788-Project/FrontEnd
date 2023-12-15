import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import {width, height} from '../../../constants/DeviceSize';
import ListDayBox from '../../../components/NutritionDiary/ListDayBox';
import moment from 'moment';
import AppBar from '../../../components/NutritionDiary/AppBar';
import ModalCalender from '../../../components/NutritionDiary/ModalCalendar';
import NewNutritionDiary
  from '../../../components/NutritionDiary/NewNutritionDiary';
import ModalNewIngredient
  from '../../../components/NutritionDiary/ModalNewIngredient';
import TimeLineDish from '../../../components/NutritionDiary/TimeLineDish';

const NutritionDiary = () => {
  const [selectDate, setSelectDate] = useState (moment ());
  const [isVisibleCalender, setIsVisibleCalender] = useState (false);
  const [stateNotification, setStateNotification] = useState (false);
  const [addDiary, setAddDiary] = useState ([]);
  const [stateAddDiary, setStateAddDiary] = useState (false);

  return (
    <SafeAreaView>
      <AppBar
        today={selectDate}
        stateNotification={stateNotification}
        setStateNotification={setStateNotification}
        setSelectDate={setSelectDate}
        setIsVisible={setIsVisibleCalender}
        isVisible={isVisibleCalender}
        stateAddDiary={stateAddDiary}
        setStateAddDiary={setStateAddDiary}
      />

      <ListDayBox selectDate={selectDate} setSelectDate={setSelectDate} />

      <ModalCalender
        setSelectDate={setSelectDate}
        selectDate={moment (selectDate).format ('YYYY-MM-DD')}
        isVisible={isVisibleCalender}
        setIsVisible={setIsVisibleCalender}
      />

      {stateAddDiary === true
        ? <NewNutritionDiary
            addDiary={addDiary}
            setAddDiary={setAddDiary}
            setStateAddDiary={setStateAddDiary}
          />
        : <TimeLineDish listDish={addDiary}/>}
    </SafeAreaView>
  );
};

export default NutritionDiary;
