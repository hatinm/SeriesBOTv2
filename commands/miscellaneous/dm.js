module.exports = {
    config: {
        name: "dm",
        description: "Direct Messages a User",
        usage: "!dm <user> <text>",
        category: "miscellaneous",
        accessableby: "Members",
        aliases: ["directmessage", "m"]
    },
  run: async (bot, message, args) => {
var mention = message.mentions.users.first();

if (mention == null) { return; }
if (!mention == null) return message.channel.send('User not found!')
  let rreason = args.join(" ").slice(22);
  mention.send (`**You have been dmed by <@${message.author.id}> in the server named: ${message.guild.name}** \n The message: ${rreason}`);
  message.channel.send("✅| User has been direct messaged!")
}
}
