import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate, Link } from "react-router-dom"; 
import Instruction from "./MyComponents/instruction"; 
import Questions from "./MyComponents/questions"; 

function App() {
  const [count, setCount] = useState(10);
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
  return (
    <div>
      <center>
        <h2>{count}</h2>
        <button onClick={startCount}>Start Test</button>&nbsp;&nbsp;
        <button onClick={stopCount}>Stop Test</button>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/">Back Home</Link>
      </center>
      <Questions />
    </div>
  );
}

export default App;
