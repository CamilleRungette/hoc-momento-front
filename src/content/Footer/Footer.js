import React from 'react';
import {AiFillFacebook, AiOutlineInstagram, AiFillYoutube, AiOutlineMail} from "react-icons/ai";

const Footer = () => {
  return (
    <div className='footer-main'>
      <div>
      <ul className='footer-list no-list-style'>
        <li> <AiFillFacebook className='network-icon' color='#555555'/></li>
        <li> <AiOutlineInstagram className='network-icon instagram' color="#555555" /> </li>
        <li> <AiFillYoutube className='network-icon' color="#555555" /> </li>
        <li> <AiOutlineMail className='network-icon' color='#555555' /> </li>
      </ul>

      </div>
      <p> Hoc Momento - 2022</p>
    </div>
  )
}

export default Footer;
