const {MessageAttachment} = require('discord.js')

module.exports = {
    name: 'interactionCreate',
    run: async (client, interaction) => {
        if(interaction.isButton())
        {
            if(interaction.customId === 'verificar')
            {
                if(interaction.member.roles.cache.get("943134430812307490"))
                {
                    interaction.member.send("Ya estas verificado")
                    return;
                }
                const {Captcha} = require('captcha-canvas');

                const captcha = new Captcha()
                captcha.async = false;
                captcha.addDecoy()
                captcha.drawTrace()
                captcha.drawCaptcha()

                const attachment = new MessageAttachment(captcha.png, "captcha.png");

                interaction.reply({content: `<@${interaction.user.id}>, ingresa el codigo en mayusculas. (15s)`, files: [attachment], ephemeral: true})
                
                const filter = m => m.author.id === interaction.user.id;

                const collector = interaction.channel.createMessageCollector({filter, time:15000})

                collector.on("collect", async m => {
                    setTimeout(() => {
                        m.delete()
                    }, 1000)

                    if(!m.content.startsWith(captcha.text))
                    {
                        collector.stop()
                        m.channel.send("Codigo incorrecto").then(x => {
                            setTimeout(() => {
                                x.delete()
                            }, 3000)
                        })
                    } else {
                        await m.member.roles.add('946521649778397215')
                        await m.member.roles.add('943134430812307490')
                        await m.member.roles.remove('943134430812307489')
                        m.member.send("Verificacion correcta 💚. Bienvenido a la comunidad")
                    }
                    collector.stop()
                })
            }
        }
    }
}