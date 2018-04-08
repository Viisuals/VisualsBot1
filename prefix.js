const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) =>{

if(!message.member.hasPermission("MANANGE_SERVER")) return message("Nice try brudda!");
if(!args[0] || args[0 == "help"]) return message.reply("Usage: >prefix <desired prefix>");

let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

prefixes[message.guild.id] = {
  prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if(err) console.log(err)
  });

  let sEmbed = new Discord.RichEmbed()
  .setColor("ffa100")
  .setTitle("Prefix Set!")
  .setDescription(`Set to ${args[0]}`);

  message.channel.send(sEmbed);

}

module.exports.help = {
  name: "prefix"
}
