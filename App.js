import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text, View } from 'react-native'

const App = () => {
  return (
    <View>
      <Text>Test du hot reload</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default App