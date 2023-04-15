import { Client, CommandInteraction } from 'discord.js';
import { Command } from './command';
import { ApplicationCommandType } from 'discord-api-types/v9';

export const Ping: Command = {
	name: 'ping',
	description: 'Test command',
	type: ApplicationCommandType.ChatInput,
	run: async (client: Client, interaction: CommandInteraction) => {
		const content = 'Pong!';
		await interaction.followUp({
			ephemeral: true,
			content,
		});
	},
};