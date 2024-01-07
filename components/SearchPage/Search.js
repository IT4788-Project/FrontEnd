import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useEffect } from "react";
import COLORS from "../../constants/Color";

const Search = (props) => {
  const [value, setValue] = React.useState("");

  useEffect(() => {
    props.setContentSearch(value);
  }, [props.stateSearch]);

  return (
    <View style={styles.container}>
      <TextInput
        defaultValue={props.contentSearch}
        placeholder={props.placeholder}
        onChangeText={(text) => setValue(text)}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
    borderWidth: 1,
    marginHorizontal: 20,
    marginVertical: 20,
    borderColor: COLORS.searchPage.search,
  },
});
