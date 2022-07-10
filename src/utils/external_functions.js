//Maneja los roles desde el evento de interacciones pero en archivo externo para tener mejor ordenado el codigo
function roles(client) {
    client.channels.cache.get('943134431571484679').messages.fetch('995789984353226833').then( msg => {
        let ifilter = i => !i.user.bot;

        const collector = msg.createMessageComponentCollector({ filter: ifilter});

        collector.on('collect', async i => {
            if(i.customId === "lol-tft")
            {
                if(i.member.roles.cache.get("995734470470680647"))
                    {
                        i.member.roles.remove('995734470470680647');
                        i.reply({content: "Se te ha removido el rol <@&995734470470680647>. Para agregarlo vuelve a presionar el boton \n Recuerda que jugar con los botones es motivo de ban/mute", ephemeral: true})
                        return;
                    }

                i.member.roles.add('995734470470680647');
                i.reply({content: "Se te ha agregado el rol <@&995734470470680647>. Para removerlo vuelve a presionar el boton \n Recuerda que jugar con los botones es motivo de ban/mute", ephemeral: true})
            }

            if(i.customId === "unturned")
            {
                if(i.member.roles.cache.get("995732819110285403"))
                    {
                        i.member.roles.remove('995732819110285403');
                        i.reply({content: "Se te ha removido el rol <@&995732819110285403>. Para agregarlo vuelve a presionar el boton \n Recuerda que jugar con los botones es motivo de ban/mute", ephemeral: true})
                        return;
                    }

                i.member.roles.add('995732819110285403');
                i.reply({content: "Se te ha agregado el rol <@&995732819110285403>. Para removerlo vuelve a presionar el boton \n Recuerda que jugar con los botones es motivo de ban/mute", ephemeral: true})
            }

            if(i.customId === "genshin")
            {
                if(i.member.roles.cache.get("995733042662494208"))
                    {
                        i.member.roles.remove('995733042662494208');
                        i.reply({content: "Se te ha removido el rol <@&995733042662494208>. Para agregarlo vuelve a presionar el boton \n Recuerda que jugar con los botones es motivo de ban/mute", ephemeral: true})
                        return;
                    }

                i.member.roles.add('995733042662494208');
                i.reply({content: "Se te ha agregado el rol <@&995733042662494208>. Para removerlo vuelve a presionar el boton \n Recuerda que jugar con los botones es motivo de ban/mute", ephemeral: true})
            }
        })
    })
}

module.exports = {
    roles: roles
}