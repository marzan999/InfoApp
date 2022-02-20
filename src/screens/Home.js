import React from 'react'
import { Pressable, View, StatusBar, FlatList} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Infoheader from '../components/info-header'
import Text from '../components/text/text'
import { colors } from '../theme/color'

export const STUDENT_LIST = [

{
  name: 'marzan',
  description: 'student',
  image: require('../../assets/marzan.png')
},
{
  name: 'nitish',
  description: 'student',
  // image: require('../../assets/nitish.PNG')
   
},
{
  name: 'maruf',
  description: 'student',
  // image: require('../../assets/maruf.PNG')
}

]

export default function Home( {navigation} ) {
  const renderItem = ({item, index}) => {
    return (
      <Text>{item.name}</Text>
    )
  }
  return (
    <SafeAreaView style={{backgroundColor: colors.white, flex: 1}} >
      <Infoheader />
      <FlatList 
        data={STUDENT_LIST}
        renderItem = {renderItem}
        keyExtractor = {(item, index) => item.name}
      />
      <StatusBar barStyle='ligth-content' />
    </SafeAreaView>
  )
}