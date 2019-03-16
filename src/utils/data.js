"use strict";

const loremIpsum = require('lorem-ipsum');

const generateData = ((params) => {

    Object.keys(params).forEach((key) => {
        if (typeof params[key] === 'object') {
            generateData(params[key]);
        } else {
            let data = new Dummy(params[key]);
            params[key] = data.dummydata;
        }
    })

    return params;
});

class Dummy {
    constructor(data) {
        this.dummydata = eval("this.generate" + data + "()");

        return;
    }

    generateNumber() {
        let base = Math.floor(Math.random() * 20);
        let multiplier = Math.floor(Math.random() * 20);
    
        return base * multiplier * 50000;    
    }

    generateString() {
        let base = Math.floor(Math.random() * 20);
        let multiplier = Math.floor(Math.random() * 20);
    
        return base * multiplier * 50000;    
    }

    generateBoolean() {
        return Math.random() >= 0.5;
    }

    generateDecimal128() {
        return Math.random();
    }

    generateArray() {
        return;
    }
}

module.exports = generateData;  