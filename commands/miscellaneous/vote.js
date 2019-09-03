const Discord = require("discord.js");
const { cyan } = require("../../colours.json");

module.exports = {
    config: {
        name: "vote",
        description: "Makes the bot to make a vote and then collect the results.",
        usage: "!vote <text>",
        category: "miscellaneous",
        accessableby: "Administartors",
        aliases: ["poll"]
    },

    run: async (bot, message, args) => {


          const embed = new Discord.RichEmbed()
              .setColor(cyan)
              .setFooter(`Requested by ${message.author.username}`)
              .setDescription("React Below.")
              .setTitle(`Vote on \n ${args.join(' ')}`);

          let msg = await message.channel.send(embed)
              .then(function (msg) {
                  msg.react("✅");
                  msg.react("❎");
                  message.delete({timeout: 1000});
                  }).catch(function(error) {
                  console.log(error);
              });
      }
  }
