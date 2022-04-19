import React, {useRef} from 'react';
import { BasicModal } from './_index';

const Event = ({event, date}) => {

  const modalRef = useRef();
  const year = 2021;
  const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]

  const showModal = () => {
    modalRef.current.showModal();
  };

  return (
    <div className='event-div'>
      <button className='primary-button-outline see-more' onClick={showModal}> Voir </button>
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
      <BasicModal ref={modalRef} content={
        <div className='event-description'>
          <div className='picture'>
            <img alt={event.title} src={event.photo} />
          </div>
          {event.description}
        </div>
        } />
    </div>
  )
}

export default Event;
