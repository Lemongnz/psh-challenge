import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HackathonGrid from "./components/hackathon-grid/hackathon-grid";
import HackathonHeader from "./components/hackathon-header/hackathon-header";
import TopDevs from "./components/top-devs/top-devs";

function App() {
  return (
    <Router>
      <div className="App">
        <HackathonHeader />
        <Routes>
          <Route path="/" element={<HackathonGrid />} />
          <Route path="/hackathon/:id" element={<HackathonGrid />} />
          <Route path="/top" element={<TopDevs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
