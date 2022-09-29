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




  useEffect(() => {

    getListing(listingType).then(res => {

      let data = res;

      if (listingSearch.name) {
        data = data.filter(item => item.data.card_name.indexOf(listingSearch.name) >= 0);
      }


      const fromInput = Number(listingSearch.price_from);
      const toInput = Number(listingSearch.price_to);

      if (fromInput || toInput) {
        data = data.filter(item => {
          const priceEl = Number(item.data.salary_priceFrom);
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

      if (alphabetListPopup.industry.length > 0) {

        data = data.filter(item => {
          if (item.data.typeJob) {
            if (!alphabetListPopup.industry.some(ele => !item.data.typeJob.includes(ele))) {
              return item;
            };
          };
        });

      }

      if (alphabetListPopup.specialization.length > 0) {

        data = data.filter(item => {
          if (item.data.specialization) {
            if (!alphabetListPopup.specialization.some(ele => !item.data.specialization.includes(ele))) {
              return item;
            };
          };
        });

      }


      const filtring = res.filter(item => {




        // let check = false;
        // if (alphabetListPopup.industry.length > 0) {
        //   console.log('in')
        //   item.data.typeJob && alphabetListPopup.industry.forEach(el => {
        //     if (item.data.typeJob.includes(el)) {
        //       check = true;
        //     } else {
        //       check = false;
        //       return false;
        //     };
        //   });
        //   if (check) { return item; }
        // } else {
        //   return item;
        // }

        // -------type 2
        // let check = false;
        // if (alphabetListPopup.specialization.length > 0) {

        //   item.data.specialization && alphabetListPopup.specialization.forEach(el => {
        //     if (item.data.specialization.includes(el)) {
        //       check = true;
        //     } else {
        //       check = false;
        //       return false;
        //     };
        //   });
        //   if (check) { return item; }
        // } else {
        //   return item;
        // }

      });


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
