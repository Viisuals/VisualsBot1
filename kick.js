const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Can not find the specified user!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Nice try!")
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You can't kick'em!");

    let kickEmbed = new Discord.RichEmbed()
  .setDescription("Kick")
  .setColor("ffa100")
  .addField("Kicked user", `${kUser} with ID: ${kUser.id}`)
  .addField("Kicked by", `<@${message.author.id}> with ID: ${message.author.id}`)
  .addField("Kicked in", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", rreason);

  let kickChannel = message.guild.channels.find(`name`, "incidents");
  if(!kickChannel) return message.channel.send("Can't find the incidents channel!");

  message.guild.member(kUser).kick(kReason);
  kickChannel.send(kickEmbed);
}
  module.exports.help = {
    name: "kick"
  }
