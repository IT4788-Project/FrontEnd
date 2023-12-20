import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import COLORS from '../../constants/Color';
import {width, height} from '../../constants/DeviceSize';

const PersonFollow = () => {
  return (
    <TouchableOpacity style={styles.container}>
        <View>
            <Image
                // source={require ('../../assets/chup-anh-dep-bang-dien-thoai-25.jpg')}
                style={{
                width: width * 0.2,
                height: width * 0.2,
                borderRadius: 100,
                borderWidth: 5,
                borderColor: COLORS.white,
                }}
            />
        </View>
      <Text style={styles.text}>Họ tên</Text>
    </TouchableOpacity>
  );
};

export default PersonFollow;

const styles = StyleSheet.create ({
  container: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.seeAllFollow.personFollow.text,
    marginHorizontal: 20,
    marginVertical: 10,
  }
});
