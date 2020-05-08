
const Discord = require('discord.js');
const client = new Discord.Client();

const token = *your token*;

client.on('ready', () => {
    console.log('This bot is online!');
})

client.login(token);
        
