import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

/**
 * Define o <title> da aba.
 * @param {string} [titleKey] chave em `titles.*` (ex: 'about'). Sem valor = Home.
 * @param {object} [options]
 * @param {boolean} [options.raw] se true, usa `titleKey` como texto literal
 *   (ex: nome próprio de um projeto) em vez de uma chave de tradução.
 */
export function usePageTitle(titleKey, { raw = false } = {}) {
  const { t, i18n } = useTranslation()
  const lang = i18n.resolvedLanguage || i18n.language

  useEffect(() => {
    // Mantém o atributo lang do documento em sincronia com o i18n.
    document.documentElement.setAttribute('lang', lang)

    if (!titleKey) {
      document.title = t('titles.home')
      return
    }
    const titulo = raw ? titleKey : t(`titles.${titleKey}`)
    document.title = `${titulo} — ${t('titles.base')}`
  }, [titleKey, raw, t, lang])
}
