import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { colors } from './src/theme/color'
import { spacing } from './src/theme/spacing'
import { typography } from './src/theme/typography'
import { useFonts } from 'expo-font'
import Text from './src/components/text/text'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home'
import Details from './src/screens/Details'



const Stack = createNativeStackNavigator();


export default function App() {

  const [fontsLoaded] = useFonts({
    'Antonio-Medium': require('./assets/fonts/Antonio-Medium.ttf'),
    'Spartan-Bold': require('./assets/fonts/Spartan-Bold.ttf'),
    'Spartan-Regular': require('./assets/fonts/Spartan-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />
  }
  else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

  return (
    <View style={styles.container}>
      <Text preset='h1' >Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
