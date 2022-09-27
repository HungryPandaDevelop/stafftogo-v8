import { useEffect, useState } from 'react';

import Breadcrumbs from 'pages/parts/Breadcrumbs';
import PageTitle from 'pages/parts/PageTitle';

import CardsControls from 'pages/catalog/parts/cardsControls/CardsControls';

import { connect } from 'react-redux';
import ActionFn from 'store/actions';

import { getListing, getListingSearch } from 'store/asyncActions/getListing';

import CardsItem from 'pages/catalog/CardsItem';

const Catalog = ({ listingType, listingSearch, uid, currentCard, cabinetType, accountInfo, roomUpdate, ActionFn }) => {

  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);


  const [invited, setInvited] = useState([]);


  useEffect(() => {
    console.log('listingSearch', listingSearch);

    getListing(listingType).then(res => {
      const filtring = res.filter(item => {
        if (item.data.card_name.indexOf(listingSearch) >= 0) {
          return item;
        }
      });
      setListings(filtring);
    });

  }, [listingSearch]);

  useEffect(() => {

    getListing(listingType).then(res => {
      setListings(res);
      setLoading(false);
    });

  }, [listingType]);

  useEffect(() => {

    uid && getListing('message', uid, 'invite').then(res => {

      setInvited(res.map(el => el.data.hisId));
      ActionFn('UPDATE_ROOM', false);
    });

  }, [uid, roomUpdate]);




  return (
    <div>
      <CardsControls />
      <Breadcrumbs />
      <div className="content">
        <PageTitle title="список" />

        <div className="main-grid">
          <div className="col-10">
            {loading ? 'Loading list' : listings.length > 0 ? (
              <ul className='ln'>
                {listings.map((listing) => (
                  <CardsItem
                    listing={listing}
                    key={listing.id}
                    imgCompany={listing.imgCompany}
                    link={`/catalog/${listingType}/${listing.id}`}
                    idCategory={listingType}
                    listingType={listingType}
                    invited={invited}
                    uid={uid}
                    accountInfo={accountInfo}
                    currentCard={currentCard}
                    cabinetType={cabinetType}
                  />
                ))}
              </ul>
            ) : (
              <p>Нет элементов</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    listingType: state.listingTypeReducer,
    listingSearch: state.listingSearchReducer,
    cabinetType: state.accountInfo.info.typeCabinet,
    currentCard: state.accountInfo.info.currentCard,
    typeCabinet: state.accountInfo.info.typeCabinet,
    roomUpdate: state.accountInfo.roomUpdate,
    uid: state.accountInfo.info.uid,
    accountInfo: state.accountInfo.info
  }
}



export default connect(mapStateToProps, { ActionFn })(Catalog);
