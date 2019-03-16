"use strict";

const schm = require('schm')
const getSchema = require('./schema.js');
const generateData = require('./utils/data');

let constructPlace = ((params) => {
    return new Promise((resolve, reject) => {
 
        getSchema.then((schema) => {
            let coerce = new coerceSchema(schema);
            let place = coerce.coerceSchema();

            resolve(place);            
        });

    });
});

class coerceSchema {
    constructor(schema) {
        this.schema = schema
    }

    coerceSchema() {
        let generatedSchema = schm(this.schema);
        let dummydata = generateData(this.schema);
    
        return generatedSchema.parse(dummydata);    
    }
}

module.exports = constructPlace;