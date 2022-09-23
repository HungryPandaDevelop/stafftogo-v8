const setupSources = async (pc, localRef, remoteRef, setWebcamActive, mode, createCall, joinCall, setRoomId, callId, hangUp, roomId, userId) => {
  const localStream = await window.navigator.mediaDevices.getUserMedia({
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


  if (mode === "create") {
    createCall(setRoomId, pc, userId);
  }
  if (mode === "join") {
    joinCall(callId, pc);
  }

  pc.onconnectionstatechange = (event) => {
    if (pc.connectionState === "disconnected") {
      hangUp(pc, roomId);
    }
  };
};

export default setupSources;