import React, {useState, useEffect} from "react";

function App(){
let [count, setCount] = useState(0);
const [isCounting, setIsCounting] = useState(false);

useEffect(() => {
  if(isCounting){
  const intervalId = setInterval(()=>{
    setCount(prevCount => prevCount + 1);
  }, 1000);
  return ()=> {
    clearInterval(intervalId);
  }
} }
  
  ,[isCounting]);

function startCount(){
  setIsCounting(true);
}

function stopCount(){
  setIsCounting(false);
  setCount(0);
}
  return (
    <div>
      <center><h2>{count}</h2>
      <button onClick={startCount}>Start Count</button>&nbsp;&nbsp;<button onClick={stopCount}>Stop Count</button>
      </center>
    </div>
    
  );
}

export default App;