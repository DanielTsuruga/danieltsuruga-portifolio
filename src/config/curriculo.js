const CURRICULO_CONFIG = {
  // Caminho do PDF por idioma (a partir da raiz do site, pasta public/).
  // Se o PDF em inglês ainda não existir, o viewer faz fallback para o PT.
  files: {
    pt: '/curriculo-daniel-tsuruga.pdf',
    en: '/curriculo-daniel-tsuruga-en.pdf',
  },
  // Nome do arquivo ao baixar, por idioma.
  downloadNames: {
    pt: 'Curriculo-Daniel-Tsuruga.pdf',
    en: 'Resume-Daniel-Tsuruga.pdf',
  },
  // Limites do zoom (1 = página ajustada à largura da área).
  zoomMin: 0.5,
  zoomMax: 2,
  zoomStep: 0.25,
}

// Resolve o PDF para um idioma, com fallback seguro para português.
export function getCurriculoFile(lang) {
  return CURRICULO_CONFIG.files[lang] ?? CURRICULO_CONFIG.files.pt
}

export function getCurriculoDownloadName(lang) {
  return CURRICULO_CONFIG.downloadNames[lang] ?? CURRICULO_CONFIG.downloadNames.pt
}

export default CURRICULO_CONFIG
