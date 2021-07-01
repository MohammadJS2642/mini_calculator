import React from 'react';
import { View, StyleSheet } from 'react-native';
import Display from './display';
import ButtonsPosition from './buttonsPosition';

export default function Share() {
    return (
        <View style={styles.showContainrt}>
            <Display style={styles.displayStyle} />
            <ButtonsPosition style={styles.customButtonStyle} />
        </View>)
}

const styles = StyleSheet.create({
    showContainrt: {
        flex: 1,
        backgroundColor: '#EEEDE7',
    },
    displayStyle: {
        flex: 1,
    },
    customButtonStyle: {
        flex: 3,
    }
})