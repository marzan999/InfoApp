import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { colors } from './src/theme/colors'
import { spacing } from './src/theme/spacing'
import { typography } from './src/theme/typography'
import { useFonts } from 'expo-font'

export default function App() {

  const [fontsLoaded] = useFonts({
    'Antonio-Medium': require('./assets/fonts/Antonio-Medium.ttf'),
    'Spartan-Bold': require('./assets/fonts/Spartan-Bold.ttf'),
    'Spartan-Regular': require('./assets/fonts/Spartan-Regular.ttf'),
  });

  if(!fontsLoaded) {
    return <Text>Loading...</Text>
  }

  return (
    <View style={styles.container}>
      <Text style={{fontFamily: typography.primaryBold }}>Open up App.js to start working on your app!</Text>
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
