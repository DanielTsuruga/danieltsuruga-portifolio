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
  },
]

export function getFeaturedProject() {
  return projects.find((p) => p.destaque)
}
