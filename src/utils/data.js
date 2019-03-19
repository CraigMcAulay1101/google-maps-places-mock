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

    let rndm = Math.floor(Math.random() * 999);
    
    let radius = geoInfo.radius + rndm;

    let bearings = [22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 280, 302.5, 325, 347.5, 360];
    let bearing = bearings[Math.floor(Math.random()*bearings.length)];
    
    return geolib.computeDestinationPoint(initialPoint, radius, bearings);
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