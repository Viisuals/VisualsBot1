const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

//!8ball <nigo> ffas
if(!args[2]) return message.reply("Please ask a question!");
let replies = ["Yes.", "No."," I dont know bruv!", "Ask another time!", "Maybe!"];

let result = Math.floor((Math.random() * replies.length))
let question = args.slice(1).join(" ");

let ballembed = new Discord.RichEmbed()
.setAuthor(message.author.tag)
.setColor("ffa100")
.addField("Question", question)
.addField("Answer", replies[result])

message.channel.send(ballembed);



}

module.exports.help = {
  name: "8ball"
}
