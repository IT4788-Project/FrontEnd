import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {width, height} from '../../constants/DeviceSize';
import COLORS from '../../constants/Color';
import {MaterialIcons} from '@expo/vector-icons';

const ButtonNavigation = props => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
      {props.navigation === true
        ? <MaterialIcons
            name="navigate-next"
            size={30}
            color={COLORS.settingInfor.buttonNavigation.text}
          />
        : <View>
            {props.modal === true
              ? <Text style={styles.text}>{props.value}</Text>
              : null}
          </View>}

    </TouchableOpacity>
  );
};

export default ButtonNavigation;

const styles = StyleSheet.create ({
  container: {
    backgroundColor: COLORS.white,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: width * 0.1,
    paddingVertical: 15,
  },
  text: {
    fontSize: 20,
    fontWeight: '400',
    color: COLORS.settingInfor.buttonNavigation.text,
  },
});
