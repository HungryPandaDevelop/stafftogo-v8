
import CloseBtn from './CloseBtn';

const RewardContent = ({ showPopupControls }) => {


  return (
    <div className="map-popup">

      <div className="main-full">
        <div className="reward-popup active">
          <CloseBtn showPopupControls={showPopupControls} />
          <h3>От</h3>
          <input className="input-decorate" type="text" />
          <h3>До</h3>
          <input className="input-decorate" type="text" />
          <h3>В месяц</h3>
        </div>
      </div>

    </div>
  )
}

export default RewardContent;