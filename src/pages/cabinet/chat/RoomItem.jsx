import ActionFn from 'store/actions';
import { connect } from 'react-redux';

import { useState, useEffect } from "react"
import { getSingleListing } from "store/asyncActions/getSingleListing"

import { Link, useParams } from 'react-router-dom';

const RoomItem = ({ room, uid, roomId, ActionFn }) => {
  const params = useParams();

  const [name, setName] = useState('');
  const [subName, setSubName] = useState('');

  useEffect(() => {
    // console.log(room.data.masterId, room.data.ownId)
    getSingleListing('users', room.data.masterId).then((res) => {
      getSingleListing(res.typeCabinet, room.data.ownId).then((res) => {

        res && setName(res.card_name);
      });
    });

    getSingleListing('users', room.data.invitedId).then((res) => {
      getSingleListing(res.typeCabinet, room.data.hisId).then((res) => {


        res && setSubName(res.card_name);
      });
    });

    if (params.roomUrl) {
      changeRoom(params.roomUrl)
    }


  }, []);

  const changeRoom = (setRoom) => {
    ActionFn('CHANGE_ROOM', setRoom);
  }

  return (
    <Link
      to={`/cabinet/chat/${room.id}`}
      onClick={() => { changeRoom(room.id) }}
      className={`chat-rooms ${(roomId === room.id) && 'active'}`} >
      {
        room.data.masterId === uid ?
          'Я позвал ' + subName + ' на ' + name
          :
          'Меня позвали ' + name + ' на ' + subName
      }

    </Link>
  )
}

const mapStateToProps = (state) => {

  return {
    uid: state.accountInfo.info.uid,
    roomId: state.accountInfo.roomId,
  }
}


export default connect(mapStateToProps,
  {
    ActionFn
  })(RoomItem);