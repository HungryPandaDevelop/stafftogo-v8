import { connect } from 'react-redux';
import BtnListControls from "./BtnListControls";
import specializationBtnContent from '../js/specializationBtnContent';
import industryBtnContent from '../js/industryBtnContent';
import setPriceText from '../js/setPriceText';

const ChoiseContentBtn = ({ industry, specialization, showPopupControls, listingSearch }) => {

  const listBtnMass = ['specialization', 'industry', 'price', 'Дополнительные фильтры'];


  const innerSwitch = (item) => {
    switch (item) {
      case 'specialization':
        return specializationBtnContent(specialization)
      case 'industry':
        return industryBtnContent(industry)
      case 'price':
        return setPriceText(listingSearch);
      default:
        return item
    }
  }

  return listBtnMass.map((item, i) => (
    <BtnListControls
      key={i}
      idpopup={i + 1}
      showPopupControls={showPopupControls}
    >
      {innerSwitch(item)}
    </BtnListControls>
  ));

}


const mapStateToProps = (state) => {

  return {
    listingSearch: state.listingSearchReducer,
  }
}

export default connect(mapStateToProps)(ChoiseContentBtn);