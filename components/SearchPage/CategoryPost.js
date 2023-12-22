import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { width, height } from '../../constants/DeviceSize'
import Post from '../HomeUser/Post'

const CategoryPost = () => {
  return (
    <View style={styles.container}>
        <Post />
    </View>
  )
}

export default CategoryPost

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: width * 0.05,
        marginVertical: height * 0.02,
    }
})