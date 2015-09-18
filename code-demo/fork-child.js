process.on('message', function(msg){
	console.log("儿子从老爸接收到的数据:", msg);
	process.send("我不要关怀，我要银民币！");
});