import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function CustomButton({ onPress, title, style, bg, size }) {
    let name = title;

    const setName = () => {
        onPress(name);
    }

    return (
        <TouchableOpacity onPress={setName}
            style={[styles.buttonContainrt, style,
            bg === 'gr' && { backgroundColor: 'gray' },
            size === 'md' && { width: 180 }]}>
            <Text style={styles.textButton}>{name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainrt: {
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        width: 80,
        height: 80,
    },
    textButton: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center',
    }
})