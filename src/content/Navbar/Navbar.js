import React from 'react';

const Navbar = ({setState}) => {

  return (
    <div className="navbar-main">
      <div className='logo-div'>
        <img onClick={(e) => setState("home")} className='logo pointer' alt="Hoc Momento" src="/images/logo_noir.png"/>
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

export default Navbar;