import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

const Navbar = () => {

  const [shows, setShows] = useState([]);
  const [actions, setActions] = useState([]);

  useEffect(() => {

    axios.get('/shows')
    .then(res => {
      setShows(res.data.shows);
    });

    axios.get('/actions')
    .then(res => {
      setActions(res.data.actions);
    })
  }, []);


  const showPopover = e => {
    if (e.target.className.includes("shows")){
      document.getElementById('popover-shows').style.display = 'block';
    }
  };

  const hidePopover = e => {
    if (e.target.className.includes("shows")){
      document.getElementById('popover-shows').style.display = 'none';
    }
  };

  return (
    <div className="navbar-main">
      <div className='logo-div'>
        <Link className='link' to="/"><img className='logo pointer' alt="Hoc Momento" src="/images/logo_noir.png"/></Link>
      </div>

      <ul className='navbar-list no-list-style flex-space-between'>
        <li className='pointer'><Link className='link' to="/compagnie"> Compagnie </Link></li>
        <li className='pointer popover-main shows' onMouseEnter={showPopover}>Spectacles
        <div id="popover-shows" className='popover shows' onMouseLeave={hidePopover} >
            <ul className='no-list-style shows'>
              {shows.map(show => (
                <li key={show.id} >{show.title} </li>
              ))}
            </ul>
          </div> 
         </li>
        <li className='pointer popover-main actions'>Actions Culturelles
        <div id="popover-shows" className='popover shows' onMouseLeave={hidePopover} >
            <ul className='no-list-style shows'>
              {actions.map(action => (
                <li key={action.id} >{action.title} </li>
              ))}
            </ul>
          </div> 
        </li>
        <li className='pointer'><Link className='link' to="/agenda">Agenda </Link></li>
      </ul>
     
    </div>
  )
}; 

export default Navbar;