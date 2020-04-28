let a = require('./a');

console.log(a.a);
a.msg();

module.exports = {
    sport: function(){
        alert("這是一個文本信息")
    }
}