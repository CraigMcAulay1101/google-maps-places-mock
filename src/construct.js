"use strict";

const schm = require('schm')
const clonedeep = require('lodash.clonedeep')
const generateData = require('./utils/data');

let constructPlace = ((params, schema) => {
    return new Promise((resolve, reject) => {
        
        let template = clonedeep(schema);
        let generatedSchema = schm(schema);
        let dummydata = generateData(template);

        resolve(generatedSchema.parse(dummydata));            
    });
});

module.exports = constructPlace;