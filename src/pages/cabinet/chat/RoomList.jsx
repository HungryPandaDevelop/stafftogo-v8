
import { useState, useEffect } from 'react';

import { getListing } from 'store/asyncActions/getListing';
import RoomItem from 'pages/cabinet/chat/RoomItem';

import { stopSee } from 'store/asyncActions/inviteChat';

const RoomList = ({ uid }) => {


  const [rooms, setRooms] = useState();


  useEffect(() => {

    getListing('message', uid, 'rooms').then(res => {
      setRooms(res);

    });

  }, []);




  return (
    <div>
      {rooms && rooms.map(room => <RoomItem key={room.id} room={room} />)}
    </div>
  )
}


export default RoomList;