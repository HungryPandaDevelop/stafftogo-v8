
import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';
import MainScreen from 'pages/cabinet/videochat/parts/MainScreen';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';


const VideoRoomOut = ({ uid }) => {

  const params = useParams();

  return (
    <TemplateAccount title='Видеочат' >

      <div className="main-full">
        <h2>Видеочат с: {params.userId}</h2>
        {params.userId ? (<MainScreen typeConnect="create" invitedId={params.userId} uid={uid} />) : 'Выберете, кому хотите позвонить'}
      </div>
    </TemplateAccount >
  )
}


const mapStateToProps = (state) => {
  return {
    uid: state.accountInfo.info.uid
  }
}



export default connect(mapStateToProps)(VideoRoomOut);