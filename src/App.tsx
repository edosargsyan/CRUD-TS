import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { FC } from 'react';
import Main from './components/Main';
import DeleteUser from './components/deleteUser';
import { Link } from 'react-router-dom';
const App:FC=()=>{
  return (
    <div className='name'>
       <Main/>
    </div>
  );
}

export default App;
