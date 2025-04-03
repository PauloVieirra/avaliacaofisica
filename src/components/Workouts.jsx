import { Link } from 'react-router-dom';
import '../styles/Workouts.css';
import { workoutsData } from '../data/workoutsData';
import { useState } from 'react';

const Workouts = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...new Set(workoutsData.map(workout => workout.category))];

  const filteredWorkouts = selectedCategory === 'all'
    ? workoutsData
    : workoutsData.filter(workout => workout.category === selectedCategory);

  return (
    <div className="workouts">
      <h1>Treinos</h1>
      <div className="workout-filters">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category === 'all' ? 'Todos' : category}
          </button>
        ))}
      </div>
      <div className="workouts-grid">
        {filteredWorkouts.map(workout => (
          <Link to={`/workouts/${workout.id}`} key={workout.id} className="workout-card">
            <img 
              src={`/images/workouts/${workout.category.toLowerCase()}.jpg`} 
              alt={workout.name} 
              className="workout-image"
            />
            <div className="workout-header">
              <h2>{workout.name}</h2>
              <span className="workout-category">{workout.category}</span>
            </div>
            <p className="workout-description">{workout.description}</p>
            <div className="workout-details">
              <span className="workout-difficulty">{workout.difficulty}</span>
              <span className="workout-duration">{workout.duration}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Workouts;