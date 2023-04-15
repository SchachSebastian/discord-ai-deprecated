import { Client, GatewayIntentBits } from 'discord.js';
import interactionCreate from './listeners/interactionCreate';
import ready from './listeners/ready';
import { discord_token } from './config.json';

console.log('Discord AI is starting...');

const client = new Client({
	intents: [GatewayIntentBits.Guilds],
});

ready(client);
interactionCreate(client);

client.login(discord_token);