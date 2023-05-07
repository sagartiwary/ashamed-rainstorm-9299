import { Box, Button, Heading, useStatStyles } from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSocket } from "./Providers/Socket";
import { usePeer } from "./Providers/Peer";
import ReactPlayer from "react-player"

export default function MainRoom() {
  const { socket } = useSocket();
  const { peer, createOffer, createanswer, setremoteans ,sendstream,remotestream} = usePeer();
  const [mystream,setstream]=useState(null)
  const [remoteemailId,setremoteemailId]=useState(null)
  const handlenewuserjoined = useCallback(
    async (data) => {
      const { emailId } = data;
      console.log("newUser joined", emailId);
      const offer = await createOffer();
      // const offer = newLocal;
      console.log("offer", offer);
      socket.emit("call-user", { emailId, offer });
      setremoteemailId(emailId)
    },
    [createOffer, socket]
  );

  const handleincommingcall = useCallback(async (data) => {
    const { from, offer } = data;
   
    console.log("Incommig call ", from, offer);
    const ans = await createanswer(offer);
    socket.emit("call-accepted", { emailId: from, ans });
    setremoteemailId(from)
  }, [createanswer,socket]);
  const handlecallaccepted = useCallback(
    async (data) => {
      const { ans } = data;
      console.log("call accepted", ans);
      await setremoteans(ans);
    },
    [setremoteans]
  );
  const getUserMediaStream = useCallback(async () => {
    const stream=await navigator.mediaDevices.getUserMedia({audio:true,video:true});
    // sendstream(stream)
    setstream(stream);
  }, [setstream]);
  const handlenegotiation=useCallback(()=>{
    // console.log("neggotiation needed")
    const localoffer=peer.localDescription
   socket.emit("call-user",{emailId:remoteemailId,offer:localoffer})
  },[peer.localDescription,remoteemailId,socket])
  useEffect(() => {
    socket.on("user-joined", handlenewuserjoined);
    socket.on("incomming-call", handleincommingcall);
    socket.on("call-accepted", handlecallaccepted);
    return () => {
      socket.off("user-joined", handlenewuserjoined);
      socket.off("incomming-call", handleincommingcall);
      socket.off("call-accepted", handlecallaccepted);
    };
  }, [handlenewuserjoined, handleincommingcall, handlecallaccepted, socket]);
  useEffect(()=>{
    peer.addEventListener('negotiationneeded',handlenegotiation)
    return ()=>{
      peer.removeEventListener('negotiationneeded',handlenegotiation)
    }
  },[])
  useEffect(() => {
    getUserMediaStream()
  }, [getUserMediaStream()]);
  return (
    <Box>
    <Heading>You are connected {remoteemailId}</Heading>
      <Heading>MainRoom</Heading>
      <ReactPlayer url={mystream} playing/>
      <ReactPlayer url={remotestream} playing/>
      <Button onClick={()=>sendstream(mystream)}>Send video</Button>
    </Box>
  );
}
