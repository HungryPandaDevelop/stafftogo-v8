
import { saveInfo } from 'store/asyncActions/saveInfo';
import { connect } from 'react-redux';
import ActionFn from 'store/actions';
const BtnLike = ({ accountInfo, listing, ActionFn, checkingStatus }) => {


  const idElement = listing.id;


  const addLike = () => {

    let sendData;

    if (accountInfo.likeMass) {
      const filterLike = accountInfo.likeMass.filter(like => like !== idElement);
      if (accountInfo.likeMass.includes(idElement)) {
        sendData = { likeMass: filterLike };
      } else {
        sendData = { likeMass: [...accountInfo.likeMass, idElement] };
      }

    } else {
      sendData = { likeMass: [idElement] };
    }

    saveInfo(sendData, accountInfo.uid, 'users').then(() => {
      ActionFn('SET_INFO_ACCOUNT', { ...accountInfo, likeMass: sendData.likeMass });
    });
  }

  return (
    <>
      {(!checkingStatus) && <div className={`btn ${accountInfo.likeMass && accountInfo.likeMass.includes(idElement) && 'btn--orange'}`} onClick={addLike}>Лайк</div>}
    </>
  )

}


const mapStateToProps = (state) => {

  return {

    accountInfo: state.accountInfo.info,
    checkingStatus: state.accountInfo.checkingStatus,

  }
}


export default connect(mapStateToProps, { ActionFn })(BtnLike);