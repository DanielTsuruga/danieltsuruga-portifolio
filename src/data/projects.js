import ecofluxLogo from '../assets/projetos/ecoflux-logo.png'
import ecofluxPreview from '../assets/projetos/ecoflux-preview.png'
import ecofluxDemo from '../assets/projetos/ecoflux-demo.gif'
import meubolsoLogo from '../assets/projetos/meubolso-logo.png'
import bankpyLogo from '../assets/projetos/bankpy-logo.png'

// Campos de texto são bilíngues: { pt, en }.
// Use getLocalizedProjects(lang) ou useLocalizedProjects() para obter os
// projetos já resolvidos no idioma atual.
export const projects = [
  {
    id: 'ecoflux',
    nome: 'EcoFlux',
    descricao: {
      pt: 'Plataforma web para facilitar a reciclagem e a coleta seletiva, conectando população, catadores e empresas. Projeto do 1º semestre.',
      en: 'Web platform to make recycling and selective waste collection easier, connecting the public, waste pickers and companies. 1st semester project.',
    },
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
      descricao: {
        pt: 'O EcoFlux é uma plataforma web que torna a reciclagem e a coleta seletiva mais simples e acessíveis no dia a dia. O sistema reúne pontos de coleta, calendário de coleta por região, cadastro de empresas de reciclagem e solicitação de coleta, conectando população, catadores e gestores públicos.',
        en: 'EcoFlux is a web platform that makes recycling and selective waste collection simpler and more accessible day to day. The system brings together collection points, a collection calendar by region, registration of recycling companies and collection requests, connecting the public, waste pickers and public managers.',
      },
      problema: {
        pt: 'O descarte incorreto de lixo e a baixa adesão à reciclagem acontecem pela falta de informação e pela limitação da coleta seletiva em muitas regiões. Além disso, os catadores, parte essencial do processo, muitas vezes trabalham em condições pouco valorizadas.',
        en: 'Incorrect waste disposal and low recycling adoption happen due to lack of information and the limited reach of selective collection in many regions. In addition, waste pickers, an essential part of the process, often work in undervalued conditions.',
      },
      solucao: {
        pt: 'Uma aplicação web com mapa de pontos de coleta, cadastro de pontos e empresas, solicitação de coleta e calendário por região. O front-end consome uma API REST local (JSON Server), separando a interface da manipulação dos dados em módulos independentes.',
        en: 'A web application with a map of collection points, registration of points and companies, collection requests and a calendar by region. The front-end consumes a local REST API (JSON Server), separating the interface from data handling into independent modules.',
      },
      contribuicao: {
        pt: 'Atuei na pesquisa do problema, no mapa de stakeholders e no brainstorming de soluções, além de contribuir na construção da aplicação em equipe.',
        en: 'I worked on problem research, the stakeholder map and solution brainstorming, as well as contributing to building the application as a team.',
      },
    },
  },
  {
    id: 'meubolso',
    nome: 'MeuBolso',
    descricao: {
      pt: 'Aplicação web de controle e educação financeira para jovens, com um assistente de IA que traduz os dados em orientações acessíveis. Projeto do 2º semestre.',
      en: 'Web application for financial control and education for young people, with an AI assistant that turns data into accessible guidance. 2nd semester project.',
    },
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
      descricao: {
        pt: 'O MeuBolso é uma aplicação web de controle e educação financeira voltada a jovens que estão começando a lidar com dinheiro próprio (mesada, primeiro salário ou aumento de renda), com um assistente de IA que transforma os dados do usuário em orientações práticas e acessíveis. É um trabalho interdisciplinar em equipe, desenvolvido com Design Thinking na concepção e Kanban no desenvolvimento.',
        en: 'MeuBolso is a web application for financial control and education aimed at young people who are starting to handle their own money (allowance, first salary or income increase), with an AI assistant that turns the user\'s data into practical and accessible guidance. It is an interdisciplinary team project, developed with Design Thinking in the conception and Kanban in the development.',
      },
      problema: {
        pt: 'Jovens de 15 a 20 anos que passam a ter renda própria — pela mesada, pelo primeiro salário ou por um aumento — têm dificuldade de controlar gastos, guardar dinheiro e decidir o destino da renda. Faltam ferramentas simples e orientação prática para a realidade deles, e o problema se intensifica em ambientes digitais, onde promoções, parcelamentos e influenciadores facilitam a compra por impulso. A pesquisa da equipe mostrou que o desafio não é só falta de informação, mas a dificuldade de transformá-la em hábito.',
        en: 'Young people aged 15 to 20 who start having their own income — through allowance, first salary or a raise — struggle to control spending, save money and decide what to do with their income. They lack simple tools and practical guidance suited to their reality, and the problem intensifies in digital environments, where promotions, installments and influencers make impulse buying easier. The team\'s research showed that the challenge is not just lack of information, but the difficulty of turning it into a habit.',
      },
      solucao: {
        pt: 'Uma aplicação web onde o jovem registra e categoriza gastos, acompanha o que recebe e guarda, define metas e reserva, e visualiza um resumo da evolução financeira. O diferencial é um assistente de IA que analisa os próprios dados do usuário e devolve orientações educativas em linguagem acessível — transformando informação em hábito, em vez de conteúdo genérico. O MVP prioriza conta e registro de gastos e o assistente de IA, seguidos de resumo financeiro, metas e reserva.',
        en: 'A web application where young users record and categorize expenses, track what they earn and save, set goals and reserves, and view a summary of their financial progress. The differentiator is an AI assistant that analyzes the user\'s own data and returns educational guidance in accessible language — turning information into a habit, instead of generic content. The MVP prioritizes account and expense tracking and the AI assistant, followed by financial summary, goals and reserve.',
      },
      contribuicao: {
        pt: 'Atuo como líder da equipe, responsável pela gestão do projeto, pelo controle de qualidade e pela documentação. Coordeno o time pelo método Kanban, acompanho as entregas e participei das etapas de Design Thinking (pesquisa, personas, requisitos e priorização das funcionalidades).',
        en: 'I act as the team lead, responsible for project management, quality control and documentation. I coordinate the team using Kanban, track deliverables and took part in the Design Thinking stages (research, personas, requirements and feature prioritization).',
      },
    },
  },
  {
    id: 'bankpy',
    nome: 'BankPy',
    descricao: {
      pt: 'Sistema bancário desenvolvido em Python.',
      en: 'Banking system developed in Python.',
    },
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
      descricao: {
        pt: 'Sistema bancário desenvolvido em Python para simular operações financeiras e gerenciamento de contas.',
        en: 'Banking system developed in Python to simulate financial operations and account management.',
      },
      problema: {
        pt: 'A necessidade de praticar conceitos de programação por meio de um sistema que simula situações reais do dia a dia bancário.',
        en: 'The need to practice programming concepts through a system that simulates real-world banking situations.',
      },
      solucao: {
        pt: 'Desenvolvimento de uma aplicação com cadastro de usuários, validação de dados e armazenamento persistente de informações em arquivos JSON.',
        en: 'Development of an application with user registration, data validation and persistent storage of information in JSON files.',
      },
      contribuicao: {
        pt: 'Desenvolvi a estrutura do projeto, organizei o código em módulos e implementei a lógica de cadastro, validação e gerenciamento de usuários.',
        en: 'I built the project structure, organized the code into modules and implemented the logic for registration, validation and user management.',
      },
    },
  },
]

// Resolve um valor que pode ser string simples ou objeto bilíngue { pt, en }.
function pick(value, lang) {
  if (value && typeof value === 'object' && ('pt' in value || 'en' in value)) {
    return value[lang] ?? value.pt ?? value.en
  }
  return value
}

// Retorna uma cópia dos projetos com todos os textos resolvidos no idioma.
export function getLocalizedProjects(lang = 'pt') {
  return projects.map((p) => ({
    ...p,
    descricao: pick(p.descricao, lang),
    detalhes: {
      descricao: pick(p.detalhes.descricao, lang),
      problema: pick(p.detalhes.problema, lang),
      solucao: pick(p.detalhes.solucao, lang),
      contribuicao: pick(p.detalhes.contribuicao, lang),
    },
  }))
}

export function getFeaturedProject(lang = 'pt') {
  return getLocalizedProjects(lang).find((p) => p.destaque)
}

export function getProjectById(id, lang = 'pt') {
  return getLocalizedProjects(lang).find((p) => p.id === id)
}

export function getNextProject(id, lang = 'pt') {
  const list = getLocalizedProjects(lang)
  const index = list.findIndex((p) => p.id === id)
  if (index === -1) return null
  return list[(index + 1) % list.length]
}
