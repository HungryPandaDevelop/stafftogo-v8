import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const CardsInfo = ({ name, education, expFrom, expTo, priceFrom, priceTo, link, educationList }) => {

  const findEducation = education && educationList.filter(item => item.value === education[0]);

  return (
    <div className="resume-info">
      <h2>
        <Link to={link}>
          {name}
        </Link>
      </h2>
      <div className="vacancies-price">
        {`Р ${priceFrom}`}
        {priceTo && ` - ${priceTo}`}
      </div>
      <div>
        {expFrom && `Стаж: ` + (expTo - expFrom)}
      </div>
      <div>
        {education && `Образование: ` + findEducation[0].label}
      </div>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    educationList: state.fieldsResume.education.options,
  }
}

export default connect(mapStateToProps)(CardsInfo);