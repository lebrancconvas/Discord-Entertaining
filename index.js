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
        message.reply("Hello, I'm ENTERTAIN MANNNN !!!!!")
    }
})

bot.login(conf.token)