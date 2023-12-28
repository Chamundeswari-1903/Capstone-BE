const mongoose = require('mongoose');
const connection = mongoose.createConnection('mongodb+srv://erchamubalaji:chamu@react.sk3mcum.mongodb.net/').on('open',()=>{
    console.log("Mongo DB Connected");
}).on('error',()=>{
    console.log("Mongo DB Connection Error")
});
module.exports = connection;