
import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';
import MainScreen from 'pages/cabinet/videochat/parts/MainScreen';


import { Link, useParams } from 'react-router-dom';


const Videochat = () => {
  const params = useParams();





  return (
    <TemplateAccount title='Чат' >
      {params.userId}
      <div className="main-full">
        <h2>Видеочат</h2>
      </div>
      <Link className='btn btn--yellow' to='/cabinet/videochat/videolist-out'>Исходящие звонки</Link>
      <Link className='btn btn--yellow' to='/cabinet/videochat/videolist-in'>Входящте звонки</Link>
    </TemplateAccount >
  )
}

export default Videochat