const Router = require('express').Router()

Router.post('/', require('../middlewares/Authenticated'), require('../controllers/CostController').store)

module.exports = Router
