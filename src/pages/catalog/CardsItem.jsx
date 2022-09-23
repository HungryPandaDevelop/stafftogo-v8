import { Link } from 'react-router-dom';

import BtnLike from 'pages/catalog/parts/cardsItem/BtnLike';
import BtnInvite from 'pages/catalog/parts/cardsItem/BtnInvite';
import BtnCall from 'pages/catalog/parts/cardsItem/BtnCall';

const ListItem = (props) => {
  const {
    listing,
    link,
    listingType,
    cabinetType,
    uid,
    invited,
    currentCard,
    accountInfo
  } = props;


  const listingData = listing.data;



  return (
    <div className="resume-header vacancies-item">

      <div className="main-grid">
        <div className="col-12 resume-header-roof">
          <div className="resume-update"><span>Резюме обновлено: XXX</span></div>
        </div>
        {listingData.userInfo && (
          <div className="col-2">
            <div className="resume-face-container">
              <div
                className="resume-face img-cover"
                style={{ backgroundImage: `url(${listingData.userInfo.imgsAccount})` }}
              >
                <img src={listingData.userInfo.imgsAccount} alt="" />
              </div>
            </div>
          </div>
        )}

        <div className="col-5">
          <div className="resume-info">
            <h2>
              <Link to={link}>
                {listingData.card_name}
              </Link>
            </h2>
            <div className="vacancies-price">
              {listingData.salary_priceFrom && `Р ${listingData.salary_priceFrom}`}
              {listingData.salary_priceTo && ` - ${listingData.salary_priceTo}`}
            </div>
            <div>
              {listingData.responsibilities}
            </div>
          </div>
        </div>

        <div className="col-5">
          <div className="resume-info resume-info--more">
            <div className="resume-delimentr"></div>
            <h2>{listingData.userInfo && listingData.userInfo.name_company}</h2>
            <ul className="ln">
              {listingData.userInfo && <li><a href="/"><i className="phone-ico--black"></i><span>{listingData.userInfo.phones_main}</span></a></li>}
              {listingData.userInfo && <li><a href="/"><i className="mail-ico--black"></i><span>{listingData.userInfo.email}</span></a></li>}
              <li><a href="/"><i className="marker-ico--black"></i><span>Показать на карте</span></a></li>
            </ul>
            {(uid && listingType != cabinetType) && <>
              <div className="btn-container">

                <BtnLike
                  listing={listing}
                />
                <BtnInvite
                  listing={listing}
                  invited={invited}
                  uid={uid}
                  currentCard={currentCard}
                  accountInfo={accountInfo}
                />

              </div></>
            }
            <BtnCall listing={listing} />


          </div>
        </div>
      </div>
    </div>
  )
}



export default ListItem;