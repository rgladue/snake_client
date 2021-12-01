const net = require("net");
const {connect, setupInput} = require('./client');

// establishes a connection with the game server


console.log("Connecting ...");
connect();