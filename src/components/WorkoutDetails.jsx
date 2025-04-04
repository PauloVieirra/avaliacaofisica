import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { workoutsData } from '../data/workoutsData';
import ReactPlayer from 'react-player';
import '../styles/WorkoutDetails.css';

const WorkoutDetails = () => {
  const { id } = useParams();
  const [workout, setWorkout] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    const foundWorkout = workoutsData.find(w => w.id === parseInt(id));
    setWorkout(foundWorkout);
  }, [id]);

  if (!workout) {
    return <div className="workout-details-error">Workout not found</div>;
  }

  const handlePlayVideo = (videoUrl) => {
    setCurrentVideo(videoUrl);
  };

  const handleCloseVideo = () => {
    setIsPlaying(false);
    setCurrentVideo(null);
  };

  return (
    <div className="workout-details">
      <div className="workout-details-header">
        <div className="workout-details-header-content">
          <div className="workout-video-container" style={!currentVideo ? { backgroundImage: `url(${workout.imgtreino})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}>
            {currentVideo && (
              <ReactPlayer
                className="workout-video"
                url={currentVideo}
                controls
                width="100%"
                height="100%"
                playing={isPlaying}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={handleCloseVideo}
                config={{
                  youtube: {
                    playerVars: { modestbranding: 1 }
                  }
                }}
              />
            )}
          </div>
        </div>
      </div>

      <div className="workout-details-content">
        <div className="workout-details-info">
          <p className="workout-description">{workout.description}</p>
          <div className="workout-meta">
            <span className="workout-difficulty">
              Difficulty: {workout.difficulty}
            </span>
            <span className="workout-duration">
              Duration: {workout.duration}
            </span>
          </div>
        </div>

        <div className="workout-exercises-list">
          <h2>Exercises</h2>
          {workout.exercises.map((exercise, index) => (
            <div key={index} className="exercise-detail-item">
              <h3>{exercise.name}</h3>
              <div className="exercise-detail-info">
                <span>Sets: {exercise.sets}</span>
                <span>Reps: {exercise.reps}</span>
                <span>Rest: {exercise.rest}s</span>
              </div>
              <p className="exercise-detail-instructions">
                {exercise.instructions}
              </p>
              <button 
                onClick={() => handlePlayVideo(exercise.video)} 
                className="start-exercise-btn"
                disabled={!exercise.video}
              >
                Iniciar
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetails;