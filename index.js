const { Client } = require('discord.js')
const bot = new Client
const conf = require('./config.json')
const YTDL = require('ytdl-core')

bot.on('ready', () => {
    console.log(`${bot.user.username} is online !`)
})

bot.on('message', (message) => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix = conf.prefix
    let messagearray = message.content.split(" ")
    let cmd = messagearray[0]
    let args = messagearray[1]
    let option = messagearray[2]

    if (cmd === `${prefix}hello`) {
        message.reply("Hello, I'm Lady Ganbatte.\nThe Gaming Princess from the far far PopCulture Land.\nFeel free to live in this server ^^")
    }

    if (cmd === `${prefix}join`) {
        if (message.member.voiceChannel) {
            message.member.voiceChannel.join()
                .then(connection => {
                    message.reply('I have join to server')
                })
                .catch(console.log)
        } else {
            message.reply("You need to join to Voice Channel")
        }
    }

    if (cmd === `${prefix}help`) {
        message.reply("OK, I will help you ^^\nYou can type\n!hello: to greeting me.\n!join: to bring me to the voice channel you join.\n!help: to know about the command that you can give me to do.")
    }

    if (cmd === `${prefix}game`)
})

bot.login(conf.token)