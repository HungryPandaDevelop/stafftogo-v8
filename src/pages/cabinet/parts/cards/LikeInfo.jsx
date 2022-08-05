import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const LikeInfo = ({ name, id, ownType }) => {


  return (
    <div className="resume-info">
      <h2>
        <Link to={`/catalog/${ownType}/${id}`}>
          {name}
        </Link>
      </h2>
    </div>
  )
}


const mapStateToProps = (state) => {
  console.log(state.accountInfo.ownTypeTrue)
  return {
    ownType: state.accountInfo.ownType,
    educationList: state.fieldsResume.education.options,
  }
}

export default connect(mapStateToProps)(LikeInfo);