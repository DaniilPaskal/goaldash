import { GoalsProvider } from './contexts/GoalsContext';
import Dashboard from './pages/dashboard';
import './App.css';

function App() {
  return (
    <GoalsProvider>
      <Dashboard />
    </GoalsProvider>
  );
}

export default App;
