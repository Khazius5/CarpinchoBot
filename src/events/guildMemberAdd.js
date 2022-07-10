// const { CanvasSenpai } = require("canvas-senpai");
// const canva = new CanvasSenpai();

module.exports = {
  name: "guildMemberAdd",
  run: async (client, member) => {
    // const welcomeChannel = client.channels.cache.get("884334726809276436");

    // let data = await canva.welcome(member, {
    //   link: "https://i.imgur.com/au35d1L.png",
    // });

    // welcomeChannel.send({
    //     content: `Bienvenido ${member}!`,
    //     files: [{
    //         attachment: data,
    //         name: 'welcome-image.png'
    //     }]
    // });

    member.roles.add('943134430812307489');
  }
};