const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: 'mythanks',
    description: 'Gives you a random thank you message',
    aliases: ['mythx'],
    run: async(client, message, args) => {
        let user = message.mentions.users.first() || message.author || message.guild.members.cache.get(args[0]);
        let thanks = await db.get(`userthanks_${user.id}`);
        let thanks1 =  await db.get(`userthanks_${user.id}`);
        if(thanks > 0) thanks = "Level 0"
        if(thanks1 > 5) thanks1 = "Level 1"
        if(thanks1 > 10) thanks1 = "Level 2"
        if(thanks1 > 15) thanks1 = "Level 3"
        if(thanks1 > 20) thanks1 = "Level 4"
        if(thanks1 > 25) thanks1 = "Level 5"
        if(thanks1 > 30) thanks1 = "Level 6"
        if(thanks1 > 35) thanks1 = "Level 7"
        if(thanks1 > 40) thanks1 = "Level 8"
        if(thanks1 > 45) thanks1 = "Level 9"
        if(thanks1 > 50) thanks1 = "Level 10"
        if(thanks1 > 55) thanks1 = "Level 11"
        if(thanks1 > 60) thanks1 = "Level 12"
        if(thanks1 > 65) thanks1 = "Level 13"
        if(thanks1 > 70) thanks1 = "Level 14"
        if(thanks1 > 75) thanks1 = "Level 15"
        if(thanks1 > 80) thanks1 = "Level 16"
        if(thanks1 > 85) thanks1 = "Level 17"
        if(thanks1 > 90) thanks1 = "Level 18"
        if(thanks1 > 95) thanks1 = "Level 19"
        if(thanks1 > 100) thanks1 = "Level 20"
        if(thanks === null) thanks = "No Thanks"

        let embed = new MessageEmbed()
        .setAuthor(user.username || user.user.username)
        .setThumbnail(user.displayAvatarURL() || user.user.displayAvatarURL())
        .addField(`User Level`, `\`${thanks}`, true)
        .addField(`User Total Thanks`, `\`${thanks1}\`` || `\`0\``)
        .setThumbnail()
        .setColor('DARK_GREEN')
        .setFooter(message.guild.name, message.guild.iconURL())
        message.channel.send({ embeds: [embed] })
    }
}
