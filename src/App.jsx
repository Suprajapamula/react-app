import Counter from './Counter';
import './App.css';
import React,{ useEffect } from  'react';
import Another from './Another';
import { Outlet,Link } from 'react-router-dom';

function App() {
  var firstNameRef=React.useRef();
  var lastNameRef=React.useRef();
  var addressRef=React.useRef();
  function sayIt(){
    //alert(document.getElementById("d2").value);
    alert(firstNameRef.current.value)
  }
  function focusOnTextBox(){
    firstNameRef.current.focus();
  }
  function checkIt(event){
    if(event.key==="Enter"){
      lastNameRef.current.focus();
    }
  }
  useEffect(()=>{
    firstNameRef.current.focus();
  },[])
  return (
    <div className="App">
      <input type="text" ref={firstNameRef} id="d2" onKeyUp={(e)=>{checkIt(e)}}/><br/>
      <input type="text" ref={lastNameRef} id="d3"/>
      <button onClick={()=>{sayIt()}}>Alert textbox value</button>
      <button onClick={()=>{focusOnTextBox()}}>focus on textbox</button>
      <Another ref={addressRef}></Another>
    </div>
  );
}

export default App;
