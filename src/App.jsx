import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PhysicalAssessment from './components/PhysicalAssessment';
import Workouts from './components/Workouts';
import WorkoutDetails from './components/WorkoutDetails';
import Scheduling from './components/Scheduling';
import EventDetails from './components/EventDetails';
import Navigation from './components/Navigation';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Navigation />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/avaliacao" element={<PhysicalAssessment />} />
              <Route path="/treinos" element={<Workouts />} />
              <Route path="/workouts/:id" element={<WorkoutDetails />} />
              <Route path="/agendamento" element={<Scheduling />} />
              <Route path="/evento/:id" element={<EventDetails />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
