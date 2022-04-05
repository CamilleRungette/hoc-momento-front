import React, {useRef} from 'react';
import {AiFillFacebook, AiOutlineInstagram, AiFillYoutube, AiOutlineMail} from "react-icons/ai";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Alert} from "./_index.js";
const HomeFooter = () => {

  const modalRef = useRef();

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Josefin Sans',
        'sans-serif',
      ].join(','),
    },
  });

  const copyLink = () => {
    let address = "hocmomentotheatre@gmail.com";
    navigator.clipboard.writeText(address);

    modalRef.current.showAlert()
  };

  return (
    <div className='home-footer-main'>
      <Alert ref={modalRef} severity={"success"} message={"L'adresse email est copiée dans le presse-papier"} />
      <div className='links'>
        <div className='credits link-part'>
          <div className='inside'>
            <h2>Crédits Photos</h2>
            <ul className='footer-home-list no-list-style '>
              <li>Marie Doreaux</li>
              <li>Yvan Loiseau</li>
              <li>Piero Oronzo</li>
              <li>Ariane Descoueyte</li>
            </ul>
          </div>
        </div>
        <div className='social-networks link-part'>
          <div className='inside'>
          <h2> Réseaux sociaux</h2>
          <ul className='footer-home-list no-list-style'>
            <li> <AiFillFacebook className='network-icon' color='#555555'/> <a className='link network' href='https://www.facebook.com/hoc.momento' target="_blank" rel="noopener noreferrer">Facebook</a> </li>
            <li> <AiOutlineInstagram className='network-icon instagram' color="#555555" /> <a className='link network' href="https://www.instagram.com/hoc.momento" target="_blank" rel="noopener noreferrer">Instagram</a> </li>
            <li> <AiFillYoutube className='network-icon' color="#555555" /> <a className='link network' href="https://www.youtube.com/channel/UCbv1zETvGrn4UORGvpyhZMA" target="_blank" rel="noopener noreferrer">Youtube</a> </li>
            <li> <AiOutlineMail className='network-icon' color='#555555' /> <span className='network pointer' onClick={copyLink}>hocmomentotheatre@gmail.com</span> </li>
          </ul>
          </div>
        </div>
        <div className='contact link-part'>
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

      <div className='supports-partners '>
        <div className='footer-logo'>
          <img src='/images/logos/logo_drac.png' />
        </div>
        <div className='footer-logo'>
          <img src='/images/logos/logo_saint_denis.png' />
        </div>
        <div className='footer-logo'>
          <img src='/images/logos/logo_saint_ouen.png' />
        </div>
        <div className='footer-logo'>
          <img src='/images/logos/logo_adami.png' />
        </div>
        <div className='footer-logo'>
          <img src='/images/logos/logo_condorcet.png' />
        </div>
        <div className='footer-logo'>
          <img src='/images/logos/logo_mains_doeuvres.png' />
        </div>
      </div>

      <div className='end-paragraph'>
        <p>Hoc Momento - 2022</p>
      </div>
    </div>
  )
}

export default HomeFooter