import { getAuth } from 'firebase/auth';

const LogOut = () => {

  const auth = getAuth();

  return (
    <div className="sigin-bottom">
      <span onClick={() => auth.signOut()}><div className="logout-ico"></div><span>Выйти</span></span>
    </div>
  )
}

export default LogOut
