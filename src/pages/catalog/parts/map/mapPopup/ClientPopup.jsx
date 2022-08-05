import { connect } from 'react-redux';
import ActionFn from 'store/actions';


const ClientPopup = (props) => {

  // console.log('getInfo', props.getInfo.userInfo.imgCompany);


  const closePopup = () => {
    props.ActionFn('SHOW_POPUP', {});
  }

  const imgCompany = props.getInfo.data && props.getInfo.data.userInfo.imgsAccount;
  const phoneCompany = props.getInfo.data && props.getInfo.data.userInfo.email;
  const mailCompany = props.getInfo.data && props.getInfo.data.userInfo.phones_main;

  const showPopupContent = () => {
    if (props.getInfo.data) {
      return (
        <div className="client-popup">
          <div className="close-popup"
            onClick={closePopup}
          >
            <i></i>
          </div>
          <div className="client-popup-body">
            <div className="clinet-face-container">
              <h2>{props.getInfo.data.card_name}</h2>
              <div
                className="client-face img-cover"
                style={{ backgroundImage: `url(${imgCompany})` }}
              >
                <img
                  src="images/temp/avatar-1.jpg"
                  alt="" />
              </div>
              <div className="video-ico"></div>
            </div>
            <div className="client-time">Был на сайте: 05.10.19</div>

            {props.getInfo.salary_priceFrom && (
              <div className="client-price">
                Р {props.getInfo.data.salary_priceFrom} {props.getInfo.data.salary_priceTo && '-'} {props.getInfo.data.salary_priceTo}
              </div>
            )}
            <div className="client-description">
              {props.getInfo.data.responsibilities}
            </div>
            <div className="client-popup-mail">
              {mailCompany}
            </div>
            <div className="client-popup-phone">
              {phoneCompany}
            </div>
            {/* <div className="client-info">
              {data.age && <div>Возраст: {data.age} года</div>}
              {data.experience && <div>Опыт: {data.experience}</div>}
            </div> */}

            {/* <div className="client-info">
              <div>Последнее место работы: </div>
              <div> <b>{data.lastworktype} </b></div>
            </div> */}
            {/* <div className="client-info">
              <div>{data.lastworkname}</div>
              <div>{data.worktime}</div>
            </div> */}
            {/* <div className="client-topic">
              <i className="ok-ico"></i>
              {data.jobtype && <h3>{data.jobtype}</h3>}
              {data.medbook && <h3>Медицинская книжка</h3>}
            </div> */}
          </div>
          <div className="client-popup-footer">
            <a className="btn btn--blue" href={`/catalog/vacancies/${props.getInfo.id}`}> Подробнее</a>
          </div>
        </div>
      )
    }

  }




  return (
    <div className="client-popup-col">
      {showPopupContent()}
    </div >
  )
}

const mapStateToProps = (state) => {

  return {
    getInfo: state.popupMapInfoReducer
  }
}


export default connect(mapStateToProps,
  {
    ActionFn
  })(ClientPopup);