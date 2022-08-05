import { useState, } from "react"


const Route = ({ setRouteFirst, setRouteByChangeType }) => {


  const routeChecknox = ['car', 'bus', 'walk'];
  const [routeCheckboxType, setRouteCheckboxType] = useState(0)
  const [routeboxState, setRouteboxState] = useState(false);


  const showRoutebox = (e) => {
    e.preventDefault(); // Выкл
    setRouteboxState(!routeboxState); // состояние плашки маршрту
    setRouteFirst(); // построить маршрут
  }


  const changeInTypeRoute = (index) => {
    // тип маршрута
    setRouteCheckboxType(index); // состояние для иконок внутрки комп
    setRouteByChangeType(index); // состояние для карты
  }


  return (
    <div className="route-map">
      <div className="route-map-inner">
        <div className="btn-container">
          <a
            className={`btn btn--route btn--ico_right ${routeboxState ? "active" : false}`}
            href="/"
            onClick={showRoutebox}
          >
            <span>Маршрут</span>
            <i className={`route-ico ${routeboxState ? "active" : false}`}></i>
          </a>
        </div>
        {routeboxState && (
          <div className="route-map-conainer">

            <div className="from input-route-item">
              <i className="from-ico"></i><span>Откуда: </span>
              <input className="input-decorate" type="text" />
            </div>
            <div className="to input-route-item">
              <i className="to-ico"></i><span>Куда: </span>
              <input className="input-decorate" type="text" />
            </div>

            <div className="checkbox-route">
              {routeChecknox.map((item, index) => (
                <div
                  key={index}
                  className={`checkbox-route-item checkbox-route-${item}`}
                  onClick={() => { changeInTypeRoute(index); }}
                >
                  <i className={`${item}-ico`}></i>
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

export default Route
