const Cost = require('../models/Cost')
const ThrowError = require('../utils/ThrowError')
module.exports.store = async (req, res) => {
    try {
        res.json(
            await Cost.create({
                ...req.body,
            })
        )
    } catch (error) {
        res.json(ThrowError(error))
    }
}
