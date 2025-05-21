import "./App.css";
import BuyPower from "./BuyPower";
import Dashboard from "./Dashboard";
import Notifications from "./Notifications";
import PowerControl from "./PowerControl";
import Settings from "./Settings";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {" "}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/buy-power" element={<BuyPower />} />
          <Route path="/power-control" element={<PowerControl />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
