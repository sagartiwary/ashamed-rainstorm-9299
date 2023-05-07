import { useStatStyles } from "@chakra-ui/stat";
import React, { useCallback, useEffect, useMemo, useState } from "react";

const PeerContext = React.createContext(null);
export const usePeer = () => React.useContext(PeerContext);

export const PeerProvider = (props) => {
  const [remotestream,setremotestream]=useState(null)
  const peer = useMemo(
    () =>
      new RTCPeerConnection({
        iceServers: [
          {
            urls: [
              "stun:stun.l.google.com:19302",
              "stun:global.stun.twilio.com:3478",
            ],
          },
        ],
      }),
    []
  );
  const createOffer = async () => {
    const offer = await peer.createOffer();
    await peer.setLocalDescription(offer);
    return offer;
  };
  const createanswer=async(offer)=>{
    await peer.setRemoteDescription(offer);
    const answer = await peer.createAnswer(offer);
    await peer.setLocalDescription(answer);
    return  answer;
  }
  const setremoteans=async (ans)=>{
    await peer.setRemoteDescription(ans);
  }
  const sendstream=async (stream)=>{
    const tracks=stream.getTracks();
    for(const track of tracks){
      peer.addTrack(track,stream)
    }
  }
  const handletrackevent=useCallback((ev)=>{
    const streams=ev.streams
    setremotestream(streams[0])
  },[])

  useEffect(()=>{
peer.addEventListener('track',handletrackevent)


return  ()=>{
  peer.removeEventListener('track',handletrackevent)
 
}
  },[peer])
  return (
    <PeerContext.Provider value={{ peer, createOffer ,createanswer,setremoteans,sendstream,remotestream}}>
      {props.children}
    </PeerContext.Provider>
  );
};
