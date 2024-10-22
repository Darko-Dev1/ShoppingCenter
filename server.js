const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Endpoint to get data
app.get('/storage', (req, res) => {
    fs.readFile('storage.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading file');
        }
        res.json(JSON.parse(data));
    });
});

// Endpoint to update data
app.post('/storage', (req, res) => {
    fs.readFile('storage.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading file');
        }
        const jsonData = JSON.parse(data);
        const newMovies = req.body; // Expecting an array of new movies
        jsonData.push(...newMovies); // Add new movies

        fs.writeFile('storage.json', JSON.stringify(jsonData, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Error writing file');
            }
            res.status(201).send('Data added successfully');
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});