import imgLogo from 'front-end/images/logo.svg';
import { Link } from 'react-router-dom';
const Logo = () => {
  return (
    <div className="logo-container vertical-align col-2">
      <Link className="logo" to="/"> <img src={imgLogo} alt="logo" /></Link>
    </div>
  )
}
export default Logo;