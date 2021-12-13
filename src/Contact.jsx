import React from "react";
import App from "./App";
import About from "./About";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
  export default function Contact(){
    return(
      <Router>
        <div>
          <Link to='/'>Home</Link>
        </div>
        <div>
          <Link to="/sec">Secon</Link>
        </div>
        
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route exact path="/sec">
            <About />
          </Route>
         
          
          
        </Switch>
      </Router>
      
    );
  };

  
  

  
  
  
  