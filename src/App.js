import {BrowserRouter, Routes, Route} from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Header from 'blocks/Header';
import PrivateRoute from 'blocks/header/PrivateRouter';
import Footer from 'blocks/Footer';

import MainPage from 'pages/MainPage';

import Chat from 'pages/cabinet/chat/Chat';
// import ChatList from 'pages/cabinet/chat/ChatList';

import Videochat from 'pages/cabinet/videochat/Videochat';
import VideoRoom from 'pages/cabinet/videochat/VideoRoom';
import VideoList from 'pages/cabinet/videochat/VideoList';


import Subscription from 'pages/cabinet/subscription/Subscription';

import Authorization from 'pages/cabinet/auth/Authorization';
import ForgotPassword from 'pages/cabinet/auth/ForgotPassword';
import Registration from 'pages/cabinet/auth/Registration';


import Account from 'pages/cabinet/Account';


// Страницы кабинет Нанимателя


import Vacancies from 'pages/cabinet/vacancies/Vacancies';
import VacanciesNew from 'pages/cabinet/vacancies/VacanciesNew';
import VacanciesEdit from 'pages/cabinet/vacancies/VacanciesEdit';
// Страницы кабинет Нанимателя

// Страницы кабинет Соискателя
import Resume from 'pages/cabinet/resume/Resume';
import ResumeNew from 'pages/cabinet/resume/ResumeNew';
import ResumeEdit from 'pages/cabinet/resume/ResumeEdit';
// Страницы кабинет Соискателя

import Liked from 'pages/cabinet/liked/Liked';
import Invitations from 'pages/cabinet/invitations/Invitations';
import Responses from 'pages/cabinet/responses/Responses';

// Страницы Елементов Вакансии\ Резюме
import Catalog from 'pages/catalog/Catalog';
import CardsDetail from 'pages/catalog/CardsDetail';
// Страницы Елементов Вакансии\ Резюме



import Map from 'pages/catalog/MapGo';


const App = () => {
  return (
    <>
      <BrowserRouter>

        <Header/>
        <Routes> 
          <Route path='/' exept element={<MainPage/>} ></Route>
          
          <Route path='/authorization'  element={<Authorization/>} ></Route>
          <Route path='/forgot-password' element={<ForgotPassword/>}></Route>
          <Route path='/registration'  element={<Registration/>} ></Route>

        

          {/*  Страницы кабинет  */}
            <Route path='/cabinet' element={<PrivateRoute/>}>
              <Route index  element={<Account/>}></Route>
     

              <Route path='/cabinet/vacancies' element={<Vacancies/>}></Route>
              <Route path='/cabinet/vacancies-new' element={<VacanciesNew/>}></Route>
              <Route path='/cabinet/vacancies-edit/:elementId' element={<VacanciesEdit/>}></Route>

              <Route path='/cabinet/resume' element={<Resume/>}></Route>
              <Route path='/cabinet/resume-new' element={<ResumeNew/>}></Route>
              <Route path='/cabinet/resume-edit/:elementId' element={<ResumeEdit/>}></Route>


              <Route path='/cabinet/liked/' element={<Liked/>}></Route>
              <Route path='/cabinet/invitations/' element={<Invitations/>}></Route>
              <Route path='/cabinet/responses/' element={<Responses/>}></Route>

              <Route path='/cabinet/chat/'  element={<Chat/>} ></Route>
              <Route path='/cabinet/chat/:roomUrl'  element={<Chat/>} ></Route>

              <Route path='/cabinet/videochat/'  element={<Videochat/>} ></Route>
              <Route path='/cabinet/videochat/:userId'  element={<Videochat/>} ></Route>
              <Route path='/cabinet/videochat/videolist'  element={<VideoList/>} ></Route>
              <Route path='/cabinet/videochat/videoroom/:roomUrl'  element={<VideoRoom/>} ></Route>

              <Route path='/cabinet/subscription/'  element={<Subscription/>} ></Route>

            </Route>
          {/*  Страницы кабинет  */}


        


{/*  Страницы временные  */}
          {/* <Route path='/catalog' element={<Catalog/>}></Route> */}
          {/* <Route path='/catalog/:catagoryName' element={<ListOld/>}></Route> */}
          {/* <Route path='/catalog/:catagoryName/:elementId' element={<Detail/>}></Route> */}
{/*  Страницы временные  */}


          <Route path='/catalog' element={<Catalog/>}></Route>
          <Route path='/map' element={<Map/>}></Route>
          <Route path='/catalog/:catagoryName/:elementId' element={<CardsDetail/>}></Route>


        </Routes>
        <Footer/>
      </BrowserRouter>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      
    </>
  );
}

export default App;
