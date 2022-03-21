import React from 'react';
import {AiFillFacebook, AiOutlineInstagram, AiFillYoutube, AiOutlineMail} from "react-icons/ai";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const HomeFooter = () => {

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Josefin Sans',
        'sans-serif',
      ].join(','),
    },
  });

  return (
    <div className='home-footer-main'>
      <div className='links'>
        <div className='credits'>
          <h2>Crédits Photos</h2>
          <ul className='footer-list no-list-style '>
            <li>Marie Doreaux</li>
            <li>Yvan Loiseau</li>
            <li>Piero Oronzo</li>
            <li>Ariane Descoueyte</li>
          </ul>
        </div>
        <div className='social-networks'>
          <h2> Réseaux sociaux</h2>
          <ul className='footer-list no-list-style'>
            <li> <AiFillFacebook className='network-icon' color='#555555'/> <a>Facebook</a> </li>
            <li> <AiOutlineInstagram className='network-icon instagram' color="#555555" /> <a>Instagram</a> </li>
            <li> <AiFillYoutube className='network-icon' color="#555555" /> <a>Youtube</a> </li>
            <li> <AiOutlineMail className='network-icon' color='#555555' /> <a>contact@gmail.com</a> </li>
          </ul>
        </div>
        <div className='contact'>
          <h2> Contactez-nous</h2>
          <ThemeProvider theme={theme}>
            <Box
            component="form"
            className='contact-form'
            >
              <TextField
                label="Nom"
                size="small"
                className='contact-input'
              />
              <TextField
                label="Email"
                size="small"
                className='contact-input'
              />
              <TextField
                label="Message"
                multiline
                size="small"
                rows={4}
                className='contact-input'
              />

              <button className='primary-button'>Envoyer</button>
            </Box>
          </ThemeProvider>
        </div>
      </div>

      <div className='supports-partners'>

      </div>
    </div>
  )
}

export default HomeFooter