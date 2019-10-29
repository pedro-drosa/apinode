const {Router} = require('express');
const authController = require('./controllers/authController');
const routes = Router();

routes.post('/register',authController.register);
routes.post('/authenticate',authController.authenticate);

module.exports = routes;