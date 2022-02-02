const express = require ("express")
const apartments = require ('../controllers/apartments.controller')

const router = express.Router();

router.post('/newApartment', apartments.addApartments)

module.exports = router;