# Discord Bot Typescript

This is a template for a simple Discord bot written in TypeScript based on [discord.js](https://discord.js.org/#/). It's easy to use and well suited even for beginners. Just follow the instructions and get started immediately.

## Setup

### Code Setup

Run `npm install` to install all required dependencies. Then you need to create a new application in the [Discord Developer Portal](https://discord.com/developers). Add a bot to the application and get the bot token. Create a new file `secrets/bot.json`. Paste the following code into your newly generated file and replace the string with your bot token:

```json
{
    "token": "insert token here"
}
```

### Add the bot to your server

To add the bot to your own server you first have get an invitation link for your bot. You can use a tool like the [Discord Permission Calculator](https://discordapi.com/permissions.html) for this. The required Client ID can be obtained from the [Discord Developer Portal](https://discord.com/developers).  
When you open this link you should now be able to add the bot to one of your severs (assuming you have the required permissions to do so).

### Run the bot

To run the bot in development mode type `npm run dev`. The should only be used during the development process, use the production mode for deployments.  
To run the bot in production mode type `npm run prod` to compile the typescript code and execute the generated javascript code with Node.js.  
Your bot should now be available on your server. Type `!ping` into one of your servers text channels. The bot should respond with `pong`.

## Create new commands

In order to create your own command you first have to create a new file under `src/commands/{yourCommand}`.
The content of your file should be an implementation of the interface `src/model/Command.ts`.
You can use the existing commands as reference for your command.

The property `action` of the `Command` interface is what actually happens when you call the command.
It`s a function with three parameters. Let's have a look on its signature:

---

`action: (client: Client, message: Message, args?: string[]) => void`

`client` - represents the bot itself. Check out the
[Client documentation](https://discord.js.org/#/docs/main/stable/class/Client) for more information.

`message` - represents the message where the command was received. Check out the
[Message documentation](https://discord.js.org/#/docs/main/stable/class/Message) for more information.

`args` - represents the list of arguments passed to command. Can have an arbitrary length.

---

When you're done with the implementation, add your command in `src/allCommands.ts`:
`allCommands.set('{yourCommand}', {yourCommand})`.

In development mode the bot should update automatically, in production mode run `npm run prod` to update. The command should now be available.

## Prettier

This project uses [Prettier](https://prettier.io/) to format its code. Feel free to modify, ignore or completely remove it by adapting the files `.prettierignore` and `.prettier.json`.
