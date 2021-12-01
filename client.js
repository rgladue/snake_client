const net = require("net")
const { IP, PORT } = require('./constants')



const connect = function () {
  
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  
  conn.on("connect", function() {
    console.log("Successfully connected to game server");
    conn.write('Name: RG3');
    // conn.write("Move: up");
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  const handleUserInput = function () {
    // your code here
    if (key === '\u0003') {
      process.exit();
    }
    if (key === 'w') {
      conn.write("Move: up");
    }
    if (key === 's') {
      conn.write("Move: down");
    }
    if (key === 'a') {
      conn.write("Move: left");
    }
    if (key === 'd') {
      conn.write("Move: right");
    }
    
    
  };
  return stdin;
};

module.exports = {connect,setupInput}