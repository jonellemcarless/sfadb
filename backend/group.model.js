const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Group = new Schema({
    group_name: {
        type: String
    },
    contact_name: {
        type: String
    },
    email: {
        type: String
    },
    phone_number: {
        type: String
    },
    account_manager: {
        type: String
    }
});
module.exports = mongoose.model('Group', Group);