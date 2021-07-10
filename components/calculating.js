export const Data = {
    currentValue: '0',
    PreviousValue: '0',
    operator: null,
};

const checkingvalue = (value) => {
    if (Data.currentValue.length != 8) {
        if (Data.currentValue === '0') {
            Data.currentValue = value.toString();
        }
        else {
            Data.currentValue += value.toString();
        }
    }

    return Data;
};

const calculator = (value) => {
    let previouseNumber = parseFloat(Data.PreviousValue);
    switch (value) {
        case "+":
            previouseNumber += parseFloat(Data.currentValue);
            Data.operator = value;
            Data.currentValue = '0'
            Data.PreviousValue = previouseNumber

            break;

        case "-":
            previouseNumber == 0 ?
                previouseNumber = parseFloat(Data.currentValue) : previouseNumber -= parseFloat(Data.currentValue)
            Data.operator = value;
            Data.currentValue = '0'
            Data.PreviousValue = previouseNumber
            break;

        case "*":
            previouseNumber == 0 ?
                previouseNumber = parseFloat(Data.currentValue) : previouseNumber *= parseFloat(Data.currentValue)
            Data.operator = value;
            Data.currentValue = '0'
            Data.PreviousValue = previouseNumber
            break;

        case "/":
            previouseNumber == 0 ?
                previouseNumber = parseFloat(Data.currentValue) : previouseNumber /= parseFloat(Data.currentValue)
            Data.operator = value;
            Data.currentValue = '0'
            Data.PreviousValue = previouseNumber
            break;

        case "AC":
            Data.currentValue = '0';
            Data.PreviousValue = '0';
            Data.operator = null;
            break;

        case "C":
            Data.currentValue = '0';
            break;

        case "=":
            Data.currentValue = previouseNumber;
            Data.operator = null;
            Data.PreviousValue = '0';
            break;

        default:
            checkingvalue(value);
            break;
    }

    console.log(Data);
    return Data;
}


export function Calculating(value) {
    calculator(value)
}