const {Router} = require('express');
const authController = require('./controllers/authController');
const routes = Router();

routes.post('/register',authController.store);

module.exports = routes;