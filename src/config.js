require('dotenv').config();

module.exports = {
    BOT: {
        token: process.env.TOKEN,
        prefix: process.env.PREFIX
    }
}