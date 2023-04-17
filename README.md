## discord-ai

This is a simple discord bot that uses the [discord.js](https://discord.js.org/#/) library and
[openai-api](https://platform.openai.com/docs) to generate text using the GPT-3.5 API.

### Setup

1. Clone the repository
2. Install dependencies with `npm install`
3. Create a `.env` file in the root directory with the following contents:

```
DISCORD_TOKEN=<your discord bot token>
OPENAI_API_KEY=<your openai api key>
```

4. Run `npm run build` to build the project
5. Run `npm run start` to start the bot