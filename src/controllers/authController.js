const User = require('../models/user');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn:86400,        
    });
}

module.exports = {
    async register(req, res){
        try {
            const {email} = req.body;
            if (await User.findOne({email})) {
                return res.status(400).send({error:"user alread exists"});
            }
            const user = await User.create(req.body);
            user.password = undefined;
            
            return res.send({
                user,
                token: generateToken({id:user.id}),
            });
        } catch (error) {
            return res.status(400).send({error:'Registration Failed'});
        }
    },
    async authenticate(req, res){
        const {email, password} = req.body;
        const user = await User.findOne({email}).select('+password');
        if (!user) {
            return res.status(400).send({error:'user not found'});
        }
        if(!await bcryptjs.compare(password, user.password)){
            return res.status(400).send({error:'Invalid Password'});
        }
        user.password = undefined;
        res.send({
            user,
            token: generateToken({id:user.id}),
        });
    }
}