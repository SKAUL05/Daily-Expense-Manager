/**
 * Created by OM on 24/08/2017.
 */
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const TransactionSchema = mongoose.Schema({
    first_name:{
        type:String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    amount:{
        type: String,
        required: true
    },
    nature:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    date: {
        type:String,
        required: true
    },
    acc_no: {
        type: String
    }
});

const Transact = module.exports = mongoose.model('Transact', TransactionSchema);

module.exports.addTransact = function(newTransact, callback){
//    bcrypt.genSalt(10, (err, salt) => {
  //      bcrypt.hash(newTransact.first_name, salt, (err, hash) => {

            newTransact.save(callback);
    //    });
    //});
}

module.exports.getTransactById = function(id, callback){
    Transact.findById(id, callback);
}
