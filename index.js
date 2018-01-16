var fs = require('fs');
var str = "\r\n" + "i snova random";
fs.appendFile("text.txt", str, function(err){
	if(err) throw err;
	console.log("updated");
});
