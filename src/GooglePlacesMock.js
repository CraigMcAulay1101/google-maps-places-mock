"use strict";

class GooglePlacesMock {

    constructor() {
        this.myMock = jest.fn();
    }

    dosomething() {
        console.log(this.myMock);
    } 
}

module.exports = GooglePlacesMock;  