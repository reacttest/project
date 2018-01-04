module.exports = {
    database: 'mongodb://localhost:27017/express',
    secret: 'abcd',
    jwtSecret: 'somesecretkey',
    jwtSession: {
        session: false
    }
}