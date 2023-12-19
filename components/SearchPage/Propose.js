import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import COLORS from '../../constants/Color';

const Propose = () => {
  const getColorBackground = () => {
    const randomIndex = Math.floor (
      Math.random () * COLORS.searchPage.background.length
    );
    return COLORS.searchPage.background[randomIndex];
  };

  const colorBackground = getColorBackground ();

  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: colorBackground}]}
    >
      <Text>Propose</Text>
    </TouchableOpacity>
  );
};

export default Propose;

const styles = StyleSheet.create ({
    container: {
        borderRadius: 10,
        marginHorizontal: 10,
        marginVertical: 10,
        padding: 10,
    }
});
