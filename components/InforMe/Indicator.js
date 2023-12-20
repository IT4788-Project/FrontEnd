import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import COLORS from '../../constants/Color';
import {width, height} from '../../constants/DeviceSize';

const Indicator = () => {
  return (
    <View style={styles.container}>
      <Text>Indicator</Text>
    </View>
  );
};

export default Indicator;

const styles = StyleSheet.create ({
  container: {
    width: width * 0.4,
    height: height * 0.15,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    marginHorizontal: width * 0.05,
    marginVertical: height * 0.02
  },
});
