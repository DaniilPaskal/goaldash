import { Routes, Route } from "react-router-dom";
import GoalsProvider from './contexts/GoalsContext';
import LandingPage from "./pages/LandingPage";
import "./App.css";

function App() {
  return (
    <div className="app">
      <GoalsProvider>
        <Routes>
          <Route index element={<LandingPage />} />
        </Routes>
      </GoalsProvider>
    </div>
  );
}

export default App;
