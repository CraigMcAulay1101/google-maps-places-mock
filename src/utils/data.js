"use strict";

const loremIpsum = require('lorem-ipsum');

const generateData = ((params) => {

    Object.keys(params).forEach((key) => {
        if (typeof params[key] === 'object') {
            generateData(params[key]);
        } else {
            let data = validateData(params[key]);
            params[key] = data;
        }
    })

    return params;
});

function validateData(data) {
    if (data === 'Number') {
        return generateNumber();
    } else if (data === 'String') {
        return generateString();
    } else if (data === 'Boolean') {
        return generateBool();
    } else if (data === 'Decimal128') {
        return generateDecimal();
    }
}

function generateNumber() {
    let base = Math.floor(Math.random() * 20);
    let multiplier = Math.floor(Math.random() * 20);

    return base * multiplier * 50000;
}

function generateString() {
    return loremIpsum();
}

function generateBool() {
    return Math.random() >= 0.5;
}

function generateDecimal() {
    return Math.random();
}

module.exports = generateData;  