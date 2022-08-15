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