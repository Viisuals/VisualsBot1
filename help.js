const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let helpembed = new Discord.RichEmbed()
.setDescription("Help Menu!")
.setColor("ffa100")
.addField("Member Commands", "What commands you can use!")
.addField("Help", "Sends this message.")
.addField("Serverinfo", "Information about the server!")
.addField("Botinfo", "Information about the bot!")
.addField("Userinfo", "Information about you!")
.addField("Pay", "Pays someone how much coins you specify!")
.addField("Level", "Displays what level you are and how much XP you have!")
.addField("Coins", "Displays how much coins you have, earn coins by being active in chat!")
.addField("Report", "Using this command will send a report message to mods about the person!");

  message.channel.send(helpembed);

if(message.member.hasPermission("MANAGE_MESSAGES")){
  let modembed = new Discord.RichEmbed()
  .setDescription("Staff Help Menu!")
  .setColor("00f6ff")
  .addField("Staff Commands!", "What commands you can use!")
  .addField("Addrole", "Adds a role to a member!")
  .addField("Removerole", "Removes a role from a member!")
  .addField("Clear", "Clears how many messages you specify!")
  .addField("tempmute", "Temporarily mutes a member for however many s/h/d.")
  .addField("Prefix", "Changes prefix of bot{Head-Admin and above!}")
  .addField("Say", "Bot repeats what you said with this command{Head-Admin and above!}")
  .addField("Kick", "Kicks member from the server.")
  .addField("Warn", "Warns a member.")
  .addField("Warnlevel", "Keeps track of how many has he/her has, after multiple warns. They will be automatically punished!")
  .addField("Ban", "Bans a member from the server!");

try{
  await message.author.send(modembed);
}catch(e){
message.reply("Your DMs are locked! I cannot send the staff commands!")
    }
  }
}

module.exports.help ={
  name: "help"
}
