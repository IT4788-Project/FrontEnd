import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Search = () => {
  return (
    <View style={styles.container}>
      <Text>Search</Text>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 30,
        borderWidth: 1,
        marginHorizontal: 20,
        marginVertical: 10,
    }
})