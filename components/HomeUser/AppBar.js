import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import COLORS from '../../constants/Color';
import {Ionicons} from '@expo/vector-icons';

const AppBar = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      {props.search === true
        ? <TouchableOpacity>
            <Ionicons
              name="ios-search-circle-sharp"
              size={34}
              color={COLORS.homeUser.appBar.search}
            />
          </TouchableOpacity>
        : null}

    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create ({
  container: {
    marginHorizontal: 30,
    marginBottom: 15,
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.homeUser.appBar.line,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: COLORS.homeUser.appBar.title,
    fontFamily: 'Roboto',
  },
});
