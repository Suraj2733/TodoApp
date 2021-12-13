import React, {useState} from 'react';
//import Sec from './components/Sec';
import './App.css';

import Front from './components/Front';
import Header from './components/Header';

function About() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className='full'>
      <header>
        <h1 className='tlist'>To Do List</h1>
      </header>
      <Front inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
      <Header setTodos={setTodos} todos={todos} setInputText={setInputText} inputText={inputText}/>
    </div>
  );
}

export default About;