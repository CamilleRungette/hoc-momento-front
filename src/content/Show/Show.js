import React from 'react';
import {Navbar, Footer} from "./_index";
import { useParams } from 'react-router';

const Show = () => {

  const id = useParams();

  console.log(id);
  return (
    <div>
      <Navbar/>
      <div className='show-main'>

      </div>
      <Footer/>
    </div>
  )
}

export default Show;