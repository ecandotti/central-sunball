import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { Header } from 'react-native-elements'
import { Entypo, Ionicons } from '@expo/vector-icons'

import logo from '../assets/images/logo.png'

const Topbar = () => {
    return (
        <Header
            containerStyle={styles.header}
            leftComponent={<Entypo name="user" size={24} color="white"/>}
            centerComponent={<Image source={logo} style={styles.image}/>}
            rightComponent={<Ionicons name="notifications" size={24} color="white"/>}
        />
    )
}

const styles = StyleSheet.create({
    header: {
        borderBottomColor: '#2c3dc9',
        backgroundColor: '#2c3dc9',
        alignSelf: 'center',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 100
    }
})

export default Topbar