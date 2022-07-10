const {roles} = require("../utils/external_functions");

module.exports = {
    name: 'ready',
    run: async (client) => {
        console.log(`${client.user.username} - Esta online`);
        
        //Funciones externas
        roles(client)
    }
}