const express = require ("express")
const apartments = require ('../controllers/apartments.controller')

const multer = require('../file');

const router = express.Router();

router.post('/newApartment', multer.single('aptImage'), apartments.addApartments)
router.patch('/updateApartment',apartments.updateApartmentsInfo)
router.get('/fetchApartment', apartments.fetchSingleApartments)
router.get('/fetchApartment', apartments.fetchApartments)

module.exports = router;