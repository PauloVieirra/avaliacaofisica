import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fitnessEvents } from '../data/eventsData';
import '../styles/EventDetails.css';

const EventDetails = () => {
  const { id } = useParams();
  const event = fitnessEvents.find(event => event.id === parseInt(id));

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefone é obrigatório';
    } else if (!/^\d{10,11}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Telefone inválido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      event.addParticipant();
      setSubmitted(true);
    }
  };

  if (!event) {
    return <div className="event-details-container">Evento não encontrado</div>;
  }

  if (submitted) {
    return (
      <div className="event-details-container">
        <div className="success-message">
          <h2>Inscrição Confirmada!</h2>
          <p>Obrigado por se inscrever no evento {event.title}.</p>
          <p>Você receberá um email com mais informações em breve.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="event-details-container">
      <div className="event-details-header">
        <img src={event.image} alt={event.title} className="event-image" />
        <div className="event-type-badge" data-type={event.type}>
          {event.type === 'meetup' && 'Encontro'}
          {event.type === 'lecture' && 'Palestra'}
          {event.type === 'challenge' && 'Desafio'}
        </div>
      </div>

      <div className="event-details-content">
        <h1>{event.title}</h1>
        <div className="event-info">
          <div className="info-item">
            <i className="far fa-calendar"></i>
            <span>{new Date(event.date).toLocaleDateString('pt-BR')}</span>
          </div>
          <div className="info-item">
            <i className="far fa-clock"></i>
            <span>{event.time}</span>
          </div>
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>{event.location}</span>
          </div>
          <div className="info-item">
            <i className="fas fa-users"></i>
            <span>{event.getAvailableSpots()} vagas disponíveis</span>
          </div>
        </div>

        <div className="event-description">
          <h2>Sobre o Evento</h2>
          <p>{event.description}</p>
        </div>

        <div className="registration-form">
          <h2>Formulário de Inscrição</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nome Completo</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Telefone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={errors.phone ? 'error' : ''}
                placeholder="(XX) XXXXX-XXXX"
              />
              {errors.phone && <span className="error-message">{errors.phone}</span>}
            </div>

            <button 
              type="submit" 
              className="submit-button"
              disabled={event.isFullyBooked()}
            >
              {event.isFullyBooked() ? 'Evento Lotado' : 'Confirmar Inscrição'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;