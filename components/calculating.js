import { Number2 } from "./data";
import React from 'react';

export const Data = {
    currentValue: '0',
    PreviousValue: null,
    operator: null,
};

const checkingID = (userID) => {
    Number2.forEach(index => {
        if (userID === index.id) {
            Data.PreviousValue = Data.currentValue;
            Data.currentValue = index.name;
        }
        return Data;
    })
};

export function Calculating(id) {
    checkingID(id)
}