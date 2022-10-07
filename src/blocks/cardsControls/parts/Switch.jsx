
import { connect } from 'react-redux';
import ActionFn from 'store/actions';

const Switch = ({ listingType, ActionFn }) => {

  const changeTypeListing = () => {

    if (listingType === 'resume') {
      ActionFn('CHANGE_LISTING', 'vacancies');
    }
    else {
      ActionFn('CHANGE_LISTING', 'resume');
    }
  }


  return (
    <>
      <div
        className={`switch-container ${listingType === 'vacancies' ? 'switch-btn--active' : ''}`}
        onClick={changeTypeListing}
      >
        <span>Резюме</span>
        <div className="switch-btn switch-btn--white">
          <i></i>
        </div>
        <span>Вакансии</span>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {

  return {
    listingType: state.listingTypeReducer
  }
}



export default connect(mapStateToProps,
  {
    ActionFn
  })(Switch);