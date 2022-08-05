import { Navigate, Outlet } from 'react-router-dom';

import { connect } from 'react-redux';

const PrivateRoute = ({ uid, checkingStatus }) => {


  return (
    <>
      {checkingStatus ? 'Loading private route...' : (uid ? <Outlet /> : <Navigate to="/authorization" />)}
    </>
  )

}


const mapStateToProps = (state) => {
  return {
    uid: state.accountInfo.info.uid,
    checkingStatus: state.accountInfo.checkingStatus
  }
};

export default connect(mapStateToProps)(PrivateRoute);