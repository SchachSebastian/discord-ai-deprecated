import { Client, GatewayIntentBits } from 'discord.js';
import interactionCreate from './listeners/interactionCreate.js';
import ready from './listeners/ready.js';
import dotenv from 'dotenv';

console.log('Discord AI is starting...');
dotenv.config({ path: './.env' });

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
	],
});

ready(client);
interactionCreate(client);
// messageCreate(client);

await client.login(process.env.DISCORD_TOKEN);