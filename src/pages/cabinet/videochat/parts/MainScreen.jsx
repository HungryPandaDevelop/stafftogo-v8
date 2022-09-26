import { useState, useEffect } from "react";


import "./css/Video.css";
import "./css/index.css";

import Videos from './Videos';

const MainScreen = ({ typeConnect, videoroomid, invitedId, uid }) => {
  const [currentPage, setCurrentPage] = useState('home');
  useEffect(() => {
    if (typeConnect === 'join') {
      setCurrentPage('join');
    }
  }, []);


  return (
    <div>

      {currentPage === "home" ? (
        <button onClick={() => setCurrentPage("create")}>Позвонить</button>
      ) : (
        <Videos
          mode={typeConnect}
          callId={videoroomid}
          setPage={setCurrentPage}
          typeConnect={typeConnect}
          invitedId={invitedId}
          uid={uid}
        />
      )}
    </div>
  )
}

export default MainScreen
