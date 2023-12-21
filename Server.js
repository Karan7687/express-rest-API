const http = require("http");
const App = require("./App");
const server = http.createServer(App);

const port = process.env.PORT || 3000;

server.listen(port);
console.log("Listening to port 3000");
