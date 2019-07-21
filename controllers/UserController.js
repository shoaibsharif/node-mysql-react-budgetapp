const User = require('../models/User')
const bcrypt = require('bcryptjs')
const ThrowError = require('../utils/ThrowError')
const jwt = require('jsonwebtoken')

module.exports.register = async (req, res) => {
    try {
        let user = await User.create({
            ...req.body,
        })
        res.json(user)
    } catch (error) {
        console.log(`${error}`.red)
        res.json(ThrowError(error))
    }
}

module.exports.login = async (req, res) => {
    try {
        // TODO: login with username / email
        let user = await User.findOne({
            where: {
                email: req.body.email,
            },
        })

        if (!user) {
            return res.status(404).json({
                email: `user does not exists`,
            })
        }

        let matched = bcrypt.compareSync(req.body.password, user.password)

        if (matched) {
            res.json({
                message: 'Login Successfull',
                token: jwt.sign({ id: user.id }, process.env.APP_SECRET),
            })
        } else {
            res.status(401).json({
                password: 'Wrong password',
            })
        }

        // TODO: set cookie to frontend
    } catch (error) {
        console.log(`${error}`.red)
        res.json(ThrowError(error))
    }
}
