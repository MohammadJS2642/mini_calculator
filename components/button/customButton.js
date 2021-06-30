import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function MyButton(prop) {
    const { name, size, bgColor } = prop;
    const onPressHandler = () => {
        console.log(name);
    }
    return (
        <TouchableOpacity onPress={onPressHandler} style={
            [styles.ButtomItem, size === 'md' && {
                width: 150,
            }, bgColor === 'gr' && {
                backgroundColor: 'gray',
            },]}>
            {/* <View > */}
            <Text style={styles.ButtomText}>{name}</Text>
            {/* </View> */}
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