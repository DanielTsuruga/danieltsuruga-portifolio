import ecofluxLogo from '../assets/projetos/ecoflux-logo.png'
import ecofluxPreview from '../assets/projetos/ecoflux-preview.png'
import meubolsoLogo from '../assets/projetos/meubolso-logo.png'
import bankpyLogo from '../assets/projetos/bankpy-logo.png'

export const projects = [
  {
    id: 'ecoflux',
    nome: 'EcoFlux',
    descricao:
      'Plataforma web para facilitar a reciclagem e a coleta seletiva, conectando população, catadores e empresas.',
    tecnologias: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'JSON Server', 'Express', 'Bootstrap'],
    repo: 'https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2026-1-ti1-0427100-ecoflux',
    site: 'https://ecoflux-33eg.onrender.com/',
    ano: '2026 · 1º sem',
    status: 'concluido',
    destaque: true,
    equipe: true,
    logo: ecofluxLogo,
    preview: ecofluxPreview,
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
      'Aplicação web de controle e educação financeira para jovens, com um assistente de IA que traduz os dados em orientações acessíveis.',
    tecnologias: ['JavaScript', 'Java', 'HTML', 'CSS'],
    repo: 'https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2026-2-ti2-8183100-meu-bolso',
    site: null,
    ano: '2026 · 2º sem',
    status: 'em-desenvolvimento',
    destaque: false,
    equipe: true,
    logo: meubolsoLogo,
    preview: null,
    detalhes: {
      descricao:
        'O MeuBolso é uma aplicação web de controle e educação financeira voltada a jovens que estão começando a lidar com dinheiro próprio (mesada, primeiro salário ou aumento de renda), com um assistente de IA que transforma os dados do usuário em orientações práticas e acessíveis.',
      problema: '', 
      solucao: '', 
      contribuicao: '',
    },
  },
  {
    id: 'bankpy',
    nome: 'BankPy',
    descricao: 'Sistema bancário desenvolvido em Python.',
    tecnologias: ['Python'],
    repo: null, 
    site: null,
    ano: '2026',
    status: 'em-desenvolvimento',
    destaque: false,
    equipe: false,
    logo: bankpyLogo,
    preview: null,
    detalhes: {
      descricao: 'Sistema bancário desenvolvido em Python.',
      problema: '', 
      solucao: '', 
      contribuicao: '',
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
