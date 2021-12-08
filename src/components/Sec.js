import React from 'react';
import './Sec.css';
import { Link } from 'react-router-dom';

export default function Sec() {
    return (
      <div className="star">
           <h1>To Do</h1>
        <header>
          <form id="to-do-form">
             <input type="text" placeholder="Enter Text"/>
             <Link to ={'/Thir'}>
             <button type="button" className="abc">+</button>
             </Link>
             
          </form>
        </header>
      </div>
     
     );
  }




//export default Sec; 
