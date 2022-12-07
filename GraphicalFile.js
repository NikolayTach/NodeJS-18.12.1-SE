const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "print(\"Объём 1 пиксель \")\nprint(2**16)\nprint(\"байт\")\n800*600\n\n§ Output\n\n> stdout : ['Объём 1 пиксель \\n', '65536 байт\\n']\n> ['480000']\n\n\n§ Code\n\nprint(\"Объём изображения размером 800 на 600 пикселей\")\nprint(800*600*2**16)\nprint(\"байт\")\n\n§ Output\n\n> stdout : ['Объём изображения размером 800 на 600 пикселей\\n', '314572800 байт\\n']\n\n \n§ Markdown\n\nОбъём изображения размером 800 на 600 пиксе\n['480000*16']/8\n314572800 байт\n\n \n§ END OF DOC\n480000*16\n\n§ Code\n\n480000*16\n\n§ Output\n\n> ['768000000']\n\n\n§ Code\n\n768000000/8\n\n§ Output\n\n> ['960000000.0']\n\n\n§ Code\n\n\n \n§ END OF DOС\n960000000.0/1024\n\n§ Output\n\n> ['943718.75']\n\n\n§ Code\n\n943718.75/1024\n\n§ Output\n\n> ['920.83984375']\n\n \n§ Markdown\n\n920.83984375 мегабайт\n \n§ END OF DOC\n\nprint('920.83984375 мегабайт') = a\n\n§ Code\n\na = '920.83984375 мегабайт'\n\nprint(a)\n\n§ Output\n\n> stdout : ['920.83984375 мегабайт\\n']\n\n\n§ Code\n\n\n \n§ END OF DOC",
  temperature: 0.7,
  max_tokens: 256,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
});
