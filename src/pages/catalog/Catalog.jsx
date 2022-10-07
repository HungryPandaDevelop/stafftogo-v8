import { useEffect, useState } from 'react';

import Breadcrumbs from 'pages/parts/Breadcrumbs';
import PageTitle from 'pages/parts/PageTitle';

import CardsControls from 'blocks/cardsControls/CardsControls';

import { connect } from 'react-redux';
import ActionFn from 'store/actions';

import { getListing } from 'store/asyncActions/getListing';



import filterMain from 'components/filterMain/filterMain';

import Pagination from 'pages/catalog/Pagination';

const Catalog = ({ listingType, listingSearch, uid, currentCard, cabinetType, accountInfo, roomUpdate, ActionFn }) => {

  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);


  const [invited, setInvited] = useState([]);


  useEffect(() => {

    getListing(listingType).then(res => {

      let data = filterMain(listingSearch, res);

      setListings(data);
      setLoading(false);
    });

  }, [listingSearch, listingType]);


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
              <>
                <Pagination
                  listings={listings}
                  idCategory={listingType}
                  listingType={listingType}
                  invited={invited}
                  uid={uid}
                  accountInfo={accountInfo}
                  currentCard={currentCard}
                  cabinetType={cabinetType}
                />
              </>
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
    accountInfo: state.accountInfo.info,
  }
}



export default connect(mapStateToProps, { ActionFn })(Catalog);
