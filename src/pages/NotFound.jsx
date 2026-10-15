import { Link } from 'react-router-dom'
import Waveform from '../components/Waveform'
import { usePageTitle } from '../hooks/usePageTitle'
import styles from './NotFound.module.css'

function NotFound() {
  usePageTitle('Página não encontrada')

  return (
    <section className={styles.notFound}>
      <p className={styles.eyebrow}>Erro 404</p>

      <h1 className={styles.code}>
        404<span className={styles.codeDot}>.</span>
      </h1>

      <Waveform barCount={20} height={40} className={styles.wave} />

      <p className={styles.message}>
        Esta página não existe ou foi movida. Mas a música continua tocando.
      </p>

      <Link to="/" className={styles.back}>
        Voltar ao início <span aria-hidden="true">→</span>
      </Link>
    </section>
  )
}

export default NotFound
