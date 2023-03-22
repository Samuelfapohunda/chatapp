const { default: mongoose } = require("mongoose")

async function chatDB() {
    await mongoose.connect('mongodb://localhost:27017/chatcord-backend')
}
 
module.exports = chatDB;