const User = require('../models/user');
module.exports = {
    async store(req, res){
        try {
            const user = await User.create(req.body);
            return res.json(user);
        } catch (error) {
            return res.status(400).send({error:'Registration Failed'});
        }
    }
}