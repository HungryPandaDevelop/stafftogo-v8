import { Link } from 'react-router-dom';

const CardsInfo = ({ name, text, priceFrom, priceTo, id, ownType }) => {
  return (
    <div className="resume-info">
      <h2>
        <Link to={`/catalog/${ownType}/${id}`}>
          {name}
        </Link>
      </h2>
      <div className="vacancies-price">
        {`Р ${priceFrom}`}
        {priceTo && ` - ${priceTo}`}
      </div>
      <div>
        {text}
      </div>
    </div>
  )
}

export default CardsInfo
