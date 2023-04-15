import { ChatInputCommandInteraction, Client } from 'discord.js';
import { Command } from './command';
import { ApplicationCommandOptionType, ApplicationCommandType } from 'discord-api-types/v9';
import { generateAnswer } from '../openai/apiInterface';

export const AI: Command = {
	name: 'ai',
	description: 'Command to chat with your ai bot!',
	type: ApplicationCommandType.ChatInput,
	options: [
		{
			name: 'message',
			description: 'The message you want to send to the bot',
			type: ApplicationCommandOptionType.String,
			required: true,
		},
	],
	run: async (client: Client, interaction: ChatInputCommandInteraction) => {
		const message = interaction.options.getString('message');
		if (!message) {
			await interaction.followUp({ content: 'You have to provide a message!' });
			return;
		}
		const content = await generateAnswer(message);
		await interaction.followUp({
			ephemeral: true,
			content,
		});
	},
};