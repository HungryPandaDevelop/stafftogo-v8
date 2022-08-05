import avatar from 'front-end/images/icons/avatar-white.svg';
import carret from 'front-end/images/controls/carret-down-white.svg';

import { connect } from 'react-redux';

const UserHeadInfo = ({ userInfo, changeInfo }) => {
  return (
    <>
      {changeInfo ? 'Update' : (
        <div>
          <em>{userInfo.name}</em>
          <i className="img-cover img-avatar"
            style={{ backgroundImage: `url(${userInfo.imgsAccount ? userInfo.imgsAccount : avatar})` }}
          >
            <img src={avatar} alt="" />
          </i>
          <i className="carret">
            <img src={carret} alt="" />
          </i>
        </div>
      )}

    </>
  )
}


const mapStateToProps = (state) => {

  return {
    changeInfo: state.accountInfo.changeInfo,
  }
}

export default connect(mapStateToProps)(UserHeadInfo);