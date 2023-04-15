import { Configuration, OpenAIApi } from 'openai';
import { openai_api_key } from '../config.json';

// define openai api
const configuration = new Configuration({
	apiKey: openai_api_key,
});
const openai = new OpenAIApi(configuration);

export const generateAnswer = async (question: string): Promise<string | undefined> => {
	return (await openai.createChatCompletion({
		model: 'gpt-3.5-turbo',
		messages: [{ role: 'user', content: question }],
	})).data.choices[0].message?.content;
};