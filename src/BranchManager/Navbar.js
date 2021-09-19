import "./Navbar.css";
import Profile from "../ImgFolder/avatar.png"

const Navbar = ({sidebarOpen, openSidebar}) => {
    return(
        <nav className="navbar">
        <div className="navicon" onClick={ () => openSidebar()}>
            <i className= "fa fa-bars"> </i>
        </div>
        <div className="navbar__left">
        </div>
        <div className="navbar__right">
          <h5>{sessionStorage.getItem('username')}</h5>
          <a href="#">
          <img width="30" src={Profile} alt="" />
          </a>
          {/* <a href="#">
          <i className="fa fa-bell"></i>
          </a> */}
        </div>
      
      </nav>

    )
  
}

export default Navbar;
