import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

import logo from '../assets/images/logo.png'

const Center = () => {
    return (
        <View>
            <Image source={logo} style={styles.main}/>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        width: 50,
        height: 50,
        borderRadius: 100
    }
})

export default Center