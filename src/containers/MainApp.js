import React, {useEffect, useState} from "react";
import {Company, Home, Agenda, Navbar, NavbarHome, Footer, Navigation} from "./_index.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";

const MainApp = () => {

  const location = useLocation();

  const [loc, setLoc] = useState(location);


  useEffect(() => {
  
  }, [loc])
  


  return(
    <Router className="main-app">
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/compagnie" component={Company} />
        <Route path="/agenda" component={Agenda} />
      </Switch>

    
    </Router>
  )
};

export default MainApp;