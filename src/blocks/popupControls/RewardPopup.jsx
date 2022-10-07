
import { connect } from 'react-redux';
import ActionFn from 'store/actions';

import CloseBtn from './CloseBtn';


const RewardContent = ({ showPopupControls, ActionFn, listingSearch }) => {

  const onSubmit = (e) => {
    e.preventDefault();
    ActionFn('SEARCH_PRICE_FROM_LISTING', e.target.price_from.value);
    ActionFn('SEARCH_PRICE_TO_LISTING', e.target.price_to.value);
  }

  return (
    <div className="map-popup">

      <div className="main-full">
        <div className="reward-popup active">
          <CloseBtn showPopupControls={showPopupControls} />

          <form className="form" onSubmit={(e) => { onSubmit(e) }}>
            <h3>От</h3>
            <input
              className="input-decorate"
              type="text"
              name="price_from"
            />
            <h3>До</h3>
            <input
              className="input-decorate"
              type="text"
              name="price_to" />
            <h3>В месяц</h3>
            <button
              type="submit"
              className="btn-search-head ico-in"

            >
              <span>Применить</span>
            </button>
          </form>
        </div>
      </div>

    </div>
  )
}


const mapStateToProps = (state) => {

  return {
    listingSearch: state.listingSearchReducer,
  }
}

export default connect(mapStateToProps,
  {
    ActionFn
  })(RewardContent);