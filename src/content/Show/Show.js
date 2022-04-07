import React, {useEffect, useState, useRef} from 'react';
import {Navbar, Footer, url, Lines1, Lines3, BasicModal} from "./_index";
import { useParams } from 'react-router';
import axios from 'axios';
import { BsDownload } from "react-icons/bs";
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';


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
      console.log(err);
    })
  }, [id]);

  var items = [
    {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!"
    },
    {
        name: "Random Name #2",
        description: "Hello World!"
    }
]

const modal = () => {
  modalRef.current.showModal()
}

console.log(show);

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
          <ul className='photos-line no-list-style'>
            {show.gallery.map(photo => (
              <li><img src={photo} alt={show.title} className="photo" /></li>
            ))}
          </ul>

        {/* <Carousel
          NextIcon={<BsDownload/>}
          PrevIcon={<BsDownload/>}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel> */}

        </div>

        <div className='show-description' dangerouslySetInnerHTML={{__html:show?.description}}>
        </div>

        <div className='links'>
          <ul className='no-list-style'>
          {show?.links.map((link, i) => (
            link.type == "pdf" ? (
              <li key={show._id+i}>
                <a href={link.link} rel="noopener noreferrer" className='show-link' >  {link.name} </a> <BsDownload className='icon'/>
              </li>
            ) : (
              <li key={show._id+i}></li>
            )
          ))}
          </ul>
        </div>
        

      </div>
      <div className='end-lines'>
        <div className='show-lines2'>
          <Lines1 />
        </div>
      </div>
      <Footer/>
      <BasicModal ref={modalRef} content={<h1> Helllo</h1>} />
    </div>
  )
}

export default Show;

function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}