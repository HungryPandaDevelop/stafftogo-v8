import { connect } from 'react-redux';

import baseSorting from './js/baseSorting'

import ActionFn from 'store/actions';

import employeesIcoOrange from 'front-end/images/employees/1-orange.svg'
import employeesIcoBlue from 'front-end/images/employees/1-blue.svg'

import CloseBtn from './CloseBtn';

const AlphabetPopup = (props) => {
  const { id, idAction, showPopupControls } = props;
  const getBaseSorting = baseSorting(props.alphabetListBase[id + "Base"])

  // console.log('alphabetListPopup', props.alphabetListPopup.industry);
  const changeActiveList = (name, type) => {

    if (props.alphabetListPopup[id].includes(type)) {
      props.ActionFn('REMOVE_' + idAction, type);
    } else {
      props.ActionFn('ADD_' + idAction, type);
    }

    // console.log('cl', props.alphabetListPopup.industry)


  }




  return (

    <div className="map-popup">
      <div className="map-popup-container alphabet-container">

        <CloseBtn showPopupControls={showPopupControls} />

        <div className="alphabet-group">
          {getBaseSorting.map((item, i) => (
            <div className="alphabet-item" key={i}>
              <div className="alphabet-letter"><span>{item[0].name[0]}</span></div>
              <ul className="ln">
                {item.map(({ name, type, count, img }, i) => (
                  <li key={i}>
                    <a
                      href="/"
                      className={(props.alphabetListPopup[id].includes(type) ? 'active' : '')}
                      onClick={(e) => { e.preventDefault(); changeActiveList(name, type) }}
                    >
                      {img && (<>
                        <i className="employees-ico">
                          <img className="ico-back" src={employeesIcoOrange} alt="" />
                          <img className="ico-front" src={employeesIcoBlue} alt="" />
                        </i>
                        <span className="employees-cout">{count}</span>
                      </>)}
                      <em> {name}<hr /></em>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))
          }
        </div >
      </div >
    </div >
  )
}

const mapStateToProps = (state) => {

  return {
    alphabetListBase: state,
    alphabetListPopup: state.listingSearchReducer
  }
}

export default connect(mapStateToProps, { ActionFn })(AlphabetPopup);