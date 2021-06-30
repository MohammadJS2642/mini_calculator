import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Showing from './display/display';

export default function Share() {
    return (
        <View style={styles.container}>
            <Showing style={styles.showingStyle} />
            <ButtonsPosition style={styles.ButtonsPositionStyle} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#868B8E',
    },
    showingStyle: {
        flex: 1,
        backgroundColor: '#B9B7BD',
    },
    ButtonsPositionStyle: {
        flex: 3,
        backgroundColor: '#E7D2CC',
    },
})