import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import Waveform from '../components/Waveform'

function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <span className={styles.eyebrow}>
          PORTFÓLIO <span className={styles.eyebrowNumber}>/ 01</span>
        </span>

        <h1 className={styles.title}>
          TSURUGA<span className={styles.titleDot}>.</span>
        </h1>

        <p className={styles.subtitle}>ENGENHARIA DE SOFTWARE · PUC MINAS</p>

        <p className={styles.tagline}>Ainda aprendendo. Sempre construindo.</p>

        <span className={styles.signature}>Daniel Tsuruga</span>

        <div className={styles.actions}>
          <Link to="/projetos" className={styles.buttonPrimary}>
            Ver projetos <span aria-hidden="true">↗</span>
          </Link>
          <Link to="/curriculo" className={styles.buttonSecondary}>
            Ver currículo <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      <div className={styles.visual}>
        <Waveform />
      </div>
    </section>
  )
}

export default Home