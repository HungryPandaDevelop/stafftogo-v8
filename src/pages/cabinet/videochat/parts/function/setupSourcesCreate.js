const setupSources = async (pc, localRef, remoteRef, setWebcamActive, mode, createCall, joinCall, setRoomId, callId, hangUp, roomId) => {
  const localStream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true,
  });
  const remoteStream = new MediaStream();

  localStream.getTracks().forEach((track) => {
    pc.addTrack(track, localStream);
  });

  pc.ontrack = (event) => {
    event.streams[0].getTracks().forEach((track) => {
      remoteStream.addTrack(track);
    });
  };

  localRef.current.srcObject = localStream;
  remoteRef.current.srcObject = remoteStream;

  setWebcamActive(true);


  createCall(setRoomId, pc);

  pc.onconnectionstatechange = (event) => {
    if (pc.connectionState === "disconnected") {
      hangUp(pc, roomId);
    }
  };
};

export default setupSources;