import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';

const NavbarHome = ({setState}) => {

  const location = useLocation();

  const [navbarStyle, setNavbarStyle] = useState(true);

  useEffect(() => {
      changeBackground();
    window.addEventListener("scroll", changeBackground);
  }, [location])

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
        <img onClick={(e) => setState("home")} className='logo pointer' alt="Hoc Momento" 
        src={navbarStyle ? "/images/logo_noir.png" : "/images/logo_blanc.png" }
        />
      </div>

      <ul className='navbar-list no-list-style flex-space-between'>
        <li className='pointer' onClick={(e) => setState("compagnie")}>Compagnie</li>
        <li className='pointer' onClick={(e) => setState("spectacles")}>Spectacles</li>
        <li className='pointer' onClick={(e) => setState("actions-culturelles")}>Actions Culturelles</li>
        <li className='pointer' onClick={(e) => setState("agenda")}>Agenda</li>
      </ul>
    </div>
  )
}; 

export default NavbarHome;