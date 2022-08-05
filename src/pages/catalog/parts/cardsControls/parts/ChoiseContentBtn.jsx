import BtnListControls from "./BtnListControls";

import specializationBtnContent from '../js/specializationBtnContent';
import industryBtnContent from '../js/industryBtnContent';

const ChoiseContentBtn = ({ industry, specialization, showPopupControls }) => {

  const listBtnMass = ['specialization', 'industry', 'Вознаграждение', 'Дополнительные фильтры'];

  const innerSwitch = (item) => {
    switch (item) {
      case 'specialization':
        return specializationBtnContent(specialization)
      case 'industry':
        return industryBtnContent(industry)
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

export default ChoiseContentBtn