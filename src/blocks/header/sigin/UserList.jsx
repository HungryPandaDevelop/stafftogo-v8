import { useEffect } from 'react';

import { connect } from 'react-redux';

import { getListing } from 'store/asyncActions/getListing';

import ActionFn from 'store/actions';

import { Link } from 'react-router-dom';
const UserList = ({ uid, cabinetType, ownCards, ownCardsLoad, ActionFn }) => {

  useEffect(() => {

    getListing(cabinetType, uid, 'users').then(res => {

      ActionFn('SET_OWN_CARDS', { ownCards: res, ownCardsLoad: false });
    })
  }, []);

  return (
    <div className="sigin-lists">

      <ul className="ln">
        {ownCardsLoad ? 'Loading ownCards' : ownCards.length > 0 ? (
          <>
            {
              ownCards.map((card) => (
                <div key={card.id}>
                  <li><Link to={`/catalog/${cabinetType}/${card.id}`}>{card.data.card_name}</Link></li>
                </div>
              ))
            }
          </>
        ) : 'List Empty'}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {

  return {
    uid: state.accountInfo.info.uid,
    cabinetType: state.accountInfo.info.typeCabinet,
    ownCards: state.accountInfo.ownCards,
    ownCardsLoad: state.accountInfo.ownCardsLoad
  }
}

export default connect(mapStateToProps,
  {
    ActionFn
  })(UserList);