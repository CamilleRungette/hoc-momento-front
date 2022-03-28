import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
 

const NavbarHome = () => {

  const [navbarStyle, setNavbarStyle] = useState(true);

  useEffect(() => {
      changeBackground();
    window.addEventListener("scroll", changeBackground);
  },[])

  const changeBackground = () => {
    if (window.scrollY > 900){
      setNavbarStyle(true);
    } else {
      setNavbarStyle(false);
    };
  };

  return (
    <div className={navbarStyle ? "navbar-main" : "navbar-home"}>
      <div className='logo-div'>
        <Link className='link' to="/"><img className='logo pointer' alt="Hoc Momento" 
        src={navbarStyle ? "/images/logo_noir.png" : "/images/logo_blanc.png" }
        /> </Link>
      </div>

      <ul className='navbar-list no-list-style flex-space-between'>
        <li className='pointer'><Link className='link' to="/compagnie">Compagnie </Link></li> 
        <li className='pointer'><Link className='link' to="/">Spectacles </Link></li> 
        <li className='pointer'><Link className='link' to="/">Actions Culturelles </Link></li> 
        <li className='pointer'><Link className='link' to="/agenda">Agenda </Link></li> 
      </ul>
    </div>
  )
}; 

export default NavbarHome;