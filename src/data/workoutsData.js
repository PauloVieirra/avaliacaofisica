export const workoutsData = [
  {
    id: 1,
    category: 'Força',
    name: 'Treino Superior A',
    description: 'Foco em peito, ombros e tríceps',
    videointro: 'https://www.youtube.com/watch?v=NrHWuvQuXFw',
    imgtreino: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/06/exercicios-para-bracos-e-peitoral.jpg',
    exercises: [
      {
        name: 'Supino Reto com Barra',
        sets: 4,
        reps: '8-12',
        instructions: 'Mantenha os cotovelos em ângulo de 45°, desça a barra controladamente até o peito',
        video:'https://www.youtube.com/watch?v=Fem-R7n59O8',
        img:'https://www.hipertrofia.org/blog/wp-content/uploads/2017/04/at%C3%A9-onde-descer-a-barra-no-supino.jpg'
      },
      {
        name: 'Desenvolvimento com Halter',
        sets: 3,
        reps: '10-12',
        instructions: 'Mantenha o core estável, pressione os halteres para cima mantendo os cotovelos alinhados',
        video:'https://www.youtube.com/watch?v=ZTEQqmCYwx8&t=1s',
        img:'https://blog.ciaathletica.com.br/wp-content/uploads/2023/10/Cia-Athletica-Nacional-Desenvolvimento-com-halteres-Autores-Grupo-S2-Marketing-Freepik-scaled.jpg'
      },
      {
        name: 'Extensão de Tríceps na Polia',
        sets: 3,
        reps: '12-15',
        instructions: 'Mantenha os cotovelos junto ao corpo, foco na contração do tríceps',
        video:'https://www.youtube.com/watch?v=8J8gW8VwzmE',
        img:'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2024/04/08/246314501-istock-960209650.jpg'
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
    videointro: 'https://www.youtube.com/watch?v=NrHWuvQuXFw',
    imgtreino: 'https://i.ytimg.com/vi/F1Y8HJBaEhU/maxresdefault.jpg',
    exercises: [
      {
        name: 'Agachamento Livre',
        sets: 4,
        reps: '8-12',
        instructions: 'Mantenha a coluna neutra, desça até a posição paralela, joelhos alinhados com os pés',
        img:'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/09/exercicio-de-agachamento-livre.jpg?w=1024'
      },
      {
        name: 'Levantamento Terra',
        sets: 4,
        reps: '8-10',
        instructions: 'Mantenha a barra próxima às pernas, inicie o movimento pelo quadril',
        img:'https://totalpass.com/wp-content/uploads/2024/09/levantamento-terra-1.jpg'
      },
      {
        name: 'Extensão de Quadril na Polia',
        sets: 3,
        reps: '12-15',
        instructions: 'Foco na contração dos glúteos, mantenha o core estável',
        img:'https://academiawgym.wordpress.com/wp-content/uploads/2013/12/academia2.jpg'
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
    imgtreino: 'https://s2-ge.glbimg.com/UsOBrfaMovD1MqEwqTDvi3cBTBs=/0x0:2048x1464/984x0/smart/filters:strip_icc()/s.glbimg.com/es/ge/f/original/2017/11/09/istock-531695662.jpg',
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
    imgtreino: 'https://www.fisioterapia-lisboa.com/uploads/canais_relacionados/treino-isomatrico.jpg?01:00:52',
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