const express = require ("express")
const apartments = require ('../controllers/apartments.controller')
const upload = require ('../middlewares/upload')
// const multer = require('../file');

const router = express.Router();

router.post('/newApartment', upload.single('aptImage'), apartments.addApartments)
router.patch('/updateApartment',apartments.updateApartmentsInfo)
router.get('/fetchApartment/:emailAddress', apartments.fetchSingleApartments)
router.get('/fetchApartments', apartments.fetchApartments)

module.exports = router;