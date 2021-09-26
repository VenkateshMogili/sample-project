const http = require("http");
const hostname = "localhost";
const port = 3000;
const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader("Content-Type", "text/html");
	res.end("<h1>Hello World!</h1>");
});
server.listen(port, hostname, () => {
	console.log(`Server is running on localhost:${port}`);
});

var ProgressBar = require("progress");

var bar = new ProgressBar(":percent", { complete: ":", total: 100 });
var timer = setInterval(function() {
	bar.tick();
	if (bar.complete) {
		console.log("\ncomplete\n");
		clearInterval(timer);
		process.exit(1);
	}
}, 10);
