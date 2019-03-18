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
        return new Promise((resolve) => {
            getSchema.then((schema) => {
                this.getPlaces(schema).then((places) => {
                    resolve(places)
                })
            });    
        }).catch((err) => {
            console.log(err);
        })
    }

    getPlaces(schema) {
        return new Promise((resolve) => {
            let places = [];

            for (let i = 0; i < this.results; i++) {
                constructPlace(this, schema).then((place) => {
                    places.push(place);

                    if (places.length === this.results) {
                        resolve(places);
                    }
                });
            }   
        })
    }

}

module.exports = GooglePlacesMock; 