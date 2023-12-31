// Require the express module
const express = require('express')
const chatGPTRouter = require('./routers/chatGPTRouter')

// Create a new express application
const app = express();

// The port that the server will listen on
const port = 5000;

// Start the server listening on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.use(express.json())

app.use('/chatGPT', chatGPTRouter)