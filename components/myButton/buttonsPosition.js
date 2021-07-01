import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MyButton from './customButton';

export default function ButtonsPosition({ style }) {
    return (
        <View style={[styles.container, style]}>
            <View style={styles.containerItem}>
                <MyButton name={'0'} size='md' />
                <MyButton name={'.'} />
                <MyButton name={'='} bgColor='gr' />
            </View>
            <View style={styles.containerItem}>
                <MyButton name={'1'} />
                <MyButton name={'2'} />
                <MyButton name={'3'} />
                <MyButton name={'+'} bgColor='gr' />
            </View>
            <View style={styles.containerItem}>
                <MyButton name={'4'} />
                <MyButton name={'5'} />
                <MyButton name={'6'} />
                <MyButton name={'-'} bgColor='gr' />
            </View>
            <View style={[styles.containerItem]}>
                <MyButton name={'7'} />
                <MyButton name={'8'} />
                <MyButton name={'9'} />
                <MyButton name={'*'} bgColor='gr' />
            </View>
            <View style={[styles.containerItem]}>
                <MyButton name={'AC'} bgColor='gr' />
                <MyButton name={'C'} bgColor='gr' />
                <MyButton name={'%'} bgColor='gr' />
                <MyButton name={'/'} bgColor='gr' />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#868B8E',
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