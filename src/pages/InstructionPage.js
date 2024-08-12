import React from "react";
import { useNavigate } from "react-router-dom";
import Instruction from "../components/Instruction";

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

export default InstructionPage;
