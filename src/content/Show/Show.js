import React, {useEffect, useState, useRef} from 'react';
import {Navbar, Footer, url, Lines1, Lines3, BasicModal, CarouselComp } from "./_index";
import { useParams } from 'react-router';
import axios from 'axios';
import { BsDownload } from "react-icons/bs";


const Show = () => {

  const id = useParams();
  const modalRef = useRef();

  const [show, setShow] = useState({
    title: "",
    description: "",
    links: [],
    gallery: []
  });

  useEffect(() => {
    axios.get(`${url}/show`, {
      params: id
    })
    .then(res => {
      setShow(res.data);
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
      <div className='show-main'>
        <div className='show-lines1'>
          <Lines3 />
        </div>

        <div className='show-title'>
          <h1>{show?.title} </h1>
        </div>

        <div className='carousel'>
          <ul className='photos-line no-list-style pointer'  onClick={showModal} >
            {show.gallery.map((photo, i) => (
              <li key={i}><img src={photo} alt={show.title} className="photo"/></li>
            ))}
          </ul>
        </div>

        <div className='show-description' dangerouslySetInnerHTML={{__html:show?.description}}>
        </div>

        <div className='links'>
          <ul className='no-list-style'>
          {show?.links.map((link, i) => (
            link.type === "pdf" ? (
              <li key={show._id+i}>
                <a href={link.link} rel="noopener noreferrer" className='show-link' >  {link.name} </a> <BsDownload className='icon'/>
              </li>
            ) : (
              <li key={show._id+i}>
                <a href={link.link} rel="noopener noreferrer" className='show-link' >  {link.name} </a>
              </li>
            )
          ))}
          </ul>
        </div>
        
      <BasicModal ref={modalRef} content={ <CarouselComp gallery={show.gallery} autoplay={false} />} />

      </div>
      <div className='end-lines'>
        <div className='show-lines2'>
          <Lines1 />
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Show;