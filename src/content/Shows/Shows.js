import React, {useEffect} from 'react';
import axios from 'axios';

const Shows = () => {

  useEffect(() => {

    axios.get('/spectacles')
    .then(res => {
      console.log(res);
    })

  }, [])

  return (
    <div className='shows-main'>
      <h1>Spectacles</h1>
    </div>
  )
}; 

export default Shows;