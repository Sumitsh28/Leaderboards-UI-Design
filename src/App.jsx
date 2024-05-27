import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LeaderBoards from "./pages/Leaderboards";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LeaderBoards />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
