import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Header } from 'react-native-elements'
import { Entypo, Ionicons } from '@expo/vector-icons'

import Center from './src/components/Center'
import Navigation from './src/navigation/Navigation'


const App = () => {
  return (
    <View style={styles.main}>
        <Header
            containerStyle={styles.header}
            leftComponent={<Entypo name="user" size={24} color="white"/>}
            centerComponent={<Center />}
            rightComponent={<Ionicons name="notifications" size={24} color="white"/>}
        />
        <StatusBar style="auto" />
        <NavigationContainer>
            <Navigation />
        </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    header: {
        borderBottomColor: '#2c3dc9',
        backgroundColor: '#2c3dc9',
        padding: 10,
        color: 'pink'
    }
})

export default App