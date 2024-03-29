const { RichEmbed } = require("discord.js")
const { red_light } = require("../../colours.json");

module.exports = {
config: {
    name: "report",
    description: "reports a user of the guild",
    category: "moderation",
    usage: "!report <user> <reason>",
    accessableby: "Members",
},
run: async (bot, message, args) => {

    message.delete()
    // mentioned or grabbed user
    let target = message.mentions.members.first() || message.guild.members.get(args[0])
    if(!target) return message.channel.send("Please provide a valid user").then(m => m.delete(15000))

    // reasoning definition
    let reason = args.slice(1).join(" ")
    if(!reason) return message.channel.send(`Please provide a reason for reporting **${target.user.tag}**`).then(m => m.delete(15000))

    // grab reports channel
    let sChannel = message.guild.channels.find(x => x.name === "reports")

    // send to reports channel and add tick or cross

    message.channel.send("Your report has been filed to the staff team. Thank you!").then(m => m.delete(15000))

    let repEmbed = new RichEmbed()
    .setTitle("⚠️| Report! ")
    .setColor(red_light)
    .addField(`Reporter:`, `${message.author.tag}`)
    .addField(`Reported:`, `${target.user.tag}`)
    .addField(`For:`, `${reason}`);
    sChannel.send(repEmbed).then(async msg => {
        await msg.react("✅")
        await msg.react("❌")
    })

}
}
