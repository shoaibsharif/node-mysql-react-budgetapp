const Router = require('express').Router()

Router.post('/register', require('../controllers/UserController').register)

Router.post('/login', require('../controllers/UserController').login)

module.exports = Router
