const Sequelize = require('sequelize')
const bcryptjs = require('bcryptjs')
const db = require('../utils/db')

const uuid = require('uuid/v4')

const User = db.define('user', {
    id: {
        type: Sequelize.UUID,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true,
        },
        unique: {
            args: true,
            msg: 'aita agei use hoise',
        },
    },
    profilePhoto: {
        type: Sequelize.STRING,
        validate: {
            isUrl: {
                args: true,
                msg: 'vull url',
            },
        },
    },
    password: {
        type: Sequelize.STRING,
        validate: {
            len: {
                args: [3, 25],
                msg: 'Password length must be within 3 to 25 characters ',
            },
        },
    },
})

User.beforeCreate((user, options) => {
    user.id = uuid()
    user.password = bcryptjs.hashSync(user.password)
})

module.exports = User
