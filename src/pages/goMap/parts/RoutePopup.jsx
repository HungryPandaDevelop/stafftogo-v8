import { useState, } from "react"

import addRoute from 'pages/goMap/js/addRoute';
import removeRoute from 'pages/goMap/js/removeRoute';

const RoutePopup = (
  {
    myMap,
    myMapRef,
    myRoute,
    setMyRoute,
    currentCardId,
    myPosition,
    choiseMarkerPosition,
    myPositionText,
    markerPositionText,
    routeboxState,
    setRouteboxState
  }) => {

  // console.log('markerPositionText', markerPositionText)

  const routeChecknox = ['auto', 'masstransit', 'pedestrian'];
  const routeChecknoxTemp = ['car', 'bus', 'walk']; // ПОСЛЕ ВЕРСТКИ ПОМЕНЯТЬ
  const [routeCheckboxType, setRouteCheckboxType] = useState(0)




  const showRoutebox = () => {
    console.log('set route', myRoute);
    removeRoute(myMapRef, myRoute);
    addRoute(myMap, myMapRef, setMyRoute, myPosition, choiseMarkerPosition, 'auto');

    setRouteboxState(!routeboxState); // состояние плашки маршрту
    // setRouteFirst(); // построить маршрут
  }


  const changeInTypeRoute = (index) => {
    // тип маршрута
    // console.log(index)
    console.log('myRoute', myRoute);
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
              <input className="input-decorate" type="text" value={myPositionText} disabled />
            </div>
            <div className="to input-route-item">
              <i className="to-ico"></i><span>Куда: </span>
              <input className="input-decorate" type="text" value={markerPositionText} disabled />
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
