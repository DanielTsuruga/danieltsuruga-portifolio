import styles from './Waveform.module.css'

// Função que gera o array de alturas (em %) para uma dada quantidade
// de barras. Separada para podermos chamá-la com qualquer barCount.
function generateBars(barCount) {
  return Array.from({ length: barCount }, (_, i) => {
    // posição normalizada de 0 a 1 ao longo da fileira
    const t = i / (barCount - 1)
    // seno de 0 a π (achatado por pow 0.6) -> topo largo e uniforme
    const envelope = Math.pow(Math.sin(t * Math.PI), 0.6)
    // variação pseudo-aleatória para um aspecto orgânico
    const jitter = 0.7 + 0.3 * Math.abs(Math.sin(i * 1.7) * Math.cos(i * 0.9))
    // altura final (mínimo de 8%)
    return Math.max(8, envelope * jitter * 100)
  })
}

function Waveform({ barCount = 48, height = 140, className = '' }) {
  // Recalcula as barras quando a quantidade muda.
  const bars = generateBars(barCount)

  return (
    <div
      className={`${styles.waveform} ${className}`}
      style={{ height: `${height}px` }}
      role="img"
      aria-label="Representação decorativa de uma onda sonora"
    >
      {bars.map((barHeight, i) => (
        <span
          key={i}
          className={styles.bar}
          style={{
            height: `${barHeight}%`,
            animationDelay: `${(i - barCount) * 0.04}s`,
          }}
        />
      ))}
    </div>
  )
}

export default Waveform