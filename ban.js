const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!bUser) return message.channel.send("Can not find the specified user!");
  let bReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Nice try!")
  if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You can't ban'em!");

  let banEmbed = new Discord.RichEmbed()
  .setDescription("Ban")
  .setColor("ffa100")
  .addField("Banned user", `${bUser} with ID: ${bUser.id}`)
  .addField("Banned by", `<@${message.author.id}> with ID: ${message.author.id}`)
  .addField("Banned in", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", bReason);

  let incidentschannel = message.guild.channels.find(`name`, "incidents");
  if(!incidentschannel) return message.channel.send("Can't find the incidents channel!");

  message.guild.member(bUser).ban(bReason);
  incidentschannel.send(banEmbed);
}
  module.exports.help = {
    name: "ban"
  }
