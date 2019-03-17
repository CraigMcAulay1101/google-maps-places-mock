"use strict";

const clonedeep = require('lodash.clonedeep')
const {generateData, generateLocation} = require('./utils/data');

let constructPlace = ((params, schema) => {
    return new Promise((resolve, reject) => {
        
        let template = clonedeep(schema);
        let placedata = generateData(template); 

        placedata.geometry.location = generateLocation(params);
        
        resolve(placedata);  

    }).catch((error) => {
        console.log(error);
    })
});

module.exports = constructPlace;