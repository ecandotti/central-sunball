import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import Topbar from './src/components/Topbar'
import Navigation from './src/navigation/Navigation'


const App = () => {
  return (
    <View style={styles.main}>
        <Topbar />
        <NavigationContainer>
            <Navigation />
        </NavigationContainer>
        <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
    main: {
        flex: 1
    }
})

export default App