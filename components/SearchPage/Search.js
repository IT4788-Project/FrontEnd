import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import COLORS from '../../constants/Color';

const Search = props => {
  return (
    <View style={styles.container}>
      <TextInput placeholder={props.placeholder} />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create ({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
    borderWidth: 1,
    marginHorizontal: 20,
    marginVertical: 20,
    borderColor: COLORS.searchPage.search
  },
});
