var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost:27017/Blog');

//监听open事件
db.once('open', function (callback) {
    console.log("数据库成功连接");
});
model.exports= db;
