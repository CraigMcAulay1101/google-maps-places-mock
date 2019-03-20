# google-maps-places-mock
Mock Google Maps Places service

[![Build Status](https://travis-ci.com/Craig115/google-maps-places-mock.svg?token=NDvGBVNSq7hxd1ZsqLuJ&branch=master)](https://travis-ci.com/Craig115/google-maps-places-mock) ![version](https://img.shields.io/npm/v/google-maps-places-mock.svg)

# Installation
``` npm install --save-dev google-maps-places-mock ```

# Usage
The module is used to mock a Google Maps Places response, instead of making an API call to Googles Places Service. Returns dummy places Objects for use in unit testing. 

The object is invoked in a very similar manner to how the places service is normally called.

**Parameters**

Position: ```{lat: 55.86279, lng: -4.25424}```
Radius (meters) ```1000```
Results (optional, defaults to 20)

**Example**

```javascript
import GooglePlacesMock from 'google-maps-places-mock'

let g = new GooglePlacesMock({lat: 55.86279, lng: -4.25424}, 1000)

// Unit Test
it('Places should be an array', () => {
    g.nearbySearch().then((places) => {
        expect(places).to.be.an('array')    
    })
})

```

The result will return an array of objects, mocking the regular Google Maps Places Service API response

# License

[MIT](https://github.com/Craig115/google-maps-places-mock/blob/master/LICENSE)
