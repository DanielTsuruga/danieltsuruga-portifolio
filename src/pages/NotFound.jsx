import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Waveform from '../components/Waveform'
import { usePageTitle } from '../hooks/usePageTitle'
import styles from './NotFound.module.css'

function NotFound() {
  usePageTitle('notFound')
  const { t } = useTranslation()

  return (
    <section className={styles.notFound}>
      <p className={styles.eyebrow}>{t('notFound.eyebrow')}</p>

      <h1 className={styles.code}>
        404<span className={styles.codeDot}>.</span>
      </h1>

      <Waveform barCount={20} height={40} className={styles.wave} />

      <p className={styles.message}>{t('notFound.message')}</p>

      <Link to="/" className={styles.back}>
        {t('notFound.back')} <span aria-hidden="true">→</span>
      </Link>
    </section>
  )
}

export default NotFound
