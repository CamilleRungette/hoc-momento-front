import React, {useRef} from 'react';
import { BasicModal } from './_index';

const Event = ({event, index}) => {

  const modalRef = useRef();
  const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]

  const showModal = () => {
    modalRef.current.showModal();
  };


  return (
    <div className='event-div' key={Math.floor(Math.random() * 10000)}>    
      {event.dates.map(date => (
        new Date(date.startDate).getMonth() === index ? 
        <p className='event-item' key={Math.floor(Math.random() * 10000)}>
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
          </span> }
          {new Date(date.startDate).getHours()-2 === new Date(date.endDate).getHours()-2 ? (
            <span> à {new Date(date.startDate).getHours()-2}h </span>
          ) : (
            <span> de {new Date(date.startDate).getHours()-2} h à {new Date(date.endDate).getHours()-2}h </span>
          )}
          <br/>
          <span className='event-name'>{event.title}</span> 
          <br/>

          {date.place && <span>{date.place} </span> }
          <span>{date.address ? <span>{date.address},</span> : <></>} {date.city ? date.city : <></>}</span>
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
