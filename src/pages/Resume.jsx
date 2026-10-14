import styles from './Resume.module.css'

const formacao = {
  curso: 'Engenharia de Software - 2º semestre',
  instituicao: 'PUC Minas',
  status: 'Em andamento',
}

const conhecimentos = ['JavaScript', 'Java', 'Python', 'HTML', 'CSS', 'React', 'Git']

const experiencias = [
{
    periodo: '2026 · 2º semestre — atual',
    cargo: 'Líder de equipe e gestão de projeto',
    organizacao: 'MeuBolso · Trabalho Interdisciplinar — PUC Minas',
    descricao:
      'Lidero a equipe no desenvolvimento do MeuBolso, aplicação de controle e educação financeira. Atuo na gestão do projeto, no controle de qualidade e na documentação, coordenando o time e acompanhando as entregas.',
  },
  {
    periodo: '2026 · 1º semestre',
    cargo: 'Desenvolvedor (equipe)',
    organizacao: 'EcoFlux · Trabalho Interdisciplinar — PUC Minas',
    descricao:
      'Participei do desenvolvimento do EcoFlux, plataforma de reciclagem e coleta seletiva. Contribuí na pesquisa do problema, no mapa de stakeholders e no brainstorming de soluções, aplicando Design Thinking e trabalho colaborativo com Git.',
  },
]

const curriculoPdf = null

function Resume() {
  return (
    <section>
      <p className={styles.eyebrow}>CURRÍCULO</p>
      <h1 className={styles.title}>Currículo</h1>

      <div className={styles.sections}>
        <div className={styles.sectionRow}>
          <span className={styles.sectionLabel}>Formação</span>
          <div className={styles.item}>
            <span className={styles.itemTitle}>{formacao.curso}</span>
            <span className={styles.itemSubtitle}>{formacao.instituicao}</span>
            <span className={styles.itemStatus}>{formacao.status}</span>
          </div>
        </div>

        <div className={styles.sectionRow}>
          <span className={styles.sectionLabel}>Conhecimentos</span>
          {conhecimentos.length > 0 ? (
            <div className={styles.skills}>
              {conhecimentos.map((skill) => (
                <span key={skill} className={styles.skill}>
                  {skill}
                </span>
              ))}
            </div>
          ) : (
            <p className={styles.empty}>Informações em breve.</p>
          )}
        </div>

        <div className={styles.sectionRow}>
          <span className={styles.sectionLabel}>Experiência</span>
          {experiencias.length > 0 ? (
            <div className={styles.experienceList}>
              {experiencias.map((exp, i) => (
                <div key={i} className={styles.experience}>
                  <span className={styles.experiencePeriod}>{exp.periodo}</span>
                  <span className={styles.experienceRole}>{exp.cargo}</span>
                  <span className={styles.experienceOrg}>{exp.organizacao}</span>
                  <p className={styles.experienceDesc}>{exp.descricao}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className={styles.empty}>Informações em breve.</p>
          )}
        </div>

        <div className={styles.sectionRow}>
          <span className={styles.sectionLabel}>Documento</span>
          <div>
            <div className={styles.docActions}>
              {curriculoPdf ? (
                <>
                  <a className={styles.docButton} href={curriculoPdf} target="_blank" rel="noreferrer">
                    Visualizar currículo <span aria-hidden="true">↗</span>
                  </a>
                  <a className={styles.docButton} href={curriculoPdf} download>
                    Baixar PDF <span aria-hidden="true">↓</span>
                  </a>
                </>
              ) : (
                <>
                  <span className={styles.docButtonDisabled}>Visualizar currículo</span>
                  <span className={styles.docButtonDisabled}>Baixar PDF</span>
                </>
              )}
            </div>
            {!curriculoPdf && (
              <p className={styles.docHint}>Currículo em PDF ainda não disponível.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
