import styles from './ProjectCard.module.css'

function ProjectCard({ project, index }) {
  const numero = String(index + 1).padStart(2, '0')

  const emDesenvolvimento = project.status === 'em-desenvolvimento'

  if (emDesenvolvimento) {
    return (
      <article className={`${styles.card} ${styles.cardCompact}`}>
        <span className={styles.number}>{numero}</span>
        <img className={styles.logo} src={project.logo} alt={`Logo do ${project.nome}`} />
        <div className={styles.titleRow}>
          <h2 className={styles.name}>{project.nome}</h2>
          <span className={styles.badge}>Em desenvolvimento</span>
        </div>
      </article>
    )
  }

  return (
    <article className={styles.card}>
      <span className={styles.number}>{numero}</span>

      <div className={styles.body}>
        <div className={styles.titleRow}>
          <h2 className={styles.name}>{project.nome}</h2>
          {project.equipe && <span className={styles.badge}>Projeto em equipe</span>}
        </div>

        <p className={styles.description}>{project.descricao}</p>

        <div className={styles.techs}>
          {project.tecnologias.map((tech) => (
            <span key={tech} className={styles.tech}>
              {tech}
            </span>
          ))}
        </div>

        <div className={styles.links}>
          {project.repo && (
            <a className={styles.link} href={project.repo} target="_blank" rel="noreferrer">
              Repositório <span aria-hidden="true">↗</span>
            </a>
          )}
          {project.site && (
            <a className={styles.link} href={project.site} target="_blank" rel="noreferrer">
              Ver site <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>

      {project.preview && (
        <div className={styles.preview}>
          <img src={project.preview} alt={`Pré-visualização do ${project.nome}`} />
        </div>
      )}
    </article>
  )
}

export default ProjectCard
