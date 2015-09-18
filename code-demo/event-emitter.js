var util = require('util');
var EventEmitter = require('events').EventEmitter;

function MyEmitter() {
	EventEmitter.call(this);
} // 构造函数

util.inherits(MyEmitter, EventEmitter); // 继承

var em = new MyEmitter();
em.on('hello', function(data) {
	console.log('收到事件hello的数据:', data);
}); // 接收事件，并打印到控制台
em.emit('hello', 'EventEmitter传递消息真方便!');

// 用domain来统一处理多个错误事件
var domain = require('domain');
var myDomain = domain.create();
myDomain.on('error', function(err){
	console.log('domain接收到的错误事件:', err);
}); // 接收事件并打印
myDomain.run(function(){
	var emitter1 = new MyEmitter();
	emitter1.emit('error', '错误事件来自emitter1');
	emitter2 = new MyEmitter();
	emitter2.emit('error', '错误事件来自emitter2');
});

// newListener事件用来做算定义处理
var emitter3 = new MyEmitter();
emitter3.on('newListener', function(name, listener) {
	console.log("新事件的名字:", name);
	console.log("新事件的代码:", listener);
	setTimeout(function(){ console.log("我是自定义延时处理机制"); }, 1000);
});
emitter3.on('hello', function(){
	console.log('hello　node');
});

