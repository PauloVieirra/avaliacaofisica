import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PhysicalAssessment from './components/PhysicalAssessment';
import Workouts from './components/Workouts';
import Scheduling from './components/Scheduling';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/avaliacao" element={<PhysicalAssessment />} />
            <Route path="/treinos" element={<Workouts />} />
            <Route path="/agendamento" element={<Scheduling />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
