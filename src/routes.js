const {Router} = require('express');
const authController = require('./controllers/authController');
const projectsController = require('./controllers/projectsController');
const authMiddleware = require('./middlewares/auth');
const routes = Router();

routes.post('/register',authController.register);
routes.post('/authenticate',authController.authenticate);
routes.get('/',authMiddleware,projectsController.test);

module.exports = routes;