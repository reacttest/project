const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

let router = express.Router();

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log(req.body);

    let query = User.find({
        username : username,
        password: password
    });

    query.exec( (err,data) => {
        console.log(data)
        console.log(data[0]._id)
        if (data.length > 0) {
            const token = jwt.sign({
                username: username,
                id: data[0]._id
            }, config.jwtSecret);
            res.json({ token });
        } else {
            res.status(401).json({ errors: { form: 'Invalid Credentials' } });
        }
    });

});


module.exports = router;