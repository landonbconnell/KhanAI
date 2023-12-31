const voice = require('elevenlabs-node');
const fs = require('fs');
require('dotenv').config({ path: '../.env' });

const apiKey = process.env.ELEVENLABS_API_KEY;     // Your API key
const voiceID = process.env.FK_VOICE_ID;           // The ID of the voice you want to get
const fileName = 'output.mp3';                     // The name of your audio file

const textToSpeech = (textInput) => {
    console.log("textToSpeech function called")
    voice.textToSpeechStream(apiKey, voiceID, textInput)
    .then(res => res.pipe(fs.createWriteStream(fileName)))
    .catch(error => console.log(error));
}

module.exports = textToSpeech;