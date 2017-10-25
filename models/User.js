let mongoose = require('mongoose');
let db = require('../config/db');
let Schema = mongoose.Schema;
let userSchema = new Schema({
	        user_id:Number,
	         username:String,
	         password:String,
	         avatar:String,
	         sex:String,
	         birthday:String
});
module.exports = mongoose.model("User",userSchema);