import React, {useEffect, useState, useRef} from 'react';
import {Navbar, Footer, url, Lines3, BasicModal, Event} from "./_index.js";
import axios from 'axios';

const Agenda = () => {

  const modalRef = useRef();
  const [events, setEvents] = useState([]);
  const date = new Date();
  // const year = date.getFullYear();
  const year = 2020;
  const month = date.getMonth();
  const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]

  useEffect(() => {
    axios.get(`${url}/events`)
    .then(res => {
      if (res.status === 200) setEvents(res.data)
    })
    .catch(err => {
      console.log("error:", err);
    })
  },[]);

  events.map(event => {
    if (new Date(event.show[0].startDate).getFullYear() == year ){
      // console.log(new Date(event.show[0].startDate).getMonth());
      console.log(event);
    };
  });

  const showModal = () => {
    modalRef.current.showModal();
  };

  return (
    <div>
      <Navbar />
      <div className='agenda-main'>
        <div className='agenda-title'>
          <h1>Agenda {year} </h1>
        </div>

        <div className='agenda-lines1'>
          <Lines3 />
        </div>

        <div className='future-events'>
          <ul className='no-list-style'>
            {events.map(event => (
              new Date(event.show[0].startDate).getFullYear() == year ?(
                <li key={event._id} className="event" >
                  <Event event={event} />
                </li>
              ):( 
              <></>)
            ))}
          </ul>

        </div>

        <div className='past-events'>

        </div>
      </div>
      <Footer/>
    </div>
  )
}; 

export default Agenda;