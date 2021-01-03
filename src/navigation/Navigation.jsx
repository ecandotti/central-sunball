import React from 'react'
import { StyleSheet } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { MaterialIcons, Entypo } from '@expo/vector-icons'

import Live from '../views/Live'
import Home from '../views/Home'
import Help from '../views/Help'

const Tab = createMaterialBottomTabNavigator()

const Navigation = () => {
    return (
    <Tab.Navigator barStyle={styles.main}
        initialRouteName="Home"
        tabBarOptions={{ activeTintColor: 'pink', inactiveTintColor: 'red' }}>
        <Tab.Screen name="Live" component={Live} options={{tabBarIcon: () => <MaterialIcons name="live-tv" size={24} color="white"/>}}/>
        <Tab.Screen name="Home" component={Home} options={{tabBarIcon: () => <Entypo name="home" size={24} color="white" />}} />
        <Tab.Screen name="Help" component={Help} options={{tabBarIcon: () => <Entypo name="megaphone" size={24} color="white" />}}/>
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#0d0a3a'
    }
})

export default Navigation