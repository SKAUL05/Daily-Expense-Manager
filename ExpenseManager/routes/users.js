const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

//Register
router.post('/register', (req,res,next) => {
	//logic to add user details
	let newUser = new User({
		first_name: req.body.first_name,
        last_name: req.body.last_name,
		email: req.body.email,
		dob: req.body.dob,
		gender: req.body.gender,
		phone: req.body.phone,
		username: req.body.username,
		password: req.body.password
	});

	User.addUser(newUser, (err, user) => {
		if(err) {
			res.json({success: false, msg:'Failed to register User'});
		}
		else
		{
			res.json({success: true, msg:'User registered'});
		}
	})
});

//Authenticate
router.post('/authenticate', (req,res,next) => {
	const username = req.body.username;
	const password = req.body.password;

	User.getUserByUsername(username, (err, user) => {
		if(err) throw err;
		if(!user)
		{
			return res.json({success: false, msg: 'User not found'});
		}

		User.comparePassword(password, user.password, (err, isMatch) => {
			if(err) throw err;
			if(isMatch)
			{
				const token = jwt.sign(user, config.secret, {
					expiresIn: 604800 // 1 Week
				});

				res.json({
					success: true,
					token: 'JWT '+token,
					user: {
						id: user._id,
						name: user.name,
						username: user.username,
						email: user.email
					}
				});
			}
			else
			{
				return res.json({success: false, msg: 'Wrong password'});
			}
		});
	});

});

//Profile
router.get('/profile', (req,res,next) => {
	//res.send('Fetching the Profile.....');
	User.find(function(err,profile){
	 res.json(profile);
	})

});



module.exports = router;