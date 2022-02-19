// import { View, Text as RNText } from 'react-native'
// import React from 'react'
// import { mergeAll, flatten } from 'ramda'
// import { presets } from './text.preset'

// export default function Text( {children, preset='default', style } ) {

// const styles = mergeAll(
//     flatten([presets], style )
// )

//   return (
//    <RNText>
//        {children}
//    </RNText>
//   )
// }

import React from 'react'
import { View, Text as RNText, StyleSheet } from 'react-native'
import { presets } from './text.preset'

export default function Text({ children, preset = 'default', style, selectable }) {
    const textStyles = StyleSheet.compose(presets[preset], style)
    return (
        <View>
            <RNText style={textStyles} selectable={selectable ? true : false}>
                {children}
            </RNText>
        </View>
    )
}