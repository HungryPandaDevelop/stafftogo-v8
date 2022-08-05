import { connect } from 'react-redux';

import UserList from 'blocks/header/sigin/UserList';
import UserHeadInfo from 'blocks/header/sigin/UserHeadInfo';
import UserPopupTop from 'blocks/header/sigin/UserPopupTop';

import LogOut from 'blocks/header/sigin/LogOut';
import ActionFn from 'store/actions';

const HeadProfile = ({ userInfo }) => {

  return (
    <>
      <div className="sigin-body">
        <UserHeadInfo userInfo={userInfo} />
        <div
          className="sigin-popup"
        // style={{ 'visibility': 'visible', 'opacity': 1 }}
        >

          <UserPopupTop userInfo={userInfo} />

          <UserList />

          <LogOut />
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.accountInfo.info,
  }
}

export default connect(mapStateToProps,
  {
    ActionFn
  })(HeadProfile);