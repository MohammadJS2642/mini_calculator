import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MyButton from './customButton';

export default function ButtonsPosition() {
    return (
        <View style={styles.container}>
            <View style={styles.containerItem}>
                <MyButton name={'0'} size='md' />
                <MyButton name={'.'} />
                <MyButton name={'='} />
            </View>
            <View style={styles.containerItem}>
                <MyButton name={'1'} />
                <MyButton name={'2'} />
                <MyButton name={'3'} />
                <MyButton name={'+'} />
            </View>
            <View style={styles.containerItem}>
                <MyButton name={'4'} />
                <MyButton name={'5'} />
                <MyButton name={'6'} />
                <MyButton name={'-'} />
            </View>
            <View style={[styles.containerItem]}>
                <MyButton name={'7'} />
                <MyButton name={'8'} />
                <MyButton name={'9'} />
                <MyButton name={'*'} />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column-reverse',

    },
    containerItem: {
        paddingHorizontal: 30,
        paddingVertical: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
})