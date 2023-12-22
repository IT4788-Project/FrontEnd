import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import COLORS from '../../constants/Color';
import {width, height} from '../../constants/DeviceSize';

const Indicator = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
      <Text style={[styles.text, {fontSize: 18}]}>{props.value}</Text>
    </View>
  );
};

export default Indicator;

const styles = StyleSheet.create ({
  container: {
    width: width * 0.45,
    height: height * 0.1,
    borderRadius: 30,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    marginVertical: height * 0.01
  },
  text: {
    fontWeight: 'bold',
    color: COLORS.inforMe.textName,
  }
});
