const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

const User = mongoose.model("User1", UsersSchema)

module.exports = User