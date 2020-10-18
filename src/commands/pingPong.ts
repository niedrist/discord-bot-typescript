import Command from '../model/Command'

const pingPong: Command = {
    name: 'Ping Pong',
    description: 'Prints "pong"',
    hidden: false,
    disabled: false,
    action: (_, message) => {
        message.channel.send('pong')
    }
}

export default pingPong
