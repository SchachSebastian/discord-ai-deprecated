import { ChatInputCommandInteraction, Client } from 'discord.js';
import { commands } from '../commands';

export default (client: Client): void => {
	client.on('interactionCreate', async (interaction) => {
		if (interaction.isChatInputCommand())
			await handleSlashCommand(client, interaction as ChatInputCommandInteraction);


	});
};

const handleSlashCommand = async (client: Client, interaction: ChatInputCommandInteraction): Promise<void> => {
	const slashCommand = commands.find(c => c.name === interaction.commandName);
	if (!slashCommand) {
		await interaction.followUp({ content: 'An error has occurred' });
		return;
	}
	await interaction.deferReply();
	slashCommand.run(client, interaction);
};