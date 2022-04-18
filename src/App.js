import React,{useState} from 'react'
import './App.css';

function App() {
  const [answer,setans]=useState(0);
  const findfactorial=(e)=>{
    e.preventDefault();
    let no = document.getElementById("num").value;
    console.log(no);
    var ans = 1 ;
    if (no==='' || no%2 !== 0)
    return;
    for(var i = no; i > 0; i--){
      ans = ans * i;
    }
    setans(ans);
  }
  return (
    <div className="App">
      <div className="app-title">
        <h1>Factorial Calculator</h1>
      </div>
      <form>
        <input type="text" id="result" value={answer} readOnly/>
        <input type="text" id="num" placeholder="Enter a number"/>
        <button onClick={findfactorial}>factorial</button>
      </form>
    </div>
  );
}

export default App;
