//init discord bot
const Discord = require('discord.js');
const INTENTS = ['GUILDS', 'GUILD_MEMBERS', 'GUILD_BANS', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS', 'DIRECT_MESSAGES', 'DIRECT_MESSAGE_REACTIONS', 'DIRECT_MESSAGE_TYPING'];
const bot = new Discord.Client({ intents: INTENTS });
const config = require('./config.json');
const channel = require('./channel.json');
const fs = require('fs');
const { url } = require('inspector');
const token = config.token;
const owner = config.owner;
const botname = config.botname;
const botinvite = config.botinvite;
const idchannel = channel.textchannel;
role = config.role;
//discord INTENTS


//init bot discord
bot.on('ready', () => {
    console.log(`${botname} is online!`);

}
);


bot.on('message', message => {
    

 if(message.content.startsWith('https://discord.gg/') && message.channel.id == channel.textchannel) {
   
           const url = message.content;

            //embed
            const embed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('New Invite')
                .setURL(url)
                .setDescription("n'hésité pas à rejoindre" )

            //send embed
            message.channel.send(`<@&${config.role}>`);
            message.channel.send({ embeds: [embed] });
    
        }


    }




);



bot.login(token);
