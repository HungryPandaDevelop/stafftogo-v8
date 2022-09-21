
const Menu = ({ joinCode, setJoinCode, setPage }) => {
  return (
    <div className="home">
      <div className="create box">
        <button onClick={() => setPage("create")}>Создать комнату</button>
      </div>

      <div className="answer box">
        <input
          value={joinCode}
          onChange={(e) => setJoinCode(e.target.value)}
          placeholder="Join with code"
        />
        <button onClick={() => setPage("join")}>Answer</button>
      </div>
    </div>
  )
}

export default Menu
