const express = require('express');
const app = express();
// const server = require('http').createServer(app);
const http =require('http').createServer(app);
const PORT =process.env.PORT || 3000;
const io = require('socket.io')(http);


http.listen(PORT,()=>{
  console.log(`listning on port ${PORT}`)
})

app.get('/',(req,res)=>{
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


// });

// server.listen(3000, () => {
//   console.log('Listening on *:3000');
// });
