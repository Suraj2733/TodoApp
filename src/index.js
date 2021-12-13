import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Contact from "./Contact";
/*import Sec from './components/Sec';
import Header from './components/Header';
import Front from './components/Front';
*/
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  <React.StrictMode>
    <Contact/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

/*
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App(){
  return(
    <Router>
      <div>
        <Link to='/'>Home</Link>
      </div>
      <div>
        <Link to="/sec">Secon</Link>
      </div>
      <div>
        <Link to="/thir">Third</Link>
      </div>
     
      <Switch>
        <Route exact path="/">
          <Front />
        </Route>
        <Route exact path="/sec">
          <Sec />
        </Route>
        <Route exact path="/thir">
          <Header />
        </Route>
      </Switch>
    </Router>
    
  )
}
ReactDOM.render(<App />, document.getElementById("root"));

// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/