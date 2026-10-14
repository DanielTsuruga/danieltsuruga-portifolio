import { Link } from 'react-router-dom'
import { getFeaturedProject } from '../data/projects'
import styles from './FeaturedProject.module.css'

function FeaturedProject() {
  const project = getFeaturedProject()

  if (!project) return null

  return (
    <section className={styles.featured}>
      <span className={styles.eyebrow}>
        <span className={styles.eyebrowNumber}>01</span> PROJETO EM DESTAQUE
      </span>

      <div className={styles.content}>
        <div className={styles.info}>
          <h2 className={styles.name}>{project.nome}</h2>
          <p className={styles.tagline}>{project.tecnologias.join(' · ')}</p>
          <p className={styles.description}>{project.descricao}</p>
          <Link to={`/projetos/${project.id}`} className={styles.cta}>
            Ver projeto <span aria-hidden="true">↗</span>
          </Link>
        </div>

        {project.preview && (
          <div className={styles.preview}>
            <img src={project.preview} alt={`Pré-visualização do ${project.nome}`} />
          </div>
        )}
      </div>
    </section>
  )
}

export default FeaturedProject
