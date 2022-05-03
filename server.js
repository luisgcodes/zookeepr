const express = require('express');
const app = express();
const { animals } = require('./data/animals.json');

// Filter our results
function filterByQuery(query, animalsArray) {
    let filteredResults = animalsArray;
    
    if (query.diet) {

        filteredResults = filteredResults.filter(animal => animal.diet === query.diet);
    }
    if (query.species) {

        filteredResults = filteredResults.filter(animal => animal.species === query.species);
    }
    if (query.name) {

        filteredResults = filteredResults.filter(animal => animal.name === query.name);
    }
    return filteredResults;
}

// Call filter by query
app.get('/api/animals', (req, res) => {

    let results = animals;

    if (req.query) {

        results = filterByQuery(req.query, results);
    }

    res.json(results);
});

// Listen to port 3001
app.listen(3001, () => {
    console.log('API server listening on port 3001!');
});