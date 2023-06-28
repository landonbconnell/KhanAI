const express = require('express')
const textToSpeech = require('../controllers/elevenlabsController')

const router = express.Router()

router.post('/textToSpeech', textToSpeech)

module.exports = router