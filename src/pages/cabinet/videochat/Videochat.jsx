
import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';
import MainScreen from 'pages/cabinet/videochat/parts/MainScreen';


import { Link, useParams } from 'react-router-dom';


const Videochat = () => {
  const params = useParams();





  return (
    <TemplateAccount title='Чат' >
      {params.userId}
      <div className="main-full">
        <h2>Video chat</h2>
        {params.userId ? (<MainScreen typeConnect="create" userId={params.userId} />) : 'Выберете, кому хотите позвонить'}

      </div>
      <Link className='btn btn--yellow' to='/cabinet/videochat/videolist'>Входящте звонки</Link>
    </TemplateAccount >
  )
}

export default Videochat