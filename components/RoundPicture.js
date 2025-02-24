import React from 'react'
import { StyleSheet, Image, View } from 'react-native'

//RoundPicture uses built-in Image component fom React. Image requires dimension specification for 
//network images. There has to be a width and height specified for RoundPicture.
export default function RoundPicture({ source, style }) {
    return (
        <View style={[styles.container, style]}>
            <Image 
                source={{
                    uri: source,
                }}
                style={styles.image}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 25,
    },
})
