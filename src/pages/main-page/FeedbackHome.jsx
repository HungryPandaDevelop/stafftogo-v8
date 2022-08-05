function FeedbackHome() {
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
            <form className="form main-grid">
              <input className="input-decorate col-4 require" type="text" placeholder="Фамилия" />
              <input className="input-decorate col-4 require" type="text" placeholder="Имя" />
              <input className="input-decorate col-4 require" type="text" placeholder="Отчество" />
              <input className="phone-mask input-decorate col-6 require" type="text" placeholder="+7 (___) ___ - __ - __" />
              <input className="input-decorate check-mail col-6" type="email" placeholder="Email" />

              {/* <select className="style-select" >
                <option>lorem</option>
                <option>ipusm</option>
                <option>scientist</option>
                <option>blog</option>
                <option>red</option>
              </select>

              <select className="style-select" >
                <option>lorem</option>
                <option>ipusm</option>
                <option>scientist</option>
                <option>blog</option>
                <option>red</option>
              </select> */}

              <textarea className="input-decorate col-12" placeholder="Комментарий"></textarea>
              <div className="checkbox col-12">
                <label>Я даю свое согласие на обработку персональных данных
                  <input type="checkbox" /><span></span>
                </label>
              </div>
              <div className="form-btn-container col-12">
                <input className="btn btn-send btn--orangewhite" type="submit" value="Отправить" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default FeedbackHome
