import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MyButton from './customButton';
import Showing from '../display/display';

export default function ButtonsPosition({ style }) {
    return (
        <View style={[styles.container, style]}>
            <View style={styles.co}>
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
            <View>
                <Showing style={styles.showingStyle} />
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
    co: {
        flex: 1,
    },
    containerItem: {
        paddingHorizontal: 30,
        paddingVertical: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    showingStyle: {
        flex: 1,
        backgroundColor: '#B9B7BD',
    },
})