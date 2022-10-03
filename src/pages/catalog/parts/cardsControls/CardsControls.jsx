import { useState } from "react";

import RightBtnContainer from "./parts/RightBtnContainer";

import Switch from "./parts/Switch";
import Nav from "./parts/Nav";
import { connect } from 'react-redux';

import VisiblePopup from "./parts/VisiblePopup";

import ChoiseContentBtn from "./parts/ChoiseContentBtn";

const CardsControls = ({ listingSearch }) => {


  const industry = listingSearch.industry;
  const specialization = listingSearch.specialization;

  const [idVisiblePopup, setIdVisiblePopup] = useState(0);

  const showPopupControls = (id) => {
    setIdVisiblePopup(id);
  }


  return (
    <>
      <div className="controls-map">
        <div className="main-grid controls-line controls-line--first">
          <Nav />
          <div className="controls-contaiener col-4 vertical-align">
            <Switch />
          </div>
        </div>
        <div className="main-grid controls-line">
          <div className="btn-container vertical-align col-12" >
            <ChoiseContentBtn
              industry={industry}
              specialization={specialization}
              showPopupControls={showPopupControls}
            />
            <RightBtnContainer />
          </div>
        </div>
      </div>

      <VisiblePopup idVisible={Number(idVisiblePopup)} showPopupControls={showPopupControls} />
    </>
  )
}


const mapStateToProps = (state) => {
  return {
    listingSearch: state.listingSearchReducer
  }
}

export default connect(mapStateToProps)(CardsControls);