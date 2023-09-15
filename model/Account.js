const mongoose = require('mongoose');
const {Schema} = mongoose

const accountShema = new Schema({
    username: String,
    password: String,

    lastAuthentication: Date,
});
mongoose.model('accounts', accountShema);