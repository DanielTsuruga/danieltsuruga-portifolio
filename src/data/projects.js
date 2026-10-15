import ecofluxLogo from '../assets/projetos/ecoflux-logo.png'
import ecofluxPreview from '../assets/projetos/ecoflux-preview.png'
import ecofluxDemo from '../assets/projetos/ecoflux-demo.gif'
import meubolsoLogo from '../assets/projetos/meubolso-logo.png'
import bankpyLogo from '../assets/projetos/bankpy-logo.png'

export const projects = [
  {
    id: 'ecoflux',
    nome: 'EcoFlux',
    descricao:
      'Plataforma web para facilitar a reciclagem e a coleta seletiva, conectando população, catadores e empresas.Projeto do 1º semestre.',
    tecnologias: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'JSON Server', 'Express', 'Bootstrap'],
    repo: 'https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2026-1-ti1-0427100-ecoflux',
    site: 'https://ecoflux-33eg.onrender.com/',
    ano: '2026',
    status: 'concluido',
    destaque: true,
    equipe: true,
    logo: ecofluxLogo,
    preview: ecofluxPreview,
    demo: ecofluxDemo, 
    detalhes: {
      descricao:
        'O EcoFlux é uma plataforma web que torna a reciclagem e a coleta seletiva mais simples e acessíveis no dia a dia. O sistema reúne pontos de coleta, calendário de coleta por região, cadastro de empresas de reciclagem e solicitação de coleta, conectando população, catadores e gestores públicos.',
      problema:
        'O descarte incorreto de lixo e a baixa adesão à reciclagem acontecem pela falta de informação e pela limitação da coleta seletiva em muitas regiões. Além disso, os catadores, parte essencial do processo, muitas vezes trabalham em condições pouco valorizadas.',
      solucao:
        'Uma aplicação web com mapa de pontos de coleta, cadastro de pontos e empresas, solicitação de coleta e calendário por região. O front-end consome uma API REST local (JSON Server), separando a interface da manipulação dos dados em módulos independentes.',
      contribuicao:
        'Atuei na pesquisa do problema, no mapa de stakeholders e no brainstorming de soluções, além de contribuir na construção da aplicação em equipe.',
    },
  },
  {
    id: 'meubolso',
    nome: 'MeuBolso',
    descricao:
      'Aplicação web de controle e educação financeira para jovens, com um assistente de IA que traduz os dados em orientações acessíveis. Projeto do 2º semestre.',
    tecnologias: ['JavaScript', 'Java', 'HTML', 'CSS'],
    repo: 'https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2026-2-ti2-8183100-meu-bolso',
    site: null,
    ano: '2026',
    status: 'em-desenvolvimento',
    destaque: false,
    equipe: true,
    logo: meubolsoLogo,
    preview: null,
    detalhes: {
      descricao:
        'O MeuBolso é uma aplicação web de controle e educação financeira voltada a jovens que estão começando a lidar com dinheiro próprio (mesada, primeiro salário ou aumento de renda), com um assistente de IA que transforma os dados do usuário em orientações práticas e acessíveis. É um trabalho interdisciplinar em equipe, desenvolvido com Design Thinking na concepção e Kanban no desenvolvimento.',
      problema: 'Jovens de 15 a 20 anos que passam a ter renda própria — pela mesada, pelo primeiro salário ou por um aumento — têm dificuldade de controlar gastos, guardar dinheiro e decidir o destino da renda. Faltam ferramentas simples e orientação prática para a realidade deles, e o problema se intensifica em ambientes digitais, onde promoções, parcelamentos e influenciadores facilitam a compra por impulso. A pesquisa da equipe mostrou que o desafio não é só falta de informação, mas a dificuldade de transformá-la em hábito.', 
      solucao: 'Uma aplicação web onde o jovem registra e categoriza gastos, acompanha o que recebe e guarda, define metas e reserva, e visualiza um resumo da evolução financeira. O diferencial é um assistente de IA que analisa os próprios dados do usuário e devolve orientações educativas em linguagem acessível — transformando informação em hábito, em vez de conteúdo genérico. O MVP prioriza conta e registro de gastos e o assistente de IA, seguidos de resumo financeiro, metas e reserva.', 
      contribuicao: 'Atuo como líder da equipe, responsável pela gestão do projeto, pelo controle de qualidade e pela documentação. Coordeno o time pelo método Kanban, acompanho as entregas e participei das etapas de Design Thinking (pesquisa, personas, requisitos e priorização das funcionalidades).',
    },
  },  
  {
    id: 'bankpy',
    nome: 'BankPy',
    descricao: 'Sistema bancário desenvolvido em Python.',
    tecnologias: ['Python', 'JSON Server', 'Git', 'GitHub'],
    repo: null, 
    site: null,
    ano: '2026',
    status: 'em-desenvolvimento',
    destaque: false,
    equipe: false,
    logo: bankpyLogo,
    preview: null,
    detalhes: {
      descricao: 'Sistema bancário desenvolvido em Python para simular operações financeiras e gerenciamento de contas.',
      problema: 'A necessidade de praticar conceitos de programação por meio de um sistema que simula situações reais do dia a dia bancário.', 
      solucao: 'Desenvolvimento de uma aplicação com cadastro de usuários, validação de dados e armazenamento persistente de informações em arquivos JSON.', 
      contribuicao: 'Desenvolvi a estrutura do projeto, organizei o código em módulos e implementei a lógica de cadastro, validação e gerenciamento de usuários.',
    },
  },
]

export function getFeaturedProject() {
  return projects.find((p) => p.destaque)
}

export function getProjectById(id) {
  return projects.find((p) => p.id === id)
}

export function getNextProject(id) {
  const index = projects.findIndex((p) => p.id === id)
  if (index === -1) return null
  return projects[(index + 1) % projects.length]
}
