const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  //>Say Hi!
  //hi
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Skrub Gandolf says no!");
  let botmessage = args.join(" ");
  message.delete().catch();
  message.channel.send(botmessage);
}

module.exports.help = {
  name: "say"
}
