const User = require('../models/user');
module.exports = {
    async store(req, res){
        try {
            const {email} = req.body;
            if (await User.findOne({email})) {
                return res.status(400).send({error:"user alread exists"});
            }
            const user = await User.create(req.body);
            user.password = undefined;
            
            return res.json(user);
        } catch (error) {
            return res.status(400).send({error:'Registration Failed'});
        }
    }
}