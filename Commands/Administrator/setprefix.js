const { Permissions } = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: 'setprefix',
    aliases: ['sp'],
    description: 'Set the prefix for the server',
    run : async(client, message, args, prefix) => {
        if(!message.content.startsWith(prefix)) return;
        if(!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return message.channel.send(`You dont have permission to use this command`)
        const newprefix = args[0];
        if(!newprefix) return message.channel.send(`Please specify a new prefix`);
        if(newprefix.length > 5) return message.channel.send(`Invalid prefix, The prefix is greater than 5 digits/alphabetes`)
        message.channel.send(`Prefix changed to **${newprefix}**`);
        db.set(`prefix_${message.guild.id}`, newprefix)
    }	
}