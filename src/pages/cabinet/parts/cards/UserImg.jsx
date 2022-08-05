
const UserImg = ({ img }) => {
  return (
    <div className="resume-face-container">
      <div
        className="resume-face img-cover"
        style={{ backgroundImage: `url(${img})` }}
      >
        <img src={img} alt="" />
      </div>
    </div>
  )
}

export default UserImg
