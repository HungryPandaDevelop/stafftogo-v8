import './style.css';

import { useParams } from 'react-router-dom';

// import { sendMessage } from 'store/asyncActions/getMessageAsync';

import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';

import { connect } from 'react-redux';
import RoomList from 'pages/cabinet/chat/RoomList';
import Messages from 'pages/cabinet/chat/Messages';
import ChatForm from 'pages/cabinet/chat/ChatForm';

const Chat = ({ uid, roomId }) => {

  const params = useParams();



  return (

    <TemplateAccount title='Чат' >

      <div className="main-full">
        <h2></h2>
      </div>
      <div className="main-grid">
        <div className="col-4">
          <RoomList uid={uid} roomId={roomId} />
        </div>
        <div className="col-8">
          {!params.roomId && !roomId ? 'Выберете окно чата' : (
            <>
              <Messages uid={uid} />
              <ChatForm uid={uid} />
            </>

          )}

        </div>
      </div>
    </TemplateAccount >

  )
}


const mapStateToProps = (state) => {
  return {
    uid: state.accountInfo.info.uid,
    roomId: state.accountInfo.roomId,
  }
}

export default connect(mapStateToProps)(Chat);

// export default Chat;