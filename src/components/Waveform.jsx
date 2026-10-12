import styles from './Waveform.module.css'

// Quantas barras a onda terá.
const BAR_COUNT = 48

// Gera o array de alturas (em %) uma única vez, fora do componente,
// pois o padrão é fixo (não precisa recalcular a cada renderização).
//
// Usamos a função seno (Math.sin) para criar uma curva suave:
// o centro da fileira fica alto e as pontas ficam baixas,
// com uma pequena variação pseudo-aleatória para parecer orgânico.
const bars = Array.from({ length: BAR_COUNT }, (_, i) => {
  // posição normalizada de 0 a 1 ao longo da fileira
  const t = i / (BAR_COUNT - 1)
  // seno de 0 a π -> sobe de 0 ao pico (meio) e volta a 0
  const envelope = Math.pow(Math.sin(t * Math.PI), 0.6)
  // pequena variação para dar um aspecto irregular/natural
  const jitter = 0.7 + 0.3 * Math.abs(Math.sin(i * 1.7) * Math.cos(i * 0.9))
  // altura final entre ~8% e 100%
  const height = Math.max(8, envelope * jitter * 100)
  return height
})

function Waveform() {
  return (
    <div
      className={styles.waveform}
      role="img"
      aria-label="Representação decorativa de uma onda sonora"
    >
      {bars.map((height, i) => (
        <span
          key={i}
          className={styles.bar}
          style={{
            // altura da barra (valor único de cada uma)
            height: `${height}%`,
            // atraso escalonado: cada barra começa a animação um
            // pouco depois da anterior, criando o efeito de onda.
            animationDelay: `${(i - BAR_COUNT) * 0.04}s`,
          }}
        />
      ))}
    </div>
  )
}

export default Waveform