const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type:String,
        required: true,
        lowercase: true,
    },
    password:{
        type:String,
        required:true,
    }
},{
    timestamps: true,
});

const User = mongoose.Model('User',UserSchema);

module.exports = User;