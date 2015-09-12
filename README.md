# node-interview-questions
Node是搞后端的，不应该被被归为前端，更不应该用前端的观点去理解，面试node开发人员。所以这份面试题大全，更侧重后端应用与对Node核心的理解。

# 起源
- node正风生火起，很多介绍却停留在入门阶段，无法投入生产
- node相关的高质量面试题更是少之又少，很难全面考查应聘者的node能力
- 许多文章在讲第三方类库，可是这些库质量差距较大，一旦遇到问题怎么办
- 必需的，全面了解node核心才能成为一名合格的node开发人员

# 目标与原则
- 前后端兼顾，更侧重后端
- 理论实战兼顾，侧重考察对实战中应用较多的理论理解
- 答案简单明了，一针见血，不为追求严谨而浪费口舌，绕弯子
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
1. 常用js类定义的方法有哪些？
1.1 答案：主要有构造函数原型和对象创建两种方法。原型法是通用老方法，对象创建是ES5推荐使用的方法.目前来看，原型法更普遍．
1.2 演示
1) 构造函数方法定义类
	function Person(){
		this.name = 'michaelqin';
	}
	Person.prototype.sayName = function(){
		alert(this.name);
	}

	var person = new Person();
	person.sayName();
2) 对象创建方法定义类
	var Person = {
		name: 'michaelqin',
		sayName: function(){ alert(this.name); }
	};

	var person = Object.create(Person);
	person.sayName();

## <a name="nodeCore">node核心内置类库(事件，流，文件，网络等)</a>

## <a name="nodeAdvanced">node高级话题(异步，部署，性能调优，异常调试等)</a>

## <a name="node3rd">常用知名第三方类库(Async, Express等)</a>

## <a name="otherBackend">其它相关后端常用技术(MongoDB, Redis, Apache, Nginx等)</a>

## <a name="otherFrontEnd">常用前端技术(Html5, CSS3, JQuery等)</a>

