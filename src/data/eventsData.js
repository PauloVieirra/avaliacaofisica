export class FitnessEvent {
  constructor(id, title, type, date, time, location, description, capacity, image) {
    this.id = id;
    this.title = title;
    this.type = type; // 'meetup', 'lecture', 'challenge'
    this.date = date;
    this.time = time;
    this.location = location;
    this.description = description;
    this.capacity = capacity;
    this.image = image;
    this.participants = 0;
  }

  addParticipant() {
    if (this.participants < this.capacity) {
      this.participants++;
      return true;
    }
    return false;
  }

  removeParticipant() {
    if (this.participants > 0) {
      this.participants--;
      return true;
    }
    return false;
  }

  getAvailableSpots() {
    return this.capacity - this.participants;
  }

  isFullyBooked() {
    return this.participants >= this.capacity;
  }
}

export const fitnessEvents = [
  new FitnessEvent(
    1,
    "Yoga no Parque",
    "meetup",
    "2024-02-15",
    "08:00",
    "Parque Central",
    "Venha participar de uma sessão relaxante de yoga ao ar livre. Ideal para iniciantes e praticantes experientes.",
    30,
    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1600&auto=format"
  ),
  new FitnessEvent(
    2,
    "Palestra: Nutrição Esportiva",
    "lecture",
    "2024-02-20",
    "19:00",
    "Auditório Principal",
    "Aprenda sobre os fundamentos da nutrição esportiva e como otimizar sua alimentação para melhor performance.",
    100,
    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1600&auto=format"
  ),
  new FitnessEvent(
    3,
    "Desafio 30 Dias de Condicionamento",
    "challenge",
    "2024-03-01",
    "00:00",
    "Online",
    "Participe do nosso desafio mensal de condicionamento físico. Treinos diários e suporte da comunidade.",
    200,
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format"
  ),
  new FitnessEvent(
    4,
    "Workshop de CrossFit",
    "meetup",
    "2024-02-25",
    "10:00",
    "Academia CrossFit Elite",
    "Workshop intensivo de CrossFit com foco em técnica e segurança. Todos os níveis são bem-vindos.",
    25,
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format"
  ),
  new FitnessEvent(
    5,
    "Palestra: Mindfulness e Exercício",
    "lecture",
    "2024-03-05",
    "18:30",
    "Centro de Bem-estar",
    "Descubra como integrar práticas de mindfulness em sua rotina de exercícios para melhores resultados.",
    80,
    "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=1600&auto=format"
  ),
  new FitnessEvent(
    6,
    "Desafio de Corrida 5K",
    "challenge",
    "2024-03-15",
    "07:00",
    "Pista de Atletismo Municipal",
    "Desafie-se em nossa corrida de 5K. Premiação para diferentes categorias e faixas etárias.",
    150,
    "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1600&auto=format"
  )
];