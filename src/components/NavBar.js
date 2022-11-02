import React from "react";
const NavBar = (props) => {
    return(
      <div className="navbar">
        <ul className="navbar-nav">
            <li className="nav-item">
                <a href="#" className="nav-link">
                   
                   <span className="link-text logo-text">HOME </span>
                </a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link">
                  
                   <span className="link-text logo-text">PRODUCTOS </span>
                </a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link">
                   
                   <span className="link-text">Winter Sale </span>
                </a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link">
                    <span className="link-text">New Collection </span>
                </a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link">
                   <i className="fa-solid fa-addres-book"></i>
                   <span className="link-text">All Shop </span>
                </a>
            </li>
            
        </ul>
      </div>
    )
  }

  export default NavBar;