const express = require("express");
const bodyParser = require("body-parser");
const { Server, Socket } = require("socket.io");
const io = new Server({
  cors: true,
});
const app = express();
app.use(bodyParser.json());
const emailToSocketMapping = new Map();
const socketidtoEmailMapping=new Map();
io.on("connection", (socket) => {
  console.log("new connection");
  socket.on("join-room", (data) => {
    const { roomId, emailId } = data;
    console.log("user", emailId, roomId);
    emailToSocketMapping.set(emailId, socket.id);
    socketidtoEmailMapping.set(socket.id, emailId);
    socket.join(roomId);
    socket.emit("joined-room", { roomId });
    socket.broadcast.to(roomId).emit("user-joined", { emailId });
  });
  socket.on("call-user",data=>{
    const {emailId,offer}=data
    const fromEmail=socketidtoEmailMapping.get(socket.id)
    const socketId=emailToSocketMapping.get(emailId);
    socket.to(socketId).emit("incomming-call",{from:fromEmail,offer})
  })
});
app.listen(8000, () => console.log("Http server running..."));
io.listen(8001);
