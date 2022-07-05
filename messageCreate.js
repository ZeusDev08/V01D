const { Message } = require("discord.js");

if(command) {
    // USER PERMISSIONS
    if(!Message.member.permissions.has(command.userPerms || [])) return message.channel.send(`You do not  have \`${command.userPerms || []}\` permission`)

    // BOT PERMS
    if(!message.guild.me.permissions.has(command.clientPerms || [])) return message.channel.send(`I do not have \`${command.clientPerms || []}\` permission`)

}

if(command) {
    // OWNER ONLY
    if(command.ownerOnly) {
        if(!client.config.OWNERID.includes(message.author.id)) {
            message.channel.send(`${message.member} You can not access owner commands`)
            return;
        }
    }
}




