import React, { useState } from 'react';
import '../styles/Nutrition.css';

const Nutrition = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [calories, setCalories] = useState(null);

  const calculateBMR = () => {
    if (weight && height) {
      // Fórmula de Harris-Benedict para cálculo do metabolismo basal
      const heightInM = height / 100;
      const bmi = weight / (heightInM * heightInM);
      const bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * 25);
      setCalories(Math.round(bmr));
    }
  };

  const nutritionTips = [
    {
      title: 'Hidratação',
      description: 'Beba pelo menos 2 litros de água por dia para manter seu corpo hidratado.',
      icon: '💧'
    },
    {
      title: 'Proteínas',
      description: 'Inclua fontes magras de proteína em todas as refeições principais.',
      icon: '🥩'
    },
    {
      title: 'Vegetais',
      description: 'Consuma uma variedade de vegetais coloridos para obter diferentes nutrientes.',
      icon: '🥗'
    },
    {
      title: 'Carboidratos',
      description: 'Opte por carboidratos complexos como grãos integrais.',
      icon: '🌾'
    }
  ];

  return (
    <div className="nutrition-container">
      <section className="nutrition-header">
        <h1>Nutrição e Bem-estar</h1>
        <p>Descubra como uma alimentação equilibrada pode melhorar seu desempenho nos treinos.</p>
      </section>

      <section className="calculator-section">
        <h2>Calculadora de Calorias</h2>
        <div className="calculator-form">
          <div className="input-group">
            <label>Peso (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Ex: 70"
            />
          </div>
          <div className="input-group">
            <label>Altura (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Ex: 170"
            />
          </div>
          <button className="calculate-btn" onClick={calculateBMR}>
            Calcular
          </button>
        </div>
        {calories && (
          <div className="result-box">
            <h3>Seu Gasto Calórico Basal</h3>
            <p className="calories-result">{calories} kcal/dia</p>
            <small>Este é o número aproximado de calorias que seu corpo queima em repouso.</small>
          </div>
        )}
      </section>

      <section className="nutrition-tips">
        <h2>Dicas de Nutrição</h2>
        <div className="tips-grid">
          {nutritionTips.map((tip, index) => (
            <div key={index} className="tip-card">
              <span className="tip-icon">{tip.icon}</span>
              <h3>{tip.title}</h3>
              <p>{tip.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="meal-planning">
        <h2>Planejamento de Refeições</h2>
        <div className="meal-tips">
          <div className="meal-tip">
            <h3>Café da Manhã</h3>
            <p>Comece o dia com proteínas e carboidratos complexos para energia duradoura.</p>
          </div>
          <div className="meal-tip">
            <h3>Almoço</h3>
            <p>Balance seu prato com proteínas magras, vegetais e grãos integrais.</p>
          </div>
          <div className="meal-tip">
            <h3>Jantar</h3>
            <p>Opte por refeições mais leves e ricas em proteínas para recuperação muscular.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nutrition;