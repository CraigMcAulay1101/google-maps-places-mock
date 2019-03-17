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

const generateLocation = ((geoInfo) => {
    let initialPoint = { lat: geoInfo.location.lat, lon: geoInfo.location.lng };
    let rndm = Math.floor(Math.random() * 999) + 1;
    let radius = geoInfo.radius + rndm;
    
    return geolib.computeDestinationPoint(initialPoint, radius, 45);
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