import AlphabetPopup from "pages/catalog/parts/popupControls/AlphabetPopup";
import RewardPopup from "pages/catalog/parts/popupControls/RewardPopup";
import ExtraFilter from "pages/catalog/parts/popupControls/ExtraFilter";

const VisiblePopup = ({ idVisible, showPopupControls }) => {
  const choisePopup = (id) => {
    switch (id) {
      case 1:
        return <AlphabetPopup id="specialization" idAction="SPECIALIZATION" showPopupControls={showPopupControls} />
      case 2:
        return <AlphabetPopup id="industry" idAction="INDUSTRY" showPopupControls={showPopupControls} />
      case 3:
        return <RewardPopup showPopupControls={showPopupControls} />
      case 4:
        return <ExtraFilter showPopupControls={showPopupControls} />
    }
  }

  return (
    <>
      {choisePopup(idVisible)}
    </>
  );

}

export default VisiblePopup;