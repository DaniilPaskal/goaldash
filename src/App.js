import { Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
