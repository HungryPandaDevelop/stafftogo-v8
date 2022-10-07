

import { connect } from 'react-redux';
import RenderFormAccount from 'components/forms/RenderFormAccount';

import emailjs from '@emailjs/browser';

const FeedbackHome = ({ fields, dataForm }) => {
  const onSubmitIn = () => {
    console.log(dataForm.values);


    emailjs.send('service_yew9khi', 'template_ld1qsqs', dataForm.values, '8uwo94j0rrU71YiK6')
      .then((result) => {
        console.log(result.text);
        console.log('form send')
      }, (error) => {
        console.log(error.text);
      });

  }
  return (
    <>
      <section className="feedback_home">
        <div className="main-grid">
          <div className="col-6">
            <h2>Оставь заявку на услуги профессионального рекрутера из нашей команды</h2>
          </div>
          <div className="col-6"></div>
          <div className="col-6 checkbox-container">
            <form className="form main-grid">
              <div className="checkbox col-6">
                <label>Разработка стратегии поиска кандидата
                  <input type="checkbox" /><span></span>
                </label>
              </div>
              <div className="checkbox col-6">
                <label>Подбор и оценка заявок, включая проверку документов
                  <input type="checkbox" /><span></span>
                </label>
              </div>
              <div className="checkbox col-6">
                <label>Тесная коммуникация с Заказчиком
                  <input type="checkbox" /><span></span>
                </label>
              </div>
              <div className="checkbox col-6">
                <label>Проведение собеседований
                  <input type="checkbox" /><span></span>
                </label>
              </div>
              <div className="checkbox col-6">
                <label>Формулировка требований к соискателю или работодателю
                  <input type="checkbox" /><span></span>
                </label>
              </div>
              <div className="checkbox col-6">
                <label>Составление и презентация Job Offer
                  <input type="checkbox" /><span></span>
                </label>
              </div>
              <div className="checkbox col-6">
                <label>Продвижение вакансии или резюме на портале
                  <input type="checkbox" /><span></span>
                </label>
              </div>
              <div className="checkbox col-6">
                <label>Подготовка и проверка Трудовых Договоров
                  <input type="checkbox" /><span></span>
                </label>
              </div>
            </form>
          </div>
          <div className="col-6 feedback-container">
            <RenderFormAccount
              btnSaveText="Сохранить изменения"
              objFields={fields}
              orderFields={fields.order}
              onSubmitProps={onSubmitIn}
            />
          </div>
        </div>
      </section>
    </>
  )
}



const mapStateToProps = (state) => {

  const formReducer = state.form && state.form.singleInput;

  return {
    fields: state.fieldsFeedback, // база полей
    dataForm: formReducer,
  }
}


export default connect(mapStateToProps)(FeedbackHome);