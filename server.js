const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('Nzk3NTcxOTYwNjE5Nzk0NDQz.X_oaxQ.96ICTmYbxMP3uJ3EoS9bQtRUSRY');
