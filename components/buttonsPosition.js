import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native'
import { Calculating, Data } from './calculating';
import CustomButton from './customButton';
import Display from './display'


export default function ButtonsPosition({ style }) {
    const [val, setVal] = useState('0');
    var d = 0;
    useEffect(() => {
        d = val
    })

    return (
        <View style={[styles.mainContainer, style]}>
            <View style={styles.whereButton}>
                <CustomButton title={0} style={styles.btnPosition} size={'md'} />
                <CustomButton title={'.'} style={styles.btnPosition} />
                <CustomButton title={"="} style={styles.btnPosition} bg={'gr'} />
            </View>
            <View style={styles.whereButton}>
                <CustomButton title={1} style={styles.btnPosition} />
                <CustomButton title={2} style={styles.btnPosition} />
                <CustomButton title={3} style={styles.btnPosition} />
                <CustomButton title={'+'} style={styles.btnPosition} bg={'gr'} />
            </View>
            <View style={styles.whereButton}>
                <CustomButton title={4} style={styles.btnPosition} />
                <CustomButton title={5} style={styles.btnPosition} />
                <CustomButton title={6} style={styles.btnPosition} />
                <CustomButton title={'-'} style={styles.btnPosition} bg={'gr'} />
            </View>
            <View style={styles.whereButton}>
                <CustomButton title={7} style={styles.btnPosition}
                    onPress={() => { Calculating(7); setVal(Data.currentValue) }} />
                <CustomButton title={8} style={styles.btnPosition}
                    onPress={() => Calculating(8)} />
                <CustomButton title={9} style={styles.btnPosition}
                    onPress={() => Calculating(9)} />
                <CustomButton title={'*'} style={styles.btnPosition} bg={'gr'} />
            </View>
            <View style={styles.whereButton}>
                <CustomButton title={'AC'} style={styles.btnPosition} bg={'gr'} />
                <CustomButton title={'C'} style={styles.btnPosition} bg={'gr'} />
                <CustomButton title={'%'} style={styles.btnPosition} bg={'gr'} />
                <CustomButton title={'/'} style={styles.btnPosition} bg={'gr'} />
            </View>
            <View style={styles.whereButton}>
                <Display style={styles.displayStyle} getVals={d} />
            </View>
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