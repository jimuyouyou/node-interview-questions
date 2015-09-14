function Person() { }
Person.prototype.sayName = function() { console.log('michaelqin'); }
Person.prototype.sayAge = function() { console.log(30); }

function PersonProxy() { 
	this.person = new Person();
	var that = this;
	this.callMethod = function(functionName) {
		console.log('before proxy:', functionName);
		that.person[functionName](); // 代理
		console.log('after proxy:', functionName);
	}
}

var pp = new PersonProxy();
pp.callMethod('sayName'); // 代理调用Person的方法sayName()
pp.callMethod('sayAge'); // 代理调用Person的方法sayAge()