
const Discord = require('discord.js');
const client = new Discord.Client();

const token = *your token*;

client.on('ready', () => {
    console.log('This bot is online!');
})

client.on('message', msg=>{
    if (msg.content == "Ciao Bot" || msg.content == "ciao" || msg.content == "Ciao" || msg.content == "ciao Canem" || msg.content == "Ciao Canem" || msg.content == "ciao canem"){
        msg.reply ('Ciao amico di Canem Reborn');
    }
})


client.login(token);
        
