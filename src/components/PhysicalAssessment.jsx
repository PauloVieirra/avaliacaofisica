import { useState } from 'react';
import '../styles/PhysicalAssessment.css';

const PhysicalAssessment = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: '',
    age: '',
    gender: '',
    
    // Anthropometric Measurements
    bodyWeight: '',
    height: '',
    waistCircumference: '',
    hipCircumference: '',
    neckCircumference: '',
    chestCircumference: '',
    relaxedArmCircumference: '',
    contractedArmCircumference: '',
    forearmCircumference: '',
    proximalThighCircumference: '',
    medialThighCircumference: '',
    distalThighCircumference: '',
    calfCircumference: '',
    
    // Skinfold Measurements
    tricepsFold: '',
    bicepsFold: '',
    subscapularFold: '',
    suprailiacFold: '',
    abdominalFold: '',
    pectoralFold: '',
    thighFold: '',
    
    // Health History
    medicalHistory: '',
    medications: '',
    familyHistory: '',
    stressLevel: '',
    sleepQuality: '',
    
    // Lifestyle Habits
    diet: '',
    waterIntake: '',
    supplements: '',
    physicalActivityLevel: '',
    alcoholConsumption: '',
    smokingHabits: '',
    sleepPattern: '',
    dailyRoutine: ''
  });

  const [assessmentResults, setAssessmentResults] = useState(null);

  const calculateBMI = (weight, height) => {
    const heightInMeters = height / 100;
    return weight / (heightInMeters * heightInMeters);
  };

  const calculateWHR = (waist, hip) => {
    return waist / hip;
  };

  const calculateWHtR = (waist, height) => {
    return waist / height;
  };

  const calculateBAI = (hip, height) => {
    const heightInMeters = height / 100;
    return (hip / Math.pow(heightInMeters, 1.5)) - 18;
  };

  const calculateFFMI = (weight, height, bodyFat) => {
    const heightInMeters = height / 100;
    const leanMass = weight * (1 - (bodyFat / 100));
    return (leanMass / Math.pow(heightInMeters, 2)) + 6.1 * (1.8 - heightInMeters);
  };

  const calculateBodyFat = (gender, triceps, biceps, subscapular, suprailiac) => {
    const sumSkinfolds = triceps + biceps + subscapular + suprailiac;
    // Using Jackson-Pollock formula (simplified version)
    const bodyFat = gender === 'male' 
      ? (0.29288 * sumSkinfolds) - (0.0005 * Math.pow(sumSkinfolds, 2)) + (0.15845 * formData.age) - 5.76377
      : (0.29669 * sumSkinfolds) - (0.00043 * Math.pow(sumSkinfolds, 2)) + (0.02963 * formData.age) + 1.4072;
    return bodyFat;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateHealthRiskLevel = (results) => {
    let riskPoints = 0;
    
    // BMI Risk Assessment
    if (results.bmi < 18.5) riskPoints += 1;
    else if (results.bmi >= 25 && results.bmi < 30) riskPoints += 2;
    else if (results.bmi >= 30 && results.bmi < 35) riskPoints += 3;
    else if (results.bmi >= 35) riskPoints += 4;
    
    // WHR Risk Assessment
    const whrThreshold = formData.gender === 'male' ? 0.9 : 0.85;
    if (results.whr > whrThreshold + 0.1) riskPoints += 4;
    else if (results.whr > whrThreshold + 0.05) riskPoints += 3;
    else if (results.whr > whrThreshold) riskPoints += 2;
    
    // Body Fat Risk Assessment
    const bfThreshold = formData.gender === 'male' ? 25 : 32;
    if (results.bodyFat > bfThreshold + 10) riskPoints += 4;
    else if (results.bodyFat > bfThreshold + 5) riskPoints += 3;
    else if (results.bodyFat > bfThreshold) riskPoints += 2;
    
    // WHtR Risk Assessment
    if (results.whtr > 0.6) riskPoints += 4;
    else if (results.whtr > 0.55) riskPoints += 3;
    else if (results.whtr > 0.5) riskPoints += 2;
    
    // Determine Risk Level
    if (riskPoints >= 12) return 'Risco Eminente';
    if (riskPoints >= 8) return 'Alerta de Risco';
    if (riskPoints >= 4) return 'Risco Moderado';
    return 'Baixo Risco';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const bmi = calculateBMI(Number(formData.bodyWeight), Number(formData.height));
    const whr = calculateWHR(Number(formData.waistCircumference), Number(formData.hipCircumference));
    const whtr = calculateWHtR(Number(formData.waistCircumference), Number(formData.height));
    const bai = calculateBAI(Number(formData.hipCircumference), Number(formData.height));
    
    const bodyFat = calculateBodyFat(
      formData.gender,
      Number(formData.tricepsFold),
      Number(formData.bicepsFold),
      Number(formData.subscapularFold),
      Number(formData.suprailiacFold)
    );
    
    const ffmi = calculateFFMI(Number(formData.bodyWeight), Number(formData.height), bodyFat);
    
    const results = {
      bmi: bmi.toFixed(1),
      whr: whr.toFixed(2),
      whtr: whtr.toFixed(2),
      bai: bai.toFixed(1),
      bodyFat: bodyFat.toFixed(1),
      ffmi: ffmi.toFixed(1),
      healthRisks: []
    };
    
    // Assess health risks
    if (bmi < 18.5) {
      results.healthRisks.push('Baixo peso - Risco de deficiências nutricionais');
    } else if (bmi >= 25 && bmi < 30) {
      results.healthRisks.push('Sobrepeso - Risco moderado para saúde');
    } else if (bmi >= 30) {
      results.healthRisks.push('Obesidade - Alto risco para saúde');
    }
    
    if (formData.gender === 'male' && whr > 0.9 || formData.gender === 'female' && whr > 0.85) {
      results.healthRisks.push('Relação cintura-quadril elevada - Risco cardiovascular aumentado');
    }
    
    if (whtr > 0.5) {
      results.healthRisks.push('Relação cintura-altura elevada - Risco de obesidade central');
    }
    
    if (Number(formData.neckCircumference) > (formData.gender === 'male' ? 43 : 38)) {
      results.healthRisks.push('Circunferência do pescoço elevada - Risco de apneia do sono');
    }
    
    results.riskLevel = calculateHealthRiskLevel(results);
    setAssessmentResults(results);
  };

  return (
    <div className="physical-assessment">
      <h1>Avaliação Física Completa</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <h2>Informações Pessoais</h2>
          <div className="form-group">
            <label htmlFor="fullName">Nome Completo:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="age">Idade:</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="gender">Sexo:</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              required
            >
              <option value="">Selecione</option>
              <option value="male">Masculino</option>
              <option value="female">Feminino</option>
            </select>
          </div>
        </div>

        <div className="form-section">
          <h2>Medidas Antropométricas</h2>
          
          <div className="form-group">
            <label htmlFor="bodyWeight">Peso Corporal (kg):</label>
            <input
              type="number"
              id="bodyWeight"
              name="bodyWeight"
              value={formData.bodyWeight}
              onChange={handleInputChange}
              step="0.01"
              min="0"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="height">Altura (cm):</label>
            <input
              type="number"
              id="height"
              name="height"
              value={formData.height}
              onChange={handleInputChange}
              step="0.1"
              min="0"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="waistCircumference">Circunferência da Cintura (cm):</label>
            <input
              type="number"
              id="waistCircumference"
              name="waistCircumference"
              value={formData.waistCircumference}
              onChange={handleInputChange}
              step="0.1"
              min="0"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="hipCircumference">Circunferência do Quadril (cm):</label>
            <input
              type="number"
              id="hipCircumference"
              name="hipCircumference"
              value={formData.hipCircumference}
              onChange={handleInputChange}
              step="0.1"
              min="0"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="neckCircumference">Circunferência do Pescoço (cm):</label>
            <input
              type="number"
              id="neckCircumference"
              name="neckCircumference"
              value={formData.neckCircumference}
              onChange={handleInputChange}
              step="0.1"
              min="0"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="chestCircumference">Circunferência do Tórax (cm):</label>
            <input
              type="number"
              id="chestCircumference"
              name="chestCircumference"
              value={formData.chestCircumference}
              onChange={handleInputChange}
              step="0.1"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="relaxedArmCircumference">Circunferência do Braço Relaxado (cm):</label>
            <input
              type="number"
              id="relaxedArmCircumference"
              name="relaxedArmCircumference"
              value={formData.relaxedArmCircumference}
              onChange={handleInputChange}
              step="0.1"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contractedArmCircumference">Circunferência do Braço Contraído (cm):</label>
            <input
              type="number"
              id="contractedArmCircumference"
              name="contractedArmCircumference"
              value={formData.contractedArmCircumference}
              onChange={handleInputChange}
              step="0.1"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="forearmCircumference">Circunferência do Antebraço (cm):</label>
            <input
              type="number"
              id="forearmCircumference"
              name="forearmCircumference"
              value={formData.forearmCircumference}
              onChange={handleInputChange}
              step="0.1"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="proximalThighCircumference">Circunferência da Coxa Proximal (cm):</label>
            <input
              type="number"
              id="proximalThighCircumference"
              name="proximalThighCircumference"
              value={formData.proximalThighCircumference}
              onChange={handleInputChange}
              step="0.1"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="medialThighCircumference">Circunferência da Coxa Medial (cm):</label>
            <input
              type="number"
              id="medialThighCircumference"
              name="medialThighCircumference"
              value={formData.medialThighCircumference}
              onChange={handleInputChange}
              step="0.1"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="distalThighCircumference">Circunferência da Coxa Distal (cm):</label>
            <input
              type="number"
              id="distalThighCircumference"
              name="distalThighCircumference"
              value={formData.distalThighCircumference}
              onChange={handleInputChange}
              step="0.1"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="calfCircumference">Circunferência da Panturrilha (cm):</label>
            <input
              type="number"
              id="calfCircumference"
              name="calfCircumference"
              value={formData.calfCircumference}
              onChange={handleInputChange}
              step="0.1"
              required
            />
          </div>
        </div>

        <div className="form-section">
          <h2>Medidas das Dobras Cutâneas</h2>
          
          <div className="form-group">
            <label htmlFor="tricepsFold">Tríceps (mm):</label>
            <input
              type="number"
              id="tricepsFold"
              name="tricepsFold"
              value={formData.tricepsFold}
              onChange={handleInputChange}
              step="0.1"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="bicepsFold">Bíceps (mm):</label>
            <input
              type="number"
              id="bicepsFold"
              name="bicepsFold"
              value={formData.bicepsFold}
              onChange={handleInputChange}
              step="0.1"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subscapularFold">Subescapular (mm):</label>
            <input
              type="number"
              id="subscapularFold"
              name="subscapularFold"
              value={formData.subscapularFold}
              onChange={handleInputChange}
              step="0.1"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="suprailiacFold">Supra-ilíaca (mm):</label>
            <input
              type="number"
              id="suprailiacFold"
              name="suprailiacFold"
              value={formData.suprailiacFold}
              onChange={handleInputChange}
              step="0.1"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="abdominalFold">Abdominal (mm):</label>
            <input
              type="number"
              id="abdominalFold"
              name="abdominalFold"
              value={formData.abdominalFold}
              onChange={handleInputChange}
              step="0.1"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="pectoralFold">Peitoral (mm):</label>
            <input
              type="number"
              id="pectoralFold"
              name="pectoralFold"
              value={formData.pectoralFold}
              onChange={handleInputChange}
              step="0.1"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="thighFold">Coxa (mm):</label>
            <input
              type="number"
              id="thighFold"
              name="thighFold"
              value={formData.thighFold}
              onChange={handleInputChange}
              step="0.1"
              required
            />
          </div>
        </div>

        <button type="submit" className="submit-button">Calcular Resultados</button>
      </form>

      {assessmentResults && (
        <div className="results-section">
          <h2>Resultados da Avaliação</h2>
          <p><strong>IMC:</strong> {assessmentResults.bmi} kg/m²</p>
          <p><strong>Relação Cintura-Quadril:</strong> {assessmentResults.whr}</p>
          <p><strong>Relação Cintura-Altura:</strong> {assessmentResults.whtr}</p>
          <p><strong>Índice de Adiposidade Corporal:</strong> {assessmentResults.bai}%</p>
          <p><strong>Percentual de Gordura Corporal:</strong> {assessmentResults.bodyFat}%</p>
          <p><strong>FFMI:</strong> {assessmentResults.ffmi}</p>
          <p><strong>Nível de Risco à Saúde:</strong> <span style={{ color: assessmentResults.riskLevel === 'Risco Eminente' ? '#ff0000' : assessmentResults.riskLevel === 'Alerta de Risco' ? '#ff6b00' : assessmentResults.riskLevel === 'Risco Moderado' ? '#ffd700' : '#4caf50' }}>{assessmentResults.riskLevel}</span></p>
          <div className="health-details">
            <h3>Detalhes dos Riscos à Saúde:</h3>
            {assessmentResults.healthRisks.map((risk, index) => (
              <p key={index}>{risk}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PhysicalAssessment;