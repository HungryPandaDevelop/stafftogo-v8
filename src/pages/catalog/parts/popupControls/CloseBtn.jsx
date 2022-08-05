
const CloseBtn = ({ showPopupControls }) => {
  return (
    <div
      className="close-popup"
      onClick={() => { showPopupControls(0) }}
    >
    </div>
  )
}

export default CloseBtn
