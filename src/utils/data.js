"use strict";

const loremIpsum = require('lorem-ipsum');
const geolib = require('geolib');

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

const generateLocation = ((position) => {

    let initialPoint = { lat: 55.86279, lon: -4.25424 };

    let dist = 8000;
    let bearing = 90;

    return geolib.computeDestinationPoint(initialPoint, dist, bearing);
})

class Dummy {
    constructor(data) {
        this.dummydata = eval("this.generate" + data + "()");
    }

    generateNumber() {
        let base = Math.floor(Math.random() * 20);
        let multiplier = Math.floor(Math.random() * 20);
    
        return base * multiplier * 50000;    
    }

    generateString() {
        return loremIpsum();    
    }

    generateBoolean() {
        return Math.random() >= 0.5;
    }

    generateDecimal128() {
        return Math.random();
    }

    generateArray() {
        return [];
    }
}

module.exports = { generateData, generateLocation };  