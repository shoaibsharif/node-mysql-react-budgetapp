const jwt = require('jsonwebtoken')
const User = require('../models/User')

module.exports = async (req, res, next) => {
    token = req.headers.authorization
    // TODO: get with bearer

    if (!token)
        return res.status(401).json({
            message: 'Authentication Required',
        })

    let user = await User.findOne({
        where: {
            id: jwt.decode(token).id,
        },
    })

    req.user = user
    next()
}
