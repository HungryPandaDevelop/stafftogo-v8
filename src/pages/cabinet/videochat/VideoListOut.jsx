
import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';
import { connect } from 'react-redux';

import CardItemLike from 'pages/cabinet/liked/CardItemLike';
import { useEffect } from 'react';

import { getListing } from 'store/asyncActions/getListing';

import { db } from 'firebase.config';
import { collection, doc, deleteDoc } from 'firebase/firestore';

const Videochat = ({ typeCabinet, accountInfo, uid }) => {


  useEffect(() => {
    getListing('calls', uid, 'videolist-my').then(res => {

      res.map(item => {
        let roomRef = doc(collection(db, "calls"), item.id);
        deleteDoc(roomRef);
      })

    });
  }, []);

  const contentPage = () => {

    return (
      <>
        <h3>
          Новые звонки
        </h3>
        {

          (accountInfo.likeMass && accountInfo.likeMass.length !== 0) ? accountInfo.likeMass.map((like) => (
            <div key={like}>
              <CardItemLike
                like={like}
                typeCabinet={typeCabinet}
              />
            </div>
          )) : 'Empty Like List'
        }
      </>
    )
  }

  return (
    <TemplateAccount title='Чат' >

      {contentPage()}

    </TemplateAccount >
  )
}


const mapStateToProps = (state) => {
  return {
    uid: state.accountInfo.info.uid,
    accountInfo: state.accountInfo.info,
    typeCabinet: state.accountInfo.info.typeCabinet,
  }
}



export default connect(mapStateToProps)(Videochat);