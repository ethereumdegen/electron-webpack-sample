

var path = require("path"),
    express = require("express");

var DIST_DIR = path.join(__dirname, "../public"),
    PORT = 3000,
    app = express();


var fs = require('fs');

const storage = require('electron-json-storage');
const {clipboard} = require('electron')

/*
const Editor = require('./editorcore')
*/

module.exports =  class SocketServer {
  constructor( ){

  }


    async init(server )
    {


      var self = this;
      var io = require('socket.io')(server);
      var port = process.env.PORT || 2054;

 


      server.listen(port, function () {
        console.log('Socket server listening at port %d', port);
      });

      var sockets = {};


      io.on('connection', function (socket) {
        console.log('established new socket connection');

              /*
              socket.on('doSomething ', function (data,fn) {
                      var acct = SampleHelper.createAccount();
                      fn(JSON.stringify(acct));  //immediate response
                });

                */




              socket.on('disconnect', function () {
                console.log(socket.sid, 'disconnected');
                delete sockets[socket.sid];
              });
      });





  }

}
