import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {width, height} from '../../constants/DeviceSize';
import COLORS from '../../constants/Color';
import {Ionicons} from '@expo/vector-icons';
import {SimpleLineIcons} from '@expo/vector-icons';
import NewNutritionDiary from './NewNutritionDiary';

const TimeLineDiary = props => {
  const listDish = props.listDish;

  return (
    <View style={{marginVertical: 20}}>
      <FlatList
        style={{marginBottom: 100, height: height * 0.6}}
        data={listDish}
        renderItem={({item, index}) => <Dish data={item} />}
      />
    </View>
  );
};

const Dish = props => {
  const [data, setData] = React.useState (props.data);
  const [isVisible, setIsVisible] = React.useState (false);
  const [isVisibleCalo, setIsVisibleCalo] = React.useState (false);

  const getRandomColor = () => {
    const randomIndex = Math.floor (
      Math.random () * COLORS.nutritionDiary.timeLine.length
    );
    return COLORS.nutritionDiary.timeLine[randomIndex];
  };
  const color = getRandomColor ();

  const onPressEdit = () => {
    setIsVisible (true);
  };

  const onPressCalo = () => {
    setIsVisibleCalo (!isVisibleCalo);
  };

  const totalCalo = () => {
    let total = 0;
    data.ingredient.forEach (item => {
      total += item.quantity * item.measure;
    });
    return {
      nameIngredient: 'Tổng calo',
      unit: undefined,
      quantity: undefined,
      measure: undefined,
      choose: total,
      total: true,
    };
  };

  return isVisible === true
    ? <NewNutritionDiary setIsVisible={setIsVisible} edit={true} data={data} />
    : <View>
        <View style={styles.container}>
          <View style={styles.timeAndLine}>
            <Text>
              {data.time}
            </Text>
            <View
              style={[
                styles.line,
                {backgroundColor: color.backgroundColor, flex: 1, marginTop: 5},
              ]}
            />
          </View>

          <View style={[styles.box, {backgroundColor: color.backgroundColor}]}>
            <View style={[styles.line, {backgroundColor: color.line}]} />

            <View style={[{padding: 10, flex: 4}]}>
              <Text style={styles.nameMeal}>{data.meal}</Text>
              <Text>
                {data.ingredient
                  .filter (item => item.quantity !== 0 && item.choose === true)
                  .map (
                    item =>
                      `${item.nameIngredient} ${item.quantity} ${item.unit}`
                  )
                  .join (', ')}
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                flex: 2,
              }}
            >
              <TouchableOpacity onPress={onPressCalo}>
                <Ionicons name="book-outline" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity onPress={onPressEdit}>
                <SimpleLineIcons name="pencil" size={24} color="black" />
              </TouchableOpacity>
            </View>

          </View>
        </View>
        
        {isVisibleCalo === true
          ? <View style={{marginHorizontal: 20, marginVertical: 20}}>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    borderBottomWidth: 1,
                    borderBottomColor: COLORS.nutritionDiary.modalNewIngredient
                      .borderBottom,
                  }}
                >
                  <Text style={styles.caculatorCalo.nameIngredient}>
                    {'\t'}Tên nguyên liệu
                  </Text>
                  <Text style={styles.caculatorCalo.unit}>Đơn vị tính</Text>
                  <Text style={styles.caculatorCalo.quantity}>Số lượng</Text>
                  <Text style={styles.caculatorCalo.measure}>Lượng calo</Text>
                  <Text style={styles.caculatorCalo.choose}>Tổng</Text>
                </View>
              </View>

              <FlatList
                data={data.ingredient.filter (item => item.quantity !== 0)}
                renderItem={({item}) => <LineCalo data={item} />}
              />

              <LineCalo data={totalCalo} />
            </View>
          : null}
      </View>;
};

const LineCalo = props => {
  const [data, setData] = React.useState (props.data);

  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.nutritionDiary.modalNewIngredient
          .borderBottom,
      }}
    >
      <Text style={[styles.caculatorCalo.nameIngredient, {textAlign: 'left'}]}>
        {'\t'}{data.nameIngredient}
      </Text>
      <Text style={styles.caculatorCalo.unit}>{data.unit}</Text>
      <Text style={styles.caculatorCalo.quantity}>{data.quantity}</Text>
      <Text style={styles.caculatorCalo.measure}>{data.measure}</Text>
      <Text style={styles.caculatorCalo.choose}>
        {data.total === true ? data.choose : data.quantity * data.measure}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 5,
  },
  line: {
    width: 5,
    borderRadius: 5,
  },
  timeAndLine: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    flex: 4,
    borderRadius: 5,
    flexDirection: 'row',
  },
  nameMeal: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  caculatorCalo: {
    nameIngredient: {
      flex: 2.5,
      textAlign: 'center',
    },
    unit: {
      flex: 1.5,
      textAlign: 'center',
    },
    quantity: {
      flex: 1.5,
      textAlign: 'center',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    measure: {
      flex: 2,
      textAlign: 'center',
    },
    choose: {
      flex: 1,
      textAlign: 'center',
    },
  },
});

export default TimeLineDiary;
