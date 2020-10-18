import allCommands from '../allCommands'
import Command from '../model/Command'
import config from '../../config.json'

const commands: Command = {
    name: 'Commands',
    description: 'Displays all available commands',
    hidden: false,
    disabled: false,
    action: (_, message) => {
        let textToSend = `Use each command with the prefix \`${config.commandPrefix}\`\n`
        allCommands.forEach((value, key) => {
            if (!value.hidden && !value.disabled) {
                textToSend += `\n\`${key}\`` + ' - ' + value.description
            }
        })
        message.channel.send(textToSend)
    }
}

export default commands
