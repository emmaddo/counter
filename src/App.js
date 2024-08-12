import React from "react";
import { Route, Routes } from "react-router-dom";
import InstructionPage from "./pages/InstructionPage";
import QuestionsPage from "./pages/QuestionsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<InstructionPage />} />
      <Route path="/questions" element={<QuestionsPage />} />
    </Routes>
  );
}

export default App;
