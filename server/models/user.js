const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    id:{type:String},
    name:{type:String},
    email:{type:String,required:true}
});

module.exports = mongoose.model('User',User);