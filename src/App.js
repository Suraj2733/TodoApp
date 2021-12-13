import React from 'react';
//import reactRouterDom from 'react-router-dom';
import './components/Front.css';
//import Front from './components/Front';
//import Header from './components/Header';
import {Link} from "react-router-dom";
function App() {
 
 
  return (
   
    <div className='ctr'>
  
      <div className='Ap'>
        <header>
      <h1 className='welcome' >Welcome</h1>
      <p className='username'>Username</p>
      </header>
      <input className='in' type='text' placeholder="Enter Name"/><br/>
      
      <Link to = "/Sec">
        <button type='button' className='x'>START</button>
     </Link>
      </div>
      </div>
   
   );
   
   
   
   
   
  
}

export default App;
/*import logo from './logo.svg';
import './App.css';


import Sec from './components/Sec';
import Header from './components/Header';
import Front from './components/Front';
import TodosList from './components/TodosList';


import React, {useState} from "react";

import {
  BrowserRouter as Router,
  Switch,                                         
  Route,
  Link
} from "react-router-dom";
import { append } from 'express/lib/response';


const App =() => {
  const[input, setInput] = useState("");
  const[todos,setTodos] = useState([]);
  return (
    <div className="container">
      <div className="app-warper">
        <div> 
          <Header />
        </div>
      <div>
        <Front 
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}

      />
      </div>
      <div> 
        <TodosList todos={todos} setTodos={setTodos}/>
      </div>
      <div>
        <Sec todos={todos} setTodos={setTodos}/>
        input={input}
setInput={setInput}
todos={todos}
setTodos={setTodos}
      </div>
    </div>
    </div>
  );
}


//export default App;
*/






































