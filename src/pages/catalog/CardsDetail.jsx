import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleListing } from 'store/asyncActions/getSingleListing'

const CardsDetail = () => {

  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();

  useEffect(() => {



    getSingleListing(params.catagoryName, params.elementId).then(res => {
      setListing(res);
      setLoading(false);
    });


  }, []);

  if (loading) {
    return <>Loading</>
  }
  console.log(listing);

  return (
    <div className="content">

      <div className="main-grid">
        <div className="col-12">
          <h1>{listing.name}</h1>

        </div>
      </div>
      <div className="resume_detail main-grid">
        <div className="col-10">
          <div className="resume-header">
            <div className="main-grid">
              <div className="col-12 resume-header-roof">
                <div className="resume-update"><span>На сайте с: 26.01.2022  </span><span>Резюме обновлено: 26.01.2022</span></div>
                <div className="resume-raiting-count">Отзывов: 3</div>
              </div>
              <div className="col-2">
                <div className="resume-face-container">
                  <div className="video-ico"></div>
                </div>
                <div className="resume-status-container">
                  <div className="resume-status status--online">Сейчас на сайте</div>
                </div>
              </div>
              <div className="col-5">
                <div className="resume-info">
                  <h2>Старший повар на постоянной основе</h2>
                  <ul className="ln">
                    <li>Разрешение на работу: Россия</li>
                    <li>Возраст: 31 год</li>
                    <li>Гражданство: РФ</li>
                    <li>Город: Москва</li>
                  </ul>
                </div>
              </div>
              <div className="col-5">
                <div className="resume-info resume-info--more">
                  <div className="resume-delimentr"></div>
                  <h2>Ирина Владимирована Кондакова</h2>
                  <ul className="ln">
                    <li> <a href="#"><i className="phone-ico--black"></i><span>+7 (985)	282-65-32</span></a></li>
                    <li><a href="#"><i className="mail-ico--black"></i><span>info@yandex.ru </span></a></li>
                    <li><a href="#"><i className="marker-ico--black"></i><span>Показать на карте</span></a></li>
                    <li><a className="btn btn--blue" href="#"> Откликнуться</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-body main-grid">
            <div className="resume-price col-7 main-grid">
              <div className="resume-price__item col-12 resume-price__item--main">
                <div className="resume-price__ico">


                </div>
                <div className="resume-price__info">
                  <h3>Постоянная работа</h3>
                  <div className="resume-price__amount">1 месяц</div>
                </div>
                <div className="resume-price__rate">Р 155 000 - 180 000</div>
              </div>
              <div className="resume-price__item col-4">

                <div className="resume-price__info">
                  <h3>Срочный выезд</h3>
                  <div className="resume-price__amount">1 месяц</div>
                  <div className="resume-price__rate">Р 2500 </div>
                </div>
              </div>
              <div className="resume-price__item col-4">

                <div className="resume-price__info">
                  <h3>Работа ночью</h3>
                  <div className="resume-price__amount">1 месяц</div>
                  <div className="resume-price__rate">Р 5500 </div>
                </div>
              </div>
              <div className="resume-price__item col-4">

                <div className="resume-price__info">
                  <h3>Проектная работа</h3>
                  <div className="resume-price__amount">1 месяц</div>
                  <div className="resume-price__rate">Р 2500</div>
                </div>
              </div>
            </div>
            <div className="col-5">
              <div className="resume-schedule"><i className="resume-check"></i>
                <ul className="ln">
                  <li>Медицинская книжка</li>
                  <li>Выезжаю в течение часа</li>
                  <li>Готовность к командировкам</li>
                  <li>Легко нахожу общий язык с гостями</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="resume-about col-12">
            <div className="resume-about__item">
              <h3>График и место работы:
                <div className="resume-about__delimetr"></div>
              </h3>
              <p>Постоянный рабочий день, частичная занятость, свободный график, частичная занятость, удаленная работа, вахта </p>
              <p>Москва, Санкт-Петербург, Самара, Екатеринбург, Ульяновск, и еще 33 города</p>
            </div>
            <div className="resume-about__item">
              <h3>Опыт работы 15 лет и 6 месяцев
                <div className="resume-about__delimetr"></div>
              </h3>
              <div className="main-grid">
                <div className="resume-exp__item col-4">
                  <div className="resume-exp__head"> <b>Июнь 2018 - По настоящее время /</b><span> 10 месяцев</span>
                    <div className="resume-exp__delimetr"></div>
                  </div>
                  <div className="resume-exp__body">
                    <h4>Суповых дел мастер /<span> ООО “Ромашка”</span></h4>
                    <p>Готовила пельмени Варища борщ для семейной пары С самого детства без памяти любила варить супы и всякие жидкие смеси</p>
                  </div>
                </div>
                <div className="resume-exp__item col-4">
                  <div className="resume-exp__head"> <b>Июнь 2018 - По настоящее время /</b><span> 10 месяцев</span>
                    <div className="resume-exp__delimetr"></div>
                  </div>
                  <div className="resume-exp__body">
                    <h4>Суповых дел мастер /<span> ООО “Ромашка”</span></h4>
                    <p>Готовила пельмени Варища борщ для семейной пары С самого детства без памяти любила варить супы и всякие жидкие смеси</p>
                  </div>
                </div>
                <div className="resume-exp__item col-4">
                  <div className="resume-exp__head"> <b>Июнь 2018 - По настоящее время /</b><span> 10 месяцев</span>
                    <div className="resume-exp__delimetr"></div>
                  </div>
                  <div className="resume-exp__body">
                    <h4>Суповых дел мастер /<span> ООО “Ромашка”</span></h4>
                    <p>Готовила пельмени Варища борщ для семейной пары С самого детства без памяти любила варить супы и всякие жидкие смеси</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="resume-about__item">
              <h3>Профессиональные образование </h3>
              <div className="resume-education">
                <h4><span>Базовое образование</span><i className="school-ico"></i></h4>
                <div className="resume-education__item">
                  <div className="resume-exp__head"> <b>Июнь 2018 - По настоящее время /</b><span> 10 месяцев</span>
                    <div className="resume-exp__delimetr"></div>
                  </div>
                  <div className="resume-education__body">
                    <h4>Специальность: Конфетчица /<span> Кондитерское училище номер 15г. Санкт-Петербург</span></h4><b>Специальность: Конфетчица</b>
                  </div>
                </div>
              </div>
              <div className="resume-education">
                <h4><span>Профильное образование</span><i className="institute-ico"></i></h4>
                <div className="resume-education__item">
                  <div className="resume-exp__head"> <b>Июнь 2012 - Сентябрь 2019 /</b><span> 4 года и 3 месяца</span>
                    <div className="resume-exp__delimetr"></div>
                  </div>
                  <div className="resume-education__body">
                    <h4>Le Cordon Blue, France</h4><b>Диплом “Кулинарное искусство” Три уровня сертификата</b>
                  </div>
                </div>
                <div className="resume-education__item">
                  <div className="resume-exp__head"> <b>Июнь 2012 - Сентябрь 2019 /</b><span> 4 года и 3 месяца</span>
                    <div className="resume-exp__delimetr"></div>
                  </div>
                  <div className="resume-education__body">
                    <h4>Le Cordon Blue, France</h4><b>Диплом “Кулинарное искусство” Три уровня сертификата</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="resume-about__item">
              <h3>Обо мне</h3>
              <p>
                Отличное знание HTML, HTML5, CSS, CSS3, SCSS, Emmet, Pug;
                Знание Javascript, jQuery;
              </p>
              <p>
                Верстка по методологии BEM;
                Навык быстрой HTML-верcтки нестандартных макетов;
                Отличное знание Photoshop, Illustrator, Figma;
                SVG-анимация — знакомство с технологией;
                Git — опыт работы с репозиториями;
                Большой опыт работы с JS-библиотеками (не фреймворками);
              </p>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="resume-sidebar">
            <div className="resume-client-container">
              <div className="client-popup">
                <div className="client-popup-body">
                  <div className="clinet-face-container">
                    <div className="video-ico"></div>
                  </div>
                  <div className="resume-status status--online">
                    Сейчас на сайте</div>
                  <div className="client-price">Р 155 000 - 180 000</div>
                  <div className="client-info">
                    <div>Возраст: 52 года</div>
                    <div>Опыт: 15 лет 12 месяцев</div>
                  </div>
                  <div className="client-topic"><i className="ok-ico"></i>
                    <h3>ИП/Самозанятый</h3>
                    <h3>Медицинская книжка</h3>
                  </div>
                </div>
                <div className="client-popup-footer"><a className="btn btn--blue" href="#"> Откликнуться</a></div>
              </div>
            </div>
            <div className="resume-controls">
              <div className="resume-btn">
                <div className="btn-hint show">В избранное</div><i className="heart-ico--white"></i>
              </div>
              <div className="resume-btn">
                <div className="btn-hint">Распечатать</div><i className="printer-ico--white"></i>
              </div>
              <div className="resume-btn">
                <div className="btn-hint">Скачать</div><i className="download-ico--white"></i>
              </div>
              <div className="resume-btn">
                <div className="btn-hint">Скрыть</div><i className="hidden-ico--white"></i>
              </div>
              <div className="resume-btn">
                <div className="btn-hint">Поделиться</div><i className="social-ico"></i>
              </div>
            </div>
            <div className="btn-container">
              <div><a className="btn btn--blue btn--ico_right" href="#"> <span>Видео чат</span><i className="videochat-ico--white"> </i></a></div>
              <div><a className="btn btn--orange btn--ico_right" href="#"> <span>Чат</span><i className="chat-ico--white"></i></a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardsDetail;