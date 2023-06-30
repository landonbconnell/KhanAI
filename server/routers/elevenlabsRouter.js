const express = require('express')
const path = require('path');
const textToSpeech = require('../controllers/elevenlabsController')

const router = express.Router()

router.post('/textToSpeech', textToSpeech)

router.get('/download', function(req, res){
  const file = path.resolve(__dirname, '../output.mp3'); // Adjust the path if needed
  res.download(file); // Set disposition and send it.
});

module.exports = router
