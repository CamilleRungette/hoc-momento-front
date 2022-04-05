import React, {forwardRef, useImperativeHandle, useEffect} from 'react';
import Alert from '@mui/material/Alert';


const AlertComponent = forwardRef(({severity, message}, ref) => {

  useEffect(() => {
    const alert = document.getElementsByClassName('alert')[0];
    if (alert) alert.style.display = "none";
  }, []);

  const closeAlert = () => {
    const alert = document.getElementsByClassName('alert')[0];
    alert.style.display = "none";
  };

  useImperativeHandle(ref, () => ({
    showAlert() {
      const alert = document.getElementsByClassName('alert')[0];

      alert.style.display = "flex";

      setTimeout(function() {
        alert.style.display = "none";
      }, 4000);
    }
  }));

  return (
    <Alert severity={severity}  onClose={closeAlert} className='alert'>{message}</Alert>
  )
});

export default AlertComponent;
