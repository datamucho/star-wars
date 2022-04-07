import React from "react";
import CharacterList from "./components/CharacterList";
import CharecterPage from "./components/CharacterPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<CharacterList />} />
          <Route exact path="/:id" element={<CharecterPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
