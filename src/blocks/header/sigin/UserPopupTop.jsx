import { Link } from 'react-router-dom';
import { typeCabinet } from 'hooks/typeCabinet';

const UserPopupTop = ({ userInfo }) => {
  return (
    <>
      <div className="sigin-top">
        <h3> <Link to="/cabinet/">Мои Кабинет</Link></h3>
        <h3> <Link to={`/cabinet/${userInfo.typeCabinet}/`}>Мои {typeCabinet(userInfo.typeCabinet)}</Link></h3>
      </div>
    </>
  )
}

export default UserPopupTop
