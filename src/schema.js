"use strict";

const fs = require('fs');
const path = require('path');

const getSchema = new Promise ((resolve, reject) => {

    let filepath = path.join(__dirname, 'schema', 'schema.json');
  
    fs.readFile(filepath, 'utf8', (err, data) => {
        if (err) reject(err);

        resolve(JSON.parse(data));
    })
});

module.exports = getSchema;