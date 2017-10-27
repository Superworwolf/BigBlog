var express = require('express');
var router = express.Router();
var formidable = require("formidable");
var path = require("path");
var md5 = require("../config/md5.js");
var User = require('../models/User.js');
/* GET users listing. */
router.get('/', function(req, res, next) {
 res.render("register", {
 	Bigtitle:'欢迎注册',
 	Smalltitle:'Bloger World'
 });
});
router.post('/register',function(req,res,next){
	let{user_id,username,password,password_sure} = req.body;
        User.findOne({"user_id":user_id},function(err,result){
        	console.log(result);
        	if (err) {
        		 console.log('-4') //服务器错误
                return;
        	}
        	if(result.lengh != 0) {
        		console.log('-1')
        		res.redirect('/register');
                return;
        	}
        	if (!(/^[a-zA-Z0-9_-]{6,16}$/.test(password))) {
            console.log('-2') //不符合规范
            return;
		   }
        	if (password_sure!=password) {
            console.log('-3'); //不一致
            return;
		  }
        	password = md5(md5(password) + "233");
        	User.create({user_id,username,password},(err,doc) =>{
        		if(err) {
        			 console.log('-4'); //服务器错误
                return;
        		}
        		if(doc) {
        			console.log(doc);
        		req.session.login = "1";
        		req.session.username = username;
        		console.log('1');//注册成功，写入session.
        		res.redirect('/');
        	   }
        	})
        });
	 });

module.exports = router;