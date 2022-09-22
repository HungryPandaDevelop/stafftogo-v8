
import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';
import MainScreen from 'pages/cabinet/videochat/parts/MainScreen';

import { Link } from 'react-router-dom';


const Videochat = () => {



  return (
    <TemplateAccount title='Чат' >

      <div className="main-full">
        <Link to='/cabinet/videochat/videoroom/123123'>Link</Link>
        <h2>Video chat</h2>
        <MainScreen typeConnect="create" />
      </div>
    </TemplateAccount >
  )
}

export default Videochat