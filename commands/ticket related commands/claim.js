const Discord = require("discord.js")
const { RichEmbed } = require("discord.js")
const { cyan } = require("../../colours.json");

module.exports = {
    config: {
        name: "claim",
        description: "Makes a Staff Member claim a ticket",
        usage: "!claim <ticket channel you want to claim>",
        category: "ticket related commands",
        accessableby: "Staff",
        aliases: ["c"]
    },
    run: async (bot, message, args) => {

      var userName = message.author.id;
      var userDiscriminator = message.author.username;

    let claimEmbed = new Discord.RichEmbed()

      .setTitle(`Your ticket is claimed By: ${message.author.username}.`)
      .setColor(cyan)
      .setDescription("They will be assisting you shortly!");

      const channel = message.guild.channels.find(val => val.name === `ticket-${args[0]}`)

      if (!channel) return message.channel.send("You can't claim a Channel!");
      else {
      channel.send(claimEmbed)
      channel.setName(`claimed-${args[0]}`);
      }
    }
  }
