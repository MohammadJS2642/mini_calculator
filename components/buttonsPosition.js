import { data } from 'browserslist';
import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet } from 'react-native'
import { Calculating, Data } from './calculating';
import CustomButton from './customButton';
import Display from './display'


export default function ButtonsPosition({ style }) {
    const [shows, setShows] = useState('0')
    const showsRef = useRef(Data.currentValue)
    useEffect(() => {
        // document.title = showsRef.current.valueOf(Data.currentValue)
        document.title = shows
    })

    return (
        <View style={[styles.mainContainer, style]}>
            <View style={styles.whereButton}>
                <CustomButton title={0} style={styles.btnPosition} size={'md'}
                    onPress={() => { Calculating('num', 0);; setShows(Data.currentValue) }} />
                <CustomButton title={'.'} style={styles.btnPosition}
                    onPress={() => Calculating(14)} />
                <CustomButton title={'='} style={styles.btnPosition} bg={'gr'}
                    onPress={() => Calculating('Others', 1)} />
            </View>
            <View style={styles.whereButton}>
                <CustomButton title={1} style={styles.btnPosition}
                    onPress={() => { Calculating('num', 1); setShows(Data.currentValue) }} />
                <CustomButton title={2} style={styles.btnPosition}
                    onPress={() => { Calculating('num', 2); setShows(Data.currentValue) }} />
                <CustomButton title={3} style={styles.btnPosition}
                    onPress={() => { Calculating('num', 3); setShows(Data.currentValue) }} />
                <CustomButton title={'+'} style={styles.btnPosition} bg={'gr'}
                    onPress={() => Calculating('op', 1)} />
            </View>
            <View style={styles.whereButton}>
                <CustomButton title={4} style={styles.btnPosition}
                    onPress={() => { Calculating('num', 4); setShows(Data.currentValue) }} />
                <CustomButton title={5} style={styles.btnPosition}
                    onPress={() => { Calculating('num', 5); setShows(Data.currentValue) }} />
                <CustomButton title={6} style={styles.btnPosition}
                    onPress={() => { Calculating('num', 6); setShows(Data.currentValue) }} />
                <CustomButton title={'-'} style={styles.btnPosition} bg={'gr'}
                    onPress={() => Calculating('op', 2)}
                />
            </View>
            <View style={styles.whereButton}>
                <CustomButton title={7} style={styles.btnPosition}
                    onPress={() => { Calculating('num', 7); setShows(Data.currentValue) }} />
                <CustomButton title={8} style={styles.btnPosition}
                    onPress={() => { Calculating('num', 8); setShows(Data.currentValue) }} />
                <CustomButton title={9} style={styles.btnPosition}
                    onPress={() => { Calculating('num', 9); setShows(Data.currentValue) }} />
                <CustomButton title={'*'} style={styles.btnPosition} bg={'gr'}
                    onPress={() => { Calculating('op', 3); }} />
            </View>
            <View style={styles.whereButton}>
                <CustomButton title={'AC'} style={styles.btnPosition} bg={'gr'}
                    onPress={() => Calculating('Others', 2)} />
                <CustomButton title={'C'} style={styles.btnPosition} bg={'gr'}
                    onPress={() => Calculating('Others', 3)} />
                <CustomButton title={'%'} style={styles.btnPosition} bg={'gr'}
                    onPress={() => Calculating('op', 5)} />
                <CustomButton title={'/'} style={styles.btnPosition} bg={'gr'}
                    onPress={() => Calculating('op', 4)} />
            </View>
            <View style={styles.whereButton}>
                <Display style={styles.displayStyle} >{shows}</Display>
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
    // displayContainrt: {
    //     flex: 1,
    //     backgroundColor: '#B9B7BD',
    //     alignItems: 'flex-end',
    //     justifyContent: 'center',
    // },
    // textDisplay: {
    //     fontSize: 70,
    //     fontWeight: 'bold',
    //     marginRight: 20,
    // },
})