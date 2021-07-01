import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function MyButton({ name, size, bgColor, onPress }) {
    return (
        <TouchableOpacity onPress={onPress} ref={sendName} style={
            [styles.ButtomItem, size === 'md' && {
                width: 150,
            }, bgColor === 'gr' && {
                backgroundColor: 'gray',
            },]}>
            <Text style={styles.ButtomText}>{name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    ButtomItem: {
        backgroundColor: 'orange',
        height: 70,
        width: 70,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ButtomText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
})
