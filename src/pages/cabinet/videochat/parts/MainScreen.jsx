import { useState } from "react";


import "./css/Video.css";
import "./css/index.css";

import Menu from "./Menu";
import Videos from './Videos';

const MainScreen = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [joinCode, setJoinCode] = useState("");

  return (
    <div>
      {currentPage === "home" ? (
        <Menu
          joinCode={joinCode}
          setJoinCode={setJoinCode}
          setPage={setCurrentPage}
        />
      ) : (
        <Videos
          mode={currentPage}
          callId={joinCode}
          setPage={setCurrentPage}
        />
      )}
    </div>
  )
}

export default MainScreen
