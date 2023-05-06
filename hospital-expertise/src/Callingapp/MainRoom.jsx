import { Box, Heading } from "@chakra-ui/react";
import React, { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSocket } from "./Providers/Socket";
import { usePeer } from "./Providers/Peer";

export default function MainRoom() {
  const { peer,createOffer } = usePeer();
  const { socket } = useSocket();
  const handlenewuserjoined =useCallback(async(data) => {
    const { emailId } = data;
    console.log("newUser joined", emailId);
      const newLocal = await createOffer();
    const offer=newLocal
    socket.emit("call-user",{emailId,offer})
  },[createOffer,socket]);
  const handleincommingcall=useCallback((data)=>{
    const {from,offer}=data
console.log("Incommig call ",from,offer)
  },[])
  useEffect(() => {
    socket.on("user-joined", handlenewuserjoined);
    socket.on("incomming-call", handleincommingcall);
  }, [socket]);
  return (
    <Box>
      <Heading>MainRoom</Heading>
    </Box>
  );
}
