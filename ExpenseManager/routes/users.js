const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const Transact = require('../models/transact');
const Account = require('../models/accounts');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })

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

//Transact Details
router.post('/transact', (req,res,next) => {
    //logic to add transacation details
    let newTransact = new Transact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        amount: req.body.amount,
		nature: req.body.nature,
		category : req.body.category,
		date: req.body.date,
		note: req.body.note
    });

    Transact.addTransact(newTransact, (err, transact) => {
        if(err) {
            res.json({success: false, msg:'Failed to register Transaction'});
        }
        else
        {
            res.json({success: true, msg:'Transaction Added'});
        }
    })
});

//Account Details

router.post('/account', (req,res,next) => {
    //logic to add account details
    let newAccount = new Account({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        acc_no: req.body.acc_no,
        acc_type: req.body.acc_type
    });

    Account.addAccount(newAccount, (err, account) => {
        if(err) {
            res.json({success: false, msg:'Failed to register Account'});
        }
        else
        {
            res.json({success: true, msg:'Account Added'});
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
						first_name: user.first_name,
						last_name:user.last_name,
						dob:user.dob,
						phone:user.phone,
						gender:user.gender,
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
//Delete Transaction
router.delete('/transact/:id',(req, res, next)=>{
    //logic to delete student info
    Transact.remove({_id: req.params.id}, function(err, result){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(result);
        }
    });
});

//Update Transaction

router.put('/transact/:id', (req, res, next) => {
    var id = req.params.id;
    console.log(req.body.first_name);
    console.log(req.body.last_name);
    Transact.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
				amount: req.body.amount,
                nature: req.body.nature,
                category: req.body.category,
				date: req.body.date,
                note: req.body.note

            }
        },
        function(err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log("successs");
                res.json(result);
            }
        });
});


//Profile
router.get('/profile',passport.authenticate('jwt', {session:false}), (req,res,next) => {
	//res.send('Fetching the Profile.....');
	res.json({user: req.user});

});

router.get('/transact/:id', (req, res, next)=>{
    var id = req.params.id;
    console.log(id);

    Transact.findOne({_id: req.params.id}, function(err,doc){
        if (err) {
            console.log(err);
        } else {
            console.log("successs");
            res.json(doc);
        }
    });
});
router.get('/account1', (req,res,next)=> {
    //res.send('Fetching the Profile.....');
    Account.find(function (err,account) {
        res.json(account);
    });

});

router.get('/transact1', (req,res,next)=> {
    //res.send('Fetching the Profile.....');
    Transact.find(function (err,transacts) {
		res.json(transacts);
    });

});
router.get('/account1')
module.exports = router;