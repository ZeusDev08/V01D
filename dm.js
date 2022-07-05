const { Interaction } = require("discord.js");

module.exports = {
    name: "dm",
    description: 'send message to dms',
    options: [{
        name: "user",
        description: 'Provide user to send dms',
        type: 'USER',
        required: true,
    },
    {
        name: "message",
        description: 'Provide message to send',
        type: 'STRING',
        required: true,
    }],
    run: async(client, interaction, args) => {
        const user = guild.members.cache.get(args.get('user')?.value ?? interaction.user.id);
        const dm = interaction.options.getString('message');
        try {
            await user.send(dm)
        } catch (error) {
            return interaction.reply('The user you provided dms are close')
        }
        interaction.reply(`Successfuly send dms to \`${user.displayName}\``)
    }
}
