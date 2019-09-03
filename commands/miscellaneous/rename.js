const Discord = require("discord.js");

module.exports = {
    config: {
        name: "rename",
        description: "Renames a channel",
        usage: "!rename <yourchoice>",
        category: "miscellaneous",
        accessableby: "Administrators",
        aliases: ["r", "rewrite", "re"]
    },
    run: async (bot, message, args) => {

      if(!message.member.hasPermission(["ADMINISTRATOR"])) return message.channel.send("You do not have permission to perform this command!")
      if(!message.guild.me.hasPermission(["ADMINISTRATOR"])) return message.channel.send("I dont have permission to perform this command")

      message.channel.send("Channel name has been changed!");
      console.log("Works1")
      message.channel.setName(`${args[0]}`);
      console.log("Works2")
    }
  }
