import React from 'react';




const Fornt = ({setInputText, todos, setTodos, inputText}) => {
    // here javaScript
    
    const inputTextHandler = (e) => {
      
        console.log(e.target.value);
        setInputText(e.target.value);
    };

    const submitTidiHandler=(e)=>{
      if(inputText===""){
        alert('Please Enter Items');
        e.preventDefault();
      }
      else{
        e.preventDefault();
        setTodos([
            ...todos, 
            {text: inputText, completed: false, id:Math.random() *1000}
        ]);
        setInputText("");
      }
    };
    return (
      <div className='cse'>
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" placeholder="Enter Item" className="inn" />
            <button onClick={submitTidiHandler} className="btnn" type="submit"> +</button>
            
            
            
            
            
            
            
        </form>
        </div>
    );
};

export default Fornt;

/*import React from 'react';
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




//export default Sec; */
