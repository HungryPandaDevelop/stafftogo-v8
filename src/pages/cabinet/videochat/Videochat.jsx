
import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';
import MainScreen from 'pages/cabinet/videochat/parts/MainScreen';



const Videochat = () => {



  return (
    <TemplateAccount title='Чат' >

      <div className="main-full">
        <h2>Video chat</h2>
        <MainScreen />
      </div>
    </TemplateAccount >
  )
}

export default Videochat