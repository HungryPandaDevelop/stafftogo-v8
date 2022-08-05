
const UserInfo = ({ name, phone, mail, }) => {
  return (
    <div className="resume-info resume-info--more">
      <div className="resume-delimentr"></div>
      <h2>{name}</h2>
      <ul className="ln">
        {phone && <li><a href="#"><i className="phone-ico--black"></i><span>{phone}</span></a></li>}
        {mail && <li><a href={`mailto:${mail}`}><i className="mail-ico--black"></i><span>{mail}</span></a></li>}
        {/* <li><a href="/"><i className="marker-ico--black"></i><span>Показать на карте</span></a></li> */}
      </ul>
    </div>
  )
}

export default UserInfo
