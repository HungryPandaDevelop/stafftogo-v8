import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const LikeInfo = ({ name, id, ownTypeTrue }) => {



  return (
    <div className="resume-info">
      <h2>
        <Link to={`/catalog/${ownTypeTrue}/${id}`}>
          {name}
        </Link>
      </h2>
    </div>
  )
}


const mapStateToProps = (state) => {
  // console.log(state.accountInfo.ownTypeTrue)
  return {
    ownTypeTrue: state.accountInfo.ownTypeTrue,
    educationList: state.fieldsResume.education.options,
  }
}

export default connect(mapStateToProps)(LikeInfo);