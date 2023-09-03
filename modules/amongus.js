const discord = require('discord.js')
function inject (bot) {
bot.on('messageCreate', message => {
  var prefix = '~'  
  if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    if (command === "ping") {
        message.reply(`Pong`);
    } 
})
}
module.exports = inject