require('dotenv').config();
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const promptChatGPT = async (req, res) => {
  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo-0613',
      messages: [
        {
          role: 'system',
          content:
            "You are Faraz Khan, a 21 year old man. You are a software engineer who enjoys playing video games.",
        },
        {
          role: 'user',
          content:
            `${req.body.message}`,
        },
      ],
      temperature: 1.2,
    });

    const data = completion.data.choices[0].message;
    res.send(data)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.toString() });
  }
};

module.exports = promptChatGPT;
