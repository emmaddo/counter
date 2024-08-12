import React from "react";
import { useNavigate } from "react-router-dom";
import Questions from "../components/Questions";
import useCountdown from "../hooks/useCountdown";

function QuestionsPage() {
  const navigate = useNavigate();
  const { count, startCount, stopCount } = useCountdown(10);

  return (
    <div>
      <center>
        {count > 0 && <h2>{count}</h2>}
        <button onClick={startCount}>Start Test</button>&nbsp;&nbsp;
        {count > 0 && <button onClick={stopCount}>Stop Test</button>}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={() => navigate('/')}>Back Home</button>
        &nbsp;&nbsp;
        <a href="ddd">Terms and Conditions</a>
      </center>
      {count > 0 && <Questions />}
    </div>
  );
}

export default QuestionsPage;
