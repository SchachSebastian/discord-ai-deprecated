## discord-ai [Deprecated]

![Github Stars](https://img.shields.io/github/stars/SchachSebastian/discord-ai)
![Github Forks](https://img.shields.io/github/forks/SchachSebastian/discord-ai)
![Github Watchers](https://img.shields.io/github/watchers/SchachSebastian/discord-ai)
![GitHub License](https://img.shields.io/github/license/SchachSebastian/discord-ai)

![GitHub last commit](https://img.shields.io/github/last-commit/SchachSebastian/discord-ai)
![GitHub issues](https://img.shields.io/github/issues/SchachSebastian/discord-ai)
![GitHub pull requests](https://img.shields.io/github/issues-pr/SchachSebastian/discord-ai)

Small Node.js Typescript Discord bot using the OpenAI API to answer questions.

## About the project

Started developing this project to learn more about the OpenAI API and how to use it and to try integrating ai in
Discord.
Discord then released their own ai bot, so I decided to stop developing this project.
It's still interesting to see how to use the OpenAI API and how to integrate it in a Discord bot.

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v14 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher)
- [Git](https://git-scm.com/)
- [Discord Account](https://discord.com/)
- [OpenAI Account](https://openai.com/)

### Installation

#### Discord

1. Create a new application on the [Discord Developer Portal](https://discord.com/developers/applications)
2. Create a bot for your application
3. Copy the bot token and save it for later
4. Invite the bot to your server and give him following permissions
   - Send Messages
   - Manage Messages
   - Read Message History
   - Add Reactions

#### OpenAI

1. Create a new API key on the [OpenAI Developer Portal](https://beta.openai.com/)
2. Copy the API key and save it for later

#### Project

1. Clone the repository
2. Install dependencies with `npm install`
3. Create a `.env` file in the root directory with the tokens inside:

```
DISCORD_TOKEN=<your discord bot token>
OPENAI_API_KEY=<your openai api key>
```

4. Run `npm run build` to build the project
5. Run `npm run start` to start the bot

## Usage

Open the Discord server you invited the bot to and use one of the commands below.

### Commands

`/ai` <question> - Ask the ai a single question

## License

This project is licensed under the `MIT License` - see the [LICENSE](LICENSE) file for details.
