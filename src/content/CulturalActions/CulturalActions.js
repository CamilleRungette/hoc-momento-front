import React, {useEffect, useState, useRef} from 'react';
import {Navbar, Footer, url, Lines1, Lines3, BasicModal, CarouselComp } from "./_index";
import { useParams } from 'react-router';
import axios from 'axios';
import { BsDownload } from "react-icons/bs";


const CulturalAction = () => {

  const id = useParams();
  const modalRef = useRef();

  const [action, setAction] = useState({
    title: "",
    description: "",
    links: [],
    gallery: []
  });

  useEffect(() => {
    axios.get(`${url}/action`, {
      params: id
    })
    .then(res => {
      setAction(res.data);
    })
    .catch(err => {
      console.log(err.message);
    })
  }, [id]);

const showModal = () => {
  modalRef.current.showModal()
}


  return (
    <div>
      <Navbar/>
      <div className='action-main'>
        <div className='action-lines1'>
          <Lines3 />
        </div>

        <div className='action-title'>
          <h1>{action?.place} </h1>
        </div>

        <div className='carousel'>
          <ul className='photos-line no-list-style pointer'  onClick={showModal} >
            {action.gallery.map((photo, i) => (
              <li key={i}><img src={photo} alt={action.title} className="photo"/></li>
            ))}
          </ul>
        </div>

        <div className='action-description' dangerouslySetInnerHTML={{__html:action?.description}}>
        </div>

        <div className='links'>
          <ul className='no-list-style'>
          {action?.links.map((link, i) => (
            link.type === "pdf" ? (
              <li key={action._id+i}>
                <a href={link.link} rel="noopener noreferrer" className='action-link' >  {link.name} </a> <BsDownload className='icon'/>
              </li>
            ) : (
              <li key={action._id+i}></li>
            )
          ))}
          </ul>
        </div>
        
      <BasicModal ref={modalRef} content={ <CarouselComp gallery={action.gallery} autoplay={false} />} />

      </div>
      <div className='end-lines'>
        <div className='action-lines2'>
          <Lines1 />
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default CulturalAction;