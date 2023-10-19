import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
//import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route index element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
