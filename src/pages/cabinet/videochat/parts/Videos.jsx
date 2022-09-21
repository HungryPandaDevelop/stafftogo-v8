import { useRef, useState } from "react";
import { ReactComponent as HangupIcon } from "./icons/hangup.svg";
import { ReactComponent as MoreIcon } from "./icons/more-vertical.svg";
import { ReactComponent as CopyIcon } from "./icons/copy.svg";
import { collection, doc, setDoc, addDoc, getDoc, onSnapshot, updateDoc, getDocs, deleteDoc } from 'firebase/firestore';

import createCall from "./function/create";
import joinCall from "./function/join";
import hangUp from "./function/hangUp";

import { db } from 'firebase.config';
// Initialize WebRTC

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

const Videos = ({ mode, callId, setPage, }) => {
  const [webcamActive, setWebcamActive] = useState(false);
  const [roomId, setRoomId] = useState(callId);

  const localRef = useRef();
  const remoteRef = useRef();

  const setupSources = async () => {
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

    console.log('mode', mode);
    if (mode === "create") {
      console.log('in');
      createCall(setRoomId, pc);
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



  return (
    <div className="videos">
      <div className="roomId">roomId:
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
        <div tabIndex={0} role="button" className="more button">
          <MoreIcon />
          <div className="popover">
            <button
              onClick={() => {
                navigator.clipboard.writeText(roomId);
              }}
            >
              <CopyIcon /> Copy joining code
            </button>
          </div>
        </div>
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
              <button onClick={setupSources}>Start</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Videos
