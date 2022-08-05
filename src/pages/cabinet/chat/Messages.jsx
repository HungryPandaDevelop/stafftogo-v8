import _ from "lodash";

import Moment from 'react-moment';

import { connect } from 'react-redux';
import ActionFn from 'store/actions';
import { getMyRoomMessages } from 'store/asyncActions/inviteChat';
import { getSingleListing } from "store/asyncActions/getSingleListing";

import { useState, useEffect } from 'react';

const Messages = ({ roomId, uid, roomUpdate }) => {

  const [messages, setMessages] = useState([]);
  const [startSee, setStartSee] = useState(0);
  const [loadingMessages, setLoadingMessages] = useState(true);
  useEffect(() => {


    getSingleListing('message', roomId).then(res => {

      setMessages(res);
      // setLoadingMessages(false);
      getMyRoomMessages(roomId, setStartSee);
    });
  }, [roomId, startSee]);


  let result;
  // messages && console.log('messages.messages', messages)

  if (messages && !_.isEmpty(messages.messages)) {

    result = Object.keys(messages.messages).map((key) => messages.messages[key]);

    result.sort(function (a, b) {
      var dateA = new Date(a.timestamp.seconds), dateB = new Date(b.timestamp.seconds);
      return dateA - dateB
    });

  }

  return (
    <div>
      {result ? result.map((item, index) => (
        <div className={`message-item ${uid === item.uid && 'my-message'}`} key={index} >
          {<Moment unix>{item.timestamp.seconds}</Moment>}
          <hr />
          {item.text}

        </div>
      )) : 'Список сообщений пуст'}
    </div>
  )
}

const mapStateToProps = (state) => {

  return {
    roomId: state.accountInfo.roomId,
    roomUpdate: state.accountInfo.roomUpdate,

  }
}

export default connect(mapStateToProps, { ActionFn })(Messages);