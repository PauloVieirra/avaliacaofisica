export const workoutsData = [
  {
    id: 1,
    category: 'Força',
    name: 'Treino Superior A',
    description: 'Foco em peito, ombros e tríceps',
    videointro: 'https://www.youtube.com/watch?v=NrHWuvQuXFw',
    exercises: [
      {
        name: 'Supino Reto com Barra',
        sets: 4,
        reps: '8-12',
        instructions: 'Mantenha os cotovelos em ângulo de 45°, desça a barra controladamente até o peito',
        video:'https://www.youtube.com/watch?v=Fem-R7n59O8'
      },
      {
        name: 'Desenvolvimento com Halter',
        sets: 3,
        reps: '10-12',
        instructions: 'Mantenha o core estável, pressione os halteres para cima mantendo os cotovelos alinhados',
        video:'https://www.youtube.com/watch?v=ZTEQqmCYwx8&t=1s'
      },
      {
        name: 'Extensão de Tríceps na Polia',
        sets: 3,
        reps: '12-15',
        instructions: 'Mantenha os cotovelos junto ao corpo, foco na contração do tríceps',
        video:'https://www.youtube.com/watch?v=8J8gW8VwzmE'
      }
    ],
    difficulty: 'Intermediário',
    duration: '45-60 min'
  },
  {
    id: 2,
    category: 'Força',
    name: 'Treino Inferior A',
    description: 'Foco em quadríceps, posterior e glúteos',
    exercises: [
      {
        name: 'Agachamento Livre',
        sets: 4,
        reps: '8-12',
        instructions: 'Mantenha a coluna neutra, desça até a posição paralela, joelhos alinhados com os pés'
      },
      {
        name: 'Levantamento Terra',
        sets: 4,
        reps: '8-10',
        instructions: 'Mantenha a barra próxima às pernas, inicie o movimento pelo quadril'
      },
      {
        name: 'Extensão de Quadril na Polia',
        sets: 3,
        reps: '12-15',
        instructions: 'Foco na contração dos glúteos, mantenha o core estável'
      }
    ],
    difficulty: 'Intermediário',
    duration: '45-60 min'
  },
  {
    id: 3,
    category: 'Cardio',
    name: 'HIIT Funcional',
    description: 'Treino intervalado de alta intensidade',
    exercises: [
      {
        name: 'Burpees',
        sets: 4,
        reps: '30 segundos',
        instructions: 'Realize o movimento completo, mantenha a intensidade alta'
      },
      {
        name: 'Mountain Climbers',
        sets: 4,
        reps: '30 segundos',
        instructions: 'Mantenha o quadril estável, alterne as pernas rapidamente'
      },
      {
        name: 'Jump Squats',
        sets: 4,
        reps: '30 segundos',
        instructions: 'Salte explosivamente, aterrisse suave com os joelhos flexionados'
      }
    ],
    difficulty: 'Avançado',
    duration: '30-40 min'
  },
  {
    id: 4,
    category: 'Mobilidade',
    name: 'Mobilidade e Flexibilidade',
    description: 'Foco em mobilidade articular e alongamento',
    exercises: [
      {
        name: 'Yoga Flow',
        sets: 1,
        reps: '10 minutos',
        instructions: 'Realize as posições de forma fluida, respire profundamente'
      },
      {
        name: 'Mobilidade de Quadril',
        sets: 3,
        reps: '1 minuto por lado',
        instructions: 'Movimentos circulares, mantenha o controle durante todo o exercício'
      },
      {
        name: 'Alongamento Dinâmico',
        sets: 2,
        reps: '45 segundos por exercício',
        instructions: 'Realize movimentos controlados, aumente a amplitude gradualmente'
      }
    ],
    difficulty: 'Iniciante',
    duration: '30-40 min'
  }
];