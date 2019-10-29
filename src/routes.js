const {Router} = require('express');
const routes = Router();

routes.get('/',(req, res)=>{
    return res.json({'status':true});
});

module.exports = routes;