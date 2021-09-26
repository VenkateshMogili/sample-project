// http and https for request and response.
const http = require("http");
const https = require("https");
// Local domain
// Get method
const options = {
  hostname: "localhost",
  port: 3000,
  path: "/",
  method: "GET",
};
const req = http.request(options, (res) => {
  res.on("data", (data) => {
    process.stdout.write(data);
  });
});
req.on("error", (error) => {
  console.log(error);
});
req.end();

// Public domains
// Get method
const options2 = {
  hostname: "jsonplaceholder.typicode.com",
  port: 443,
  path: "/users",
  method: "GET",
};
const req2 = https.request(options2, (res) => {
  res.on("data", (data) => {
    process.stdout.write(data);
  });
});
req2.on("error", (error) => {
  console.log(error);
});
req2.end();

// post method
const options3 = {
  hostname: "jsonplaceholder.typicode.com",
  port: 443,
  path: "/users",
  method: "POST",
};
const req3 = https.request(options3, (res) => {
  res.on("data", (data) => {
    process.stdout.write(data);
  });
});
req3.on("error", (error) => {
  console.log(error);
});
const data = JSON.stringify({
  name: "Venkatesh",
});
req3.write(data);
req3.end();

// put method
const options4 = {
  hostname: "jsonplaceholder.typicode.com",
  port: 443,
  path: "/users/1",
  method: "PUT",
};
const req4 = https.request(options4, (res) => {
  res.on("data", (data) => {
    process.stdout.write(data);
  });
});
req4.on("error", (error) => {
  console.log(error);
});
const data2 = JSON.stringify({
  name: "Vivek",
});
req4.write(data2);
req4.end();

// delete method
//const options5 = {
//	hostname: "jsonplaceholder.typicode.com",
//	port: 443,
//	path: "/users/1",
//	method: "DELETE",
//};
//const req5 = https.request(options5, (res) => {
//	res.on("data", (data) => {
//		console.log("Delete status");
//		process.stdout.write(data);
//	});
//});
//req5.on("error", (error) => {
//	console.log(error);
//});
//req5.end();

const deleteOptions = {
  hostname: 'jsonplaceholder.typicode.com',
  port: 443,
  path: '/users/2',
  method: 'DELETE',
}
const delReq = https.request(deleteOptions, (res) => {
  res.on('data', (data) => {
    process.stdout.write(data)
  })
})
delReq.on('error', (error) => {
  console.log(error.message)
})
delReq.end()

// We can send requests using axios.
//const axios = require("axios");
//axios
//  .post("https://jsonplaceholder.typicode.com/users", {
//    name: "Vivek",
//  })
//  .then((response) => {
//    console.log("Axios response", response.data);
//  })
//  .catch((error) => {
//    console.log(error);
//  });
