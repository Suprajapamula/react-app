import './App.css';
import{ useState }from 'react';

function App(){
  function domBasedHandling(){
        var x=document.getElementById("input1").value;
        document.getElementById("headEl").innerHTML=x;
  }
  function reactBasedEventHandling(value){
          setY(value);
  }
  var [y,setY]=useState("");
         return (
          <div>
            <h1>Lets learn form handling in ReactJS</h1>
            <label>This is DOM based Form Element</label>
            <input type="text" onKeyUp={()=>{domBasedHandling()}} id="input1"/>
            <h1 id="headEl">Your Entered text:</h1>

            <hr/>

            <label>This is ReactJS based Form Element</label>55
            <input type="text" onKeyUp={(e)=>{reactBasedEventHandling(e.target.value)}}/>
            <h1>Your Entered text:{y}</h1>
          </div>
         )
}

export default App;
