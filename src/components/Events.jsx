import { useState } from 'react';
import { Link } from 'react-router-dom';
import { fitnessEvents } from '../data/eventsData';
import '../styles/Events.css';

const Events = () => {
  const [selectedType, setSelectedType] = useState('all');

  const filteredEvents = selectedType === 'all'
    ? fitnessEvents
    : fitnessEvents.filter(event => event.type === selectedType);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
  };

  return (
    <div className="events-container">
      <h2>Próximos Eventos</h2>
      
      <div className="event-filters">
        <button
          className={`filter-button ${selectedType === 'all' ? 'active' : ''}`}
          onClick={() => setSelectedType('all')}
        >
          Todos
        </button>
        <button
          className={`filter-button ${selectedType === 'meetup' ? 'active' : ''}`}
          onClick={() => setSelectedType('meetup')}
        >
          Encontros
        </button>
        <button
          className={`filter-button ${selectedType === 'lecture' ? 'active' : ''}`}
          onClick={() => setSelectedType('lecture')}
        >
          Palestras
        </button>
        <button
          className={`filter-button ${selectedType === 'challenge' ? 'active' : ''}`}
          onClick={() => setSelectedType('challenge')}
        >
          Desafios
        </button>
      </div>

      <div className="events-grid">
        {filteredEvents.map(event => (
          <div key={event.id} className="event-card">
            <div className="event-image">
              <img src={event.image} alt={event.title} />
              <span className={`event-type ${event.type}`}>
                {event.type === 'meetup' && 'Encontro'}
                {event.type === 'lecture' && 'Palestra'}
                {event.type === 'challenge' && 'Desafio'}
              </span>
            </div>
            <div className="event-content">
              <h3>{event.title}</h3>
              <p className="event-description">{event.description}</p>
              <div className="event-details">
                <div className="detail">
                  <i className="far fa-calendar"></i>
                  <span>{formatDate(event.date)}</span>
                </div>
                <div className="detail">
                  <i className="far fa-clock"></i>
                  <span>{event.time}</span>
                </div>
                <div className="detail">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>{event.location}</span>
                </div>
                <div className="detail">
                  <i className="fas fa-users"></i>
                  <span>{event.getAvailableSpots()} vagas disponíveis</span>
                </div>
              </div>
              <Link to={`/evento/${event.id}`}>
                <button 
                  className={`register-button ${event.isFullyBooked() ? 'disabled' : ''}`}
                  disabled={event.isFullyBooked()}
                >
                  {event.isFullyBooked() ? 'Lotado' : 'Inscrever-se'}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;