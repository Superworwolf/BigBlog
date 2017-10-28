var express = require('express');
var router = express.Router();
var Blog = require('../models/Blog');
var User = require('../models/User');
var fs = require('fs');
//var dateFormat = require('dateformat');
//var moment = require('moment');

/* GET users listing. */
//进入动态首页第一步，加载所有动态
router.get('/', function(req, res, next) {
	Blog.find((err,doc) => {
		if (err) {
      		return;
   		}
		console.log('动态首页');
		res.render('blogs/index',{blog:doc});
	});
});

router.get('/wirteblog',(req,res,next) => {
	res.render('blogs/wirteblog');
	console.log('写动态页面');
})

//发动态，通过更目录的post请求
router.post('/wirteblog', (req,res) => {
	//获取页面数据
	let {content_text,content_img} = req.body;
	//获取当前用户的id
	//let user_id = req.session.user_id;
	//获取当前用户的头像
//	let user_avatar = User.findOne({user_id:0001},function(err,doc){
//		if(err){
//			return '无头像';
//		}
//		return doc.avatar;
//	});
	//获取当前时间
	let release_date = new Date();
	//设置时间样式
//	moment(release_date).format("yyyy-mmmm-dS  h:MM:ss TT");
	//获取点赞数
	let nice_num = 0;
	let mobile_type = 'iphone6';
	//获取发动态的信息对象
	let obj = {
		blog_id:0001,
		user_id:100001,
//		user_avatar:user_avatar,
		release_date:release_date,
		content:{
			content_text,
			content_img,
			},
		nice_num:nice_num,
		mobile_type:mobile_type,	
		comment:[{
			
		}]};
		
	//写入到数据集合
	Blog.create(obj,(err,doc) => {
	 	if (err) {
	      console.log('写入发生异常');
	      return;
	   	}
    console.log(doc);
	});
	Blog.find((err,doc) => {
		if (err) {
      		return;
   		}
		res.render('blogs/index',{blog:doc});
		console.log('动态首页');
	});

})

module.exports = router;