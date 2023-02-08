const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

async function start (){
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "C program in swap",
        temperature: 0,
        max_tokens: 1000,
    });
    console.log(response.data.choices[0].text);
}

start();