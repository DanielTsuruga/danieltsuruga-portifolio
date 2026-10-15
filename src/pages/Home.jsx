import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Waveform from '../components/Waveform'
import FeaturedProject from '../components/FeaturedProject'
import { usePageTitle } from '../hooks/usePageTitle'
import styles from './Home.module.css'

function Home() {
  usePageTitle()
  const { t } = useTranslation()

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>{t('home.eyebrow')}</span>

          <h1 className={styles.title}>
            TSURUGA<span className={styles.titleDot}>.</span>
          </h1>

          <p className={styles.subtitle}>{t('home.subtitle')}</p>

          <p className={styles.tagline}>{t('home.tagline')}</p>

          <span className={styles.signature}>{t('home.signature')}</span>

          <div className={styles.actions}>
            <Link to="/projetos" className={styles.buttonPrimary}>
              {t('home.seeProjects')} <span aria-hidden="true">↗</span>
            </Link>
            <Link to="/curriculo" className={styles.buttonSecondary}>
              {t('home.seeResume')} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className={styles.visual}>
          <Waveform />
        </div>
      </section>

      <FeaturedProject />
    </>
  )
}

export default Home
