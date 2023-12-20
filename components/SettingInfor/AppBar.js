import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {Ionicons} from '@expo/vector-icons';
import COLORS from '../../constants/Color';
import {width, height} from '../../constants/DeviceSize';

const AppBar = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Ionicons name="md-arrow-back-circle-outline" size={30} color={COLORS.black} />
      </TouchableOpacity>
      <Text style={styles.text}>{props.namePage}</Text>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create ({
    container: {
        flexDirection: 'row',
        paddingHorizontal: width * 0.05,
        height: height * 0.08,
        alignItems: 'center',
        backgroundColor: COLORS.white,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.black,
        paddingLeft: width * 0.05
    }
});