import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Showing({ value, style }) {
    const [val, setVal] = useState('');
    useEffect(() => {
        setVal(value)
    })

    return (
        <View style={[styles.container, style]}>
            <Text style={styles.showCase}>{val || '0'}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingRight: 20,
    },
    showCase: {
        fontWeight: 'bold',
        fontSize: 60,
        alignSelf: 'flex-end',
    },
})