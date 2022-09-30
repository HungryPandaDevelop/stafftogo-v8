import { useEffect, useState } from 'react';

import Breadcrumbs from 'pages/parts/Breadcrumbs';
import PageTitle from 'pages/parts/PageTitle';

import CardsControls from 'pages/catalog/parts/cardsControls/CardsControls';

import { connect } from 'react-redux';
import ActionFn from 'store/actions';

import { getListing } from 'store/asyncActions/getListing';

import CardsItem from 'pages/catalog/CardsItem';


const Catalog = ({ listingType, listingSearch, uid, currentCard, cabinetType, accountInfo, roomUpdate, ActionFn, alphabetListPopup }) => {

  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);


  const [invited, setInvited] = useState([]);



  const findFromTo = (dataIn, fromInputIn, toInputIn, elSearch) => {

    const fromInput = fromInputIn;
    const toInput = toInputIn;

    return dataIn.filter(item => {
      const priceEl = Number(item.data[elSearch]);
      if (fromInput && toInput) {
        if (priceEl >= fromInput && priceEl <= toInput) {
          return item;
        }
      } else if (fromInput) {
        if (priceEl >= fromInput) {
          return item;
        }
      } else if (toInput) {
        if (priceEl <= toInput) {
          return item;
        }
      }
    });

  }

  const findByType = (dataIn, type1, type2) => {
    return dataIn.filter(item => {
      if (item.data[type1]) {
        if (!alphabetListPopup[type2].some(ele => !item.data[type1].includes(ele))) {
          return item;
        };
      };
    });
  }


  useEffect(() => {

    getListing(listingType).then(res => {

      let data = res;

      if (listingSearch.name) {
        data = data.filter(item => item.data.card_name.indexOf(listingSearch.name) >= 0);
      }

      if (listingSearch.price_from || listingSearch.price_from) {
        data = findFromTo(data, Number(listingSearch.price_from), Number(listingSearch.price_to), 'salary_priceFrom');

      }
      if (listingSearch.extra.age_from || listingSearch.extra.age_to) {
        data = findFromTo(data, Number(listingSearch.extra.age_from), Number(listingSearch.extra.age_to), 'age');
      }

      if (listingSearch.extra.exp_from || listingSearch.extra.exp_to) {
        data = findFromTo(data, Number(listingSearch.extra.exp_from), Number(listingSearch.extra.exp_to), 'exp_work');
      }


      if (alphabetListPopup.industry.length > 0) {
        data = findByType(data, 'typeJob', 'industry');
      }

      if (alphabetListPopup.specialization.length > 0) {
        data = findByType(data, 'specialization', 'specialization');
      }




      setListings(data);
    });

  }, [listingSearch, alphabetListPopup]);

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
    accountInfo: state.accountInfo.info,
    alphabetListPopup: state.alphabetListPopupReducer
  }
}



export default connect(mapStateToProps, { ActionFn })(Catalog);
