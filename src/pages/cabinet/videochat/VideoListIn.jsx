
import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';
import { useState, useEffect } from 'react';
import { getListing } from 'store/asyncActions/getListing';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { db } from 'firebase.config';
import { collection, doc, where, query, setDoc, addDoc, getDoc, onSnapshot, updateDoc, getDocs, deleteDoc } from 'firebase/firestore';


const VideoList = ({ uid }) => {

  const [rooms, setRooms] = useState();

  useEffect(() => {

    // getListing('calls', uid, 'videolist').then(res => {
    //   console.log('calls', res);
    //   setRooms(res);

    // });


    const q = query(collection(db, "calls"), where('offer.invitedId', '==', uid));
    onSnapshot(q, (querySnapshot) => {
      const calls = [];
      querySnapshot.forEach((doc) => {
        calls.push(doc.data());
      });

      console.log(calls)
      setRooms(calls);
    });


  }, []);


  return (
    <TemplateAccount title='Чат' >

      <div className="main-full">
        <h2>Video список</h2>
        {rooms ? rooms.map((item) => (
          <Link className='btn btn--orange' key={item.offer.roomId} to={`/cabinet/videochat/videoroom-in/${item.offer.roomId}`}>{item.offer.roomId}</Link>
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