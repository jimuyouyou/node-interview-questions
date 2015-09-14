function parent(param1, param2, param3) {
	child(param1, param2, param3);
}

function child() {
	console.log(arguments); // { '0': 'mqin1', '1': 'mqin2', '2': 'mqin3' }
	console.log(arguments.callee); // [Function: child]
	console.log(child.caller); // [Function: parent]
}

parent('mqin1', 'mqin2', 'mqin3');
