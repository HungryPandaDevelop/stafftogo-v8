import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { connect } from 'react-redux';
import ActionFn from 'store/actions';

import { getSingleListing } from 'store/asyncActions/getSingleListing';



const AuthInfo = ({ ActionFn, uid, checkingStatus }) => {

  useEffect(() => {

    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        getSingleListing('users', auth.currentUser.uid).then(res => {
          console.log('res', res)
          ActionFn('SET_INFO_ACCOUNT', res);
          ActionFn('CHECK_STATUS_ACCOUNT', false);
        });
      }
      else {
        ActionFn('SET_INFO_ACCOUNT', false);
        ActionFn('CHECK_STATUS_ACCOUNT', false);
      }

    });

  }, []);

  return (
    <div>AuthInfo: {checkingStatus ? 'Loading...' : (uid ? 'Logged: ' + uid : 'No Logged')}</div>
  )
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    uid: state.accountInfo.info.uid,
    checkingStatus: state.accountInfo.checkingStatus
  }
}

export default connect(mapStateToProps,
  {
    ActionFn
  })(AuthInfo);