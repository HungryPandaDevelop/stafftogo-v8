import CloseBtn from './CloseBtn';

const ExtraFilterContent = ({ showPopupControls }) => {

  return (
    <div className="map-popup">
      <div className="map-popup-container filters-container">
        <CloseBtn showPopupControls={showPopupControls} />
        <div className="filters-container main-grid">
          <div className="col-6">
            <div className="popup-line">
              <h3>Пол</h3>
              <div className="checkbox">
                <label>Женский
                  <input type="checkbox" />
                  <span></span>
                </label>
              </div>
              <div className="checkbox">
                <label>Мужской
                  <input type="checkbox" />
                  <span></span>
                </label>
              </div>
            </div>
            <div className="popup-line">
              <h3>Возраст</h3>
              <div className="main-grid input-container">
                <input className="input-decorate col-6" type="text" placeholder="От" />
                <input className="input-decorate col-6" type="text" placeholder="До" />
              </div>
            </div>
            <div className="popup-line">
              <h3>Опыт работы</h3>
              <div className="main-grid input-container">
                <input className="input-decorate col-6" type="text" placeholder="От" />
                <input className="input-decorate col-6" type="text" placeholder="До" />
              </div>
            </div>
          </div>
          <div className="checkbox-col col-6">
            <div className="checkbox">
              <label> Есть ИП/Самозанятый
                <input type="checkbox" /><span></span>
              </label>
            </div>
            <div className="checkbox">
              <label> Медицинская книжка
                <input type="checkbox" /><span></span>
              </label>
            </div>
            <div className="checkbox">
              <label> Готовность к командировкам
                <input type="checkbox" /><span></span>
              </label>
            </div>
            <div className="checkbox">
              <label> Готовность работать ночью
                <input type="checkbox" /><span></span>
              </label>
            </div>
            <div className="checkbox">
              <label> Срочный выезд
                <input type="checkbox" /><span></span>
              </label>
            </div>
            <div className="checkbox">
              <label> Разрешение на работу в России
                <input type="checkbox" /><span></span>
              </label>
            </div>
            <div className="checkbox">
              <label> Гражданство РФ
                <input type="checkbox" /><span></span>
              </label>
            </div>
            <div className="btn-container"> <a className="btn btn--orange" href="#">Сбросить фильтры</a></div>
          </div>
        </div >
      </div>
    </div>
  )
}


export default ExtraFilterContent;
