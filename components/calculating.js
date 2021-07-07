import { Number2, Numbers } from "./data";
import React from 'react';

export const Data = {
    currentValue: '0',
    PreviousValue: null,
    operator: null,
};

const checkingID = (userID) => {
    Number2.forEach(index => {
        if (userID === index.id) {
            // Data.PreviousValue = Data.currentValue;
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


export function Calculating(id) {
    checkingID(id)
}