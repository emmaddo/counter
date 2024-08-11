import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate, Link } from "react-router-dom"; 
import Instruction from "./MyComponents/instruction"; 
import Questions from "./MyComponents/questions"; 
const totalTime = 10;

function App() {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    if (isCounting && count > 0) {
      const intervalId = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [isCounting, count]);

  function startCount() {
    setIsCounting(true);
    setCount(totalTime);
    navigate('/questions'); 
  }

  function stopCount() {
    setIsCounting(false);
    setCount(0);
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<InstructionPage />} />
        <Route path="/questions" element={<QuestionsPage count={count} startCount={startCount} stopCount={stopCount} />} />
      </Routes>
    </div>
  );
}

function InstructionPage() {
  const navigate = useNavigate();
  return (
    <div>
      <Instruction />
      <center>
        <button onClick={() => navigate('/questions')}>Start Test</button>
      </center>
    </div>
  );
}

function QuestionsPage({ count, startCount, stopCount }) {
  const navigate = useNavigate();
  return (
    <div>
      <center>
      {/*count > 0 ? <h2>{count}</h2> : null same as below*/}
      {count > 0 && <h2>{count}</h2>}
        <button onClick={startCount}>Start Test</button>&nbsp;&nbsp;
        {count > 0 && <button onClick={stopCount}>Stop Test</button>}
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <button onClick={() => navigate('/')}>Back Home</button>
       &nbsp;&nbsp;
       <Link to="#">Terms and Conditions</Link>
      </center>
      {count > 0 && <Questions />}
    </div>
  );
}

export default App;
