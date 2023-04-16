import { Client, Message } from 'discord.js';
import { answerChat } from '../openai/openai.js';

export default (client: Client): void => {
	console.log('Message listener loaded');
	client.on('messageCreate', async (message) => {
		if (hasBotMentioned(client, message)) await handleMessage(client, message);
	});
};

const hasBotMentioned = (client: Client, message: Message): boolean => {
	if (client.user === null) return false;
	return message.mentions.has(client.user);
};
const handleMessage = async (client: Client, message: Message) => {
	const messageHistory = await message.channel.messages.fetch({ limit: 10 });
	// parse messageHistory to [] of ChatMessage objects
	const messages = Array.of(...messageHistory.values()).map((m) => ({
		user: m.author.tag,
		content: m.content,
	}));
	const answer = await answerChat(client, messages);
	if (!answer) {
		await message.reply('An error has occurred!');
		return;
	}
	await message.reply(answer);
};