## discord-ai

![Github Stars](https://img.shields.io/github/stars/SchachSebastian/discord-ai)
![Github Forks](https://img.shields.io/github/forks/SchachSebastian/discord-ai)
![Github Watchers](https://img.shields.io/github/watchers/SchachSebastian/discord-ai)
![GitHub License](https://img.shields.io/github/license/SchachSebastian/discord-ai)

![GitHub last commit](https://img.shields.io/github/last-commit/SchachSebastian/discord-ai)
![GitHub issues](https://img.shields.io/github/issues/SchachSebastian/discord-ai)
![GitHub pull requests](https://img.shields.io/github/issues-pr/SchachSebastian/discord-ai)

Small Node.js Typescript Discord bot using the OpenAI API to answer questions.

## About the project

In the last time many new projects using AI (especially **ChatGPT**) were developed to create a new type of user
experience.

Many great open source projects were created, but I was missing something.

I thought, why not use your favorite AI bot (**ChatGPT**) on your favorite platform (**Discord**)?

This project is still in work and more a proof of concept than a perfect bot, but I hope you like to play around with
it. :)

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

## Roadmap

- [X] Add a command to ask single questions to the AI bot
- [ ] Let the AI bot answer to messages pinging it
- [ ] Let the AI bot use the last message to answer questions
- [ ] Let the AI bot react to messages
- [ ] Let the AI bot access the entire channel history to answer questions

## License

This project is licensed under the `MIT License` - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are always welcome!
I'm also happy to get new ideas and improvements as well as bug reports to improve the project.
