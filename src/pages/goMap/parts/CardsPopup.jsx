import { connect } from 'react-redux';
import ActionFn from 'store/actions';

import { useEffect, useState } from 'react';

import { getSingleListing } from 'store/asyncActions/getSingleListing'

const CardsPopup = ({ listingType, currentCardId }) => {

  const [cardInfo, setCardInfo] = useState(null);

  useEffect(() => {
    if (currentCardId) {
      getSingleListing(listingType, currentCardId).then(res => {
        setCardInfo(res)
        // console.log(res)
      });
    }
  }, [currentCardId])

  const closePopup = () => {
    setCardInfo(null);
  }


  const rednderCards = () => (
    <div
      className="cards-popup"

    >
      <div
        className="client-popup"
        style={{ position: 'absolute', top: '100px', width: '300px', left: '100px', height: '500px' }}
      >
        <div className="close-popup"
          onClick={closePopup}
        >
          <i></i>
        </div>
        <div className="client-popup-body">
          <div className="clinet-face-container">
            <h2>{cardInfo.card_name}</h2>
            <div
              className="client-face img-cover"
              style={{ backgroundImage: `url(${cardInfo.userInfo.imgsAccount})` }}
            >
              <img
                src="images/temp/avatar-1.jpg"
                alt="" />
            </div>
            <div className="video-ico"></div>
          </div>
          <div className="client-time">Был на сайте: 05.10.19</div>


          <div className="client-price">
            Р {cardInfo.salary_priceFrom}
          </div>

          <div className="client-description">
            {cardInfo.userInfo.responsibilities}
          </div>
          <div className="client-popup-mail">
            {cardInfo.userInfo.email}
          </div>
          <div className="client-popup-phone">
            {cardInfo.userInfo.phone}
          </div>
        </div>
        <div className="client-popup-footer">
          <a className="btn btn--blue" href={`/catalog/vacancies/${currentCardId}`}> Подробнее</a>
        </div>
      </div>
    </div >
  )

  return cardInfo && rednderCards();
}

const mapStateToProps = (state) => {

  return {
    getInfo: state.popupMapInfoReducer
  }
}


export default connect(mapStateToProps,
  {
    ActionFn
  })(CardsPopup);