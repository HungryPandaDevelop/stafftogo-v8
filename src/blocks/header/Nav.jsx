import { connect } from 'react-redux';

import Sigin from 'blocks/header/Sigin';
import NavNoLogged from 'blocks/header/NavNoLogged';

const Nav = ({ uid, checkingStatus }) => {

  return (
    <>
      {checkingStatus ? 'Loading...' : (uid ? <Sigin /> : <NavNoLogged />)}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    uid: state.accountInfo.info.uid,
    checkingStatus: state.accountInfo.checkingStatus
  }
};

export default connect(mapStateToProps)(Nav);