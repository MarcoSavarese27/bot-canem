
const Discord = require('discord.js');
const client = new Discord.Client();

const token = 'NzA4MzE5MjcyODIwMjc3MzQ5.XrVyoQ.6LEmMEF70725DsSzaHVV5MKfvCM';

client.on('ready', () => {
    console.log('This bot is online!');
})

client.login(token);