import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Agenda from "../Agenda/Agenda";
import Company from "../Company/Company";
import Contact from "../Contact/Contact";
import CulturalActions from "../CulturalActions/CulturalActions";
import Home from "../Home/Home";
import PartnersSupports from "../PartnersSupports/PartnersSupports";
import Shows from "../Shows/Shows";

function Navigation() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/compagnie" component={Company} />
        <Route path="/spectacles" component={Shows} />
      </Switch>
    </Router>
  );
};

export default Navigation;
