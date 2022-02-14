import React, {useState} from "react";
import {Company, Shows, Home, CulturalActions, Agenda, PartnersSupports, Contact, Navbar} from "./_index.js";
import {useHistory} from "react-router-dom"

const MainApp = () => {
  const history = useHistory();

  const [content, setContent] = useState("home");

  const setState = (component) => {
    setContent(component);
    history.push(component)
  };

  return(
    <div>
      <Navbar setState={setState} />
      
      {content === "home"?
       <Home/> :
        <></> 
      }

      {content === "compagnie"?
       <Company/> :
        <></> 
      }

      {content === "spectacles"?
       <Shows/> :
        <></> 
      }

      {content === "actions-culturelles"?
       <CulturalActions/> :
        <></> 
      }

      {content === "agenda"?
       <Agenda/> :
        <></> 
      }

      {content === "partenaires-et-soutiens"?
       <PartnersSupports/> :
        <></> 
      }

      {content === "contact"?
       <Contact/> :
        <></> 
      }
      
    </div>
  )
};

export default MainApp;