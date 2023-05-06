import React, { useEffect, useState } from "react";
import { Box, Button, Heading, Input } from "@chakra-ui/react";
import { useSocket } from "./Providers/Socket";
import { useNavigate } from "react-router-dom";
export default function () {
  const [email, setemail] = useState("");
  const [roomId, setroomId] = useState("");
  const navigate=useNavigate()
  const { socket } = useSocket();
  // socket.emit("join room",{roomId:"1",emailId:"xyz@gamil.com"})
  const handlejoinRoom = () => {
    socket.emit("join-room", { emailId: email, roomId: roomId });
  };

  const handleroomjoined=({roomId})=>{
console.log("room joined",roomId)
navigate(`/room/${roomId}`)
  }
  useEffect(()=>{
socket.on('joined-room',handleroomjoined)
  },[socket])
  return (
    <Box alignItems={"center"}>
      <Heading> Enter details</Heading>
      <Box width={"200px"}>
        <Input
          onChange={(e) => setemail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <Input
          onChange={(e) => setroomId(e.target.value)}
          type="Enter Room id"
          placeholder="Room id"
        />
        <Button onClick={handlejoinRoom}>join room</Button>
      </Box>
    </Box>
  );
}
