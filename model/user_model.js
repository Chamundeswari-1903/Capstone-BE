const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const db = require('../config/db');

const { Schema } = mongoose;

const UserSchema = new Schema({

    userid: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    postcode: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
   date: {
        type: String,
        required: true
    },
  status: {
        type: String,
        required: true
    }
   
});



const UserModel = db.model('user', UserSchema);

module.exports = UserModel;