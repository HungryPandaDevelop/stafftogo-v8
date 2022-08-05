
import Switch from 'pages/catalog/parts/cardsControls/parts/Switch'; //  почему тут ?
import { Link } from 'react-router-dom';
const Search = () => {
  return (
    <div className="col-5 vertical-align">
      <div className="search-container">
        <Switch />
        <div className="search-header">
          <input className="input-decorate" type="text" placeholder="Профессия, должность или компания" />
        </div>
      </div>
      <a className="btn-search-head ico-in" href="#">
        <span>Поиск</span>
      </a>
      <Link className="btn-map-head" to="/catalog"></Link>
    </div>
  )
}

export default Search