const db = require("../models");
const Sightings = db.sightings;

// Create and Save a new Sighting
exports.createSighting = (req, res) => {
  // Create a Sighting  
  const sighting = {
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    description: req.body.description,
    dateTime: req.body.dateTime,
    tags: req.body.tags,
  };

  // Save Sighting in the database
  Sightings.create(sighting)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({
        message:
          err.message || "Some error occurred while creating the Sighting.",
      });
    });
};

// Retrieve all Sightings from the database.
exports.getAllSightings = (req, res) => {
  Sightings.findAll()
  .then(data => {
    res.json(data);
  })
  .catch(err => {
    res.status(500).json({
      message:
        err.message || "Some error occurred while retrieving Sightings."
    });
  });
};

// Find a single Sighting with an id
exports.getSighting = (req, res) => {
  const id = req.params.id;
  
  Sightings.findByPk(id)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Sighting with id=" + id
      });
    });
};

// Update a Sighting by the id
exports.updateSighting = (req, res) => {
  res.send("Update Sigthing");
};

// Delete a Sighting with the specified id
exports.deleteSighting = (req, res) => {
  res.send("Delete Sigthings");
};
