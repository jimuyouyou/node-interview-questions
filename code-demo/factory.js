function Person() { this.name = 'Person1'; }
function Animal() { this.name = 'Animal1'; }

function Factory() {}
Factory.prototype.getInstance = function(className) {
	return eval('new ' + className + '()');
}

var factory = new Factory();
var obj1 = factory.getInstance('Person');
var obj2 = factory.getInstance('Animal');
console.log(obj1.name); // Person1
console.log(obj2.name); // Animal1