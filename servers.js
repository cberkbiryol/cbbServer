var http = require("http");

function reqHandle1(req,resp) {
    resp.end("Something good Works!! Path Hit: " + req.url);
}

function reqHandle2(req,resp) {
    resp.end("Something bad Works!! Path Hit: " + req.url);
}

PORT1=7000;
PORT2=7500;
server1 = http.createServer(reqHandle1);
server1.listen(PORT1,function(){
    console.log("Server listening on: http://localhost:" + PORT1);
})

server2 = http.createServer(reqHandle2)
server2.listen(PORT2,function(){
    console.log("Server listening on: http://localhost:" + PORT2);
})