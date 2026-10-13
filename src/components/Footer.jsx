import Waveform from './Waveform'
import styles from './Footer.module.css'

const currentYear = new Date().getFullYear()

const FOOTER_BARS = [22, 45, 32, 68, 40, 100, 58, 82, 36, 50, 26, 16]

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Esquerda: mini-waveform + nome */}
        <div className={styles.brand}>
          {/* Mesmo componente da Home, mas em escala pequena via props:
              poucas barras e altura reduzida. */}
          <Waveform heights={FOOTER_BARS} height={20} className={styles.miniWave} />
          <span className={styles.name}>DANIEL TSURUGA</span>
        </div>

        {/* Direita: localização + ano dinâmico */}
        <span className={styles.meta}>BELO HORIZONTE, BR · © {currentYear}</span>
      </div>
    </footer>
  )
}

export default Footer
