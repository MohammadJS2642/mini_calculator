import { Numbers, Operators, Others } from "./data";
import React from 'react';

export const Data = {
    currentValue: '0',
    PreviousValue: null,
    operator: null,
};

const checkingID = (userID) => {
    Numbers.forEach(index => {
        if (userID === index.id) {
            Data.PreviousValue = Data.currentValue;
            if (Data.currentValue.length != 8) {
                if (Data.currentValue === '0') {
                    Data.currentValue = index.name.toString();
                }
                else {
                    Data.currentValue += index.name.toString();
                }
            }
        }
        return Data;
    })
};

const setOperator = (userID) => {
    Operators.forEach(index => {
        if (userID === index.id) {
            Data.operator = index.name;
        }
        return Data;
    })
}

const setOthers = (userID) => {
    var ch = '';
    Others.forEach(index => {
        if (userID === index.id) {
            switch (index.namet) {
                case 'AC':
                    Data = {
                        currentValue: '0',
                        PreviousValue: null,
                        operator: null,
                    };
                    break;
                case 'C':
                    return (Data = {
                        currentValue: '0',
                        PreviousValue: null,
                        operator: null,
                    });
                case '=':

                    break;
            }
        }
    })
    return Data;
}


export function Calculating(type, id) {
    switch (type) {
        case 'num':
            checkingID(id);
            break;
        case 'op':
            setOperator(id);
            break;
        case 'Others':
            setOthers(id);
            break;
    }
}