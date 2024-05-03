// import logo from './logo.svg';
import { type } from '@testing-library/user-event/dist/type';
import './App.css';
import Greet from './components/greet';
import { useState,useRef, useEffect,useReducer,useMemo} from 'react';
import Parentone from './Parentone';
import MainRouter from './components/reactrouter/MainRouter';






function App() {

//   const [countone,setcountone]=useState(0)
//   const [counttwo,setcounttwo]=useState(0)
//   const incrmentone=()=>{
//     setcountone(countone+1)
//   }
//   const incrmenttwo=()=>{
//     setcounttwo(counttwo+1)
//   }

// const iseven= useMemo(()=>{
//   let i=0
//   while(i<700000000)
//   i++
//   return countone %2==0
// },[countone]) 
  return (
    <div className="App">
  {/* <button onClick={incrmentone}>count 1:{countone}</button>
  <span>{ iseven ?'even':'odd'}</span>
  <button onClick={incrmenttwo}>count 2 :{counttwo}</button> */}

  <MainRouter/>
    </div>
  );
}




export default App;
