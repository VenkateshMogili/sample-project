// Progress Bar
var ProgressBar = require("progress");

var bar = new ProgressBar(":percent", { complete: ":", total: 100 });
var timer = setInterval(function() {
	bar.tick();
	if (bar.complete) {
		console.log("\ncomplete\n");
		clearInterval(timer);
		process.exit();
	}
}, 100);
