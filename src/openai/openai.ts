import { ChatCompletionRequestMessageRoleEnum, Configuration, OpenAIApi } from 'openai';
import dotenv from 'dotenv';
import { ChatMessage } from '../interfaces/chatMessage.js';
import { Client } from 'discord.js';

dotenv.config({ path: './.env' });

// define openai api
const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const answerSingleQuestion = async (question: string): Promise<string | undefined> => {
	return (await openai.createChatCompletion({
		model: 'gpt-3.5-turbo',
		messages: [{ role: 'user', content: question }],
	})).data.choices[0].message?.content;
};

export const answerChat = async (client: Client, messages: ChatMessage[]) => {
	let messagesFormatted = messages.map((message) => {
		const role = message.user === client.user?.tag ? ChatCompletionRequestMessageRoleEnum.Assistant : ChatCompletionRequestMessageRoleEnum.User;
		let content = `User: ${message.user}\nMessage: ${message.content}`;
		if (role === ChatCompletionRequestMessageRoleEnum.Assistant) content = message.content;
		return {
			role: role,
			content: content,
		};
	});
	messagesFormatted.push({
		role: ChatCompletionRequestMessageRoleEnum.User,
		content: 'User: \nMessage: ',
	});
	messagesFormatted = messagesFormatted.reverse();
	console.log(messagesFormatted);
	return (await openai.createChatCompletion({
		model: 'gpt-3.5-turbo',
		messages: messagesFormatted,
	})).data.choices[0].message?.content;
};