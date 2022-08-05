import img1 from 'front-end/images/adv-1.svg'
import img2 from 'front-end/images/adv-2.svg'
import img3 from 'front-end/images/adv-3.svg'
import img4 from 'front-end/images/adv-4.svg'


const AdvantagesHome = () => {
  return (
    <>
      <section className="advantages_home">
        <div className="main-grid">
          <div className="advantages_home-header">
            <h2>Умная система GoMap</h2>
            <div className="subtopic">Мы предлагаем решения, которые помогут найти намного продуктивнее </div>
          </div>
        </div>
        <div className="main-grid">
          <div className="advantages_home-item col-6">
            <img className="advantages_home-img advantages_home-img--left" src={img1} alt="" />
            <div className="advantages_home-info"><b>С нами проще добраться </b>
              <h3>Прокладываем маршрут в реальном времени</h3>
              <div>На интерактивной карте можно построить маршрут до места назначения. Оцените время на дорогу. Проложите марштрут с помощью разных транспортных средств.</div>
            </div>
          </div>
          <div className="col-1"></div>
          <div className="advantages_home-item advantages_home-item--right col-6">
            <img className="advantages_home-img advantages_home-img--right" src={img2} alt="" />
            <div className="advantages_home-info advantages_home-info--right"><b>Задания на час</b>
              <h3>Поиск и реализация краткосрочных проектов</h3>
              <div>Поиск и реализация краткосрочных проектов Ваш сострудник не вышел на работу, а надо быстро перемыть гору посуды?! Смело размещайте срочную вакансию и через 15 минут вы найдете специалиста, который оперативно выполнит поставленную задачу. </div>
            </div>
          </div>
          <div className="section-btn">
            <div className="long-arrow long-arrow--top"></div>
            <div className="long-arrow long-arrow--down"></div><a className="btn btn--orangewhite" href="#">GoMap </a>
          </div>
          <div className="advantages_home-item col-6">
            <img className="advantages_home-img advantages_home-img--left" src={img3} alt="" />
            <div className="advantages_home-info"><b>Ранжирование по опыту </b>
              <h3>Подбор профессионалов<br /> любого уровня</h3>
              <div>На карте за считанные секунды можно отсортировать и выбрать как начинающих специалистов, так и гуру своего дела. </div>
            </div>
          </div>
          <div className="col-1"></div>
          <div className="advantages_home-item advantages_home-item--right col-6">
            <img className="advantages_home-img advantages_home-img--right" src={img4} alt="" />
            <div className="advantages_home-info advantages_home-info--right"><b>OnLine карта</b>
              <h3>Территориальное<br /> таргетирование</h3>
              <div>Мечта каждого - работа около дома! Наш портал поможет подобрать самое удобное для вас месторасположение</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default AdvantagesHome;
