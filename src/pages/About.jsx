import { useTranslation } from 'react-i18next'
import { usePageTitle } from '../hooks/usePageTitle'
import fotoPerfil from '../assets/foto-perfil.png'
import styles from './About.module.css'

function About() {
  usePageTitle('about')
  const { t } = useTranslation()

  // Array de seções vindo das traduções (returnObjects habilitado no i18n).
  const sections = t('about.sections', { returnObjects: true })

  return (
    <section>
      <div className={styles.header}>
        <div className={styles.photoFrame}>
          <img className={styles.photo} src={fotoPerfil} alt={t('about.photoAlt')} />
        </div>

        <div className={styles.headerText}>
          <p className={styles.eyebrow}>{t('about.eyebrow')}</p>
          <h1 className={styles.title}>{t('about.name')}</h1>

          <div className={styles.status}>
            <div className={styles.statusItem}>
              <span className={styles.statusLabel}>{t('about.locationLabel')}</span>
              <span className={styles.statusValue}>{t('about.locationValue')}</span>
            </div>
            <div className={styles.statusItem}>
              <span className={styles.statusLabel}>{t('about.statusLabel')}</span>
              <span className={`${styles.statusValue} ${styles.statusValueAccent}`}>
                {t('about.statusValue')}
              </span>
            </div>
          </div>

          <p className={styles.intro}>{t('about.intro')}</p>
        </div>
      </div>

      <div className={styles.sections}>
        {sections.map((section) => (
          <div key={section.numero} className={styles.sectionRow}>
            <span className={styles.sectionLabel}>
              <span className={styles.sectionLabelNumber}>{section.numero}</span>
              {section.label}
            </span>
            <p className={styles.sectionText}>{section.texto}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About
