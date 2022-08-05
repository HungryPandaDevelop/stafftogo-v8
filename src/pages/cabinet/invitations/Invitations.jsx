import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import CardItemInvite from 'pages/cabinet/invitations/CardItemInvite';
import { getListing } from 'store/asyncActions/getListing';
import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';



const Invitations = ({ uid, typeCabinet }) => {

  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {

    getListing('message', uid, 'invite').then(res => {
      setListings(res);
      setLoading(false);
    });

  }, []);


  return (
    <>
      <TemplateAccount title="Мои отклики" >
        {
          loading ?
            'Loading list' :
            listings ?
              listings.map(listing =>
                <CardItemInvite key={listing.id} listing={listing} typeCabinet={typeCabinet} />
              ) :
              'Список приглашений пуст'
        }
      </TemplateAccount>
    </>
  )
}



const mapStateToProps = (state) => {

  return {
    typeCabinet: state.accountInfo.info.typeCabinet,
    uid: state.accountInfo.info.uid,
  }
}



export default connect(mapStateToProps)(Invitations);
