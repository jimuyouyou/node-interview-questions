function Publisher() {
	this.listeners = [];
}
Publisher.prototype = {
	'addListener': function(listener) {
		this.listeners.push(listener);
	},

	'removeListener': function(listener) {
		delete this.listeners[listener];
	},

	'notify': function(obj) {
		for(var i = 0; i < this.listeners.length; i++) {
			var listener = this.listeners[i];
			if (typeof listener !== 'undefined') {
				listener.process(obj);
			}
		}
	}
}; // 发布者

function Subscriber() {

}
Subscriber.prototype = {
	'process': function(obj) {
		console.log(obj);
	}
};　// 订阅者


var publisher = new Publisher();
publisher.addListener(new Subscriber());
publisher.addListener(new Subscriber());
publisher.notify({name: 'michaelqin', ageo: 30}); // 发布一个对象到所有订阅者
publisher.notify('2 subscribers will both perform process'); // 发布一个字符串到所有订阅者



