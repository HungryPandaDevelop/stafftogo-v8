import { useState, } from "react"

import addRoute from 'pages/goMap/js/addRoute';
import removeRoute from 'pages/goMap/js/removeRoute';

const RoutePopup = (
  {
    myMap,
    myMapRef,
    currentCardId,
    myPosition,
    choiseMarkerPosition
  }) => {


  const routeChecknox = ['auto', 'masstransit', 'pedestrian'];
  const routeChecknoxTemp = ['car', 'bus', 'walk']; // ПОСЛЕ ВЕРСТКИ ПОМЕНЯТЬ
  const [routeCheckboxType, setRouteCheckboxType] = useState(0)
  const [routeboxState, setRouteboxState] = useState(false);

  const [myRoute, setMyRoute] = useState(null);

  const showRoutebox = () => {
    console.log('set route', myPosition, choiseMarkerPosition);
    addRoute(myMap, myMapRef, setMyRoute, myPosition, choiseMarkerPosition, 'bus');
    setRouteboxState(!routeboxState); // состояние плашки маршрту
    // setRouteFirst(); // построить маршрут
  }


  const changeInTypeRoute = (index) => {
    // тип маршрута
    console.log(index)
    removeRoute(myMapRef, myRoute);
    setRouteCheckboxType(index);
    addRoute(myMap, myMapRef, setMyRoute, myPosition, choiseMarkerPosition, routeChecknox[index]);
  }


  return (
    <div className="route-map">
      <div className="route-map-inner">
        {currentCardId && (
          <div className="btn-container">
            <div
              className="btn btn--route"
              onClick={showRoutebox}
            >
              <span>Маршрут</span>
            </div>
          </div>
        )}
        {routeboxState && (
          <div className="route-map-conainer">

            <div className="from input-route-item">
              <i className="from-ico"></i><span>Откуда: </span>
              <input className="input-decorate" type="text" disabled />
            </div>
            <div className="to input-route-item">
              <i className="to-ico"></i><span>Куда: </span>
              <input className="input-decorate" type="text" disabled />
            </div>

            <div className="checkbox-route">
              {routeChecknox.map((item, index) => (
                <div
                  key={index}
                  className={`checkbox-route-item checkbox-route-${routeChecknoxTemp[index]}`}
                  onClick={() => { changeInTypeRoute(index); }}
                >
                  <i className={`${routeChecknoxTemp[index]}-ico`}></i>
                  <hr />
                  <span className={index === routeCheckboxType ? "checkbox-route--active" : "checkbox-route"}></span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default RoutePopup;
