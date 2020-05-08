
const  {Client, Attachment} = require('discord.js');
const bot = new Client();
const cheerio = require('cheerio');
const request = require('request');
const token = *token*;

const PREFIX = '!';

bot.on('ready', () => {
    console.log('Sono online!');
})

bot.on('message', msg=>{
    if (msg.content == "Ciao Bot" || msg.content == "ciao" || msg.content == "Ciao" || msg.content == "ciao Canem" || msg.content == "Ciao Canem" || msg.content == "ciao canem"){
        msg.reply('Ciao amico di Canem Reborn');
    }
})

bot.on('message', msg=>{

    let args = msg.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            msg.channel.send('pong');
            break;
        case 'link':
            msg.channel.send('Twitch: https://www.twitch.tv/phospholipids/ \nYouTube: https://www.youtube.com/channel/UCSBtZXfJ_1K_XSUIiLXjEwg');
            break;
        case 'comandi':
            msg.channel.send('Ecco la lista completa dei comandi (precedi "!" a ogni comando):\n-**"ping"**\n-**"link"**\n-**"cancella"** (SOLO ADMIN)\n-**"dario"** (ricevi una bella sorpresa)\n-**"gatti"** (ricevi altre belle sorprese');
            break;
        case 'cancella':
            if (!msg.member.roles.cache.find(r => r.name == "Admin")){
            return msg.reply("ERRORE: Non hai i permessi per eseguire questo comando");
            } else{
            if (!args[1]) return msg.reply('ERRORE: scrivi quanti messaggi vuoi cancellare');
            msg.channel.bulkDelete(args[1]);
            }
            break;
        case 'dario':
                msg.channel.send(msg.author, {files:['./dario1.jpeg']});
                break;
        case 'gatti':
            gatti(msg);

        
    }
})

function gatti(msg){
    
    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + "cat",
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };

    request(options, function(error, response, responseBody) {
        if (error) {
            return;
        }
 
 
        $ = cheerio.load(responseBody);
 
 
        var links = $(".image a.link");
 
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
       
        console.log(urls);
 
        if (!urls.length) {
           
            return;
        }
 
        // Send result
        msg.channel.send( urls[Math.floor(Math.random() * urls.length)]);
    });

}
bot.login(token);
