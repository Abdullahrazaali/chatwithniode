const { Router } = require('express');
const express = require('express');
const app = express();
// const http =require('http').createServer(app);
const serverless= require("serverless-http")
const router =express.Router();
const PORT =process.env.PORT || 3000;
const io = require('socket.io')(serverless);


http.listen(PORT,()=>{
  console.log(`listning on port ${PORT}`)
})

router.get('/',(req,res)=>{
  res.sendFile(__dirname+'/index.html')
})
 app.use(express.static(__dirname + '/public'));

 io.on('connection', (socket) => {
  console.log('User connected');
  socket.on('disconnect', () => {
    console.log('User disconnected');
  })
 socket.on('chat message', msg => {
   console.log("client message: "+msg)
  });
socket.emit("server1: ","Message from server1")
socket.emit("server2: ","Message from server2")
  });

  app.use('function/index',router)
module.exports.handler=serverless(app);

// });

// server.listen(3000, () => {
//   console.log('Listening on *:3000');
// });
