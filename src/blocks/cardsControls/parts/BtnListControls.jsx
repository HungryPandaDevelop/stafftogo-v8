
const BtnListControls = (props) => {
  const { idpopup, children, showPopupControls } = props;
  const showPopup = () => {
    showPopupControls(idpopup);
  }

  return (
    <button
      className="btn btn--crystal btn--list"
      onClick={showPopup}
    >
      <span>{children}</span><i></i>
    </button>
  )

};


export default BtnListControls;