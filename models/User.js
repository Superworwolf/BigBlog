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

//通过用户id查找用户信息的方法
userSchema.statics.findById = function(user_id,callback) {
	return this.model('mongoose').find({user_id:user_id},callback);
}

module.exports = db.model("User",userSchema);