const express = require('express')
const promptChatGPT = require('../controllers/chatGPTController')

const router = express.Router()

router.post('/prompt', promptChatGPT)

module.exports = router