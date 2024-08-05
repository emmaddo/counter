import React, { useState, useEffect } from "react";

function App(){

  let [count, setCount] = useState(0);

  function increaseCount(){
    if(count < 10){
      setCount(count + 1);
    }
  }
  
  function decreaseCount(){
    if(count > 0){
      setCount(count - 1);
    }
  }
 useEffect(()=>{
  console.log("A click occured");
 });
  return(
    <div>
      <center><h2>Hello React!</h2>
      <h3>{count}</h3>
      <button onClick={increaseCount}>Increase Count</button >&nbsp;&nbsp;<button onClick={decreaseCount}>Decrease Count</button>
      </center>
    </div>
  ); 
}

export default App;