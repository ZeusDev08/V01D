const { MessageEmbed, MessageAttachment, Interaction } = require('discord.js');
const moment = require('moment');

module.exports = {
    name: "roleinfo",
    clientPerms: ['SEND_MESSAGES'],
    userPerms: ['SEND_MESSAGES'],
    description: "Get info about a role",
    cooldown: 10000,
    options: [{
        name: "Role",
        description: "The role to get info about",
        type: 'ROLE',
        required: true
    }],
    run: async (client, message, args) => {
        const role = guild.roles.cache.get(args.get('role').value);
        const permissions = role.permissions.toArray().map((p) => `${p}`).join(', ');
        const embed = new MessageEmbed()
            .setColor(role.color)
            .setTitle(`${role.name}`)
            .addFields(
                { name: "NAME", value: `**\`\`\`${role.name}\`\`\`**`, inline: true },
                { name: "ID", value: `**\`\`\`${role.id}\`\`\`**`, inline: true },
                { name: "CREATED AT", value: `**\`\`\`${moment(role.createdAt).format('lll')}\`\`\`**` },
                { name: "COLOR", value: `**\`\`\`${role.hexColor}\`\`\`**`, inline: true },
                { name: "HOISTED", value: `**\`\`\`${role.hoist}\`\`\`**`, inline: true },
                { name: "MENTIONABLE", value: `**\`\`\`${role.mentionable}\`\`\`**`, inline: true },
                { name: "PERMISSIONS", value: `**\`\`\`${permissions || 'None'}\`\`\`**\n` },
            )
            .setTimestamp()
        interaction.reply({
            embeds: [embed]
        });
    }
}