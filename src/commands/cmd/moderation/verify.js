const {MessageEmbed, MessageActionRow, MessageButton} = require('discord.js')
module.exports = {
    name: 'verify',
    run: (client, message, args) => {
        if(!message.member.permissions.has('ADMINISTRATOR'))
        {
            return;
        }
        const embed = new MessageEmbed()
        .setTitle("✅ | Verificacion")
        .setDescription("Resuelve el captcha para verificarte")
        .setColor("#2ECB00")

        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setStyle("SUCCESS")
            .setCustomId("verificar")
            .setLabel("Verificarme")
            .setEmoji("✅")
        )

        message.channel.send({
            embeds: [embed],
            components: [row]
        })
    }
}