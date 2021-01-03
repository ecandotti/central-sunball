import React from 'react'
import { StyleSheet, ImageBackground, View, Text } from 'react-native'
import background_img from '../assets/images/main_bg.png'

const Home = () => {
    return (
        <ImageBackground style={styles.main} source={background_img}>
            <View style={styles.container}>
                <Text>Test</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        resizeMode: "contain",
        justifyContent: "center"
    },
    container: {
        flex: 1,
        margin: 30,
        borderRadius: 20,
        padding: 30,
        backgroundColor: 'white',
        opacity: 0.7,
        borderWidth: 5,
        borderColor: 'red'
    }
})

export default Home