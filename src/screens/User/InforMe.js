import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../../../constants/Color';
import {width, height} from '../../../constants/DeviceSize';
import {Fontisto} from '@expo/vector-icons';
import Inficator from '../../../components/InforMe/Indicator';

const InforMe = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>

        <Text style={styles.textName}>Họ và tên</Text>
        <TouchableOpacity style={{position: 'absolute', right: width * 0.05}}>
          <Fontisto
            name="player-settings"
            size={24}
            color={COLORS.inforMe.textName}
          />
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row'}}>
        <Inficator />
        <Inficator />
      </View>

      <View style={{flexDirection: 'row'}}>
        <Inficator />
        <Inficator />
      </View>
    </SafeAreaView>
  );
};

export default InforMe;

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: COLORS.inforMe.background,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.1,
    flexDirection: 'row',
  },
  textName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS.inforMe.textName,
  },
});
