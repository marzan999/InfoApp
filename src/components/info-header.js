import { View, } from 'react-native'
import React from 'react'
import Text from './text/text'
import { spacing } from '../theme/spacing'
import { colors } from '../theme/color'

export default function Infoheader() {
  return (
    <View style={{paddingLeft: spacing[6], marginVartical: spacing[6], borderBottomWidth: 1, borderColor: colors.black}}>
      <Text preset='h2'>
          Student Info
      </Text>
    </View>
  )
}