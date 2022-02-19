import { View, } from 'react-native'
import Text from '../components/text/text'
import React from 'react'
import { colors } from '../theme/color'
import Infoheader from '../components/info-header'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Details() {
  return (
    <SafeAreaView style={{backgroundColor: colors.white, flex: 1}}>
      <Infoheader />
    </SafeAreaView>
  )
}