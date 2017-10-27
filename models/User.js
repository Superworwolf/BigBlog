let mongoose = require('mongoose');
let db = require('../config/db');
let Schema = mongoose.Schema;
let userSchema = new Schema({
	        user_id:String,
	         username:String,
	         password:String,
	         avatar:String,
	         sex:String,
	         birthday:String
});
module.exports = db.model("User",userSchema);