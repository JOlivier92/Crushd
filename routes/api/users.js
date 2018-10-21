const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../../models/User');

// route for signing up.
router.post('/register', (req, res) => {
    User.findOne({username: req.body.username}).then(user => {
        if (user) {
            errors.name = 'User already exists';
            return res.status(400).json(errors)
        } else {
            let newUser = new User({
                username: req.body.username,
                email: req.body.email,
                phone_number: req.body.phone_number,
                birthdate: req.body.birthdate,
                password: req.body.password,
            })
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {
                            const payload = {id: user.id, name: user.username};
                            res.json({
                                success: true
                            })
                        })
                })
            })
        }
    })
})
router.get("/test", (req, res) => res.json({msg: "this is the user's router"}));


module.exports = router;