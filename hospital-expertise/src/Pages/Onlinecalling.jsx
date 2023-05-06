import { useEffect, useRef, useState } from 'react';
import { Box, Button } from '@chakra-ui/react';
import TwilioVideo from 'twilio-video';

const VideoCall = ({ roomName }) => {
  const [room, setRoom] = useState(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);

  useEffect(() => {
    const initVideo = async () => {
      try {
        const response = await fetch(`/api/video/token?room=${roomName}`);
        const { token } = await response.json();

        const videoOptions = {
          name: roomName,
          video: { width: 640 },
          audio: true,
          dominantSpeaker: true,
        };

        const room = await TwilioVideo.connect(token, videoOptions);

        setRoom(room);

        // Attach the local video track to the local video element
        room.localParticipant.videoTracks.forEach(track => {
          const localVideoElement = localVideoRef.current;
          localVideoElement.srcObject = track.mediaStreamTrack;
        });

        // Attach the remote video track to the remote video element
        room.on('trackSubscribed', track => {
          if (track.kind === 'video') {
            const remoteVideoElement = remoteVideoRef.current;
            remoteVideoElement.srcObject = track.mediaStreamTrack;
          }
        });

        setIsConnected(true);
      } catch (error) {
        console.error(error);
      }
    };

    initVideo();
  }, [roomName]);

  const handleToggleMute = () => {
    const localParticipant = room?.localParticipant;

    if (localParticipant) {
      if (isMuted) {
        localParticipant.audioTracks.forEach(track => {
          track.enable();
        });
      } else {
        localParticipant.audioTracks.forEach(track => {
          track.disable();
        });
      }

      setIsMuted(!isMuted);
    }
  };

  return (
    <Box>
      {isConnected ? (
        <Box>
          <video ref={localVideoRef} autoPlay muted style={{ width: '100%' }} />
          <video ref={remoteVideoRef} autoPlay style={{ width: '100%' }} />
          <Button onClick={handleToggleMute}>
            {isMuted ? 'Unmute' : 'Mute'}
          </Button>
        </Box>
      ) : (
        <Box>Loading...</Box>
      )}
    </Box>
  );
};

export default VideoCall;
