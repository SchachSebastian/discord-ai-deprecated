import { ChatInputCommandInteraction, Client } from 'discord.js';
import { commands } from '../commands.js';

export default (client: Client): void => {
	client.on('interactionCreate', async (interaction) => {
		console.log(interaction);
		if (interaction.isChatInputCommand())
			await handleSlashCommand(client, interaction as ChatInputCommandInteraction);
	});
};

const handleSlashCommand = async (client: Client, interaction: ChatInputCommandInteraction): Promise<void> => {
	const slashCommand = commands.find(c => c.name === interaction.commandName);
	if (!slashCommand) {
		await interaction.reply({
			ephemeral: true,
			content: 'Command unknown',
		});
		return;
	}
	slashCommand.run(client, interaction);
};