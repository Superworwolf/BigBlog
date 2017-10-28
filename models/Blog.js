let mongoose = require('mongoose');
let db = require('../config/db');
let Schema = mongoose.Schema;
let blogSchema = new Schema({
	blog_id:Number,
	user_id:String,
	user_name:String,
	user_avatar:String,
	release_date:{type:Date,default:Date.now},
	content:{
		content_text:String,
		content_img:Array,
	},
	nice_num:Number,
	mobile_type:String,
	comment:[{
		user_id:String,
		comment_date:String,
		comment_text:String,
		comment_son:[{
			user_id:String,
			comment_date:String,
			comment_text:String
		}]
	}]
});

//通过用户id查找用户信息的方法
//userSchema.statics.findById = function(user_id,callback) {
//	return this.model('mongoose').find({user_id:user_id},callback);
//}

var BlogModel = db.model("Blog",blogSchema);
module.exports = BlogModel;