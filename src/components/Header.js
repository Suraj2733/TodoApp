import React from 'react';
import Sec from './Sec';


const Header = ({todos, setTodos, setInputText, inputText}) => {
    return (
        <div classNmae="todo-container">
            <ul classNmae="todo-list">
                {todos.map((todo) => (
                    <Sec 
                    todo={todo}
                        todos={todos} 
                        setTodos={setTodos}
                        key={todo.id} 
                        text={todo.text} 
                        setInputText={setInputText}
                        inputText={inputText}     
                    />
                ))}
            </ul>             
        </div>
    );
};
export default Header;
/*import edit from './edit.png';
import delete1 from './delete1.png';
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


export default function Header() {
    return (
      <div className="Cse">
          <h1>Todo List</h1>
      <header>
          <div>
          <h2>Show Items</h2>       
    <table >
     <tr>
       <td className='j'>
          <td>Mango</td>
          <td>  
             <Link to ={'/sec'}>   
             <button className="m" >  
             <img src={edit} 
             className="o"/>  </button> 
             </Link>
             <button className="n">   
             <img src={delete1} 
              className="l"/> </button > 
          </td>
          </td>     
      </tr>
      <button className='r'>Clear All Items</button>
      <Link to ={'/sec'}>  
      <button className='d'>Add Items</button>
      </Link>
    </table>
    </div>
    <div>
    </div>
    </header>
    </div>
     
     );
  }




//export default Sec; */
