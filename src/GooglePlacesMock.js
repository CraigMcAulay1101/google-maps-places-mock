"use strict";

const constructPlace = require('./construct.js');

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
        for (var i = 0; i < this.results; i++) {
            constructPlace(this).then(() => {
                // Do Something
            });    
        }
    }

}

module.exports = GooglePlacesMock; 