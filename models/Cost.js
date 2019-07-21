const sequelize = require('sequelize')

const db = require('../utils/db')

const Cost = db.define('cost', {
    purpose: {
        type: sequelize.STRING,
        validate: {
            len: {
                args: [5],
                msg: 'Purpose length must be atleast 5 character',
                // TODO: 5 words
            },
        },
        allowNull: false,
    },
    type: sequelize.ENUM('EXPENSE', 'INCOME'),
    amount: {
        type: sequelize.DOUBLE,
        allowNull: false,
    },
})

module.exports = Cost
