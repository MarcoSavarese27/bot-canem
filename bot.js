
const Discord = require('discord.js');
const client = new Discord.Client();

const token = *token*;//substitute with your discord bot token

const PREFIX = '!';

client.on('ready', () => {
    console.log('This bot is online!');
})

client.on('message', msg=>{
    if (msg.content == "Ciao Bot" || msg.content == "ciao" || msg.content == "Ciao" || msg.content == "ciao Canem" || msg.content == "Ciao Canem" || msg.content == "ciao canem"){
        msg.reply('Ciao amico di Canem Reborn');
    }
})

client.on('message', msg=>{

    let args = msg.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            msg.channel.send('pong');
            break;
        case 'link':
            msg.channel.send('Twitch: https://www.twitch.tv/phospholipids/ \nYouTube: https://www.youtube.com/channel/UCSBtZXfJ_1K_XSUIiLXjEwg');
            break;
       case 'comandi':
            msg.channel.send('Ecco la lista completa dei comandi (precedi "!" a ogni comando)\n-ping\n-link');
            break;
        case 'cancella':
            if (!msg.member.roles.cache.find(r => r.name == "Admin")){
            return msg.reply("ERRORE: Non hai i permessi per eseguire questo comando");
            } else{
            if (!args[1]) return msg.reply('ERRORE: scrivi quanti messaggi vuoi cancellare');
            msg.channel.bulkDelete(args[1]);
            }
            break;
    }
})


client.login(token);
