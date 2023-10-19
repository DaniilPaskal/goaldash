import { Routes, Route } from "react-router-dom";
import { GoalsProvider } from './contexts/GoalsContext';
import LandingPage from "./pages/LandingPage";
import TaskManagement from "./pages/TaskManagement";

function App() {
  return (
    <div className="app">
      <GoalsProvider>
        <Routes>
          <Route element={<LandingPage />} />
          <Route index element={<TaskManagement />} />
        </Routes>
      </GoalsProvider>
    </div>
  );
}

export default App;
