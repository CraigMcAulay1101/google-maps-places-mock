"use strict"

const chai = require("chai")
const GooglePlacesMock = require('../src/GooglePlacesMock')

const expect = chai.expect

describe('GooglePlacesMock', () => {

    const google = new GooglePlacesMock({ lat: 40.6971494, lng: -74.2598655 }, 8000)

    it('Mocked results should be an array of objects', () => {
        expect(google.nearbySearch()).to.be.a('promise')

        google.nearbySearch().then((places) => {
            expect(places).to.be.an('array')
            expect(places).to.have.lengthOf(19)
           
            places.forEach((place) => {
                expect(place).to.be.an('object')
            })
        })
    })
})