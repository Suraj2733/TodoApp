import React from 'react';
import './Front.css';
import { Link } from 'react-router-dom';




export default function Front() {
    return (
      
        <div className='App'>
          <header>
        <h1>Welcome</h1>
        <p>Username</p>
        </header>
        <input type='text' placeholder="Enter Name"/><br/>
        <Link to ={'/sec'}>

          <button type='button' className='x'>Start</button>
        </Link>
        </div>
     
     );
  }




//export default Sec; 
