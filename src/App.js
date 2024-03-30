import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Box from './component/Box';

function App() {

  let count = useSelector(state=>state.count);
  let id = useSelector(state=>state.id);
  let password = useSelector(state=>state.password);
  const dispatch = useDispatch();

  const addCount = ()=>{
    dispatch({type:"INCREMENT", payload:{num:5}})
  }

  const disCount = ()=>{
    dispatch({type:"DECREMENT", payload:{num:3}});
  }

  const login = ()=>{
    dispatch({type:"LOGIN",payload:{id:"nani", password:123}})
  }

  return (
    <div>
      <h1>count : {count}</h1>
      <button onClick={addCount}> + </button>
      <button onClick={disCount}> - </button>
      <div>
        <button onClick={login}>Login</button>
      </div>
      <div>id: {id} </div>
      <div>passowrd: {password}</div>
      <Box/>
    </div>
  );
}

export default App;
