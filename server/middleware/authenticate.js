const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User  = require('../models/user');

module.exports = (req, res, next) => {
    const authorizationHeader = req.headers['authorization'];
    let token;

    if (authorizationHeader) {
        token = authorizationHeader.split(' ')[1];
    }

    if (token) {
        jwt.verify(token, config.jwtSecret, (err, decoded) => {
            if (err) {
                res.status(401).json({ error: 'Failed to authenticate' });
            } else {

                const { username, password } = req.body;

                let query = User.find({
                    username : username,
                    password: password
                });

                query.exec( (err,data) => {console.log(decoded.token)
                    if (data.length > 0) {
                        console.log(data)
                    } else {
                        res.status(401).json({ errors: { form: 'Invalid Credentials' } });
                    }
                });

                // User.query({
                //     where: { id: decoded.id },
                //     select: [ 'id', 'username' ]
                // }).fetch().then(user => {
                //     if (!user) {
                //         res.status(404).json({ error: 'No such user' });
                //     } else {
                //         req.currentUser = user;
                //         next();
                //     }
                //
                // });
            }
        });
    } else {
        res.status(403).json({
            error: 'No token provided'
        });
    }
};