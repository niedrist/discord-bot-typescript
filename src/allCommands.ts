import commands from './commands/commands'
import pingPong from './commands/pingPong'
import Command from './model/Command'

const allCommands: Map<string, Command> = new Map()

allCommands.set('commands', commands)
allCommands.set('ping', pingPong)

export default allCommands
