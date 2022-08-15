import {
  doc,
  collection,
  getDocs,
  query,
  where,
  orderBy,
  deleteDoc,
  limit,
  startAfter
} from 'firebase/firestore';

import { db } from 'firebase.config';

import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';
import { useState, useEffect, useRef } from 'react';

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


const Videochat = () => {

  const [currentPage, setCurrentPage] = useState("home");
  const [joinCode, setJoinCode] = useState("");

  const Menu = ({ joinCode, setJoinCode, setPage }) => {
    return (
      <div className="home">
        <div className="create box">
          <button onClick={() => setPage("create")}>Create Call</button>
        </div>

        <div className="answer box">
          <input
            value={joinCode}
            onChange={(e) => setJoinCode(e.target.value)}
            placeholder="Join with code"
          />
          <button onClick={() => setPage("join")}>Answer</button>
        </div>
      </div>
    );
  }
  const Videos = ({ mode, callId, setPage }) => {
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

      if (mode === "create") {
        // const callDoc = firestore.collection("calls").doc();

        // const listingsRef = collection(db, "calls");
        const callDoc = getDocs(collection(db, "calls"));
      }
    }

    return (
      <div className="videos">
        <video
          ref={localRef}
          autoPlay
          playsInline
          className="local"
          muted
        />
        <video ref={remoteRef} autoPlay playsInline className="remote" />
      </div>
    )
  };

  return (
    <TemplateAccount title='Чат' >

      <div className="main-full">
        <h2>Video chat</h2>

      </div>
    </TemplateAccount >
  )
}

export default Videochat