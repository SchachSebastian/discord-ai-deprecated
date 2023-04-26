import { ApplicationCommandOptionType, ApplicationCommandType, ChatInputCommandInteraction, Client } from 'discord.js';
import { Command } from '../interfaces/command.js';
import { answerSingleQuestion } from '../openai/openai.js';

export const AI: Command = {
	name: 'ai',
	description: 'Command to ask a single question to your ai bot!',
	type: ApplicationCommandType.ChatInput,
	options: [
		{
			name: 'question',
			description: 'The question you want to ask the bot',
			type: ApplicationCommandOptionType.String,
			required: true,
		},
		{
			name: 'private',
			description: 'Whether the question should be private or not',
			type: ApplicationCommandOptionType.Boolean,
			required: false,
		},
	],
	run: async (client: Client, interaction: ChatInputCommandInteraction) => {
		const privateMessage = !!interaction.options.getBoolean('private');
		await interaction.deferReply({ ephemeral: privateMessage });
		const message = interaction.options.getString('question');
		if (!message) {
			await interaction.reply({
				ephemeral: true,
				content: 'You have to provide a question!',
			});
			return;
		}
		const answer = await answerSingleQuestion(message);
		const content = `**Question**:\n${message}\n**Answer**:\n${answer}`;
		await interaction.editReply({
			content,
		});
	},
};