import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppBar from '../../../components/ManageMedal/AppBar'
import BoxMedal from '../../../components/ManageMedal/BoxMedal'

const ManageMedal = () => {
  return (
    <SafeAreaView>
        <AppBar namePage="Quản lý mục tiêu dinh dưỡng"/>

        <View>
            <Text>Thêm mục tiêu</Text>
        </View>

        <BoxMedal/>
        <BoxMedal/>
        <BoxMedal/>
    </SafeAreaView>
  )
}

export default ManageMedal