/**
 * Created by OM on 06/10/2017.
 */
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const AccountSchema = mongoose.Schema({
    first_name:{
        type:String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
   acc_no:{
        type: String,
        required: true
    },
    acc_type:{
        type: String,
        required: true
    }
});

const Account = module.exports = mongoose.model('Account', AccountSchema);

module.exports.addAccount = function(newAccount, callback){
  // bcrypt.genSalt(10, (err, salt) => {
    //      bcrypt.hash(newAccount.first_name, salt, (err, hash) => {

    newAccount.save(callback);
      //  });
    //});
}