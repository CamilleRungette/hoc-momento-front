import React, {useEffect, useState} from 'react';
import {Navbar, Footer, url, Lines1, Lines2, Lines3} from "./_index.js";
import axios from 'axios';

const Agenda = () => {

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
})
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
                  <div className='event-div'>
                    <h2 className='event-month'>{months[new Date(event.show[0].startDate).getMonth() +1]} {year} </h2>
                    <p>
                      {new Date(event.show[0].startDate).getDate() === new Date(event.show[0].endDate).getDate() ?
                        <span>Le {new Date(event.show[0].startDate).getDate()} {months[new Date(event.show[0].startDate).getMonth() +1]} </span>
                      : 
                      <span>
                        Du {new Date(event.show[0].startDate).getDate()} 
                          {new Date(event.show[0].startDate).getMonth() !== new Date(event.show[0].endDate).getMonth() ? (
                          <span> {months[new Date(event.show[0].startDate).getMonth() +1]} </span>
                          ):( <> </>)}
                        au {new Date(event.show[0].endDate).getDate()} {months[new Date(event.show[0].endDate).getMonth() +1]}
                      </span>}
                    </p>

                    <h2 className='event-name'>{event.title}</h2> 
                
                    {event.place ? <p>{event.show[0].place} </p> :  <></>}
                    <p>{event.show[0].address ? <span>{event.show[0].address},</span> : <></>} {event.show[0].city ? event.show[0].city : <></>}</p>
                  </div>
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