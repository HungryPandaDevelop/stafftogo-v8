import { Link } from "react-router-dom"


const BtnCall = ({ listing }) => {

  return (
    <div>
      <Link to={`/cabinet/videochat/${listing.data.userRef}`} className="btn btn--green">Звонок</Link>
    </div>
  )
}


export default BtnCall;