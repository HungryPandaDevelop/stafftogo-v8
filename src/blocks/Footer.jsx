import imgLogo from 'front-end/images/logo.svg'
import instagramWhite from 'front-end/images/social/instagram-white.svg'
import twitterWhite from 'front-end/images/social/twitter-white.svg'
import facebookWhite from 'front-end/images/social/facebook-white.svg'

const Footer = () => {
  return (
    <>
      {/* <div className="stub-footer"></div> */}
      <footer>
        <div className="main-grid">
          <div className="footer-info col-3">
            <div className="logo-container"><a className="logo" href="/"><img src={imgLogo} /></a></div>
            <div className="copyright">
              Мы - команда профессиональных рекрутеров, исследующих и развивающих отраслевоай поиск в области подбора работы и персонала. Мы преобразовываем обрасль путем применения инновационных решений.</div>
          </div>
          <nav className="nav-1 col-2">
            <h3>Услуги</h3>
            <ul>
              <li> <a href="#"> Подбор персонала</a></li>
              <li> <a href="#"> Поиск работы</a></li>
              <li> <a href="#"> Помощь рекрутера</a></li>
            </ul>
          </nav>
          <nav className="nav-2 col-2">
            <h3>Возможности</h3>
            <ul>
              <li> <a href="#"> Работодателям</a></li>
              <li> <a href="#"> Соискателям</a></li>
              <li> <a href="#"> Рекламодателям</a></li>
            </ul>
          </nav>
          <nav className="nav-3 col-2">
            <h3>Портал</h3>
            <ul>
              <li> <a href="#"> О нас</a></li>
              <li> <a href="#"> Политика</a></li>
              <li> <a href="#"> Контакты</a></li>
            </ul>
          </nav>
          <div className="col-3 footer-contacts">
            <p>Мы будем признательны за вашу помощь по улучшению функционала портала. Ждем ваших предложений: </p>
            <p> <a href="#">general@staff2go.com </a></p>
          </div>
          <div className="col-3">
            <div className="links">
              <div><a href="#">Пользовательское соглашение</a></div>
              <div><a href="#">Политика конфиденциальности</a></div>
            </div>
          </div>
          <div className="social-container col-5">
            <div className="social">
              <a className="social-ico--white" href="#"><img src={instagramWhite} alt="" /></a>
              <a className="social-ico--white" href="#"><img src={twitterWhite} alt="" /></a>
              <a className="social-ico--white" href="#"><img src={facebookWhite} alt="" /></a>
            </div>
          </div>
          <div className="col-4">
            <div className="create"><a href="#">
              Создание сайта Style You</a></div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer