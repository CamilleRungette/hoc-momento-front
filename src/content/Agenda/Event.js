import React, {useRef} from 'react';
import { BasicModal } from './_index';

const Event = ({event, index}) => {

  const modalRef = useRef();
  const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]

  const showModal = () => {
    modalRef.current.showModal();
  };

  return (
    <div className='event-div'>    
      {event.dates.map(date => (
        new Date(date.startDate).getMonth() == index ? 
        <p className='event-item'>
         { event.description && <button className='primary-button-outline see-more' onClick={showModal}> Voir </button>}
          {new Date(date.startDate).getDate() === new Date(date.endDate).getDate() ?
            <span>Le {new Date(date.startDate).getDate()} {months[new Date(date.startDate).getMonth()]} </span>
          : 
          <span>
            Du {new Date(date.startDate).getDate()} 
              {new Date(date.startDate).getMonth() !== new Date(date.endDate).getMonth() ? (
              <span> {months[new Date(date.startDate).getMonth()]} </span>
              ):( <> </>)}
            au {new Date(date.endDate).getDate()} {months[new Date(date.endDate).getMonth()]}
          </span>}
          <h2 className='event-name'>{event.title}</h2> 

          {date.place && <p>{date.place} </p> }
          <p>{date.address ? <span>{date.address},</span> : <></>} {date.city ? date.city : <></>}</p>
        </p>
        : <></>
      ))}

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
