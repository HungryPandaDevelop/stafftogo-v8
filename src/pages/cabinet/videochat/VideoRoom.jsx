
import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';
import MainScreen from 'pages/cabinet/videochat/parts/MainScreen';

import { useParams } from 'react-router-dom';


const Videochat = () => {

  const params = useParams();

  return (
    <TemplateAccount title='Чат' >

      <div className="main-full">
        <h2>Video ответ: {params.roomUrl}</h2>
        <MainScreen videoroomid={params.roomUrl} typeConnect="join" />
      </div>
    </TemplateAccount >
  )
}

export default Videochat;