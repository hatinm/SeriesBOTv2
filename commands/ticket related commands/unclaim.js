const Discord = require("discord.js")
const { RichEmbed } = require("discord.js")
const { cyan } = require("../../colours.json");

module.exports = {
    config: {
        name: "unclaim",
        description: "Makes a Staff Member unclaim a ticket",
        usage: "!unclaim <ticket channel you want to unclaim ",
        category: "ticket related commands",
        accessableby: "Staff",
        aliases: ["unc"]
    },
    run: async (bot, message, args) => {

      var userName = message.author.id;
      var userDiscriminator = message.author.username;

    let claimEmbed = new Discord.RichEmbed()

      .setTitle(`Your ticket is set unclaimed By: ${message.author.username}.`)
      .setColor(cyan)
      .setDescription("A new staff member will be helping you soon!");

      const channel = message.guild.channels.find(val => val.name === `claimed-${args[0]}`)

      if (!channel) return message.channel.send("You can't unclaim a Channel!");
      else {
      channel.send(claimEmbed)
      channel.setName(`ticket-${args[0]}`);
      }
    }
  }
