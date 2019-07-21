require('dotenv').config()
const express = require('express')
const db = require('./utils/db')
const app = express()

/**
 * Parse request Body
 */
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api/auth', require('./routes/user'))
app.use('/api/cost', require('./routes/cost'))

/**
 * Models
 */
const Cost = require('./models/Cost')
const User = require('./models/User')

/**
 * Relationships
 */
User.hasMany(Cost)
Cost.belongsTo(User)

db.sync()

app.use((err, req, res, next) => {
    //TODO: handle Errors
    next()
})

app.listen(process.env.PORT, () => {
    console.log(`Server working at http://localhost:${process.env.PORT}`.bgGreen.black)
})
