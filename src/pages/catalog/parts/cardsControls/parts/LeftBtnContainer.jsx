import { Link, useLocation } from "react-router-dom";




const LeftBtnContainer = () => {

  const location = useLocation();
  const pathMathRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  }

  return (
    <>
      <div className="left-btn-container">
        <Link className={`btn btn--crystal btn-search ${(pathMathRoute('/map') ? 'active' : '')}`} to="/map">Карта</Link>
        <Link className={`btn btn--crystal ${(pathMathRoute('/catalog') ? 'active' : '')}`} to="/catalog">Список</Link>
      </div>
    </>
  )
}

export default LeftBtnContainer
