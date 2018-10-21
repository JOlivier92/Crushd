const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jsonwebtoken = require('jsonwebtoken');
const keys = require('../../config/keys');

// route for signing up.
router.post('/register', (req, res) => {
    User.findOne({username: req.body.username}).then(user => {
        // if the user already exists in the database, return 400 level error
        if (user) {
            let errors = {};
            errors.name = 'User already exists';
            return res.status(400).json(errors)
        } else {
        // else, assign newUser to posted body data
            const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                phone_number: req.body.phone_number,
                birthdate: req.body.birthdate,
                password: req.body.password
            })
            // generate salt with 10 iterations, pass errors / generated salt to CB
            bcrypt.genSalt(10, (err, salt) => {
                // attach salt to given password, pass errors / new hash to CB
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err;
                    // if no errors, save the user to the database with generated hash
                    newUser.password = hash;
                    // if user successfully saves, pass payload as response to server
                    newUser.save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                })
            })
        }
    })
})
router.get("/test", (req, res) => res.json({msg: "this is the user's router"}));


module.exports = router;