import { useState } from 'react';
import Switch from 'pages/catalog/parts/cardsControls/parts/Switch'; //  почему тут ?
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ActionFn from 'store/actions';
const Search = ({ ActionFn }) => {

  const [headSearch, setHeadSearch] = useState('');

  const onHeadSearch = (e) => {
    setHeadSearch(e.target.value)
  }
  const onSearch = (e) => {
    ActionFn('SEARCH_NAME_LISTING', headSearch);
  }

  return (
    <div className="col-5 vertical-align">
      <div className="search-container">
        <Switch />
        <div className="search-header">
          <input
            className="input-decorate"
            type="text"
            value={headSearch}
            placeholder="Профессия, должность или компания"
            onChange={(e) => { onHeadSearch(e) }}
          />
        </div>
      </div>
      <div
        className="btn-search-head ico-in"
        onClick={onSearch}
      >
        <span>Поиск</span>
      </div>
      <Link className="btn-map-head" to="/catalog"></Link>
    </div>
  )
}

export default connect(null,
  {
    ActionFn
  })(Search);