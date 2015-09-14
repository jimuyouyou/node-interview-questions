# node-interview-questions
Node是搞后端的，不应该被被归为前端，更不应该用前端的观点去理解，去面试node开发人员。所以这份面试题大全，更侧重后端应用与对Node核心的理解。

# 起源
- node正风生火起，很多介绍却停留在入门阶段，无法投入生产
- node相关的高质量面试题更是少之又少，很难全面考查应聘者的node能力
- 许多文章在讲第三方类库，可是这些库质量差距较大，一旦遇到问题怎么办
- 必需的，全面了解node核心才能成为一名合格的node开发人员

# 目标与原则
- 前后端兼顾，更侧重后端
- 理论实战兼顾，侧重考察对实战中应用较多的理论的理解
- 参考答案简单明了，一针见血，不为追求严谨而浪费口舌，绕弯子
- 尽量用代码讲清理论的应用与区别，以接地气
- 终极目标是让大家对node有一个快速完整的认识

# 内容大纲
- [javascript高级话题(面向对象，作用域，闭包，设计模式等)] (#jsAdvanced)
- [node核心内置类库(事件，流，文件，网络等)] (#nodeCore)
- [node高级话题(异步，部署，性能调优，异常调试等)] (#nodeAdvanced)
- [常用知名第三方类库(Async, Express等)] (#node3rd)
- [其它相关后端常用技术(MongoDB, Redis, Apache, Nginx等)] (#otherBackend)
- [常用前端技术(Html5, CSS3, JQuery等)] (#otherFrontEnd)

## <a name="jsAdvanced">javascript高级话题(面向对象，作用域，闭包，设计模式等)</a>
- 1. 常用js类定义的方法有哪些？  

参考答案：主要有构造函数原型和对象创建两种方法。原型法是通用老方法，对象创建是ES5推荐使用的方法.目前来看，原型法更普遍.  

代码演示  
1) 构造函数方法定义类  
```javascript
	function Person(){
		this.name = 'michaelqin';
	}
	Person.prototype.sayName = function(){
		alert(this.name);
	}

	var person = new Person();
	person.sayName();
```
2) 对象创建方法定义类  
```
	var Person = {
		name: 'michaelqin',
		sayName: function(){ alert(this.name); }
	};

	var person = Object.create(Person);
	person.sayName();
```
- 2. js类继承的方法有哪些  

参考答案：原型链法，属性复制法和构造器应用法.  另外，由于每个对象可以是一个类，这些方法也可以用于对象类的继承．


代码演示  
1) 原型链法  
```javascript
	function Animal() {
		this.name = 'animal';
	}
	Animal.prototype.sayName = {
		alert(this.name);
	};

	function Person() {}
	Person.prototype = Animal.prototype; // 人继承自动物
	Person.prototype.constructor = 'Person'; // 更新构造函数为人
```
2) 属性自制法  
```javascript
	function Animal() {
		this.name = 'animal';
	}
	Animal.prototype.sayName = {
		alert(this.name);
	};

	function Person() {}

	for(prop in Animal.prototype) {
		Person.prototype[prop] = Animal.prototype[prop];
	} // 复制动物的所有属性到人量边
	Person.prototype.constructor = 'Person'; // 更新构造函数为人
```
3) 构造器应用法  
```javascript
	function Animal() {
		this.name = 'animal';
	}
	Animal.prototype.sayName = {
		alert(this.name);
	};

	function Person() {
		Animal.call(this); // apply, call, bind方法都可以．细微区别，后面会提到．
	}
```

- 3. js类多重继承的实现方法是怎么样的?  

参考答案：就是类继承里边的属性复制法来实现．因为当所有父类的prototype属性被复制后，子类自然拥有类似行为和属性．

- 4. js里的作用域是什么样子的？  

参考答案：大多数语言里边都是块作作用域，以{}进行限定，js里边不是．js里边叫函数作用域，就是一个变量在全函数里有效．比如有个变量p1在函数最后一行定义，第一行也有效，但是值是undefined.  

代码演示  
```javascript
	var globalVar = 'global var';

	function test() {
		alert(globalVar); // undefined, 因为globalVar在本函数内被重定义了，导致全局失效，这里使用函数内的变量值，可是此时还没定义
		var globalVar = 'overrided var'; //　globalVar在本函数内被重定义
		alert(globalVar);　// overrided var
	}
	alert(globalVar); // global var，使用全局变量
```

- 5. js里边的this指的是什么?  
参考答案: this指的是对象本身，而不是构造函数．

代码演示
```javascript
	function Person() {
	}
	Person.prototype.sayName() { alert(this.name); }

	var person1 = new Person();
	person1.name = 'michaelqin';
	person1.sayName(); // michaelqin
```
- 6. apply, call和bind有什么区别?
参考答案：三者都可以把一个函数应用到其他对象上，注意不是自身对象．apply,call是直接执行函数调用，bind是绑定，执行需要再次调用．apply和call的区别是apply接受数组作为参数，而call是接受逗号分隔的无限多个参数列表，

代码演示  
```javascript
	function Person() {
	}
	Person.prototype.sayName() { alert(this.name); }
	
	var obj = {name: 'michaelqin'}; // 注意这是一个普通对象，它不是Person的实例
	1) apply
	Person.prototype.sayName.apply(obj, [param1, param2, param3]);
	
	2) call
	Person.prototype.sayName.call(obj, param1, param2, param3);

	3) bind
	var sn = Person.prototype.sayName.bind(obj);	
	sn([param1, param2, param3]); // bind需要先绑定，再执行 
	sn(param1, param2, param3); // bind需要先绑定，再执行
```
- 7. caller, callee和arguments分别是什么?
参考答案: caller,callee之间的关系就像是employer和employee之间的关系，就是调用与被调用的关系，二者返回的都是函数对象引用．arguments是函数的所有参数列表，它是一个类数组的变量．

代码演示  
```javascript
	function parent(param1, param2, param3) {
		child(param1, param2, param3);
	}

	function child() {
		console.log(arguments); // { '0': 'mqin1', '1': 'mqin2', '2': 'mqin3' }
		console.log(arguments.callee); // [Function: child]
		console.log(child.caller); // [Function: parent]
	}

	parent('mqin1', 'mqin2', 'mqin3');
```
- 8. 什么是闭包，闭包有哪些用处?
参考答案: 闭包这个术语，无论中文翻译还是英文解释都太２Ｂ了，我必须骂人，因为它什么其实都不是．非要讲它是什么的话，两个字函数，更多字嵌套函数的父子自我引用关系．所有函数都是闭包．通俗的说，闭包就是作用域范围，因为js是函数作用域，所以函数就是闭包．全局函数的作用域范围就是全局，所以无须讨论．更多的应用其实是在内嵌函数，这就会涉及到内嵌作用域，或者叫作用域链．说到内嵌，其实就是父子引用关系(父函数包含子函数，子函数因为函数作用域又引用父函数，这它妈不是死结吗？所以叫闭包），这就会带来另外一个问题，什么时候引用结束？如果不结束，就会一直占用内存，引起内存泄漏．好吧，不用的时候就引用设为空，死结就解开了．

- 9. defineProperty, hasOwnProperty, isEnumerable都是做什么用的？
参考答案：Object.defineProperty(obj, prop, descriptor)用来给对象定义属性,有value,writable,configurable,enumerable,set/get等.hasOwnProerty用于检查某一属性是不是存在于对象本身，继承来的父亲的属性不算．isEnumerable用来检测某一属性是否可遍历，也就是能不能用for..in循环来取到.

- 10. js常用设计模式的实现思路，单例，工厂，代理，装饰，观察者模式等
参考答案：
```javascript
	1) 单例：　任意对象都是单例，无须特别处理
	var obj = {name: 'michaelqin', age: 30};

	2) 工厂: 就是同样形式参数返回不同的实例
```javascript
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
```
- 11. 列举数组相关的常用方法

- 12. 列举字符串相关的常用方法


## <a name="nodeCore">node核心内置类库(事件，流，文件，网络等)</a>

## <a name="nodeAdvanced">node高级话题(异步，部署，性能调优，异常调试等)</a>

## <a name="node3rd">常用知名第三方类库(Async, Express等)</a>

## <a name="otherBackend">其它相关后端常用技术(MongoDB, Redis, Apache, Nginx等)</a>

## <a name="otherFrontEnd">常用前端技术(Html5, CSS3, JQuery等)</a>

