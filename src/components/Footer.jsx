import { useTranslation } from 'react-i18next'
import Waveform from './Waveform'
import styles from './Footer.module.css'

const currentYear = new Date().getFullYear()

const FOOTER_BARS = [22, 45, 32, 68, 40, 100, 58, 82, 36, 50, 26, 16]

function Footer() {
  const { t } = useTranslation()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Waveform heights={FOOTER_BARS} height={20} className={styles.miniWave} />
          <span className={styles.name}>DANIEL TSURUGA</span>
        </div>
        <span className={styles.meta}>{t('footer.meta', { year: currentYear })}</span>
      </div>
    </footer>
  )
}

export default Footer
