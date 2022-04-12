import React, {useState, useEffect, useLayoutEffect} from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { url } from "./_index.js";
import { FiMenu } from "react-icons/fi";

const NavbarHome = () => {

  const [navbarStyle, setNavbarStyle] = useState(true);
  const [showsContent, setShowsContent] = useState(<div className='loading-div'><img src="/images/loading-buffering.gif" alt='shows are loading' /></div>)
  const [actionsContent, setActionsContent] = useState(<div className='loading-div'><img src="/images/loading-buffering.gif" alt='shows are loading' /></div>)
  const [size, setSize] = useState([0, 0]);

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);

    axios.get(`${url}/shows`)
    .then(res => {
      let content = 
      <ul className='no-list-style menu-list popover-list'>
        {res.data.map(show => (
          <li key={show._id} className='pointer'> <Link to={`/spectacle/${show._id}`}>{show.title}</Link> </li>
        ))}
      </ul>
      setShowsContent(content);
    })
    .catch(error => {
      console.log(error);
    });

    axios.get(`${url}/actions`)
    .then(res => {
      let content = <ul className='no-list-style menu-list popover-list'>
      {res.data.map(action => (
        <li key={action._id} className='pointer'><Link to={`/action-culturelle/${action._id}`}> {action.place} </Link></li>
      ))}
      </ul>
      setActionsContent(content)
    });
  },[]);

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // console.log(size);

  const changeBackground = () => {
    if (window.scrollY > 900){
      setNavbarStyle(true);
    } else {
      setNavbarStyle(false);
    };
  };

  const showPopoverShows = () => {
    let pop = document.getElementById('popover-shows');
    pop.style.display = "block";
  };

  const hidePopoverShows = () => {
    let pop = document.getElementById('popover-shows');
    pop.style.display = "none";
  }; 
  
  const showPopoverActions = () => {
    let pop = document.getElementById('popover-actions');
    pop.style.display = "block";
  };

  const hidePopoverActions = () => {
    let pop = document.getElementById('popover-actions');
    pop.style.display = "none";
  };

  const openMenu = () => {
    let pop = document.getElementById('menu');
    pop.style.display = pop.style.display === "none" ? "block" : "none";
  }

  return (
    <div className={navbarStyle ? "navbar-main" : "navbar-home"}>
      <div className='logo-div'>
        <Link className='link' to="/"><img className='logo pointer' alt="Hoc Momento" 
        src={navbarStyle ? "/images/logo_noir.png" : "/images/logo_blanc.png" }
        /></Link>
      </div>
      <ul className='navbar-list no-list-style flex-space-between'>
        <li className='pointer'><Link className='link' to="/compagnie">Compagnie </Link></li> 
        <li className='pointer popover-div' onMouseEnter={showPopoverShows} onMouseLeave={hidePopoverShows}>Spectacles
          <div id="popover-shows" className='popover' >
            {showsContent}
          </div>
        </li>
        <li className='pointer' onMouseEnter={showPopoverActions}  onMouseLeave={hidePopoverActions}>Actions Culturelles
        <div id="popover-actions" className='popover'>
            {actionsContent}
          </div>
        </li>
        <li className='pointer'><Link className='link' to="/agenda">Agenda </Link></li> 
      </ul>
      <div className='menu-icon-div popover-div' onClick={openMenu}><FiMenu className='menu-icon pointer' /> 
        <div id="menu" className='popover popover-menu'> 
          <ul className='menu-list no-list-style'>
            <li className='pointer'><Link className='link' to="/compagnie">Compagnie </Link></li> 
           
            <li className='pointer'><Link className='link' to="/agenda">Agenda </Link></li> 
          </ul>
        </div>
      </div>
    </div>
  )
}; 

export default NavbarHome;