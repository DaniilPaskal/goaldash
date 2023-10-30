import { Routes, Route } from "react-router-dom";
import { GoalsProvider } from './contexts/GoalsContext';
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import TaskManagement from "./pages/TaskManagement";

function App() {
  return (
    <div className="app">
      <GoalsProvider>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='task-management' element={<TaskManagement />} />
        </Routes>
      </GoalsProvider>
    </div>
  );
}

export default App;
