const { RichEmbed } = require('discord.js');

module.exports = {
    config: {
        name: "coinflip",
        description: "Makes the bot flip a coin.",
        usage: "!coinflip",
        category: "fun",
        accessableby: "Members",
        aliases: ["cf", "flip"]
    },
  run: async (bot, message, args) => {
        const replies = [
            "Head.",
            "Tails",
        ];
        const result = Math.floor((Math.random() * replies.length));
        const question = args.join(" ");

        const embed = new RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor("#15f153")
        .addField("Answer", replies[result])
        .setTimestamp();

        message.channel.send(embed);

    }
  }
