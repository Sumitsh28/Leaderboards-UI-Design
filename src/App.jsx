import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Leaderboards_page from "./pages/Leaderboards_page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/leaderboards" element={<Leaderboards_page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
