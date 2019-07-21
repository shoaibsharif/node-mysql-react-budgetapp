module.exports = error => {
    return error.errors.map(({ message, path }) => ({ [path]: message }))
}
