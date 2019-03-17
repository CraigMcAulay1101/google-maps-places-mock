"use strict";

const constructPlace = require('./construct.js');
const getSchema = require('./schema.js');

class GooglePlacesMock {

    constructor(location, radius, results, type) {

        if (location === undefined || radius === undefined) {
            throw new Error("Missing location or radius parameter");
        } else {
            this.location = location;
            this.radius = radius;
            this.results = results || 20;
            this.type = type || "random";
        }
    }

    nearbySearch() {
        getSchema.then((schema) => {
            for (var i = 0; i < this.results; i++) {
                constructPlace(this, schema).then((place) => {
                });    
            }    
        });
    }

}

module.exports = GooglePlacesMock; 