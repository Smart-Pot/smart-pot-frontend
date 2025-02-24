import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import colors from '../../config/colors'

export default function AppTextInput( {...props} ) {
    return (
        <View style={[styles.container, props.style]}>
            <TextInput 
                style={styles.textInput} 
                {...props}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        shadowColor: colors.shadow,
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 2,
    },
    textInput: {
        fontSize: 18,
    }
})
