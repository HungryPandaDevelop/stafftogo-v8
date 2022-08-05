import { useState } from 'react';

import Nav from 'blocks/header/Nav';
import Logo from 'blocks/header/Logo';
import City from 'blocks/header/City';
import Search from 'blocks/header/Search';
import AuthInfo from 'blocks/header/AuthInfo';

import MenuPopup from 'components/popup/MenuPopup';



const Header = () => {

  const [showNavMenu, setShowNavMenu] = useState(false);

  const showPopup = () => {
    setShowNavMenu(true);
  }
  const closePopup = () => {
    setShowNavMenu(false);
  }

  return (
    <>
      <MenuPopup showNavMenu={showNavMenu} closePopup={closePopup} />
      <AuthInfo />
      <header >
        <div className="header-bg"></div>
        <div className="main-grid">

          <Logo />
          <City />
          <Search />

          <div className="sigin-container vertical-align col-3">
            <Nav />
            <a className="hamburger-btn element-btn" href="#" onClick={showPopup} ></a>
          </div>
        </div>
      </header>

      <div className="stub"></div>
    </>
  )
}

export default Header
