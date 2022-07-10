const {MessageEmbed, MessageActionRow, MessageButton} = require('discord.js')
module.exports = {
    name: 'roles',
    run: (client, message, args) => {
        if(!message.member.permissions.has('ADMINISTRATOR'))
        {
            return;
        }

        const row = new MessageActionRow()
        .addComponents(
            [
                new MessageButton()
                .setCustomId('lol-tft')
                .setEmoji('995734426120114297')
                .setStyle('SECONDARY')
            ],
            [
                new MessageButton()
                .setCustomId('unturned')
                .setEmoji('995733736635252746')
                .setStyle('SECONDARY')
            ],
            [
                new MessageButton()
                .setCustomId('genshin')
                .setEmoji('995733576786116639')
                .setStyle('SECONDARY')
            ]
        )

            const embed = new MessageEmbed()
            .setTitle('ROLES')
            .setDescription('<:loltft:995734426120114297> | LoL - TFT \n <:unturned:995733736635252746> | Unturned \n <:protogema:995733576786116639> | Genshin Impact')
            .setColor('#0060D3')

        message.channel.send({embeds: [embed], components: [row]})
    }
}