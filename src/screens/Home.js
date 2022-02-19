import React from 'react'
import { Pressable, View, StatusBar,  } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Infoheader from '../components/info-header'
import Text from '../components/text/text'
import { colors } from '../theme/color'


export default function Home( {navigation} ) {
  return (
    <SafeAreaView style={{backgroundColor: colors.white, flex: 1}} >
      <Infoheader />
      <Pressable onPress={() => navigation.navigate("Details")}>
        <Text>Go to Details</Text>
      </Pressable>
      <StatusBar barStyle='ligth-content' />
    </SafeAreaView>
  )
}