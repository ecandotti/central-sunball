import React from 'react'
import { StyleSheet, ImageBackground, View, Text } from 'react-native'

import background_img from '../assets/images/main_bg.png'

const Help = () => {
    return (
        <ImageBackground style={styles.main} source={background_img}>
            <View>
                <Text>Je suis le help</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        resizeMode: "contain",
        justifyContent: "center"
    }
})

export default Help