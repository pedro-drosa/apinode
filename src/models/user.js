const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
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

UserSchema.pre('save', async function(next){
    const hash = await bcryptjs.hash(this.password,10);
    this.password = hash;
    next();
});

const User = mongoose.model('User',UserSchema);
module.exports = User;