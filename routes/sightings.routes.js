const express = require('express')
const router = express.Router()

const {
    getAllSightings,
    getSighting,
    createSighting,
    updateSighting,
    deleteSighting,
} = require('../controllers/sightings.controllers')

router.route('/').get(getAllSightings).post(createSighting)
router.route('/:id').get(getSighting).patch(updateSighting).delete(deleteSighting)

module.exports = router