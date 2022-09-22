
import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';
import { useState, useEffect } from 'react';
import { getListing } from 'store/asyncActions/getListing';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const VideoList = ({ uid }) => {

  const [rooms, setRooms] = useState();

  useEffect(() => {

    getListing('calls', uid, 'videolist').then(res => {
      console.log('calls', res);
      setRooms(res);

    });

  }, []);

  return (
    <TemplateAccount title='Чат' >

      <div className="main-full">
        <h2>Video список</h2>
        {rooms ? rooms.map((item) => (
          <Link className='btn btn--orange' key={item.id} to={`/cabinet/videochat/videoroom/${item.data.offer.roomId}`}>{item.id}</Link>
        )) : 'Список пуст'}
      </div>
    </TemplateAccount >
  )
}


const mapStateToProps = (state) => {
  return {
    uid: state.accountInfo.info.uid,
  }
}

export default connect(mapStateToProps)(VideoList);