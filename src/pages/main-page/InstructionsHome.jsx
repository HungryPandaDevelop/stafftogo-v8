import img1 from 'front-end/images/inst-0.svg'
import img2 from 'front-end/images/inst-1.svg'
import img3 from 'front-end/images/inst-2.svg'
import img4 from 'front-end/images/inst-3.svg'

const InstructionsHome = () => {
  return (
    <div>
      <section className="instructions_home">
        <div className="instructions_home-header main-grid">
          <div className="col-5">
            <h2>Разместите профайл с видеоприветствием и все!</h2>
          </div>
          <div className="col-4"><img className="instructions_home-img" src={img1} alt="" /></div>
          <div className="col-3">
            <p>Расскажите подробно в вашем резюме или вакансии о своих пожеланиях к работе: условия работы, оплаты и все остально: что с вашей точки зрения может заинтересовать будущего работодателя или соискателя. На нашем портале ваш профайл может быть дополнен видео приветствием: которое увеличит ваши шансы на выбор в вашу пользу.</p>
          </div>
        </div>
        <div className="instructions_home-body main-grid">
          <div className="instructions_home-item col-4">
            <h3>Выбирайте работу или сотрудника даже на 1 час</h3>
            <div className="img-container"><img className="instructions_home-thumb" src={img2} alt="" /></div>
            <p>На нашем портале можно подобрать специалистов и работу даже для неполной или краткосрочной занятости. Выбирайте удобную для вас дату и время и подбирайте привелкательные для вас проекты.</p>
          </div>
          <div className="instructions_home-item col-4">
            <h3>Используйте видео чат для обсуждения деталей</h3>
            <div className="img-container"><img className="instructions_home-thumb" src={img3} alt="" /></div>
            <p>Возможность общения с работодателем или соискателем, не покидая своей текущей локации. Статус “online” подскажет вам о том, что вы можете открыть текстовый или видео чат и перейти к общению буквально за 5 секунд.</p>
          </div>
          <div className="instructions_home-item col-4">
            <h3>Оставляйте<br /> реальные отзывы</h3>
            <div className="img-container"><img className="instructions_home-thumb" src={img4} alt="" /></div>
            <p>Вы можете написать отзыв про любого бывшего сотрудника или работодателя. После модерации отзыв станет доступным для прочтения всем пользователям портала. Реальные отзывы помогут вам сделать безошибочный выбор.</p>
          </div>
          <div className="col-12 btn-container"> <a className="btn btn--orange" href="#">Регистрация </a></div>
        </div>
      </section>
    </div>
  )
}

export default InstructionsHome