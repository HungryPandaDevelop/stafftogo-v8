import { useState, useEffect } from "react";


import "./css/Video.css";
import "./css/index.css";

import Videos from './Videos';

const MainScreen = ({ typeConnect, videoroomid }) => {
  const [currentPage, setCurrentPage] = useState('home');
  useEffect(() => {
    if (typeConnect === 'join') {
      setCurrentPage('join');
    }
  }, []);
  return (
    <div>

      {currentPage === "home" ? (
        <button onClick={() => setCurrentPage("create")}>Создать комнату</button>
      ) : (
        <Videos
          mode={typeConnect}
          callId={videoroomid}
          setPage={setCurrentPage}
          typeConnect={typeConnect}
        />
      )}
    </div>
  )
}

export default MainScreen
