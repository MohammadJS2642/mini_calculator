import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Data } from './calculating';

export default function Display({ style, getVals }) {
    return (
        <View style={[styles.displayContainrt, style]}>
            <Text style={styles.textDisplay}>{getVals}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    displayContainrt: {
        flex: 1,
        backgroundColor: '#B9B7BD',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    textDisplay: {
        fontSize: 70,
        fontWeight: 'bold',
        marginRight: 20,
    },
})