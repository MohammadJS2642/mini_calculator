import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native'
import { Calculating, Data } from './calculating';
import CustomButton from './customButton';
import Display from './display'

export default function ButtonsPosition({ style }) {
    const values = useRef(null);
    var text;
    const getName = (e) => {
        text = e
        Calculating(e)
        // values.current(e)
        // console.log(values);
    }

    return (
        <View style={[styles.mainContainer, style]} >
            <View style={styles.whereButton}>
                <CustomButton title='0' onPress={(e) => { getName(e); }} style={styles.btnPosition} size={'md'} />
                <CustomButton title={'.'} onPress={(e) => getName(e)} style={styles.btnPosition} />
                <CustomButton title={"="} onPress={(e) => getName(e)} style={styles.btnPosition} bg={'gr'} />
            </View>
            <View style={styles.whereButton}>
                <CustomButton title={1} onPress={(e) => getName(e)} style={styles.btnPosition} />
                <CustomButton title={2} onPress={(e) => getName(e)} style={styles.btnPosition} />
                <CustomButton title={3} onPress={(e) => getName(e)} style={styles.btnPosition} />
                <CustomButton title={'+'} onPress={(e) => getName(e)} style={styles.btnPosition} bg={'gr'} />
            </View>
            <View style={styles.whereButton}>
                <CustomButton title={4} onPress={(e) => getName(e)} style={styles.btnPosition} />
                <CustomButton title={5} onPress={(e) => getName(e)} style={styles.btnPosition} />
                <CustomButton title={6} onPress={(e) => getName(e)} style={styles.btnPosition} />
                <CustomButton title={'-'} onPress={(e) => getName(e)} style={styles.btnPosition} bg={'gr'} />
            </View>
            <View style={styles.whereButton}>
                <CustomButton title={7} style={styles.btnPosition}
                    onPress={(e) => getName(e)} />
                <CustomButton title={8} style={styles.btnPosition}
                    onPress={(e) => getName(e)} />
                <CustomButton title={9} style={styles.btnPosition}
                    onPress={(e) => getName(e)} />
                <CustomButton title={'*'} onPress={(e) => getName(e)} style={styles.btnPosition} bg={'gr'} />
            </View>
            <View style={styles.whereButton}>
                <CustomButton title={'AC'} onPress={(e) => getName(e)} style={styles.btnPosition} bg={'gr'} />
                <CustomButton title={'C'} onPress={(e) => getName(e)} style={styles.btnPosition} bg={'gr'} />
                <CustomButton title={'%'} onPress={(e) => getName(e)} style={styles.btnPosition} bg={'gr'} />
                <CustomButton title={'/'} onPress={(e) => getName(e)} style={styles.btnPosition} bg={'gr'} />
            </View>
            {/* <View style={styles.whereButton}>
                <Display style={styles.displayStyle} getVals={values} />
            </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#B9B7BD',
        flexDirection: 'column-reverse',
    },
    whereButton: {
        flexDirection: 'row',
    },
    btnPosition: {
        margin: 10,
    },
    // ****** Display ******
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