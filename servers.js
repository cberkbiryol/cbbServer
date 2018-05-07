var http = require("http");

var arr= ["aaa","bbb","addd"]
var PORT1=7000;
var PORT2=7500;

// Request Handlers
function reqHandle1(req,res) {
    var ai= Math.floor(Math.random()*arr.length)
    res.end("Something good Works!! " + arr[ai] +" Path Hit: " + req.url);
}

function reqHandle2(req,res) {
    res.end("Something bad Works!! Path Hit: " + req.url);
}

// Servers
server1 = http.createServer(reqHandle1);
server2 = http.createServer(reqHandle2);

// Listeners
server1.listen(PORT1,function(){
    console.log("Server listening on: http://localhost:" + PORT1);
})
server2.listen(PORT2,function(){
    console.log("Server listening on: http://localhost:" + PORT2);
})