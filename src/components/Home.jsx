import React, { useState } from 'react';
import '../styles/Home.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { userPerformanceData } from '../data/userPerformance';
import Events from './Events';

const Home = () => {
  const data = userPerformanceData.monthlyMetrics.slice().reverse();
  const [selectedMetric, setSelectedMetric] = useState('bodyWeight');

  const metricOptions = [
    { value: 'bodyWeight', label: 'Peso Corporal (kg)', color: '#ffc658' },
    { value: 'workoutFrequency', label: 'Frequência de Treinos', color: '#8884d8' },
    { value: 'bodyFat', label: 'Percentual de Gordura', color: '#ff7300' },
    { value: 'fitnessScore', label: 'Pontuação Fitness', color: '#82ca9d' }
  ];

  const selectedMetricData = metricOptions.find(option => option.value === selectedMetric);

  return (
    <div className="home">
      <div className="home-content">
        <h1>Bem-vindo à Sua Jornada Fitness</h1>
        <p>Acompanhe seu progresso, agende treinos e alcance seus objetivos fitness conosco.</p>
        
        <div className="performance-chart">
          <h2>Seu Desempenho ao Longo do Tempo</h2>
          <div className="metric-selector">
            <label htmlFor="metric-select">Selecionar Métrica: </label>
            <select
              id="metric-select"
              value={selectedMetric}
              onChange={(e) => setSelectedMetric(e.target.value)}
              className="metric-select"
            >
              {metricOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey={selectedMetric}
                stroke={selectedMetricData.color}
                name={selectedMetricData.label}
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <Events />
    </div>
  );
};

export default Home;