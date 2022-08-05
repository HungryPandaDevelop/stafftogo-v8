import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import CardItemResponse from 'pages/cabinet/responses/CardItemResponse';
import { getListing } from 'store/asyncActions/getListing';
import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';



const Responses = ({ currentCard, uid, typeCabinet }) => {

  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {


    getListing('message', uid, 'response').then(res => {

      setListings(res);
      setLoading(false);
    })
  }, [])




  return (
    <>

      <TemplateAccount title="Мои отклики" >
        {
          loading ?
            'Loading list' :
            listings ?
              listings.map(listing =>
                <CardItemResponse key={listing.id} listing={listing} typeCabinet={typeCabinet} />
              ) :
              'Список приглашений пуст'
        }
      </TemplateAccount>
    </>
  )
}



const mapStateToProps = (state) => {

  return {
    currentCard: state.accountInfo.info.currentCard,
    typeCabinet: state.accountInfo.info.typeCabinet,
    uid: state.accountInfo.info.uid,
  }
}



export default connect(mapStateToProps)(Responses);
