import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Display from './display';
import ButtonsPosition from './buttonsPosition';
import { Data } from './calculating';

export default function Share() {
    const [shows, setShows] = useState('0')
    const showsRef = useRef(Data.currentValue)
    useEffect(() => {
        document.title = showsRef.current.valueOf(Data.currentValue)
    })
    return (
        <View style={styles.showContainrt}>
            <Display style={styles.displayStyle} >{showsRef.current}</Display>
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