const express = require("express");
const app = express();
const PORT = 5000;

// Models 
const db = require("./src/models")

// JSON Parsers
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
const sightings = require("./src/routes/sightings.routes")
app.use('/api/v1/sightings', sightings)


// Test DB connection
// db.authenticate()
//     .then(()=> console.log('Database connected'))
//     .catch(err => console.log('Error: ' + err))

// Syncronise Database and open server
db.sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
  });
});
