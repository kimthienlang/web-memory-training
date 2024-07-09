import '../styles/NavigationBar.css'

export default function NavigationBar() {
  return (
    <div className="nav-bar">
        <div className="nav-bar-item logo"></div>
        <div className="nav-bar-item options">
            <div className="option">Home</div>
            <div className="option">Learning</div>
            <div className="option">Testing</div>
            <div className="option">Daily challenge</div>
        </div>
        <div className="nav-bar-item search">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
