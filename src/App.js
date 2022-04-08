import React from "react";
import Home from "./pages/Home";
import CharecterPage from "./pages/CharacterPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/:id" element={<CharecterPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
