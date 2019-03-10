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
    return eval("generate" + data + "()");
}

function generateNumber() {
    let base = Math.floor(Math.random() * 20);
    let multiplier = Math.floor(Math.random() * 20);

    return base * multiplier * 50000;
}

function generateString() {
    return loremIpsum();
}

function generateBoolean() {
    return Math.random() >= 0.5;
}

function generateDecimal128() {
    return Math.random();
}

function generateArray() {
    return;
}

module.exports = generateData;  