const { token } = require("./config.json");
const discord = require("discord.js"); 
const client = new discord.Client({
  disableEveryone: true 
});

client.commands = new discord.Collection();
client.aliases = new discord.Collection();

["command", "events"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});


client.login("Nzk3NTcxOTYwNjE5Nzk0NDQz.X_oaxQ.96ICTmYbxMP3uJ3EoS9bQtRUSRY");
