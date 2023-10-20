import { Routes, Route } from "react-router-dom";
import { GoalsProvider } from './contexts/GoalsContext';
import LandingPage from "./pages/LandingPage";
import TaskManagement from "./pages/TaskManagement";

function App() {
  return (
    <div className="app">
      <GoalsProvider>
        <Routes>
          <Route index element={<TaskManagement />} />
          <Route element={<LandingPage />} />
        </Routes>
      </GoalsProvider>
    </div>
  );
}

export default App;
