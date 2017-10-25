let mongoose = require('mongoose');
let db = require('../config/db');
let Schema = mongoose.Schema;
let blogSchema = new Schema({
	blog_id:Number,
	user_id:Number,
	release_date:String,
	content:{
		content_text:String,
		content_img:Array,
	},
	nice_num:Number,
	mobile_type:String,
	comment:[{
		user_id:Number,
		comment_date:String,
		comment_text:String,
		comment_son:[{
			user_id:Number,
			comment_date:String,
			comment_text:String
		}]
	}]
});
module.exports = mongoose.model("Blog",blogSchema);