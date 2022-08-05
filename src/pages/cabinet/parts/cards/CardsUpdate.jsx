
const CardsUpdate = ({ update }) => {


  var timestamp2 = new Date(update.toDate()).toUTCString()

  return (
    <div className="resume-header-roof">
      <div className="resume-update"><span>Резюме обновлено: {timestamp2}</span></div>
    </div>
  )
}

export default CardsUpdate
