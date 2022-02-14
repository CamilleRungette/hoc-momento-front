import "./app/style.css";
import MainApp from "./containers/MainApp";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";



function App() {
  return (
    <Router>
      <MainApp/>
    </Router>
  );
}

export default App;
