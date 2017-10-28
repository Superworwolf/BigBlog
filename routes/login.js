var express = require('express');
var router = express.Router();
var formidable = require("formidable");
var path = require("path");
var md5 = require("../config/md5.js");
var User = require('../models/User.js');
/* GET users listing. */
router.get('/', function(req, res, next) {
 res.render("login", {
 	Bigtitle:'欢迎登录',
 	Smalltitle:'Bloger World'
 });
});
router.post('/login',function(req,res,next){
	let{user_id,password} = req.body;
	 var jiamihou = md5(md5(password) + "233");
        User.findOne({"user_id":user_id},function(err,result){
        	console.log(result);
        	  if (err) {
                console.log("-5");
                return;
            }
        	if(result.length == 0) {
        		console.log('-1')
        		res.redirect('/login');
                return;
        	}
        	if (jiamihou == result.password) {
        		req.session.login = "1";
        		req.session.username = result.username;
        		console.log('1');//注册成功，写入session.
        		res.redirect('/');
		   }else {
                res.redirect("/login");  //密码错误
                return;
            }
        });
	 });
module.exports = router;