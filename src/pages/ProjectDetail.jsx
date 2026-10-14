import { useParams, Link } from 'react-router-dom'
import { getProjectById, getNextProject } from '../data/projects'
import styles from './ProjectDetail.module.css'

function ProjectDetail() {
  const { id } = useParams()
  const project = getProjectById(id)

  if (!project) {
    return (
      <section className={styles.notFound}>
        <h1>Projeto não encontrado</h1>
        <p>O projeto que você procura não existe.</p>
        <Link to="/projetos" className={styles.back}>
          ← Voltar para projetos
        </Link>
      </section>
    )
  }

  const next = getNextProject(id)

  const secoes = [
    { label: 'Descrição', texto: project.detalhes.descricao },
    { label: 'Problema', texto: project.detalhes.problema },
    { label: 'Solução', texto: project.detalhes.solucao },
    { label: 'Minha contribuição', texto: project.detalhes.contribuicao },
  ]

  return (
    <article>
      <Link to="/projetos" className={styles.back}>
        ← Projetos
      </Link>

      <header className={styles.header}>
        <div>
          <p className={styles.eyebrow}>PROJETO · {project.ano}</p>
          <h1 className={styles.title}>{project.nome}</h1>
          {project.status === 'em-desenvolvimento' && (
            <span className={styles.badge}>Em desenvolvimento</span>
          )}
        </div>

        <div className={styles.sidebar}>
          <div>
            <p className={styles.sidebarLabel}>Tecnologias</p>
            <div className={styles.techs}>
              {project.tecnologias.map((tech) => (
                <span key={tech} className={styles.tech}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className={styles.sidebarLabel}>Links</p>
            <div className={styles.links}>
              {project.repo ? (
                <a className={styles.link} href={project.repo} target="_blank" rel="noreferrer">
                  Repositório <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <span className={styles.linkDisabled}>GitHub — em breve</span>
              )}
              {project.site && (
                <a className={styles.link} href={project.site} target="_blank" rel="noreferrer">
                  Ver site <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </header>

      {project.preview ? (
        <div className={styles.preview}>
          <img src={project.preview} alt={`Pré-visualização do ${project.nome}`} />
        </div>
      ) : (
        <div className={styles.previewPlaceholder}>
          <img className={styles.previewLogo} src={project.logo} alt={`Logo do ${project.nome}`} />
          <span className={styles.previewHint}>Pré-visualização em breve</span>
        </div>
      )}

      <div className={styles.sections}>
        {secoes.map((secao) => (
          <div key={secao.label} className={styles.sectionRow}>
            <span className={styles.sectionLabel}>{secao.label}</span>
            {secao.texto ? (
              <p className={styles.sectionText}>{secao.texto}</p>
            ) : (
              <p className={styles.sectionEmpty}>Informações em breve.</p>
            )}
          </div>
        ))}
      </div>

      {next && (
        <div className={styles.next}>
          <span className={styles.nextLabel}>Próximo projeto</span>
          <Link to={`/projetos/${next.id}`} className={styles.nextLink}>
            {next.nome} <span aria-hidden="true">→</span>
          </Link>
        </div>
      )}
    </article>
  )
}

export default ProjectDetail
