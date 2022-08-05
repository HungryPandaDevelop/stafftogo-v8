
const Controls = ({ onEdit, onDelete, onActivate, id, name, currentCard }) => {
  return (
    <div className="btn-container">
      <div>
        <div
          className='btn btn--orange btn--smaill ico-in'
          onClick={() => onEdit(id)}
        >
          <i>
            <span className="back-ico"><img src="images/icons/edit-black.svg" alt="" /></span>
            <span className="front-ico"><img src="images/icons/edit-white.svg" alt="" /></span>
          </i>
          <span>
            Редактировать
          </span>
        </div>
      </div>

      <div>
        <div
          className="btn btn--blue btn--smaill ico-in"
          onClick={() => onDelete(id, name)}
        >
          <i>
            <span className="back-ico"><img src="images/icons/trash-black.svg" alt="" /></span>
            <span className="front-ico"><img src="images/icons/trash-white.svg" alt="" /></span>
          </i>
          <span>
            Удалить
          </span>
        </div>
      </div>
      <div>

        <div
          className={`ico-in btn ${currentCard === id && `btn--green`} `}
          onClick={() => onActivate(id)}
        >
          <span>
            активировать
          </span>
        </div>
      </div>
    </div>
  )
}

export default Controls
