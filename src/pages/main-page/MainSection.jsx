
const MainSection = () => {
  return (
    <>
      <div className="main_home">
        <div className="main-full">
          <div className="main_home-container">
            <div className="owl-main owl-carousel">
              <div className="main_home-item flex-align">
                <div className="main_home-content">
                  <h2>Поиск<br /> специалистов<br /> в сфере HoReCa</h2>
                  <div>Staff2Go - профессинальная платформа для поиска временной или постоянной работы, а также найма сотрудников для решения любой задачи.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-home-bg"></div>
        <div className="main-crope-bg"></div>
        <div className="controls-map-container">
          <div className="controls-map">
            <div className="main-grid controls-line controls-line--first">
              <nav className="nav nav-border col-8">
                <ul>
                  <li><a className="active" href="#">Постоянный<br /> работник</a></li>
                  <li><a href="#">Консалтинговые<br /> услуги</a></li>
                  <li><a href="#">Команда<br /> на проект</a></li>
                  <li><a href="#">
                    Временный<br /> работник
                  </a></li>
                </ul>
              </nav>
              <div className="controls-contaiener col-4 vertical-align">
                <div className="switch-container"><span>Резюме</span>
                  <div className="switch-btn switch-btn--white"><i></i></div><span>Вакансии</span>
                </div>
              </div>
            </div>
            <div className="main-grid controls-line">
              <div className="btn-container vertical-align col-12">
                <div>
                  <button className="btn btn--crystal btn--list" href="#"> <span>Специализация сотрудника</span><i></i></button>
                </div>
                <div>
                  <button className="btn btn--crystal btn--list" href="#"> <span> Сфера деятельности</span><i></i></button>
                </div>
                <div>
                  <button className="btn btn--crystal btn--list show-reward" href="#"><span> Вознаграждение</span><i></i>
                    <div className="reward-popup">
                      <div className="close-popup"></div>
                      <h3>От</h3>
                      <input className="input-decorate" type="text" />
                      <h3>До</h3>
                      <input className="input-decorate" type="text" />
                      <h3>В месяц</h3>
                    </div>
                  </button>
                </div>
                <div>
                  <button className="btn btn--crystal btn--list" href="#"> <span> Дополнительные фильтры</span><i></i></button>
                </div>
                <div className="left-btn-container">
                  <a className="btn btn--orange btn-search" href="#">Поиск</a>
                  <a className="btn btn--crystal" href="#">Список</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainSection;
