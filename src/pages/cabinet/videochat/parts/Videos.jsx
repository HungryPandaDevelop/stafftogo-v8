import { useRef, useState } from "react";
import { ReactComponent as HangupIcon } from "./icons/hangup.svg";


import createCall from "./function/create";
import joinCall from "./function/join";
import hangUp from "./function/hangUp";
import setupSources from "./function/setupSources";

// Initialize WebRTC



const Videos = ({ mode, callId, setPage, typeConnect }) => {

  const servers = {
    iceServers: [
      {
        urls: [
          "stun:stun1.l.google.com:19302",
          "stun:stun2.l.google.com:19302",
        ],
      },
    ],
    iceCandidatePoolSize: 10,
  };

  const pc = new RTCPeerConnection(servers);

  const [webcamActive, setWebcamActive] = useState(false);

  const [roomId, setRoomId] = useState(callId);

  const localRef = useRef();
  const remoteRef = useRef();



  return (
    <div className="videos">
      <div className="roomId">roomId: {roomId}
        {/* <Link to={`/roomId/${roomId}`}>{roomId}</Link> */}
      </div>
      <video
        ref={localRef}
        autoPlay
        playsInline
        className="local"
        muted
      />
      <video ref={remoteRef} autoPlay playsInline className="remote" />

      <div className="buttonsContainer">
        <button
          onClick={hangUp}
          disabled={!webcamActive}
          className="hangup button"
        >
          <HangupIcon />
        </button>
      </div>

      {!webcamActive && (
        <div className="modalContainer">
          <div className="modal">
            <h3>
              Turn on your camera and microphone and start the
              call
            </h3>
            <div className="container">
              <button
                onClick={() => setPage("home")}
                className="secondary"
              >
                Cancel
              </button>
              <button onClick={() => setupSources(pc, localRef, remoteRef, setWebcamActive, mode, createCall, joinCall, setRoomId, callId, hangUp, roomId, typeConnect)}>Start</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Videos
