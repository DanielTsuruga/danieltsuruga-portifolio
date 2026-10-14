import styles from './About.module.css'

const intro =
  'Entre a graduação e os projetos, estou descobrindo como transformar o que estudo em software.'

const sections = [
  {
    numero: '01',
    label: 'Quem sou',
    texto:
      'Sou Daniel, estudante de Engenharia de Software na PUC Minas, em Belo Horizonte. Estou construindo meu caminho na programação, tentando entender não só como as coisas funcionam, mas também por que funcionam. Gosto de aprender na prática e ver minhas ideias ganhando forma.',
  },
  {
    numero: '02',
    label: 'O que faço',
    texto:
      'Gosto de aprender construindo. Entre exercícios, estudos e projetos pessoais, venho explorando diferentes tecnologias e descobrindo novas formas de resolver problemas. Mais do que fazer algo funcionar, gosto de entender o que existe por trás e encontrar maneiras de fazer melhor.',
  },
  {
    numero: '03',
    label: 'Além do código',
    texto:
      'Fora da programação, sou um grande admirador da música, gosto de futebol, torço para o galo e tenho um interesse especial por filosofia. Gosto de questionar as coisas, conhecer outras perspectivas e entender melhor o mundo ao meu redor. Acho que essa curiosidade também aparece na forma como aprendo e desenvolvo meus projetos.',
  },
]

function About() {
  return (
    <section>
      <p className={styles.eyebrow}>01 — SOBRE</p>
      <h1 className={styles.title}>Daniel Tsuruga</h1>

      {/* Linha de status */}
      <div className={styles.status}>
        <div className={styles.statusItem}>
          <span className={styles.statusLabel}>Localização</span>
          <span className={styles.statusValue}>Belo Horizonte, BR</span>
        </div>
        <div className={styles.statusItem}>
          <span className={styles.statusLabel}>Situação</span>
          <span className={`${styles.statusValue} ${styles.statusValueAccent}`}>Em formação</span>
        </div>
      </div>

      <p className={styles.intro}>{intro}</p>

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
