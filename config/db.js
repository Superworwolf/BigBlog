var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var db = mongoose.createConnection('mongodb://localhost:27017/Blog');

//监听open事件
db.once('open', function (callback) {
    console.log("数据库成功连接");
});
module.exports = db;
