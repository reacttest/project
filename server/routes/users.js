const express = require('express');
const User = require('../models/user');
const { check, validationResult } = require('express-validator/check');
const { matchedData } = require('express-validator/filter');

let router = express.Router();

/* GET users listing. */
router.get('/test', function(req, res, next) {
    res.json({
        id: 123,
        name: "test"
    })
});

/* SAVE user to db. */
router.post('/register', function(req, res, next) {

    const username = req.body.username;
    const password = req.body.password;
    const passwordConfirmation = req.body.passwordConfirmation;

    let auth = new User({
        username: username,
        password: password,
        passwordConfirmation: passwordConfirmation
    });
    auth.save((err) => {
        if (err) return res.status(400).send(err);
        res.json(auth);
    });
});

module.exports = router;
