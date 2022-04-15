import React, { useEffect, useState, useLayoutEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { url } from "./_index.js"
import { FiMenu } from "react-icons/fi";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Navbar = () => {

  const [showsContent, setShowsContent] = useState(<div className='loading-div'><img src="/images/loading-buffering.gif" alt='shows are loading' /></div>)
  const [actionsContent, setActionsContent] = useState(<div className='loading-div'><img src="/images/loading-buffering.gif" alt='shows are loading' /></div>)
  const [size, setSize] = useState(0);

  useEffect(() => {
    axios.get(`${url}/shows`)
    .then(res => {
      let content = <ul className='no-list-style menu-list popover-list navbar-list'>
      {res.data.map(show => (
        <li key={show._id} className='pointer'><Link to={`/spectacle/${show._id}`}>{show.title}</Link> </li>
      ))}
      </ul>
      setShowsContent(content);
    })
    .catch(error => {
      console.log(error);
    });

    axios.get(`${url}/actions`)
    .then(res => {
      let content = <ul className='no-list-style menu-list popover-list navbar-list'>
      {res.data.map(action => (
        <li key={action._id} className='pointer'><Link to={`/action-culturelle/${action._id}`}>{action.place}</Link></li>
      ))}
      </ul>
      setActionsContent(content)
    })
    .catch(error => {
      console.log(error);
    });

  }, []);

  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);



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
    pop.style.display = pop.style.display === "block" ? "none" : "block";
  };

  const closeMenu = () => {
    let pop = document.getElementById('menu');
    pop.style.display = "none";
  };

  return (
    <div className=" navbar navbar-main">
      <div className='logo-div'>
        <Link className='link' to="/"><img className='logo pointer' alt="Hoc Momento" src="/images/logo_noir.png"/></Link>
      </div>
      {size > 1000 ? 
        <ul className='navbar-list no-list-style flex-space-between'>
          <li className='pointer'><Link className='link' to="/compagnie"> Compagnie </Link></li>
          <li className='pointer popover-div' onMouseEnter={showPopoverShows} onMouseLeave={hidePopoverShows}>Spectacles
            <div id="popover-shows" className='popover' >
              {showsContent}
            </div>
          </li>
          <li className='pointer popover-div' onMouseEnter={showPopoverActions}  onMouseLeave={hidePopoverActions}>Actions Culturelles
          <div id="popover-actions" className='popover'>
              {actionsContent}
            </div>
          </li>        
          <li className='pointer'><Link className='link' to="/agenda">Agenda </Link></li>
        </ul>
      :
        <div className='menu-icon-div popover-div'><FiMenu onClick={openMenu} className='menu-icon pointer' /> 
          <div id="menu" className='popover popover-menu' onMouseLeave={closeMenu} > 
            <ul className='menu-list no-list-style navbar-list'>
              <li onClick={closeMenu} id="company" className='pointer'><Link className='link' to="/compagnie">Compagnie </Link></li> 
              <Accordion className='accordion'>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className='icon' />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <li className='pointer'>Spectacles</li>
                </AccordionSummary>
                <AccordionDetails>
                  {showsContent}
                </AccordionDetails>
              </Accordion>
              <div></div>
              <Accordion className='accordion'>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className='icon' />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <li className='pointer'>Actions Culturelles</li>
                </AccordionSummary>
                <AccordionDetails>
                  {actionsContent}
                </AccordionDetails>
              </Accordion>
              <li onClick={closeMenu} className='pointer'><Link className='link' to="/agenda">Agenda </Link></li> 
            </ul>
          </div>
        </div>
      }
     
    </div>
  )
}; 

export default Navbar;